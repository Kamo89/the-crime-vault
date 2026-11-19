/* 003 · The Frederick Disappearance · real case, reworked in 1.1 */
CASES.push({
  id:"frederick", no:"003", title:"The Frederick Disappearance", real:true, kind:"Single killer", place:"Frederick, Colorado, USA", when:"Monday 13 August 2018",
  docket:"Frederick Police Department · Weld County District Court",
  blurb:"A pregnant mother and her two daughters vanish overnight. Her husband pleads on TV for them to come home.",
  note:"Real case. A mother, her two young daughters and her unborn son were killed. No graphic detail.",
  brief:`<p>On Monday 13 August 2018, <b>Shanann Watts</b>, 34 and 15 weeks pregnant, and her daughters <b>Bella</b>, 4, and <b>Celeste</b>, 3, could not be found at their home in Frederick, a town north of Denver.</p>
<p>Her husband, <b>Chris Watts</b>, said he'd left for work before dawn while they were still in bed. The next day he gave TV interviews asking them to come home.</p>
<p>Test his account and decide what happened to the family.</p>`,
  victim:{no:"IN MEMORY",t:"Shanann, Bella & Celeste Watts",s:"And unborn son Nico. 13 August 2018."},
  par:6,
  stages:[
    {label:"Monday 13 August", intro:"A friend has called police. Chris has come home from work to let them in.", start:["W1","W2"],
     leads:[
      {id:"f1",label:"Search the house",hint:"What did she take with her?",reveals:["W3"],result:"Officers go room by room."},
      {id:"f2",label:"Ask the neighbours for camera footage",hint:"Several houses on the street have cameras.",reveals:["W4"],result:"A neighbour's camera covers the driveway."},
      {id:"f3",label:"Call the local hospitals",hint:"Maybe there was an emergency.",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"Tuesday and Wednesday", teaser:"TV interviews, phones and a polygraph.", intro:"The story is on the news. Chris is talking to reporters.", start:["W5"],
     leads:[
      {id:"f4",label:"Look into Chris's phone and workplace",hint:"Who is he talking to?",reveals:["W6"],result:"Detectives learn something he hasn't told them."},
      {id:"f5",label:"Talk to Shanann's friends about the marriage",hint:"How were things at home?",reveals:["W7"],result:"Friends and messages fill in the picture."},
      {id:"f6",label:"Ask Chris to take a polygraph",hint:"He agrees to come in.",reveals:["W8"],result:"His father flies in the same morning."},
      {id:"f7",label:"Search the open space behind the house",hint:"A field backs onto the property.",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"After the arrest", teaser:"The site, the autopsies and what he said later.", intro:"Chris is in custody. He tells investigators where to look.", start:["W9"],
     leads:[
      {id:"f8",label:"Read the autopsy reports",hint:"Do they fit his account?",reveals:["W10"],result:"The reports are released in November."},
      {id:"f9",label:"Interview him again in prison",hint:"February 2019, after his sentencing.",reveals:["W11"],result:"He agrees to talk, and doesn't hesitate."}]}
  ],
  evidence:{
    W1:{no:"01",cat:"Witness",title:"The friend's call",short:"Shanann missed a doctor's appointment and wasn't answering.",meta:"Arrest affidavit",
      body:`<p>A friend and colleague had driven Shanann home from the airport just before <b>2 a.m.</b> after a work trip.</p>
<p>Later that morning Shanann <b>missed a 10 a.m. doctor's appointment</b> and stopped answering calls and texts. The friend went to the house around midday, then called Chris at work and the police.</p>`,
      events:[{s:600,t:"Mon 10:00",x:"Shanann misses her doctor's appointment"},{s:730,t:"Mon ~12:10",x:"Friend arrives at the house, calls police and Chris"}]},
    W2:{no:"02",cat:"Scene",title:"The locked house",short:"Every door and window locked. Nobody inside.",meta:"Arrest affidavit",
      body:`<p>The first officer found <b>all doors and windows locked</b>. He called Chris for the garage keypad code. Chris came home instead and let the officer in.</p><p>Shanann and the girls were not there.</p>`,},
    W3:{no:"03",cat:"Scene",title:"What she left behind",short:"Phone, purse, keys, medication. Her car, with the car seats.",meta:"Search of the house",
      body:`<p>Inside the house: Shanann's <b>purse with her keys and medication</b> on the kitchen counter, her wallet, and her <b>phone pushed between the couch cushions</b>. A suitcase sat at the bottom of the stairs.</p>
<p>Her car was in the garage with <b>the girls' car seats still inside</b>.</p>`,},
    W4:{no:"04",cat:"Digital",title:"The neighbour's camera",short:"01:48 she's dropped off. 05:27 his truck backs up to the house.",meta:"Neighbour's home security video",
      body:`<p>A neighbour's camera covered the driveway.</p>
<div class="doc">01:48  Friend's car drops Shanann off and leaves
05:27  Chris's work truck backs into the driveway,
       up to the garage, and leaves a short time later</div>
<p>Neighbours said he usually parked on the street. The video doesn't show what was loaded. Watching it with police, the neighbour said Chris was <b>"not acting right"</b>.</p>`,
      events:[{s:108,t:"Mon 01:48",x:"Shanann dropped home (camera)"},{s:327,t:"Mon 05:27",x:"Chris's truck backs up to the garage, then leaves (camera)"}]},
    W5:{no:"05",cat:"Records",title:"The TV interviews",short:"Chris asks his family to come home.",meta:"Local news · Tuesday 14 August",
      body:`<p>On Tuesday, Chris gave interviews to local TV stations. He pleaded for his family's safe return and said the house felt empty without the girls watching cartoons or running to meet him at the door.</p>`,
      events:[{s:1440+720,t:"Tue 14 Aug",x:"Chris gives TV interviews asking his family to come home"}]},
    W6:{no:"06",cat:"Digital",title:"The affair",short:"He was seeing a co-worker, which he had denied.",meta:"Investigation",
      body:`<p>Detectives learned Chris was having an <b>affair with a co-worker</b>, which he had denied in his earlier interviews. The co-worker contacted police herself after seeing the news.</p>`,},
    W7:{no:"07",cat:"Records",title:"The marriage",short:"He'd said he no longer loved her and didn't want a third child.",meta:"Released case files",
      body:`<p>Case files showed Chris had told Shanann he was <b>no longer in love with her</b> and did not want a third child.</p><p>He told police he raised separating with her the morning she disappeared.</p>`},
    W8:{no:"08",cat:"Records",title:"The polygraph",short:"He fails, admits the affair, then gives a first confession.",meta:"Arrest affidavit · Wednesday 15 August",
      body:`<p>Chris <b>failed a polygraph</b> and admitted the affair. After an investigator raised the possibility that Shanann might have hurt the children, he asked to speak with his father, then admitted killing Shanann.</p>
<p>He claimed he did it in a rage after seeing <b>Shanann harming one of their daughters</b>. He was arrested that night and fired by his employer, the oil company Anadarko.</p>`,events:[{s:2880+1260,t:"Wed 15 Aug",x:"Polygraph, first confession, arrest"}]},
    W9:{no:"09",cat:"Scene",title:"The oil site",short:"The family is found where he worked.",meta:"Thursday 16 August",
      body:`<p>Chris told investigators where to look: an <b>Anadarko oil work site near Roggen</b>, about 40 miles east of the home, where he had worked.</p><p>Shanann was found buried there. The girls were found nearby.</p>`,events:[{s:4320+720,t:"Thu 16 Aug",x:"The family is found at the oil site"}]},
    W10:{no:"10",cat:"Forensic",title:"The autopsies",short:"The findings didn't match his story.",meta:"Autopsy reports, released November 2018",
      body:`<p>The autopsies found that both girls had been <b>smothered</b>, and that Bella showed signs she had fought back. Shanann had been strangled.</p>
<p>Prosecutors called his account of Shanann harming the girls <b>"a flat-out lie"</b>.</p>`},
    W11:{no:"11",cat:"Records",title:"The prison interview",short:"February 2019: his first full confession.",meta:"Interview with FBI, CBI and Frederick police · 18 February 2019",
      body:`<p>Three months after he was sentenced, Watts talked to investigators in prison. Authorities believe it was his <b>first full confession</b>.</p>
<p>He admitted his story that Shanann hurt the girls was <b>a lie</b>. He said detectives were the first to raise it and he "just went with it". He said that after an argument about his affair, in which Shanann told him he would never see the children again, he <b>strangled her</b> in their bed. He then drove her body and the girls to the oil site, where the girls were killed.</p>`,
      events:[{s:99999,t:"18 Feb 2019",x:"Watts gives his first full confession in prison"}]}
  },
  bands:[],
  groups:{
    chris:{name:"Chris Watts",init:"CW",role:"Husband · his accounts",bio:"What he told police and reporters in August 2018, and investigators in 2019.",
      claims:[
        {id:"w1",q:"Where did Shanann say she was going?",a:"She said she and the girls would go to a friend's house later.",truth:"contradicted",ev:["W3"],reply:"She left her phone, purse, keys, medication and her car with the car seats. She never left the house."},
        {id:"w2",stage:1,q:"Is there anyone else?",a:"No. There's no affair.",truth:"contradicted",ev:["W6"],reply:"He was in an affair with a co-worker, and later admitted it."},
        {id:"w3",stage:1,needs:"W8",q:"What happened to the girls?",a:"I saw Shanann harming our daughter, and I killed her in a rage.",truth:"contradicted",ev:["W10","W11"],reply:"The autopsies didn't fit, and in 2019 he admitted it was a lie."},
        {id:"w4",stage:1,q:"How was your conversation that morning?",a:"Emotional, but civil. We weren't arguing.",truth:"contradicted",ev:["W11"],reply:"In 2019 he described an argument about his affair, then killing her."},
        {id:"w5",stage:2,q:"Where did the idea that Shanann hurt the girls come from?",a:"The detectives brought it up first, and I just went with it.",truth:"supported",ev:["W8"],reply:"The record shows an investigator raised the possibility before he asked for his father."},
        {id:"w6",stage:2,q:"Did you plan what would happen to the girls?",a:"I had no plan when I drove to the site.",truth:"unresolved",reply:"Only his word exists on this. Nothing in the evidence proves or disproves it."}]},
    neighbour:{name:"The neighbour",init:"NB",role:"Owned the camera",bio:"Showed police and Chris the driveway footage.",
      claims:[
        {id:"nb",needs:"W4",q:"What did you notice about Chris?",a:"He's not acting right. I've never seen him this fidgety.",truth:"unresolved",reply:"An honest impression, and it turned out to be right. But behaviour alone proves nothing."}]}
  },
  questions:[
    {id:"what",label:"What happened to Shanann, Bella and Celeste?",options:[{id:"left",label:"Shanann left voluntarily with the girls"},{id:"stranger",label:"A stranger took them"},{id:"story",label:"Shanann harmed the girls, then Chris killed her"},{id:"chris",label:"Chris Watts killed all three"}],answer:"chris"},
    {id:"why",short:"Motive",label:"What did prosecutors say drove him?",options:[{id:"money",label:"Money trouble"},{id:"out",label:"He wanted out of his marriage and family"},{id:"self",label:"Self-defence"},{id:"custody",label:"A custody fight"}],answer:"out"}],
  strong:["W3","W4","W6","W8","W10","W11","W7"],
  verdict:`<p>On <b>6 November 2018</b>, Chris Watts pleaded guilty to nine counts, including three counts of first-degree murder, unlawful termination of a pregnancy and tampering with a deceased human body. Shanann's family agreed to a plea deal that took the death penalty off the table.</p>
<p>On <b>19 November 2018</b> he was sentenced to consecutive <b>life terms without parole</b>, plus 84 more years. Prosecutors said he had been having an affair and wanted to escape his marriage and growing family.</p>
<p>His first story, that Shanann had harmed the girls, was disproved by the evidence. The things she left behind showed she never left the house.</p><p>In <b>February 2019</b>, in a prison interview, he gave what investigators believe was his first full confession, and admitted that blaming Shanann had been a lie.</p>`,
  memorial:"Shanann Watts · Bella Watts · Celeste \"CeCe\" Watts · Nico Watts, unborn.",
  sources:[
    {t:"Action News Jax: Arrest affidavit details",u:"https://www.actionnewsjax.com/news/chris-watts-shanann-watts-colorado/817876880"},
    {t:"WFMY: Affidavit, Watts claimed wife killed daughters",u:"https://wfmynews2.com/article/news/crime/affidavit-man-with-nc-ties-claimed-wife-killed-daughters-then-he-killed-her/83-585969436"},
    {t:"Patch: Murder charges expected in Frederick killings",u:"https://patch.com/colorado/boulder/murder-charges-expected-killings-frederick-mother-girls"},
    {t:"CBS Colorado: Investigators learn of affair",u:"https://www.cbsnews.com/colorado/news/affidavit-chris-watts-affair-shanann"},
    {t:"ABC7 Chicago: Watts sentenced to life with no parole",u:"https://abc7chicago.com/chris-watts-sentenced-to-life-in-prison-for-killing-pregnant-wife-2-daughters/4718484/"},
    {t:"ABC7 NY: Watts gets life in prison",u:"https://abc7ny.com/man-gets-life-sentence-for-murdering-pregnant-wife-daughters/4718014/"},
    {t:"KIRO 7: Released case files",u:"https://www.kiro7.com/news/trending-now/god-almighty-son-watch-chris-watts-confess-to-murdering-pregnant-wife-shanann/881119826"},
    {t:"Wikipedia: Watts family murders",u:"https://en.wikipedia.org/wiki/Watts_family_murders"},
    {t:"AP via The Columbian: Colorado man discloses details about killing wife, daughters (2019)",u:"https://www.columbian.com/news/2019/mar/07/colorado-man-admits-killing-pregnant-wife-2-daughters/"}, {t:"Washington Times (AP): Watts admits killing pregnant wife, daughters",u:"https://www.washingtontimes.com/news/2019/mar/7/colorado-man-admits-killing-pregnant-wife-2-daught/"}, {t:"Oxygen: Timeline of the Chris Watts investigation",u:"https://www.oxygen.com/index%2Ephp/criminal-confessions/crime-news/chris-watts-murder-case-timeline"}]
});
