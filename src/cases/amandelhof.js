/* 005 · The Wedding at Amandelhof · fiction, new in 1.1 */
CASES.push({
  id:"amandelhof", no:"005", title:"The Wedding at Amandelhof", real:false, isNew:true, kind:"Single killer", place:"Franschhoek, Western Cape", when:"Saturday 7 November 2026",
  docket:"CAS 61/11/2026 · SAPS Franschhoek",
  blurb:"The best man is found at the bottom of the cellar stairs during a vineyard wedding. A drunken fall, or did someone help him down?",
  note:"Fiction. Every person and place in this case is invented, including the estate.",
  brief:`<p>Nandi Mokoena and Ethan Fortuin got married on Saturday at <b>Amandelhof</b>, a wine estate outside Franschhoek. A hundred and forty guests, a marquee on the lawn, and a band until midnight.</p>
<p>At 23:40 the estate's sommelier went down to the barrel cellar for the reserve wine for the midnight toast. At the foot of the stone stairs he found the best man, <b>Lwazi Mthembu</b>, 34, a chartered accountant and Ethan's oldest friend. Dead.</p>
<p>Half the guests think he'd had too much to drink. The pathologist isn't so sure.</p>`,
  victim:{no:"VICTIM",t:"Lwazi Mthembu, 34",s:"Best man. Died 22:45–23:10 in the barrel cellar."},
  par:8,
  stages:[
    {label:"Saturday night", intro:"The band has stopped. Guests are being held in the marquee while you look around.", start:["M1","M2"],
     leads:[
      {id:"a1",label:"Pull the cellar door's keypad log",hint:"The cellar is locked with a code after 18:00.",reveals:["M3"],result:"The estate manager prints the log from the alarm panel."},
      {id:"a2",label:"Unlock the victim's phone",hint:"His sister gives consent and the code.",reveals:["M4"],result:"His messages open up."},
      {id:"a3",label:"Take the sommelier's statement",hint:"He found the body.",reveals:["M6"],result:"Ruben Adams sits down with you in the tasting room."},
      {id:"a4",label:"Breathalyse the wedding party",hint:"How drunk was everyone?",reveals:[],result:"Everyone is drunk. It tells you nothing about who was in the cellar."}]},
    {label:"Sunday", teaser:"Footage, phones and the paperwork behind the wedding.", intro:"The newlyweds have cancelled their honeymoon flight. Everyone wants answers.", start:["M7"],
     leads:[
      {id:"a5",label:"Get the videographer's raw footage",hint:"He filmed the dance floor all night.",reveals:["M8"],result:"Four hours of wide-angle footage, timestamped."},
      {id:"a6",label:"Find out who controls the events phone",hint:"The message came from the estate's events line.",reveals:["M9"],result:"The estate's events office explains how the phone works."},
      {id:"a7",label:"Look up Cape Blooms & Décor",hint:"It was named in the victim's draft email.",reveals:["M10"],result:"A company registration search comes back."},
      {id:"a8",label:"Check the victim's money matters",hint:"Did anyone owe him?",reveals:["M11"],result:"His banking app and chats show one big loan outstanding."},
      {id:"a9",label:"Check the estate's CCTV",hint:"Maybe a camera covers the cellar.",reveals:[],result:"The only cameras face the car park. Nothing near the cellar."}]},
    {label:"Monday: warrants", teaser:"Searches and the estate manager's records.", intro:"A magistrate signs search warrants for two vehicles and a hotel room.", start:[],
     leads:[
      {id:"a10",label:"Search the planner's car",hint:"She drove her own car to the venue.",reveals:["M12"],result:"Her boot is full of décor boxes, and something else."},
      {id:"a11",label:"Search Jade's hotel room",hint:"Her earring was found near the body.",reveals:[],result:"The matching earring is in her jewellery pouch. Nothing else of interest."},
      {id:"a12",label:"Interview the estate manager again",hint:"Did anyone ask unusual questions before the wedding?",reveals:["M13"],result:"She remembers a phone call on Thursday."}]}
  ],
  evidence:{
    M1:{no:"01",cat:"Scene",title:"Scene report",short:"Lwazi at the foot of the cellar stairs. A broken heel tip on step six.",meta:"Sgt. P. Daniels · Amandelhof barrel cellar",
      body:`<p>The deceased, <b>Lwazi Mthembu (34)</b>, lay at the foot of the 14 stone steps leading down to the barrel cellar. Head injury consistent with a fall. His phone was in his jacket pocket.</p>
<p>The cellar door at the top of the stairs opens only with a keypad code after 18:00.</p>
<p>Recovered: a <b>black stiletto heel tip</b> wedged against step six, and a <b>pearl earring</b> on the floor near the barrel racks.</p>`},
    M2:{no:"02",cat:"Forensic",title:"Post-mortem summary",short:"Died 22:45–23:10. Fresh bruises on both upper arms.",meta:"Dr L. Hendricks · Forensic Pathology, Paarl",
      body:`<p>Cause of death: skull fracture consistent with a <b>fall down the stairs</b>.</p>
<p>Estimated time of death: <b>22:45 to 23:10</b>.</p>
<p>Fresh <b>bruising on both upper arms</b>, consistent with being gripped or shoved shortly before death. Blood alcohol was moderate: about two or three drinks.</p>`,
      events:[{t:"22:45",x:"Earliest estimated time of death"},{t:"23:10",x:"Latest estimated time of death"}]},
    M3:{no:"03",cat:"Records",title:"Cellar keypad log",short:"Three entries after 18:00, one under the events code.",meta:"Amandelhof alarm panel",
      body:`<div class="doc">20:31  SOMMELIER   (R. Adams)
22:44  EVENTS      (code issued for this weekend's wedding)
23:37  SOMMELIER   (R. Adams)</div>
<p>The panel logs who opens the door, not who walks through it.</p>`,
      events:[{t:"20:31",x:"Cellar opened with the sommelier's code"},{t:"22:44",x:"Cellar opened with the EVENTS code"},{t:"23:37",x:"Cellar opened with the sommelier's code"}]},
    M4:{no:"04",cat:"Digital",title:"The victim's messages",short:"22:39: 'Cellar, 5 min.' from the estate's events line.",meta:"Lwazi Mthembu's phone",
      body:`<div class="doc">22:39  Amandelhof Weddings (events line):
       Cellar, 5 min. Let's sort this out quietly
       before anyone else sees.
22:40  Lwazi: Fine. Bring the real invoices.</div>
<p>There's also an unsent email draft, saved at 18:02.</p>`,
      reveals:["M5"],events:[{t:"22:39",x:"Lwazi is summoned to the cellar by the events line"}]},
    M5:{no:"05",cat:"Digital",title:"Draft email to the groom",short:"'Don't pay the final R120k.'",meta:"Unsent draft · To: Ethan · Saved 18:02",
      body:`<div class="doc">Bro, don't pay the final R120k. The "Cape Blooms &
Décor" invoice is wrong. The company was registered three
weeks ago and the director is A. du Plessis. Your planner.

I'll talk to her quietly tonight. Enjoy your day.
L.</div>`,events:[{t:"18:02",x:"Lwazi drafts a warning to the groom about an invoice"}]},
    M6:{no:"06",cat:"Witness",title:"The sommelier's statement",short:"He let Jade into the cellar at 20:30. He found Lwazi at 23:37.",meta:"Ruben Adams, 41",
      body:`<div class="doc">At half eight I found Jade crying by the cellar door.
I let her in so she could be alone, sat with her ten
minutes, and walked her back up. I didn't let anyone
else in. At 23:37 I went down for the reserve for the
toast and found Lwazi. I phoned the manager at 23:39.</div>`,
      events:[{t:"20:45",x:"Ruben walks Jade back up from the cellar"},{t:"23:39",x:"Ruben phones the estate manager"}]},
    M7:{no:"07",cat:"Witness",title:"The earring",short:"The pearl earring is Jade's. She says she lost it at 20:30.",meta:"Shown to guests on Sunday",
      body:`<p>Several guests identify the pearl earring as <b>Jade Petersen's</b>. Jade says she noticed it was missing when she got back to the marquee at about 20:45.</p>
<p>Earlier that night, at 21:15, Jade and Lwazi argued loudly by the bar. Guests heard him tell her to leave Ethan alone on his wedding day.</p>`,
      events:[{t:"21:15",x:"Jade and Lwazi argue at the bar"}]},
    M8:{no:"08",cat:"Digital",title:"Videographer's footage",short:"Karabo dances all night. The planner vanishes 22:41–23:04.",meta:"Wide shot of the marquee and dance floor",
      body:`<div class="doc">22:30-23:20  Karabo Mokoena on the dance floor, in frame
             throughout (bar run 22:58-23:01, still visible)
22:38        Annelie du Plessis by the cake table, on her phone
22:41        Annelie leaves frame through the side flap
23:04        Annelie returns, now in flat sandals
             (black heels earlier in the evening)</div>
<p>Jade isn't in this shot. The fire pit is outside the marquee.</p>`,
      events:[{t:"22:38",x:"Annelie on her phone by the cake table (video)"},{t:"22:41",x:"Annelie leaves the marquee (video)"},{t:"23:04",x:"Annelie returns in different shoes (video)"}]},
    M9:{no:"09",cat:"Records",title:"The events phone",short:"Signed out to the planner, but the office is shared.",meta:"Amandelhof events office",
      body:`<p>The estate's events WhatsApp line runs on a phone kept in the events office. On wedding days it is <b>signed out to the outside planner</b>. On Saturday it was signed out to <b>Annelie du Plessis</b> from 14:00.</p>
<p>The office door isn't locked during events. Several staff, including the sommelier, walk through it all night.</p>`},
    M10:{no:"10",cat:"Records",title:"Company registration",short:"Cape Blooms & Décor: three weeks old, one director.",meta:"Company registry search",
      body:`<div class="doc">CAPE BLOOMS & DÉCOR (PTY) LTD
Registered:   14 October 2026
Director:     Annelie Margaretha du Plessis
Address:      a residential address in Paarl
Trading:      no website, no premises</div>
<p>The couple's florist was a different company, which was paid separately.</p>`},
    M11:{no:"11",cat:"Digital",title:"Lwazi's loan to Karabo",short:"Karabo owed him R40,000.",meta:"WhatsApp · Lwazi to Karabo",
      body:`<div class="doc">1 Nov  Lwazi: Need that R40k back by month end,
              my bond goes up in December.
1 Nov  Karabo: I know bro. After the wedding I promise</div>
<p>Karabo Mokoena is the bride's younger brother.</p>`},
    M12:{no:"12",cat:"Scene",title:"The planner's car",short:"A black stiletto with a broken heel, in a bag in her boot.",meta:"Search warrant · Monday 09:20",
      body:`<p>In the boot of <b>Annelie du Plessis's</b> car, inside a shopping bag under the décor boxes: a pair of black stilettos. The right heel is <b>missing its tip</b>.</p>
<p>The forensic lab confirms the tip found on step six of the cellar stairs <b>matches</b> the shoe.</p>`},
    M13:{no:"13",cat:"Witness",title:"The estate manager's memory",short:"On Thursday the planner asked if the cellar has cameras.",meta:"Estate manager",
      body:`<p>The estate manager recalls a call from Annelie on Thursday about the timing of the toast. During it, Annelie asked <b>whether there were cameras in the barrel cellar</b>. There aren't.</p>`},
  },
  bands:[{from:"22:45",to:"23:10",cls:"tod",label:"Time-of-death window",needs:"M2"}],
  groups:{
    jade:{name:"Jade Petersen",init:"JP",role:"Groom's ex, 31",bio:"Dated Ethan for four years. Invited as a friend of the couple. Argued with Lwazi at the bar at 21:15.",
      claims:[
        {id:"j1",q:"Were you in the cellar?",a:"Once, at about half eight, to be alone. Ruben let me in.",truth:"supported",ev:["M6","M3"],reply:"The keypad and the sommelier both put her there at 20:31, long before Lwazi died."},
        {id:"j2",q:"Where were you after the argument?",a:"At the fire pit with my friends until after eleven.",truth:"unresolved",reply:"Her friends say she was there 'most of the night', but nobody can vouch for every minute. No evidence places her anywhere else."},
        {id:"j3",stage:1,q:"What about the earring by his body?",a:"I lost it when I was in the cellar earlier. I only noticed back at the marquee.",truth:"supported",ev:["M6"],reply:"She was in the cellar at 20:30 with Ruben, near the barrel racks where the earring was found."}]},
    karabo:{name:"Karabo Mokoena",init:"KM",role:"Bride's brother, 29",bio:"Usher at the wedding. Known for borrowing money.",
      claims:[
        {id:"kb1",q:"Did you and Lwazi have any issues?",a:"None. I don't owe Lwazi a cent.",truth:"contradicted",ev:["M11"],reply:"He owed Lwazi R40,000. It's a lie, but it doesn't make him a killer."},
        {id:"kb2",stage:1,q:"Where were you from half ten?",a:"On the dance floor until the cake. Ask anyone.",truth:"supported",ev:["M8"],reply:"The videographer has him in frame from 22:30 to 23:20."}]},
    ruben:{name:"Ruben Adams",init:"RA",role:"Estate sommelier, 41",bio:"Has the cellar code. Found the body when he went down for the toast wine.",
      claims:[
        {id:"rb1",q:"When did you find him?",a:"About twenty to twelve. I phoned the manager straight away.",truth:"supported",ev:["M3"],reply:"His code opened the door at 23:37."},
        {id:"rb2",q:"Did you let anyone else into the cellar?",a:"Only Jade, at half eight. Nobody else.",truth:"supported",ev:["M3"],reply:"His code was used only at 20:31 and 23:37. The 22:44 entry used the EVENTS code."}]},
    annelie:{name:"Annelie du Plessis",init:"AD",role:"Wedding planner, 52",bio:"Runs her own events company. Has organised weddings at Amandelhof for six years.",
      claims:[
        {id:"an1",q:"Did you know Lwazi?",a:"Barely. We'd never spoken about money or anything else.",truth:"contradicted",ev:["M4"],reply:"The events line she had signed out summoned him to the cellar, and he replied, 'Bring the real invoices.'"},
        {id:"an2",q:"Where were you between half ten and half eleven?",a:"In the marquee the whole time. A planner never leaves the room.",truth:"contradicted",ev:["M8"],reply:"She left the marquee at 22:41 and came back at 23:04."},
        {id:"an3",stage:1,q:"Who sent the 22:39 message?",a:"Anyone could have. That phone sits in an unlocked office all night.",truth:"supported",ev:["M9"],reply:"It's true that the office was open, but the phone was signed out to her, and she can't explain her 23 minutes away."},
        {id:"an4",stage:1,needs:"M5",q:"What is Cape Blooms & Décor?",a:"A supplier I've used for years. Lovely people.",truth:"contradicted",ev:["M10"],reply:"It was registered three weeks before the wedding, and she is its only director."},
        {id:"an5",stage:1,q:"Did you change your shoes during the evening?",a:"No. Same shoes all night.",truth:"contradicted",ev:["M8","M12"],reply:"The video shows heels before 22:41 and sandals after 23:04, and the broken heel was in her boot."}]}
  },
  questions:[
    {id:"who",label:"Who killed Lwazi Mthembu?",options:[{id:"jade",label:"Jade Petersen",sub:"Groom's ex"},{id:"karabo",label:"Karabo Mokoena",sub:"Bride's brother"},{id:"ruben",label:"Ruben Adams",sub:"Sommelier"},{id:"annelie",label:"Annelie du Plessis",sub:"Wedding planner"},{id:"fall",label:"Nobody. He fell.",sub:"An accident"}],answer:"annelie"},
    {id:"why",short:"Motive",label:"Why?",options:[{id:"ethan",label:"Jealousy over the groom"},{id:"debt",label:"To get out of paying back a loan"},{id:"fraud",label:"To stop him exposing a fake invoice"},{id:"wine",label:"He caught someone stealing wine"}],answer:"fraud"},
    {id:"how",short:"How he got there",label:"Why was Lwazi in the cellar?",options:[{id:"followed",label:"He followed Jade down"},{id:"lured",label:"A message from the events line called him there"},{id:"toast",label:"He went to fetch wine for the toast"}],answer:"lured"}],
  strong:["M4","M5","M8","M10","M12","M3","M13"],
  verdict:`<p><b>What really happened.</b> Annelie du Plessis had invoiced the couple R120,000 through Cape Blooms & Décor, a company she'd registered three weeks earlier. Lwazi, an accountant checking the wedding bills for his friend, spotted it that afternoon.</p>
<p>At 22:39 she messaged him from the events phone to meet in the cellar, where she knew there were no cameras. She opened the door with the events code at 22:44. When he refused to back down, she grabbed him by the arms and shoved him down the stone stairs. Her heel snapped on step six. She went back up, changed into sandals from her car and was in the marquee by 23:04.</p>
<p>Jade lost her earring in the cellar at 20:30, hours earlier. Karabo lied about his debt, but he was on the dance floor the whole time. Ruben's code was never used in the time window.</p>`,
  sources:[]
});
