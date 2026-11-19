/* ---------- installable app ---------- */
let deferredInstall=null;
const isStandalone=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
function showInstall(){const b=document.getElementById("installBtn");if(b&&!isStandalone()&&(deferredInstall||isIOS))b.hidden=false}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;showInstall()});
window.addEventListener("appinstalled",()=>{deferredInstall=null;const b=document.getElementById("installBtn");if(b)b.hidden=true;toast("<b>Installed.</b> The Vault is on your home screen.")});
document.addEventListener("click",async e=>{
  if(e.target.id!=="installBtn")return;
  if(deferredInstall){deferredInstall.prompt();try{await deferredInstall.userChoice}catch(_){}deferredInstall=null;document.getElementById("installBtn").hidden=true}
  else if(isIOS){$("#modal-root").innerHTML=`<div class="scrim" data-act="close-scrim"><div class="modal" role="dialog" aria-modal="true"><h2 style="font-family:var(--display);text-transform:uppercase">Install on iPhone</h2>
  <p>In Safari, tap the <b>Share</b> button, then <b>Add to Home Screen</b>. The Vault gets its own icon and works offline.</p><div class="actions"><button class="btn" data-act="close">Got it</button></div></div></div>`}
});
showInstall();
/* hide the itch.io link when the game is already being played on itch.io */
if(/itch\.(zone|io)$/.test(location.hostname)){const l=document.getElementById("itchLink");if(l)l.remove()}
if("serviceWorker" in navigator&&location.protocol.startsWith("http")){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})})}
