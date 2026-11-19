/* 004 · The Golden State Killer · real case, reworked in 1.1 */
CASES.push({
  id:"gsk", no:"004", title:"The Golden State Killer", real:true, kind:"Serial killer", place:"California, USA", when:"1975 – 1986, solved 2018",
  docket:"Sacramento County DA · multi-county task force",
  blurb:"Break-ins, attacks and murders across California, then silence for 30 years. Follow the trail, including the wrong turns, to a name.",
  note:"Real case. 13 people were murdered and dozens more were attacked. No graphic detail. The man wrongly identified in 2017 is not named.",
  brief:`<p>In the mid-1970s, a prowler broke into homes in Visalia. Then a night-time attacker terrorised the Sacramento area. Then, from 1979, couples were murdered in their homes in Southern California. The last known killing was in <b>1986</b>, and then the trail went cold.</p>
<p>For decades, police in different regions chased what they thought were different men under different names: the Visalia Ransacker, the East Area Rapist, the Original Night Stalker.</p>
<p>Follow the evidence forward in time. Is this one man? And what finally gave him a name?</p>`,
  victim:{no:"IN MEMORY",t:"Victims across California",s:"13 murdered (1975–1986). Dozens of survivors."},
  par:6,
  stages:[
    {label:"1975–1986: three regions", intro:"Three police regions, three nicknames, no name.", start:["G1","G2","G3"],
     leads:[
      {id:"g1",label:"Run DNA from the Southern California scenes",hint:"It's 1999, and DNA testing has improved.",reveals:["G4"],result:"Orange County's lab reports back."},
      {id:"g2",label:"Re-interview the 1970s witnesses",hint:"Maybe someone remembers more.",reveals:[],result:"Nothing here moves the case forward."}]},
    {label:"2001–2017: a cold case", teaser:"Linking the regions, and chasing leads.", intro:"DNA can link crimes, but can it name anyone?", start:[],
     leads:[
      {id:"g3",label:"Compare the north and south DNA",hint:"Is the East Area Rapist the Night Stalker?",reveals:["G5"],result:"The profiles are compared in 2001."},
      {id:"g4",label:"Review decades of suspects",hint:"Thousands of names were checked over the years.",reveals:["G6"],result:"The task force goes back through its files."},
      {id:"g5",label:"Follow a genealogy lead to Oregon",hint:"A rare genetic marker matches a family.",reveals:["G11"],result:"A judge signs an order for a DNA sample."}]},
    {label:"2018", teaser:"A new kind of search.", intro:"A new approach: find the killer through his relatives.", start:[],
     leads:[
      {id:"g6",label:"Upload the DNA to an open genealogy site",hint:"People share DNA there to find relatives.",reveals:["G7"],result:"The site returns matches."},
      {id:"g7",label:"Build the family trees",hint:"Narrow down from distant cousins.",reveals:["G8"],result:"One man fits."},
      {id:"g8",label:"Collect DNA he throws away",hint:"You need a direct match before an arrest.",reveals:["G9"],result:"Surveillance teams wait for their chance."},
      {id:"g9",label:"Read the surveillance notes",hint:"What was he like when he didn't know he was watched?",reveals:["G10"],result:"The surveillance team's observations."}]}
  ],
  evidence:{
    G1:{no:"01",cat:"Records",title:"The Visalia Ransacker",short:"About 100 break-ins in Visalia in the mid-1970s.",meta:"Visalia, Tulare County",
      body:`<p>In the mid-1970s, a serial burglar broke into about <b>100 homes</b> in Visalia. Police there called him the Visalia Ransacker.</p><p>The case was later linked to a 1975 killing in Tulare County.</p>`,
      events:[{s:1975,t:"1975",x:"Visalia Ransacker break-ins; a killing in Tulare County"}]},
    G2:{no:"02",cat:"Records",title:"The East Area Rapist",short:"Night-time home attacks around Sacramento.",meta:"Sacramento area, 1976–1979",
      body:`<p>From 1976, a masked attacker broke into homes at night around Sacramento. When he found a couple, he would tie up the man and pile dishes on his back to warn him not to move.</p>
<p>In 1978, a young couple, <b>Brian and Katie Maggiore</b>, were killed while walking their dog in a Sacramento suburb.</p>`,
      events:[{s:1976,t:"1976",x:"East Area Rapist attacks begin around Sacramento"},{s:1978,t:"1978",x:"Brian and Katie Maggiore killed in a Sacramento suburb"}]},
    G3:{no:"03",cat:"Scene",title:"The Original Night Stalker",short:"Couples murdered in their homes in Southern California.",meta:"Orange, Ventura & Santa Barbara counties, 1979–1986",
      body:`<p>From 1979, people were killed in their homes in Southern California. In 1980, <b>Lyman and Charlene Smith</b> were killed in Ventura, and <b>Keith and Patrice Harrington</b> in Dana Point.</p>
<p>The last known killing was in <b>1986</b>: <b>Janelle Cruz</b>, 18, in Irvine. After that, nothing.</p>`,events:[{s:1980,t:"1980",x:"Smiths killed in Ventura; Harringtons killed in Dana Point"},{s:1986,t:"1986",x:"Janelle Cruz, 18, killed in Irvine. Last known crime"}]},
    G4:{no:"04",cat:"Forensic",title:"The 1999 DNA link",short:"DNA ties an Irvine murder to nine other killings.",meta:"Orange County Sheriff's homicide detectives",
      body:`<p>In <b>1999</b>, Orange County detectives used DNA to link a murder in Irvine to <b>nine other killings</b> in Orange, Ventura and Santa Barbara counties. One offender was behind the Southern California murders.</p>`,events:[{s:1999,t:"1999",x:"DNA links ten Southern California killings"}]},
    G5:{no:"05",cat:"Forensic",title:"The 2001 DNA link",short:"North and south: the same man.",meta:"DNA comparison",
      body:`<p>In <b>2001</b>, advances in DNA testing proved that the <b>East Area Rapist</b> in the north and the <b>Original Night Stalker</b> in the south were the <b>same offender</b>. The press later called him the Golden State Killer.</p>`,events:[{s:2001,t:"2001",x:"DNA proves the East Area Rapist and the Night Stalker are one man"}]},
    G6:{no:"06",cat:"Records",title:"Off the radar",short:"Decades of work, and still no name.",meta:"Task force review",
      body:`<p>Despite decades of investigation, the offender had <b>never appeared on investigators' radar</b>. They had his DNA but no one to match it to.</p>`,},
    G7:{no:"07",cat:"Forensic",title:"The genealogy search",short:"Crime-scene DNA is uploaded to a family-tree website.",meta:"Early 2018",
      body:`<p>Investigators uploaded a DNA profile from a crime scene to <b>GEDmatch</b>, a free, open genealogy website where people share DNA to trace their family. Investigators said <b>no court order was needed</b> to search it.</p>
<p>It matched <b>distant relatives</b>. From them, investigators built family trees and narrowed the candidates by <b>age, location and other characteristics</b>, until one man fitted.</p>`,events:[{s:2018.1,t:"Early 2018",x:"Crime-scene DNA is run through a genealogy site"}]},
    G8:{no:"08",cat:"Records",title:"The man in Citrus Heights",short:"A 72-year-old grandfather and former police officer.",meta:"Background check",
      body:`<p><b>Joseph James DeAngelo</b>, 72, of Citrus Heights near Sacramento. A Vietnam veteran with a criminal justice degree from Sacramento State.</p>
<p>In the 1970s he was a <b>police officer</b>, first in Exeter, about 10 miles from Visalia, where he was among officers hunting the Visalia burglar, then in Auburn from 1976 to 1979.</p>`,},
    G9:{no:"09",cat:"Forensic",title:"Discarded DNA",short:"A car door handle, then a tissue from his trash.",meta:"Surveillance, April 2018",
      body:`<p>Investigators put DeAngelo under surveillance. They swabbed the <b>door handle of his car</b> while he was in a store, which wasn't enough for an arrest.</p>
<p>Days later they collected a <b>tissue from his trash</b>. Its DNA <b>matched</b> DNA from the crime scenes.</p>`,events:[{s:2018.3,t:"Apr 2018",x:"Discarded DNA matches crime scenes"},{s:2018.31,t:"24 Apr 2018",x:"DeAngelo arrested outside his home"}]},
    G10:{no:"10",cat:"Witness",title:"Surveillance notes",short:"Sharp and active, until the arrest.",meta:"Prosecutors, 2020",
      body:`<p>Prosecutors said that under surveillance DeAngelo appeared <b>sharp and vigorous</b>. After his arrest he appeared feeble and confused, and later used a wheelchair in court. Prosecutors argued this was <b>an act</b>.</p>
<p>Left alone in an interview room after arrest, he was recorded saying he had done "all those things".</p>`},
    G11:{no:"11",cat:"Records",title:"The wrong man, 2017",short:"A genealogy lead pointed to an elderly man in Oregon. It wasn't him.",meta:"Court records reported by AP, April 2018",
      body:`<p>In <b>March 2017</b>, a rare genetic marker from the killer's DNA was entered into an older genealogy site and matched a family in Oregon. At California investigators' request, a judge ordered a <b>73-year-old man in a nursing home</b> to give a DNA sample.</p>
<p>He was <b>not the killer</b>. His family only learned of it later. The lead was a dead end, and it raised hard questions about privacy.</p>`,
      events:[{s:2017.2,t:"Mar 2017",x:"A genealogy lead points to the wrong man in Oregon"}]}
  },
  bands:[],
  groups:{
    inv:{name:"Investigators",init:"INV",role:"Task forces, 1970s–2017",bio:"How the case looked to the people chasing it at different times.",
      claims:[
        {id:"c1",q:"Is this one offender?",a:"The East Area Rapist up north and the Night Stalker down south are two different men.",truth:"contradicted",ev:["G5"],reply:"DNA in 2001 proved they were the same person."},
        {id:"c2",stage:1,needs:"G11",q:"Has genealogy found him?",a:"The 2017 genetic match points to our man in Oregon.",truth:"contradicted",ev:["G11"],reply:"The man in Oregon was not the killer. It was a dead end."}]},
    assume:{name:"Common assumptions",init:"?",role:"About genealogy searches",bio:"Misunderstandings many people had when the arrest was announced.",
      claims:[
        {id:"c3",stage:2,q:"What did the genealogy hit mean?",a:"The killer's own DNA must have been on the genealogy site.",truth:"contradicted",ev:["G7"],reply:"Only distant relatives were on the site. Investigators had to build family trees to find him."},
        {id:"c4",stage:2,q:"Did police need a warrant to search the site?",a:"They must have needed a court order to search it.",truth:"contradicted",ev:["G7"],reply:"Investigators said no court order was needed to search GEDmatch, which is part of why the case sparked a privacy debate."}]},
    jd:{name:"Joseph DeAngelo",init:"JD",role:"After his arrest",bio:"How DeAngelo presented after he was arrested.",
      claims:[
        {id:"c5",stage:2,needs:"G9",q:"Could he have done it?",a:"He's a frail, confused old man in a wheelchair.",truth:"contradicted",ev:["G10"],reply:"Under surveillance he was sharp and active. Prosecutors said the frailty was an act."},
        {id:"c6",stage:2,needs:"G9",q:"What did he say alone in the interview room?",a:"That he had done all those things.",truth:"supported",ev:["G10"],reply:"He was recorded saying it."}]}
  },
  questions:[
    {id:"who",label:"Who was the Golden State Killer?",options:[{id:"many",label:"Two or more separate offenders"},{id:"codis",label:"One offender already in a criminal DNA database"},{id:"deangelo",label:"Joseph James DeAngelo, a former police officer"}],answer:"deangelo"},
    {id:"how",short:"What identified him",label:"What finally identified him?",options:[{id:"prints",label:"A fingerprint at a scene"},{id:"codis",label:"A hit in the criminal DNA database"},{id:"genealogy",label:"Genetic genealogy, then DNA from something he threw away"},{id:"tip",label:"A tip from the public"}],answer:"genealogy"}],
  strong:["G5","G7","G9","G4","G8"],
  verdict:`<p>Joseph James DeAngelo was arrested on <b>24 April 2018</b>, more than 30 years after the last known killing.</p>
<p>On <b>29 June 2020</b>, aged 74, he pleaded guilty to <b>13 murders</b> and 13 rape-related charges, and admitted dozens more attacks that were too old to prosecute. On <b>21 August 2020</b> he was sentenced to <b>life in prison without parole</b>. The plea deal avoided the death penalty.</p>
<p>The case changed policing. Since his arrest, genetic genealogy has been used to identify more than 150 suspects in other cases (by 2020).</p>`,
  memorial:"Among the 13 murdered: Brian & Katie Maggiore · Lyman & Charlene Smith · Keith & Patrice Harrington · Janelle Cruz · and every survivor.",
  sources:[
    {t:"Fox6: DNA from genealogy sites led to break in case",u:"https://fox6now.com/news/dna-from-genealogy-sites-led-to-break-in-golden-state-killer-case-da-says"},
    {t:"Good Morning America: How DNA from family members helped",u:"https://goodmorningamerica.com/news/story/dna-family-members-helped-solved-golden-state-killer-54800093"},
    {t:"CBS: DNA from tissue in trash led to arrest",u:"https://www.cbsnews.com/amp/news/dna-from-tissue-in-trash-led-to-arrest-in-golden-state-killer-case-records-show"},
    {t:"ABC30: Genealogical websites used to find DNA match",u:"https://abc30.com/amp/post/genealogical-websites-used-to-find-dna-match-for-suspected-serial-killer/3390647/"},
    {t:"ABC7: DeAngelo admits to dozens of rapes, murders",u:"https://abc7.com/golden-state-killer-plea-deal-trial-when-was-the-caught-who-is/6280795/"},
    {t:"ABC7 News: Case timeline",u:"https://abc7news.com/7515045/"},
    {t:"ABC7: Golden State Killer sentenced to life",u:"https://abc7.com/golden-state-killer-sentencing-sacramento-joseph-deangelo-hearing/6381911/"},
    {t:"ABC11: Former cop pleads guilty",u:"https://abc11.com/post/golden-state-killer-former-cop-pleads-guilty-to-murders-rapes/6249433/"},
    {t:"AP via KTVU: Search for Golden State Killer led to wrong man in 2017",u:"https://ktvu.com/news/search-for-golden-state-killer-led-to-wrong-man-in-2017"}, {t:"AP via KUTV: Golden State Killer hunt once led to wrong man",u:"https://kutv.com/news/nation-world/golden-state-killer-hunt-once-led-to-wrong-man"}]
});
