/* 002 · The ABC Murders · real case, reworked in 1.1 */
CASES.push({
  id:"abc", no:"002", title:"The ABC Murders", real:true, kind:"Serial killer", place:"Gauteng", when:"July 1994 – November 1995",
  docket:"Pretoria Murder & Robbery Unit · Special investigation",
  blurb:"Women are found murdered in Atteridgeville, Boksburg and Cleveland. One killer or many? And how is he finding them?",
  note:"Real case. Dozens of women were murdered; some were never identified. No graphic detail.",
  brief:`<p>From July 1994, the bodies of women began to be found in <b>Atteridgeville</b> near Pretoria, then around <b>Boksburg</b> on the East Rand, and in <b>Cleveland</b> in Johannesburg. The press named them the ABC murders.</p>
<p>A special team was formed in the Pretoria Murder and Robbery Unit. At first, differences between the scenes made it hard to say whether one man was responsible.</p>
<p>Work through the evidence and decide: how many killers were there, and how were the victims chosen?</p>`,
  victim:{no:"IN MEMORY",t:"The women of the ABC murders",s:"At least 38 killed, 1994–1995. Some never identified."},
  par:5,
  stages:[
    {label:"1994 to mid-1995", intro:"Bodies are being found far apart. The pressure on police is enormous.", start:["A1"],
     leads:[
      {id:"b1",label:"Interview the victims' families",hint:"What were the women doing before they disappeared?",reveals:["A2"],result:"The same story keeps coming up."},
      {id:"b2",label:"Look for witnesses near the Boksburg sites",hint:"Open veld near houses and caravans.",reveals:["A3"],result:"A man in Beyers Park saw something in July."},
      {id:"b3",label:"Watch the taxi ranks for a pattern",hint:"Maybe he picks women up at ranks.",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"September–October 1995", teaser:"A mass scene, a name and a phone call.", intro:"The killings are accelerating. Then a body is found at a mine near Boksburg.", start:["A4"],
     leads:[
      {id:"b4",label:"Identify the Boksburg victims",hint:"Any personal belongings at the scene?",reveals:["A5"],result:"A handbag gives up a name."},
      {id:"b5",label:"Follow the job offers",hint:"Where were the women told to go?",reveals:["A6"],result:"A Benoni charity has a story to tell."},
      {id:"b6",label:"Trace the names the job-offer man used",hint:"Witnesses remember different names.",reveals:["A7"],result:"Witness statements are compared side by side."},
      {id:"b7",label:"Talk to the press",hint:"A newspaper says it's had a call.",reveals:["A8"],result:"A journalist at The Star describes the call."}]},
    {label:"The trial (1996–1997)", teaser:"His past, and what the prosecution brings to court.", intro:"Moses Sithole has been arrested and charged. He pleads not guilty.", start:[],
     leads:[
      {id:"b8",label:"Check his criminal record",hint:"Has he been in prison before?",reveals:["A9"],result:"His record, and some of his earlier victims, come to court."},
      {id:"b9",label:"Review the prosecution's video exhibit",hint:"Recorded while he was in custody.",reveals:["A10"],result:"The tape is played in court."},
      {id:"b10",label:"Trace the victims' belongings",hint:"Jewellery was missing from some victims.",reveals:["A11"],result:"A witness identifies the items."}]}
  ],
  evidence:{
    A1:{no:"01",cat:"Scene",title:"Three areas, one pattern?",short:"Victims found in Atteridgeville, Boksburg and Cleveland.",meta:"Investigation summary",
      body:`<p>Between <b>July 1994 and late 1995</b>, women were found murdered in three areas far apart: Atteridgeville, Boksburg and Cleveland. Most had been strangled, often with their own clothing.</p>
<p>A special investigation team was set up in Pretoria. Variations between the attacks made it hard, at first, to confirm a single killer.</p>`,
      events:[{s:19940716,t:"16 Jul 1994",x:"First murder later attributed to the ABC killer"}]},
    A2:{no:"02",cat:"Witness",title:"What the families said",short:"Again and again: she went to meet a man about a job.",meta:"Statements from relatives, friends and co-workers",
      body:`<p>Across the cases, victims' relatives, friends and co-workers told detectives the same thing: before she disappeared, she had gone to <b>meet a man about a job offer</b>.</p>
<p>Many of the women were unemployed and looking for work.</p>`,},
    A3:{no:"03",cat:"Witness",title:"The Beyers Park witness",short:"A man walked into the veld with a woman and came back alone.",meta:"Boksburg · 17 July 1995",
      body:`<p>A man living in a caravan in Beyers Park, Boksburg, watched a man and a woman walk into the veld some distance from his home. Later the man came back <b>alone</b>, looking around as though he wanted to leave fast.</p>
<p>The woman was <b>Josephine Mantsali Mlangeni</b>, 25, a mother of four. She had gone to meet someone about a <b>job offer</b>.</p>`,
      events:[{s:19950717,t:"17 Jul 1995",x:"Witness sees a man return alone from the veld in Beyers Park"}]},
    A4:{no:"04",cat:"Scene",title:"Van Dyk Mine",short:"Ten bodies recovered near Boksburg in 48 hours.",meta:"September 1995",
      body:`<p>On <b>16 September 1995</b>, a body was found at the Van Dyk Mine near Boksburg. Over the next 48 hours, forensic teams recovered <b>ten bodies</b>.</p>
<p>Investigators became certain the Boksburg victims were <b>linked to those in Atteridgeville</b>.</p>`,events:[{s:19950916,t:"16 Sep 1995",x:"Van Dyk Mine: ten bodies recovered over two days"}]},
    A5:{no:"05",cat:"Scene",title:"A handbag at the scene",short:"An ID book names a victim, and leads to a job offer.",meta:"Boksburg scene",
      body:`<p>A handbag recovered at the Boksburg scene held an identity document. It identified <b>Amelia Rapodile</b>, who was last seen on <b>7 September 1995</b> on her way to meet a man about a job.</p>
<p>Investigators found a <b>job application</b> showing she had been offered a position. It connected her to a man named <b>Moses Sithole</b>.</p>`,events:[{s:19950907,t:"7 Sep 1995",x:"Amelia Rapodile last seen, going to meet a man about a job"}]},
    A6:{no:"06",cat:"Witness",title:"Kids Haven",short:"A second victim, the same job offer, the same man.",meta:"Kids Haven children's charity, Benoni",
      body:`<p><b>Tryphina Mogotsi</b> worked in the laundry at Kids Haven, a Benoni organisation for street children. She told a co-worker she was excited about a job offer and had an appointment with the man.</p>
<p>A social worker confirmed <b>Moses Sithole had visited Kids Haven twice</b>. Her co-worker later identified him from a security camera photo as the man with the appointment.</p>
<p>With a second victim tied to the same man, police were confident they had their suspect.</p>`,},
    A7:{no:"07",cat:"Witness",title:"Many names",short:"Witnesses knew him as Martin, Sello, Piet, David.",meta:"Trial testimony",
      body:`<p>Witnesses in different cases described a man offering jobs who used different names: <b>"Martin"</b>, <b>"Sello"</b>, <b>"Piet Tsotsetsi"</b>, <b>"David Ngobeni"</b>.</p><p>At trial, they identified him as the same person: Moses Sithole.</p>`},
    A8:{no:"08",cat:"Records",title:"The call to The Star",short:"A man phones a journalist and claims 76 victims.",meta:"3 October 1995",
      body:`<p>On <b>3 October 1995</b>, the day Agnes Mbuli's body was found near Benoni, a man phoned journalist <b>Tamsen de Beer</b> at <i>The Star</i>. He said he was the killer and claimed <b>76 victims</b>, about twice the number police knew of.</p>
<p>He said the killings were revenge for being wrongly imprisoned. To prove who he was, he gave directions to where a body had been left.</p>`,events:[{s:19951003,t:"3 Oct 1995",x:"Caller tells The Star he is the killer"}]},
    A9:{no:"09",cat:"Records",title:"His record",short:"A rape conviction, and women who'd been lured the same way.",meta:"Criminal record and trial testimony",
      body:`<p>Sithole had served a prison sentence for rape at <b>Boksburg Prison</b>.</p>
<p>Women he had attacked in the late 1980s testified that he had used false names, including "Martin", back then too.</p>`},
    A10:{no:"10",cat:"Records",title:"The video",short:"Recorded in custody: he admits 29 murders.",meta:"Trial exhibit · 3 December 1996",
      body:`<p>At trial the prosecution introduced a <b>video recorded during his custody</b> in which Sithole openly admitted to <b>29 murders</b>.</p><p>He had pleaded not guilty.</p>`,events:[{s:19961203,t:"3 Dec 1996",x:"Prosecution plays the video confession in court"}]},
    A11:{no:"11",cat:"Forensic",title:"The jewellery",short:"A watch, necklace and rings taken from victims.",meta:"Trial testimony",
      body:`<p>In court, his estranged wife identified a watch, a necklace and rings as belonging to Sithole. The prosecution said they had been <b>taken from some of the murdered women</b>.</p>`},
  },
  bands:[],
  groups:{
    team:{name:"Early investigation",init:"INV",role:"Working theories, 1994–95",bio:"What police and the public believed before the cases were connected.",
      claims:[
        {id:"e1",q:"One killer or several?",a:"The scenes are too different. These are several unconnected killers.",truth:"contradicted",ev:["A4","A7"],reply:"The Boksburg victims were linked to Atteridgeville, and witnesses across cases described the same man using different names."},
        {id:"e2",stage:2,q:"Did he act alone?",a:"He must have had an accomplice.",truth:"unresolved",reply:"Many people suspected another man was involved, but it was never proven either way."}]},
    public:{name:"Public fear",init:"PUB",role:"Gauteng, 1995",bio:"What people believed while the killings continued.",
      claims:[
        {id:"p1",q:"How does he choose his victims?",a:"He grabs women off the street at random.",truth:"contradicted",ev:["A2","A3","A6"],reply:"The women had appointments. He lured women looking for work with fake job offers."}]},
    caller:{name:"The caller",init:"TEL",role:"Phoned The Star, Oct 1995",bio:"The man who phoned a journalist claiming to be the killer.",
      claims:[
        {id:"c1",stage:1,needs:"A8",q:"How many?",a:"I have killed 76 women.",truth:"unresolved",reply:"About twice what police knew of. He was convicted of 38 murders. The rest of his claim was never proven."},
        {id:"c2",stage:1,needs:"A8",q:"Why?",a:"Revenge for being wrongly put in prison.",truth:"contradicted",ev:["A9"],reply:"Women he had attacked in the late 1980s testified at his trial. His earlier conviction wasn't a mistake."}]},
    accused:{name:"Moses Sithole",init:"MS",role:"Accused · on trial from Oct 1996",bio:"Arrested in October 1995. His plea at trial.",
      claims:[
        {id:"t1",stage:2,q:"How do you plead?",a:"Not guilty.",truth:"contradicted",ev:["A10","A11"],reply:"The court saw his recorded admission to 29 murders and heard that victims' belongings were linked to him."}]}
  },
  questions:[
    {id:"who",label:"Who was behind the ABC murders?",options:[{id:"many",label:"Several unconnected killers"},{id:"random",label:"One man choosing strangers at random"},{id:"sithole",label:"Moses Sithole, luring women with fake job offers"}],answer:"sithole"},
    {id:"how",short:"How he was named",label:"How did investigators first put a name to him?",options:[{id:"prints",label:"Fingerprints at a scene"},{id:"jobs",label:"Victims' job appointments and the people who'd met him"},{id:"dna",label:"A DNA database match"},{id:"tip",label:"An anonymous tip"}],answer:"jobs"}],
  strong:["A5","A6","A4","A10","A11","A7","A3"],
  verdict:`<p>On <b>18 October 1995</b> police set a trap at a factory in Benoni, where Sithole had arranged to meet his brother-in-law. He attacked an officer with an axe and was shot and wounded before being taken into custody. Five days later he was charged with 29 murders in the Brakpan magistrate's court.</p>
<p>His trial began on 21 October 1996, with the charges expanded to <b>38 murders, 40 rapes and 6 robberies</b>. In <b>December 1997</b> he was found guilty on all counts and sentenced to <b>2,410 years</b> in prison, with no possibility of parole for 930 years.</p>
<p>The case was cracked through the victims themselves: the job appointments they told people about, and the witnesses who had met the man offering the work.</p>`,
  memorial:"Josephine Mantsali Mlangeni · Amelia Rapodile · Tryphina Mogotsi · Agnes Sibongile Mbuli · Beauty Ntombi Ndabeni · and every woman killed, including those never identified.",
  sources:[
    {t:"Crime+Investigation: Moses Sithole, South Africa's worst serial killer",u:"https://www.crimeandinvestigation.co.uk/crime-files/moses-sithole-south-africas-worst-serial-killer"},
    {t:"Biography: Moses Sithole",u:"https://www.biography.com/crime/moses-sithole"},
    {t:"Crime Library: Moses Sithole, Near Miss",u:"https://crimelibrary.org/serial_killers/predators/moses_sithole/4.html"},
    {t:"Crime Library: Moses Sithole, Phone Calls",u:"https://www.crimelibrary.org/serial_killers/predators/moses_sithole/7.html"},
    {t:"Crime Library: Moses Sithole, trial testimony",u:"https://crimelibrary.org/serial_killers/predators/moses_sithole/12.html"},
    {t:"Mail & Guardian: Love born and killed in jail (1996)",u:"https://mg.co.za/article/1996-11-29-love-born-and-killed-in-jail/"},
    {t:"EWN: The ABC Killer documentary",u:"https://ewn.co.za/the-abc-killer-new-doccie-sheds-light-on-sa-s-most-notorious-serial-killer"},
    {t:"Wikipedia: Moses Sithole",u:"https://en.wikipedia.org/wiki/Moses_Sithole"},
    {t:"Crime+Investigation: The trial of Moses Sithole",u:"https://www.crimeandinvestigation.co.uk/crime-files/moses-sithole-south-africa-s-worst-serial-killer/trial"}]
});
