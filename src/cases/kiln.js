/* 000 · Lights Out at Kiln · fiction, training case */
CASES.push({
  id:"kiln", no:"000", title:"Lights Out at Kiln", real:false, training:true, kind:"Single killer", place:"Maboneng, Johannesburg", when:"Thursday 12 November 2026",
  docket:"CAS 418/11/2026 · SAPS Johannesburg Central",
  blurb:"A gallery owner is killed on opening night, minutes after load-shedding knocks out the CCTV. Four suspects, all with a reason.",
  note:"Fiction. Every person and place in this case is invented.",
  brief:`<p>Thursday night was the opening of <i>Gilded Township</i>, Nomsa Dlamini's first solo show. About 120 guests, wine, speeches. The event ended at 22:00, the same minute Stage 2 load-shedding hit Block 7.</p>
<p>At 23:52 the security guard found the owner, <b>Lerato Khumalo</b>, dead in her upstairs office. Someone hit her from behind with the gallery's own award.</p>
<p>The CCTV was off. You'll have to do this the old way.</p>`,
  victim:{no:"VICTIM",t:"Lerato Khumalo, 46",s:"Owner, Kiln Gallery. Died 22:15–22:50."},
  par:9,
  stages:[
    {label:"The night of the murder", intro:"It's just after midnight. The body is upstairs, the safe downstairs is open, and the street is dark.", start:["E1","E2","E3","E4"],
     leads:[
      {id:"k1",label:"Get the door host's guest list",hint:"Who left, and when?",reveals:["E5"],result:"The door host kept notes all night."},
      {id:"k2",label:"Pull the victim's phone records",hint:"Who did she speak to last?",reveals:["E6"],result:"Her cellphone records come through within the hour."},
      {id:"k3",label:"Look at the laptop on her desk",hint:"It was left open.",reveals:["E7"],result:"An unsent draft is still on screen."},
      {id:"k4",label:"Inventory the open safe",hint:"Was anything taken?",reveals:["E8"],result:"The bookkeeper is called in to check."},
      {id:"k5",label:"Dust the front door for fingerprints",hint:"Maybe the killer came in the front.",reveals:[],result:"A hundred and twenty guests touched that door tonight. Nothing usable."}]},
    {label:"Friday morning", teaser:"Records, lockers and the people across the street.", intro:"Daylight. Time to check stories against records.", start:[],
     leads:[
      {id:"k6",label:"Request the parkade's plate-camera log",hint:"The camera there runs on battery backup.",reveals:["E10"],result:"The parkade manager emails the log."},
      {id:"k7",label:"Search the staff lockers",hint:"Three people had the safe code.",reveals:["E9"],result:"The lockers are opened in front of a witness."},
      {id:"k8",label:"Get Ruth's emails to the gallery",hint:"She tried to call Lerato before the opening.",reveals:["E13"],result:"The gallery inbox has a letter from Ruth."},
      {id:"k9",label:"Check the rooftop bar across the street",hint:"Did anyone go there after the event?",reveals:["E11"],result:"The bar pulls its card records."},
      {id:"k10",label:"Ask Kagiso for his photos from the night",hint:"He shot the opening for Instagram.",reveals:["E15"],result:"He hands over his phone."},
      {id:"k11",label:"Canvass Fox Street for witnesses",hint:"Someone might have seen something.",reveals:[],result:"With the power out, the street was dark and empty. Nobody saw anything."}]},
    {label:"Friday afternoon: warrants", teaser:"Search warrants come through.", intro:"A magistrate signs off on searches. Use them well.", start:["E12"],
     leads:[
      {id:"k12",label:"Search Daniel's desk",hint:"He handles the paperwork.",reveals:["E14"],result:"A locked drawer is forced open."},
      {id:"k13",label:"Search Nomsa's studio",hint:"Gold leaf was found on the victim.",reveals:[],result:"Paint, canvases and a lot of gold leaf. Nothing connected to the killing."}]}
  ],
  evidence:{
    E1:{no:"01",cat:"Scene",title:"Scene report",short:"Lerato Khumalo found dead in her upstairs office at 23:52.",meta:"Sgt. M. Zulu · Kiln Gallery, 14 Fox St, Maboneng",
      body:`<p>The deceased, <b>Lerato Khumalo (46)</b>, owner of Kiln Gallery, was found on the floor of her upstairs office by security guard <b>Joseph Sithole</b> at 23:52. Head wound to the back of the skull. No sign of forced entry at the front.</p>
<p>Her laptop was open on the desk. Downstairs, the <b>back-office safe was standing open</b>, opened with the code, not forced.</p>
<div class="doc">GUARD'S STATEMENT (J. Sithole)
Around 23:00 I heard a car leave the parkade next door.
On my 23:50 round the fire-escape door at the back was
propped open with a brick. That door is always locked.</div>`,
      events:[{t:"23:00",x:"Guard hears a car leave the parkade (approx.)"},{t:"23:52",x:"Body found; fire-escape door propped open"}]},
    E2:{no:"02",cat:"Forensic",title:"Post-mortem summary",short:"Blunt force trauma. Death between 22:15 and 22:50.",meta:"Dr N. Pillay · Forensic Pathology Service",
      body:`<p>Cause of death: <b>blunt force trauma</b> to the back of the head, a single heavy blow from behind.</p><p>Estimated time of death: <b>22:15 to 22:50</b>.</p><p>Trace: small flakes of <b>gold leaf</b> on the left shoulder of her blouse.</p>`,
      events:[{t:"22:15",x:"Earliest estimated time of death"},{t:"22:50",x:"Latest estimated time of death"}]},
    E3:{no:"03",cat:"Forensic",title:"The weapon",short:"Bronze statuette, wiped clean, hidden behind a cabinet.",meta:"Item tag 418-03",
      body:`<p>A bronze statuette engraved <b>"Joburg Gallery of the Year 2019 · Kiln"</b>, found pushed behind the filing cabinet in her office. Blood on the base matches the victim. It was <b>wiped clean</b>. Whoever used it knew to clean it and where to hide it.</p>`},
    E4:{no:"04",cat:"Records",title:"Load-shedding schedule",short:"Stage 2 from 22:00. The CCTV recorder had no backup power.",meta:"City Power · Block 7 (Maboneng)",
      body:`<div class="doc">STAGE 2   BLOCK 7   22:00 - 00:30</div><p>The inverter kept the lights running, but the <b>CCTV recorder was never wired to it</b>, so every camera went dark at 22:00. All staff and both owners knew.</p>`,
      events:[{t:"22:00",x:"Load-shedding starts. All CCTV goes dark"},{t:"00:30",x:"Power restored"}]},
    E5:{no:"05",cat:"Records",title:"Opening night door list",short:"The door host's notes on who left and when.",meta:"Kept by the door host · Event 18:00 to 22:00",
      body:`<div class="doc">Ruth van Wyk ............ left 21:30 (Uber)
Daniel Pretorius ........ said goodbye at door 21:45
                          - didn't see him actually walk
                            to the parkade, it was busy
Nomsa Dlamini ........... left 22:00 with friends
Kagiso Molefe (staff) ... stayed to pack up
Lerato Khumalo .......... went upstairs ~21:50</div><p class="hint">The parkade next door logs every car on a battery-backed plate camera.</p>`,events:[{t:"21:30",x:"Ruth van Wyk leaves"},{t:"21:45",x:"Daniel says goodbye at the door"},{t:"21:50",x:"Lerato goes upstairs"},{t:"22:00",x:"Nomsa leaves with friends; event ends"}]},
    E6:{no:"06",cat:"Records",title:"Victim's call log",short:"Her last call was to Daniel at 22:02.",meta:"Cellphone records · Lerato Khumalo",
      body:`<div class="doc">17:40  MISSED   Ruth vW        --
22:02  OUTGOING Daniel P       1m48s
       (no further activity)</div>`,
      events:[{t:"17:40",x:"Missed call from Ruth"},{t:"22:02",x:"Lerato calls Daniel (1 min 48 s)"}]},
    E7:{no:"07",cat:"Digital",title:"Unsent email on laptop",short:"A draft to her attorney, saved at 21:58.",meta:"Draft · To: her attorney · Saved 21:58 · Not sent",
      body:`<div class="doc">Ruth was right. The Mabaso certificates are fake and I know
who signed them. Eleven pieces since 2023.

I'm going to SAPS Commercial Crimes on Monday. I'm telling
D. tonight. After twelve years he deserves to hear it from
me first.

L.</div>`,events:[{t:"21:58",x:"Lerato saves a draft about fake certificates"}]},
    E8:{no:"08",cat:"Scene",title:"Safe inventory",short:"R18,400 cash missing. Three people had the code.",meta:"Gallery bookkeeper",
      body:`<p>Missing: the opening-night cash float, <b>R18,400</b>. Nothing else. Only <b>Lerato, Daniel and Kagiso</b> had the code.</p>`,reveals:[]},
    E9:{no:"09",cat:"Scene",title:"Staff locker search",short:"The missing cash, in Kagiso Molefe's locker.",meta:"Item tag 418-09",
      body:`<p>A gallery envelope with <b>R18,400</b> in notes, found in the locker of assistant <b>Kagiso Molefe</b>. No blood on the envelope or notes.</p>`},
    E10:{no:"10",cat:"Records",title:"Parkade exit log",short:"Daniel's Audi left the parkade at 23:04.",meta:"Fox Street Parkade · plate camera",
      body:`<div class="doc">ENTRY  17:12  Audi Q5  PRETORIUS D (monthly)
EXIT   23:04  Audi Q5  PRETORIUS D (monthly)</div><p>The gallery's fire-escape stairs come down into the parkade.</p>`,
      events:[{t:"23:04",x:"Daniel's Audi exits the parkade"}]},
    E11:{no:"11",cat:"Records",title:"Bar card receipts",short:"Nomsa paid for drinks at 22:11, 22:47 and 23:26.",meta:"The Fox Rooftop, across the street",
      body:`<div class="doc">22:11  N DLAMINI  R146.00
22:47  N DLAMINI  R212.00
23:26  N DLAMINI  R98.00</div><p>The barman confirms she never left before closing.</p>`,
      events:[{t:"22:11",x:"Nomsa pays at the Fox Rooftop"},{t:"22:47",x:"Nomsa pays at the Fox Rooftop"},{t:"23:26",x:"Nomsa pays at the Fox Rooftop"}]},
    E12:{no:"12",cat:"Records",title:"Uber trip receipt",short:"Ruth was dropped off in Saxonwold at 21:58.",meta:"Supplied by Ruth van Wyk",
      body:`<div class="doc">Pickup   21:34  Fox St, Maboneng
Drop-off 21:58  Saxonwold</div><p>Her household confirms she was home all night.</p>`,
      events:[{t:"21:34",x:"Ruth's Uber picks her up"},{t:"21:58",x:"Ruth dropped home in Saxonwold"}]},
    E13:{no:"13",cat:"Digital",title:"Ruth's complaint letter",short:"Ruth says the painting she bought is a forgery.",meta:"Email to Kiln Gallery · 2 November",
      body:`<div class="doc">An independent appraiser says the Elias Mabaso landscape I
bought from Kiln last year for R640,000 is a forgery. The
"Mabaso Estate" certificate is not genuine. I expect a full
refund within 30 days, or I go to my lawyers.

Ruth van Wyk</div>`},
    E14:{no:"14",cat:"Scene",title:"Desk drawer search",short:"A 'Mabaso Estate' stamp in Daniel's desk.",meta:"Search warrant executed Friday 10:15",
      body:`<p>In a locked drawer of <b>Daniel Pretorius's</b> desk: a rubber stamp reading <b>"MABASO ESTATE · AUTHENTICATED"</b> and 14 blank certificates, three already signed with a copied signature.</p>`},
    E15:{no:"15",cat:"Digital",title:"Photos from the opening",short:"Nomsa hugging Lerato at 19:32.",meta:"Kagiso Molefe's phone",
      body:`<p>At <b>19:32</b>, after the speech, Nomsa hugs Lerato while wearing the gold-leaf jacket from her own exhibition. Other shots show Daniel by the bar, checking his phone.</p>`,
      events:[{t:"19:32",x:"Nomsa hugs Lerato after the speech (photo)"}]},
    E16:{no:"16",cat:"Witness",title:"What Kagiso heard",short:"A man shouting upstairs at about 22:12.",meta:"Revised statement · Kagiso Molefe",
      body:`<div class="doc">When the power went I knew the cameras were off. I opened
the safe. Around ten past ten I heard the fire door upstairs,
then a man shouting in her office: "You'll finish us both."
I went out the back at about twenty past. She was alive.</div>`,
      events:[{t:"22:10",x:"Kagiso opens the safe"},{t:"22:12",x:"A man is heard shouting in Lerato's office"},{t:"22:20",x:"Kagiso leaves by the back door"}]},
  },
  bands:[{from:"22:15",to:"22:50",cls:"tod",label:"Time-of-death window",needs:"E2"},{from:"22:00",to:"24:30",cls:"dark",label:"Cameras dark",needs:"E4"}],
  groups:{
    daniel:{name:"Daniel Pretorius",init:"DP",role:"Co-owner, 52",bio:"Lerato's business partner for twelve years. Handles sales and paperwork.",
      claims:[
        {id:"d2",q:"When did you last speak to Lerato?",a:"At her speech. We didn't speak after that.",truth:"contradicted",ev:["E6"],reply:"She phoned him at 22:02. He later says she asked him to come up and he told her it could wait."},
        {id:"d1",stage:1,q:"When did you leave?",a:"About quarter to ten, before the load-shedding. I was home in Parkhurst by half past ten.",truth:"contradicted",ev:["E10"],reply:"His car didn't leave the parkade until 23:04. He now says he sat in it to cool off and never went back in."},
        {id:"d3",stage:1,q:"Was the gallery in any trouble?",a:"None. Best year we've had. No complaints.",truth:"contradicted",ev:["E13","E7"],reply:"A client had demanded a refund over a forgery, and Lerato was about to go to the police."},
        {id:"d4",stage:2,needs:"E14",q:"Explain the stamp in your drawer.",a:"Lerato must have put it there. The certificates were her side of things.",truth:"contradicted",ev:["E7"],reply:"Her own draft says she knew who signed them and was 'telling D. tonight'. He asks for his lawyer."}]},
    nomsa:{name:"Nomsa Dlamini",init:"ND",role:"Featured artist, 31",bio:"The artist behind the exhibition. Argued with Lerato in front of guests at 21:00 about her contract.",
      claims:[
        {id:"n1",q:"What was the argument about?",a:"She takes sixty percent and wouldn't release me from my contract.",truth:"unresolved",reply:"Plausible, but nothing in the file shows the contract terms either way."},
        {id:"n2",stage:1,q:"Where were you after ten?",a:"Straight across to the rooftop bar with friends until it closed.",truth:"supported",ev:["E11"],reply:"Three card payments and the barman put her there all night."},
        {id:"n3",stage:1,q:"How did you feel about her?",a:"She believed in me first. I hugged her after the speech, and I meant it.",truth:"supported",ev:["E15"],reply:"The 19:32 photo shows the hug, and her gold-leaf jacket explains the flakes on Lerato's blouse."}]},
    kagiso:{name:"Kagiso Molefe",init:"KM",role:"Gallery assistant, 24",bio:"Two years at Kiln. Photographed the opening. Had the safe code.",
      claims:[
        {id:"kg2",stage:1,q:"Did you go near the safe?",a:"No. Only the bosses use the safe.",truth:"contradicted",ev:["E9"],unlocks:["E16"],reply:"The cash was in his locker. He breaks down and gives a new statement."},
        {id:"kg1",stage:1,needsClaim:"kg2",q:"Did you see or hear anything after the event?",a:"Nothing. I packed the plinths and left.",truth:"contradicted",ev:["E16"],reply:"His revised statement: a man shouting in Lerato's office at about 22:12."}]},
    ruth:{name:"Ruth van Wyk",init:"RV",role:"Art collector, 67",bio:"Kiln's biggest client. Bought the headline piece on opening night.",
      claims:[
        {id:"r1",q:"When did you leave?",a:"Before half past nine. My Uber will tell you exactly.",truth:"supported",ev:["E5","E12"],reply:"The door list and her Uber receipt agree: out at 21:30, home by 21:58."},
        {id:"r2",stage:1,q:"Any problems with the gallery?",a:"None at all. Lerato was a friend.",truth:"contradicted",ev:["E13"],reply:"She had demanded a refund for a forged painting and threatened lawyers and the press."},
        {id:"r3",stage:1,needsClaim:"r2",q:"Who handled the certificates?",a:"Ask Daniel. The paperwork was always Daniel.",truth:"supported",ev:["E14"],reply:"The forging stamp was in Daniel's locked drawer."}]}
  },
  questions:[
    {id:"who",label:"Who killed Lerato Khumalo?",options:[{id:"daniel",label:"Daniel Pretorius",sub:"Co-owner"},{id:"nomsa",label:"Nomsa Dlamini",sub:"Featured artist"},{id:"kagiso",label:"Kagiso Molefe",sub:"Gallery assistant"},{id:"ruth",label:"Ruth van Wyk",sub:"Art collector"}],answer:"daniel"},
    {id:"why",short:"Motive",label:"Why?",options:[{id:"cash",label:"To steal the cash in the safe"},{id:"contract",label:"Anger over an unfair contract"},{id:"forgery",label:"To stop her exposing the forgery scheme"},{id:"revenge",label:"Revenge for being sold a forgery"}],answer:"forgery"}],
  strong:["E10","E7","E14","E6","E16"],
  verdict:`<p><b>What really happened.</b> Daniel had been selling forgeries with "Mabaso Estate" certificates he stamped himself. When Ruth complained, Lerato checked every sale and worked out who signed them.</p>
<p>At 21:45 Daniel said goodbye at the door but stayed in his car. At 22:02, with the cameras dark, Lerato called him up. He came back through the fire escape and propped the door with a brick. Kagiso, downstairs emptying the safe, heard him shout. When she turned away, Daniel struck her, wiped the statuette and hid it. He left the parkade at 23:04.</p>
<p>The gold leaf came from Nomsa's hug at 19:32. Kagiso was a thief, not a killer. Ruth was home in Saxonwold.</p>`,
  sources:[]
});
