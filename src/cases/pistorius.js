/* 007 · The Bathroom Door · real case, new in 1.1 */
CASES.push({
  id:"pistorius", no:"007", title:"The Bathroom Door", real:true, isNew:true, kind:"Single killer", place:"Pretoria, Gauteng", when:"Thursday 14 February 2013",
  docket:"North Gauteng High Court · Supreme Court of Appeal",
  blurb:"Everyone knows who fired the shots. The question that went all the way to the appeal court was what the law should call it.",
  note:"Real case. Reeva Steenkamp was killed. No graphic detail. The claims include the defence's case as it was argued in court.",
  brief:`<p>In the early hours of Valentine's Day 2013, Paralympic champion <b>Oscar Pistorius</b> fired four shots through the locked door of a toilet cubicle in his home on a secure estate in Pretoria. His girlfriend, <b>Reeva Steenkamp</b>, a model and law graduate, was behind it. She died at the scene.</p>
<p>He has never denied firing. He says he believed an intruder was in the toilet. The prosecution said the couple had argued and he knew it was her.</p>
<p>This case isn't about <i>who</i>. It's about what can be proven about <i>why</i>, and what the law makes of it. Expect several claims that can't be settled.</p>`,
  victim:{no:"IN MEMORY",t:"Reeva Steenkamp",s:"Model and law graduate. Killed 14 Feb 2013."},
  par:6,
  stages:[
    {label:"Thursday 14 February 2013", intro:"Police arrive at the house before dawn. The door, the pistol and the cricket bat are taken as evidence.", start:["P1","P2","P3"],
     leads:[
      {id:"p1",label:"Take statements from the neighbours",hint:"Several houses heard something in the night.",reveals:["P4"],result:"Neighbours describe what they heard after 3 a.m."},
      {id:"p2",label:"Check the estate gate records",hint:"Did anyone come or go?",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"Forensics", teaser:"The body, the door, the bat and the bullets.", intro:"The experts start working through the physical evidence. Expect the defence to challenge all of it.", start:[],
     leads:[
      {id:"p3",label:"Read the post-mortem",hint:"What can the body tell you about the night?",reveals:["P5"],result:"The State pathologist reports, and the defence pushes back."},
      {id:"p4",label:"Examine the cricket bat marks",hint:"When, and how, did he break the door?",reveals:["P6"],result:"A police forensic expert re-enacts the blows."},
      {id:"p5",label:"Reconstruct the shooting",hint:"Angles, heights and the ammunition.",reveals:["P7"],result:"The State's ballistics expert uses rods and lasers on the door."},
      {id:"p6",label:"Go through their phones",hint:"What was the relationship like?",reveals:["P8"],result:"Thousands of WhatsApp messages are read into the record."}]},
    {label:"The courts (2014–2017)", teaser:"A trial, an appeal and two sentences.", intro:"The trial judge gives her verdict in September 2014. The State appeals.", start:["P9"],
     leads:[
      {id:"p7",label:"Read the appeal court judgment",hint:"December 2015, Bloemfontein.",reveals:["P10"],result:"The Supreme Court of Appeal delivers a unanimous judgment."}]}
  ],
  evidence:{
    P1:{no:"01",cat:"Scene",title:"What happened",short:"Four shots through a locked toilet door, shortly after 3 a.m.",meta:"Undisputed facts",
      body:`<p>Shortly after <b>3 a.m. on 14 February 2013</b>, Oscar Pistorius fired his 9mm pistol <b>four times</b> through the locked door of the toilet cubicle in his bathroom. Reeva Steenkamp was inside.</p>
<p>He then broke the door open with a <b>cricket bat</b>, found her seriously wounded and carried her downstairs. She died at the scene. He was charged with murder the next day.</p>`,
      events:[{s:180,t:"After 03:00",x:"Four shots are fired through the toilet door"}]},
    P2:{no:"02",cat:"Forensic",title:"The door",short:"Four bullet holes, and dents from a cricket bat.",meta:"Exhibit, removed from the house",
      body:`<p>The toilet door was removed from the house and later displayed in court. It has <b>four bullet holes</b> at roughly hip-to-waist height, and dents and cracks from the <b>cricket bat</b> he used to break it open.</p>
<p>The cubicle behind it is small. There was nowhere for anyone inside to get out of the line of fire.</p>`},
    P3:{no:"03",cat:"Witness",title:"His account",short:"He heard a noise, believed an intruder was in the toilet, and fired.",meta:"Bail statement and testimony",
      body:`<p>Pistorius said they'd gone to bed early. In the night he heard a noise from the bathroom and believed an <b>intruder</b> had got in. Without his prosthetic legs, he took his pistol, went towards the bathroom and <b>fired four shots</b> at the toilet door.</p>
<p>He said only when he went back and found the bed empty did he realise Reeva might be inside. He put on his prosthetic legs and broke the door down with a cricket bat.</p>`},
    P4:{no:"04",cat:"Witness",title:"The neighbours",short:"A woman's screams, then shots, said one. The defence disagreed.",meta:"State witnesses, March 2014",
      body:`<p>A neighbour living about <b>177 metres</b> away testified she heard a <b>woman screaming</b>, a man shouting for help, and then four shots. Another neighbour heard voices around 2 a.m. and bangs around 3 a.m., but admitted she couldn't make out the words.</p>
<p>The defence said the distance was too great to hear clearly, that some of the "shots" were the cricket bat hitting the door, and that the screams were <b>Pistorius himself</b>.</p>`},
    P5:{no:"05",cat:"Forensic",title:"The post-mortem",short:"She'd probably eaten about two hours before she died. Disputed.",meta:"State pathologist; defence expert",
      body:`<p>The State pathologist testified that Reeva had probably <b>eaten about two hours before her death</b>, around 1 a.m. That sits badly with the couple being asleep since about 10 p.m. He also said she could have gone to the toilet any time in the hour before she died.</p>
<p>He accepted he wasn't an expert in how fast stomachs empty. A defence expert testified that <b>gastric emptying is too unreliable</b> to time a meal like that.</p>`},
    P6:{no:"06",cat:"Forensic",title:"The bat marks",short:"Bullets hit the door before the bat. But were his legs on?",meta:"Police forensic expert, March 2014",
      body:`<p>A police forensic expert confirmed the <b>bullets struck the door before the cricket bat did</b>, which matches Pistorius's account.</p>
<p>But he testified the bat marks were so low they were consistent with Pistorius being <b>on his stumps</b> when he swung it, not wearing his prosthetic legs as he claimed. The defence challenged this in cross-examination.</p>`},
    P7:{no:"07",cat:"Forensic",title:"The ballistics",short:"Fired from about 1.5 m away, on his stumps. Expanding ammunition.",meta:"State ballistics expert",
      body:`<p>Using rods and a laser, the State's ballistics expert found the angles fitted Pistorius <b>firing while on his stumps</b>, about one and a half metres from the door. That matched his own account.</p>
<p>The first shot struck Reeva in the hip while she was standing. The expert said the ammunition was an <b>expanding type designed to cause maximum damage</b>. A defence expert disputed the exact type of bullet.</p>`},
    P8:{no:"08",cat:"Digital",title:"The messages",short:"'I'm scared of you sometimes.'",meta:"WhatsApp messages read in court",
      body:`<p>Many of the couple's messages were affectionate. But in one, Reeva wrote that she was <b>"scared of you sometimes"</b> and of how he would snap at her.</p>
<p>The prosecution used messages like this to suggest a volatile relationship.</p>`},
    P9:{no:"09",cat:"Records",title:"The trial verdict, 2014",short:"Not murder. Culpable homicide. Five years.",meta:"Judge Thokozile Masipa, North Gauteng High Court",
      body:`<p>Judge Masipa found the State <b>had not proved</b> that Pistorius knew Reeva was behind the door or that he intended to kill her.</p>
<p>On the neighbours, she found that <b>some sounds they took for gunshots were actually the cricket bat</b>, and that the screams they heard came <b>after the shots</b>. She said the contradictions didn't mean the neighbours were lying.</p>
<p>She convicted him of <b>culpable homicide</b>, killing through negligence, and sentenced him to five years.</p>`,
      events:[{s:20140912,t:"Sep 2014",x:"Trial court: culpable homicide"},{s:20141021,t:"Oct 2014",x:"Sentenced to five years"}]},
    P10:{no:"10",cat:"Records",title:"The appeal judgment, 2015",short:"Murder: he must have foreseen that whoever was inside could die.",meta:"Supreme Court of Appeal, 3 December 2015",
      body:`<p>The State appealed. A unanimous Supreme Court of Appeal <b>overturned the culpable homicide verdict and convicted him of murder</b>.</p>
<p>It applied <i>dolus eventualis</i>: by firing four shots into a small, locked cubicle, he <b>must have foreseen that whoever was behind the door could be killed</b>, and fired anyway. That makes it murder <b>regardless of who he thought was inside</b>. The court found his evidence "vacillating and untruthful" and said he never gave an acceptable explanation for firing four times.</p>`,
      events:[{s:20151203,t:"3 Dec 2015",x:"Appeal court convicts him of murder"}]},
  },
  bands:[],
  groups:{
    oscar:{name:"Oscar Pistorius",init:"OP",role:"Accused · his account",bio:"Olympic and Paralympic sprinter. His version, from his bail statement and testimony.",
      claims:[
        {id:"o1",q:"Why did you fire?",a:"I believed there was an intruder in the toilet.",truth:"unresolved",reply:"No court found it proven that he knew Reeva was behind the door. The appeal court convicted him of murder without needing to decide this."},
        {id:"o2",stage:1,q:"Were you wearing your prosthetic legs when you fired?",a:"No. I was on my stumps.",truth:"supported",ev:["P7"],reply:"The State's own ballistics expert agreed."},
        {id:"o3",stage:1,q:"In what order did things happen?",a:"I fired first, then broke the door down with the bat.",truth:"supported",ev:["P6"],reply:"The police expert confirmed the bullets hit the door before the bat."},
        {id:"o4",stage:1,q:"Were you wearing your legs when you used the bat?",a:"Yes. I put them on before I broke the door.",truth:"unresolved",reply:"The police expert said the low marks suggested he was on his stumps, but the defence disputed it. It stayed contested."},
        {id:"o5",stage:1,q:"Were you both asleep before the shooting?",a:"We'd gone to bed at about ten and were asleep.",truth:"unresolved",reply:"Her stomach contents suggested she'd eaten around 1 a.m., but the defence's expert said that method can't time a meal. Not proven either way."},
        {id:"o6",stage:2,q:"Did you mean to kill anyone?",a:"No. I never intended to kill anyone.",truth:"contradicted",ev:["P10"],reply:"The appeal court held that firing four expanding rounds into a tiny locked cubicle meant he foresaw death and accepted it. In law, that is intent."}]},
    neighbour:{name:"The neighbours",init:"NB",role:"State witnesses",bio:"People living on the estate who heard the night's events.",
      claims:[
        {id:"nb1",stage:0,needs:"P4",q:"What did you hear, and in what order?",a:"A woman screaming, a man shouting for help, then four shots.",truth:"contradicted",ev:["P9"],reply:"The trial judge didn't doubt their honesty, but found the screams came after the shots and that some of the 'shots' were the bat."}]},
    defence:{name:"The defence",init:"DEF",role:"Pistorius's legal team",bio:"Arguments made on his behalf. Several had real support.",
      claims:[
        {id:"d1",needs:"P4",q:"Whose screams did the neighbours hear?",a:"Oscar's. A man screaming in distress can sound like a woman.",truth:"unresolved",reply:"The State's pathologist accepted Reeva could have screamed after being hit. Neither side proved whose voice it was."},
        {id:"d2",stage:2,q:"What were the bangs the neighbours heard?",a:"Some of the 'shots' they heard were really the cricket bat hitting the door.",truth:"supported",ev:["P9"],reply:"The trial judge accepted this."}]},
    state:{name:"The State",init:"NPA",role:"Prosecution",bio:"The prosecution's case at trial and on appeal.",
      claims:[
        {id:"s1",stage:1,q:"What happened before the shots?",a:"They were awake and arguing, and he knew she was in the toilet.",truth:"unresolved",reply:"This was the State's case, but no court found it proven."},
        {id:"s2",stage:1,needs:"P8",q:"What was the relationship like?",a:"Reeva had written that she was sometimes scared of him.",truth:"supported",ev:["P8"],reply:"She did write that. What it proves about that night is a separate question."}]}
  },
  questions:[
    {id:"law",label:"In law, what was the killing of Reeva Steenkamp?",options:[
      {id:"negligence",label:"Culpable homicide: he didn't foresee that anyone would die",sub:"The 2014 trial verdict"},
      {id:"direct",label:"Murder: he knew it was Reeva and meant to kill her",sub:"The State's case at trial"},
      {id:"eventualis",label:"Murder: whoever was behind the door, he must have foreseen they could die",sub:""},
      {id:"defence",label:"Not a crime: lawful self-defence",sub:""}],answer:"eventualis"},
    {id:"knew",short:"What was never proven",label:"Did any court find that he knew it was Reeva behind the door?",options:[
      {id:"trial",label:"Yes, the trial court"},{id:"sca",label:"Yes, the appeal court"},{id:"no",label:"No. The appeal court convicted him without needing to decide that"}],answer:"no"}],
  strong:["P10","P2","P7","P3","P1"],
  verdict:`<p>In <b>September 2014</b>, Judge Thokozile Masipa acquitted Pistorius of murder and convicted him of <b>culpable homicide</b>. He was sentenced to five years.</p>
<p>On <b>3 December 2015</b>, the Supreme Court of Appeal overturned that verdict and found him guilty of <b>murder</b> under <i>dolus eventualis</i>: firing four times into a small, locked cubicle, he must have foreseen that whoever was inside could die. It didn't matter whether he thought it was an intruder.</p>
<p>He was sentenced to six years in 2016. Prosecutors called that "shockingly lenient", and on <b>24 November 2017</b> the appeal court increased it to <b>13 years and five months</b>. He was released on parole in January 2024.</p>
<p>The question of whether he knew it was Reeva behind the door was never resolved by any court. It didn't need to be.</p>`,
  memorial:"Reeva Steenkamp.",
  sources:[
    {t:"A&E: Case file, Oscar Pistorius",u:"https://www.aetv.com/articles/oscar-pistorius"},
    {t:"Daily Maverick: The State's case against Oscar Pistorius (2014)",u:"https://www.dailymaverick.co.za/article/2014-03-26-the-states-case-against-oscar-pistorius.md"},
    {t:"SBS: Pistorius defence questions pathologist",u:"https://www.sbs.com.au/news/article/pistorius-defence-questions-pathologist/yds4xjo23"},
    {t:"Mail & Guardian: Pistorius was on stumps, says expert",u:"https://mg.co.za/article/2014-03-12-oscar-was-on-stumps-says-expert/"},
    {t:"The Citizen: Steenkamp shot in defensive position",u:"https://www.citizen.co.za/news/south-africa/courts/steenkamp-shot-defensive-position-oscar-trial/"},
    {t:"IOL: Witnesses got facts wrong, says Masipa",u:"https://www.iol.co.za/news/witnesses-got-facts-wrong-masipa-1749359"},
    {t:"Mail & Guardian: Pistorius convicted of murder, key questions answered",u:"https://mg.co.za/?p=69919"},
    {t:"New Statesman: Pistorius found guilty of murder on appeal",u:"https://www.newstatesman.com/?p=89720"},
    {t:"SBS: Timeline of the case",u:"https://www.sbs.com.au/news/article/timeline-oscar-pistorius-murder-of-reeva-steenkamp/rqtik9obd"}]
});
