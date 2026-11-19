/* 001 · The De Zalze Killings · real case, reworked in 1.1 */
CASES.push({
  id:"dezalze", no:"001", title:"The De Zalze Killings", real:true, kind:"Single killer", place:"Stellenbosch, Western Cape", when:"Tuesday 27 January 2015",
  docket:"Western Cape High Court · State v Van Breda",
  blurb:"A family is attacked inside a guarded golf estate. The surviving son says a masked intruder did it. Weigh his account, and his defence's best arguments.",
  note:"Real case. Three people were killed and a teenager was badly injured. No graphic detail. Defence arguments are included as they were made in court.",
  brief:`<p>Early on Tuesday 27 January 2015, the Van Breda family was attacked in their home on <b>De Zalze</b>, a guarded golf estate outside Stellenbosch. <b>Martin</b> and <b>Teresa van Breda</b> and their eldest son <b>Rudi</b> were killed. Their daughter <b>Marli</b>, 16, was critically injured.</p>
<p>The fifth family member, <b>Henri</b>, had only light wounds. He told police a man in a balaclava had attacked them and run off.</p>
<p>Your job is to test his account against the evidence the court heard and decide what happened inside that house.</p>`,
  victim:{no:"IN MEMORY",t:"Martin, Teresa & Rudi van Breda",s:"Killed 27 Jan 2015. Marli survived."},
  par:5,
  stages:[
    {label:"Tuesday morning", intro:"Emergency services are at the house on Goske Street. Henri has given his first account.", start:["V1","V2"],
     leads:[
      {id:"z1",label:"Check the estate's security records",hint:"Fences, gates, patrols, cameras.",reveals:["V3"],result:"The estate's security manager hands over the night's records."},
      {id:"z2",label:"Examine the weapons",hint:"An axe and a knife were found.",reveals:["V4"],result:"Forensic officers trace where both weapons came from."},
      {id:"z3",label:"Talk to the neighbours",hint:"Did anyone hear anything overnight?",reveals:["V8"],result:"The tenant next door has something to say."},
      {id:"z4",label:"Search the garden for an escape route",hint:"Where would an intruder have gone?",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"Forensics", teaser:"Injuries, timing and DNA.", intro:"The lab and the medical experts start reporting back.", start:[],
     leads:[
      {id:"z5",label:"Examine Henri's injuries",hint:"His wounds were light compared to his family's.",reveals:["V5"],result:"Two experts examine the wounds."},
      {id:"z6",label:"Establish when the attacks happened",hint:"Help was called at 07:12.",reveals:["V6"],result:"The evidence points to a time window."},
      {id:"z7",label:"Review the DNA results",hint:"216 samples were collected at the scene.",reveals:["V11"],result:"The forensic analyst reports."},
      {id:"z8",label:"Check on Marli",hint:"The only other survivor.",reveals:["V10"],result:"Her doctors report on her recovery."}]},
    {label:"The trial (2017–2018)", teaser:"Both sides make their case.", intro:"Henri pleads not guilty and insists on testifying. Hear both sides.", start:[],
     leads:[
      {id:"z9",label:"Look at Henri's phone",hint:"What did he do between the attacks and the call?",reveals:["V7"],result:"The court hears about his search history."},
      {id:"z10",label:"Test the blackout explanation",hint:"He says he fell and lost consciousness.",reveals:["V9"],result:"Medical experts give evidence."},
      {id:"z11",label:"Hear the defence's DNA expert",hint:"The defence attacks the forensic work.",reveals:["V12"],result:"The defence calls its first witness."}]}
  ],
  evidence:{
    V1:{no:"01",cat:"Records",title:"The emergency call",short:"Henri phoned for an ambulance at 07:12.",meta:"Testimony of the call-centre operator",
      body:`<p>At <b>07:12</b>, Henri van Breda phoned an emergency call centre asking for an ambulance.</p><p>The operator told the court she first thought the call was a prank. He was hesitant and calm, and she heard what sounded like a giggle. The call ran for <b>20 to 30 minutes</b>, longer than any she had taken for a similar crime.</p>`,events:[{s:432,t:"Tue 07:12",x:"Henri calls an emergency centre; operator first thinks it's a prank"}]},
    V2:{no:"02",cat:"Scene",title:"The family",short:"Four of five attacked in the bedrooms. One left standing.",meta:"Court findings",
      body:`<p>The house was on Goske Street, in the middle of the estate. Five family members were home: parents <b>Martin</b> and <b>Teresa</b>, sons <b>Rudi</b> and <b>Henri</b>, and daughter <b>Marli</b>, 16.</p>
<p>Four of the five were attacked in a similar way, close together in the sleeping areas of the house, and left for dead. <b>Henri was the only one left standing.</b></p>`,},
    V3:{no:"03",cat:"Scene",title:"Estate security",short:"Electric fence, alarms, cameras, patrols. No breach found.",meta:"De Zalze estate security evidence",
      body:`<p>De Zalze's perimeter had an <b>electrified fence</b>, an alarm system, <b>CCTV cameras</b>, and guards and dogs patrolling overnight.</p>
<p>Every vehicle that came through the gate that night was accounted for. The fence was monitored and <b>no breach was detected</b>. Nobody on the estate reported strangers or anything unusual.</p>`},
    V4:{no:"04",cat:"Forensic",title:"The weapons",short:"A small axe and a kitchen knife, both from the house.",meta:"Court findings",
      body:`<p>The attacks were carried out with a <b>small axe</b> and a <b>kitchen knife</b>.</p><p>The court accepted the State's evidence that <b>both came from inside the Van Breda household</b>. Nothing was brought in from outside.</p>`},
    V5:{no:"05",cat:"Forensic",title:"Henri's injuries",short:"Superficial, and unlike the others' wounds.",meta:"State expert witnesses",
      body:`<p>Henri's wounds were <b>markedly different in nature and extent</b> from those of his family, even though he said the same attacker caused them.</p>
<p>Two expert witnesses for the State found that some, if not all, of his injuries were <b>self-inflicted</b>. Their evidence was not contradicted.</p>`,},
    V6:{no:"06",cat:"Forensic",title:"Time of the attacks",short:"Probably 04:00 to 04:24, about three hours before the call.",meta:"Judgment, Judge Siraj Desai",
      body:`<p>The court found the attacks were <b>probably committed between 04:00 and 04:24</b>.</p><p>Help was only called at 07:12, roughly <b>three hours later</b>. The judge found Henri had ample time to tamper with the scene.</p>`,events:[{s:240,t:"Tue 04:00",x:"Earliest time of the attacks (court finding)"},{s:264,t:"Tue 04:24",x:"Latest time of the attacks (court finding)"}]},
    V7:{no:"07",cat:"Digital",title:"Phone search history",short:"He looked up emergency numbers hours before calling.",meta:"Evidence led at trial",
      body:`<p>The court heard that Henri had <b>searched online for emergency call numbers hours before</b> he actually placed the call at 07:12.</p>`},
    V8:{no:"08",cat:"Witness",title:"The neighbour",short:"Raised voices from the house late on Monday night.",meta:"Testimony of the neighbour at No. 10",
      body:`<p>The neighbour renting the house next door testified she heard <b>raised voices</b> coming from the Van Breda home between about <b>22:00 and shortly after midnight</b> on the Monday night.</p>
<p>The defence said the men had been watching a film on a new home theatre system. She insisted what she heard was not a film. She didn't call security because she didn't think anyone would be hurt.</p>`,
      events:[{s:-120,t:"Mon 22:00",x:"Neighbour hears raised voices begin"},{s:15,t:"Tue 00:15",x:"Voices stop, shortly after midnight"}]},
    V9:{no:"09",cat:"Forensic",title:"The blackout claim",short:"Experts: his injuries don't fit losing consciousness.",meta:"Expert evidence, judgment",
      body:`<p>Henri said he fell down the stairs and lost consciousness, which explained why help wasn't called sooner.</p><p>Expert evidence found he <b>did not have injuries consistent with losing consciousness</b> from a knock to the head. The judge found the explanation unconvincing.</p>`},
    V10:{no:"10",cat:"Witness",title:"Marli's memory",short:"The only other survivor cannot remember the night.",meta:"Medical reports",
      body:`<p>Marli survived severe head injuries. She was left with <b>retrograde amnesia</b> and cannot remember the night of the attack.</p><p>She could not tell investigators, or the court, what happened.</p>`},
    V11:{no:"11",cat:"Forensic",title:"The DNA results",short:"No trace of an outsider. Rudi's and Martin's DNA on Henri's shorts.",meta:"State forensic evidence",
      body:`<p>The State found <b>no unidentified fingerprints, footprints or foreign DNA</b> anywhere at the scene. DNA from <b>Rudi and Martin</b> was found on Henri's shorts.</p>
<p>The defence pointed out that <b>none of Henri's DNA was found on his family members</b>, even though he was wearing only shorts and socks during the attacks.</p>`},
    V12:{no:"12",cat:"Forensic",title:"The defence DNA expert",short:"Most police DNA samples didn't follow standard procedure, she testified.",meta:"Defence witness, October 2017",
      body:`<p>The defence's first witness, a DNA expert, testified that most of the DNA samples analysed by the police lab <b>did not comply with standard operating procedures</b>, and argued the data should be treated as invalid. One evidence bag had arrived at the lab unsealed.</p>
<p>The court also heard that the defence had access to the samples but <b>chose not to retest them</b>.</p>`}
  },
  bands:[{from:240,to:264,cls:"tod",label:"Time of the attacks",needs:"V6"}],
  groups:{
    henri:{name:"Henri van Breda",init:"HV",role:"Surviving son · his account",bio:"His version of events, given to police and in court.",
      claims:[
        {id:"h1",q:"What happened?",a:"A laughing man in a balaclava, dark clothes and gloves attacked my family, then ran off.",truth:"contradicted",ev:["V3","V11"],reply:"The court found no credible evidence that any intruder entered the estate or the house that night."},
        {id:"h2",q:"What was the attacker carrying?",a:"An axe and a knife.",truth:"contradicted",ev:["V4"],reply:"Both weapons came from the family's own home, so an intruder would have had to arrive unarmed."},
        {id:"h3",stage:1,q:"How were you hurt?",a:"Fighting the attacker off.",truth:"contradicted",ev:["V5"],reply:"Uncontradicted expert evidence found some, if not all, of his wounds were self-inflicted."},
        {id:"h4",stage:2,q:"Why wait until 07:12 to call for help?",a:"I fell down the stairs and blacked out.",truth:"contradicted",ev:["V9","V7"],reply:"The medical evidence didn't support a blackout, and he had searched for emergency numbers hours earlier."}]},
    defence:{name:"The defence",init:"DEF",role:"Henri's legal team",bio:"Arguments made on Henri's behalf at trial. Some had real substance.",
      claims:[
        {id:"df1",q:"What were the voices the neighbour heard?",a:"The men were watching a film on a new home theatre system.",truth:"unresolved",reply:"The neighbour insisted it wasn't a film. Nothing in the evidence settles it either way."},
        {id:"df2",stage:1,q:"What does the DNA show?",a:"None of Henri's DNA was found on any of his family members.",truth:"supported",ev:["V11"],reply:"This was true, and it was one of the defence's strongest points. The court still found the rest of the evidence pointed only to him."},
        {id:"df3",stage:2,q:"Can the police DNA work be trusted?",a:"Most of the samples weren't handled to standard. The results are unreliable.",truth:"unresolved",reply:"The defence expert said so, and the State's analyst disagreed. The defence didn't retest the samples. This file can't settle it."}]},
    state:{name:"The State",init:"NPA",role:"Prosecution",bio:"The prosecution's case, built entirely on circumstantial evidence.",
      claims:[
        {id:"st1",stage:1,q:"Was anyone else in the house?",a:"There is no trace of any outsider: no unknown prints, footprints or DNA.",truth:"supported",ev:["V11"],reply:"Correct. The forensic team found nothing from an unknown person."},
        {id:"st2",q:"Was there a family argument that night?",a:"The raised voices the neighbour heard were an argument in the house.",truth:"unresolved",reply:"Possible, but nothing proves what the voices were or what they were about."}]}
  },
  questions:[
    {id:"who",label:"Who attacked the Van Breda family?",options:[{id:"one",label:"An intruder who got into the estate",sub:"Henri's version"},{id:"two",label:"Two intruders working together",sub:"Henri said there may have been two"},{id:"henri",label:"Henri van Breda",sub:"The surviving son"}],answer:"henri"},
    {id:"kind",short:"How it was proven",label:"What kind of evidence convicted him?",options:[{id:"conf",label:"A confession"},{id:"eye",label:"An eyewitness"},{id:"dna",label:"DNA on the weapon"},{id:"circ",label:"Circumstantial evidence that together pointed only one way"}],answer:"circ"},
    {id:"defpoint",short:"The defence's best point",label:"Which defence point was actually true?",options:[{id:"dna",label:"None of Henri's DNA was on his family members"},{id:"fence",label:"The estate fence had been breached"},{id:"weapons",label:"The weapons were brought from outside"},{id:"blackout",label:"Henri lost consciousness after a fall"}],answer:"dna"}],
  strong:["V3","V4","V5","V6","V7","V9","V11"],
  verdict:`<p>On <b>21 May 2018</b>, after a 66-day trial in the Western Cape High Court, Judge Siraj Desai found <b>Henri van Breda</b> guilty of murdering his father Martin, his mother Teresa and his brother Rudi, of the attempted murder of his sister Marli, and of defeating the ends of justice.</p>
<p>There was <b>no direct evidence</b>: no confession and no eyewitness. The judge said each fact on its own might not prove guilt, but taken together they left only one reasonable inference. There was no breach of the estate, the weapons came from the house, his wounds were self-inflicted, and he changed his account when it clashed with the evidence.</p>
<p>On <b>7 June 2018</b> he was sentenced to three life terms, 15 years for attempted murder and 12 months for defeating the ends of justice, to run concurrently. He was later refused leave to appeal. He has continued to say an intruder was responsible.</p>`,
  memorial:"Martin van Breda · Teresa van Breda · Rudi van Breda. Marli van Breda survived.",
  sources:[
    {t:"News24: 11 facts that led to Henri van Breda's conviction",u:"https://www.news24.com/SouthAfrica/News/11-facts-that-led-to-henri-van-bredas-conviction-20180521"},
    {t:"News24: Operator thought Van Breda emergency call was a prank",u:"https://www.news24.com/SouthAfrica/News/operator-thought-van-breda-emergency-call-was-a-prank-court-hears-20170516"},
    {t:"Daily Maverick: Henri van Breda found guilty of family axe slayings",u:"https://www.dailymaverick.co.za/article/2018-05-21-henri-van-breda-found-guilty-of-family-axe-slayings/"},
    {t:"OFM: Judgment being delivered in Van Breda murder case",u:"https://www.ofm.co.za/article/national/262344/judgment-being-delivered-in-vanbreda-murder-case"},
    {t:"IOL: Van Breda to spend first night behind bars",u:"https://www.iol.co.za/news/south-africa/western-cape/vanbreda-to-spend-first-night-behind-bars-after-guilty-verdict-15091086"},
    {t:"NPA: Henri van Breda sentenced to three life terms",u:"https://www.npa.gov.za/sites/default/files/media-releases/Henri%20Van%20Breda%20Sentenced%20To%20Three%20Life%20Terms%20And%2015%20Years%20For%20Murders%20Of%20His%20Family%20And%20Attempted%20Murder%20Of%20His%20Sister.pdf"},
    {t:"Nattrass & Watermeyer (Wits): Communication breakdown in a complex emergency call",u:"https://wiredspace.wits.ac.za/bitstreams/23bd465a-42cd-441c-ab1c-8f786edc07da/download"},
    {t:"Wikipedia: Van Breda murders",u:"https://en.wikipedia.org/wiki/Van_Breda_murders"},
    {t:"News24: No evidence an unknown assailant was not behind attack, defence argues",u:"https://www.news24.com/southafrica/news/no-evidence-that-an-unknown-assailant-was-not-behind-attack-on-van-breda-family-defence-20180214"}, {t:"TimesLive: Van Breda trial to hear closing arguments",u:"https://www.timeslive.co.za/amp/news/south-africa/2018-02-12-van-breda-trial-to-resume/"}, {t:"The Citizen (via PressReader): 128 of 151 DNA tests flawed",u:"https://www.pressreader.com/south-africa/the-citizen-kzn/20171011/281651075325783"}, {t:"News24: Van Breda defence did not retest DNA samples",u:"https://www.news24.com/southafrica/news/van-breda-defence-did-not-retest-dna-samples-20171019"}]
});
