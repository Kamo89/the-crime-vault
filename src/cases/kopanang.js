/* 006 · The Stokvel Treasurer · fiction, new in 1.1 */
CASES.push({
  id:"kopanang", no:"006", title:"The Stokvel Treasurer", real:false, isNew:true, kind:"Single killer", place:"Orlando West, Soweto", when:"Saturday 13 December 2025",
  docket:"CAS 233/12/2025 · SAPS Orlando",
  blurb:"The night before the year-end payout, the stokvel's treasurer is found dead and R186,000 is gone. Or was it ever there?",
  note:"Fiction. Every person in this case is invented.",
  brief:`<p><b>Kopanang Ladies</b> is a stokvel of 23 women in Orlando West. Every month they each put in R700. Every December the treasurer withdraws the year's savings and pays everyone out at a meeting. This year's payout was due on Sunday at 10:00: <b>R186,000</b>.</p>
<p>At 07:10 on Sunday, member Busi Zulu arrived early to help count the money. She found the treasurer, <b>Dikeledi "Mam' Dee" Mahlangu</b>, 58, dead on her kitchen floor. The house had been turned upside down and the cash tin was empty.</p>
<p>It looks like a robbery. You need to find out whether it was one.</p>`,
  victim:{no:"VICTIM",t:"Dikeledi Mahlangu, 58",s:"Stokvel treasurer. Died Sat 22:00–23:30."},
  par:7,
  stages:[
    {label:"Sunday morning", intro:"Members are gathering outside the gate, asking about their money.", start:["K1","K2"],
     leads:[
      {id:"s1",label:"Search the house properly",hint:"Look past the mess.",reveals:["K3"],result:"Her handbag is still on the bedroom chair."},
      {id:"s2",label:"Go through Dee's phone",hint:"Who did she talk to on Saturday?",reveals:["K4"],result:"Her daughter gives you the PIN."},
      {id:"s3",label:"Ask the neighbours for camera footage",hint:"Plenty of houses on the street have doorbell cameras.",reveals:["K5"],result:"The house opposite has a doorbell camera facing the street."},
      {id:"s4",label:"Dust the cash tin for fingerprints",hint:"Whoever emptied it touched it.",reveals:[],result:"It's been wiped clean. Nothing usable."}]},
    {label:"Sunday afternoon", teaser:"Money trails, alibis and a partial number plate.", intro:"The payout meeting is cancelled. The members gather in the church hall instead, and they have plenty to say.", start:["K12"],
     leads:[
      {id:"s5",label:"Look into the nephew's money",hint:"His aunt said he always asked for money.",reveals:["K6"],result:"His phone shows a sports betting app and some worrying messages."},
      {id:"s6",label:"Check where the nephew went on Saturday night",hint:"He left Dee's at 21:19.",reveals:["K7"],result:"A tavern on the next street has a camera at the till."},
      {id:"s7",label:"Get the stokvel's bank statements",hint:"Two signatories, one account.",reveals:["K8"],result:"The bank sends twelve months of statements."},
      {id:"s8",label:"Run the partial number plate",hint:"From the doorbell camera.",reveals:["K9"],result:"Only one white Polo on the system matches."},
      {id:"s9",label:"Check Busi's movements",hint:"She found the body, and she'd fought with Dee.",reveals:["K10"],result:"Her employer confirms her shift."},
      {id:"s10",label:"Talk to the nephew's loan shark",hint:"Did someone pay a debt on Saturday night?",reveals:[],result:"He says Thabo still owes him every cent. Nobody paid him anything this weekend."}]},
    {label:"Monday: warrants", teaser:"A magistrate signs a search warrant.", intro:"You have enough for one search warrant. Choose carefully.", start:[],
     leads:[
      {id:"s11",label:"Search the chairperson's home",hint:"Grace Nkosi's house in Dube.",reveals:["K11"],result:"Officers search the house with Grace present."},
      {id:"s12",label:"Search the nephew's room",hint:"Thabo lives in a backroom in Orlando East.",reveals:[],result:"Clothes, a cracked phone, and R200 in coins. No money, no ledger."}]}
  ],
  evidence:{
    K1:{no:"01",cat:"Scene",title:"Scene report",short:"Drawers out, but the TV, laptop and phone are untouched.",meta:"W/O T. Molefe · Orlando West",
      body:`<p><b>Dikeledi Mahlangu (58)</b> was found on her kitchen floor with a head injury. A heavy brass candlestick lay beside her.</p>
<p>Every drawer in the house had been pulled out. But her <b>TV, laptop and cellphone were left behind</b>. The front door wasn't forced, so she let her killer in.</p>
<p>The stokvel's <b>cash tin is empty</b>, and the <b>ledger book</b> members say she always kept on the sideboard is missing.</p>`},
    K2:{no:"02",cat:"Forensic",title:"Post-mortem summary",short:"Died Saturday between 22:00 and 23:30. No defensive wounds.",meta:"Forensic Pathology Service, Johannesburg",
      body:`<p>Cause of death: <b>blunt force trauma</b> to the head.</p><p>Estimated time of death: <b>Saturday 22:00 to 23:30</b>.</p>
<p>There are <b>no defensive wounds</b>, which suggests she wasn't expecting the blow.</p>`,
      events:[{t:"22:00",x:"Earliest estimated time of death"},{t:"23:30",x:"Latest estimated time of death"}]},
    K3:{no:"03",cat:"Scene",title:"The bank slip",short:"She withdrew R96,400, not R186,000. Balance: R0.00.",meta:"Found in Dee's handbag",
      body:`<div class="doc">Saturday 13 Dec 2025, 11:42
KOPANANG LADIES STOKVEL
Cash withdrawal ......... R96,400.00
Available balance ....... R0.00</div>
<p>The members expected <b>R186,000</b>. The account held barely half of that.</p>`,
      events:[{t:"11:42",x:"Dee withdraws R96,400, emptying the account"}]},
    K4:{no:"04",cat:"Digital",title:"Voice note to Busi",short:"'The money is short… I'm going to speak to her tonight.'",meta:"Sent Saturday 18:47",
      body:`<div class="doc">Busi, come early tomorrow, before the others. The money
is short. Almost ninety thousand short. I know who signed.
I'm going to speak to her tonight, give her a chance to
explain before the meeting.</div>`,
      events:[{t:"18:47",x:"Dee tells Busi the money is short and she'll confront 'her' tonight"}]},
    K5:{no:"05",cat:"Digital",title:"Doorbell camera opposite",short:"Thabo at 21:04. A white Polo from 22:12 to 22:51.",meta:"Neighbour's doorbell camera",
      body:`<div class="doc">21:04  Thabo (the nephew) at Dee's gate, goes in
21:19  Thabo leaves on foot, hands empty
22:12  White VW Polo parks across the road
22:14  A woman in a wide church hat goes into Dee's yard
22:49  The same woman leaves carrying a shopping bag
22:51  The Polo drives off. Partial plate: ... 84 GP</div>
<p>The hat hides her face.</p>`,
      events:[{t:"21:04",x:"Thabo arrives at Dee's gate (camera)"},{t:"21:19",x:"Thabo leaves on foot (camera)"},{t:"22:14",x:"A woman in a church hat enters Dee's yard (camera)"},{t:"22:49",x:"The woman leaves with a shopping bag (camera)"}]},
    K6:{no:"06",cat:"Digital",title:"Thabo's debts",short:"He owes a loan shark R11,000 and lost R3,000 betting on Saturday.",meta:"Thabo Mahlangu's phone",
      body:`<p>Thabo, 27, is unemployed. His betting app shows <b>R3,000 lost on Saturday afternoon</b>. Messages from a local loan shark demand <b>R11,000</b> "by Monday".</p>
<p>At 20:58 on Saturday he messaged a friend: "Going to beg my aunt one more time."</p>`,
      events:[{t:"20:58",x:"Thabo: 'Going to beg my aunt one more time'"}]},
    K7:{no:"07",cat:"Digital",title:"Tavern camera",short:"Thabo at a tavern from 21:31 until 01:10.",meta:"Tavern on the next street",
      body:`<div class="doc">21:31  Thabo arrives, buys a quart on credit
22:05  Plays pool, in frame
23:40  Still at the pool table
01:10  Leaves with two friends</div>`,
      events:[{t:"21:31",x:"Thabo arrives at the tavern (camera)"},{t:"01:10",x:"Thabo leaves the tavern (camera)"}]},
    K8:{no:"08",cat:"Records",title:"Stokvel bank statements",short:"R89,600 moved out to 'G Nkosi Catering' since March.",meta:"Twelve months of statements",
      body:`<div class="doc">MAR-NOV 2025  9 transfers to G NKOSI CATERING
              Total: R89,600.00
              Authorised on the banking app by the
              account administrator: G. Nkosi</div>
<p>Dee was a co-signatory for withdrawals at the branch but <b>was never set up on the banking app</b>, so she wouldn't have seen these until she checked the balance.</p>`},
    K9:{no:"09",cat:"Records",title:"Number plate result",short:"The white Polo is registered to Grace Nkosi.",meta:"Vehicle registration system",
      body:`<p>Only one white Volkswagen Polo registered in Gauteng matches the partial plate and the camera image: it belongs to <b>Grace Nkosi</b>, chairperson of Kopanang Ladies.</p>`},
    K10:{no:"10",cat:"Records",title:"Busi's shift",short:"Night shift at Bara, 19:00 to 07:00.",meta:"Chris Hani Baragwanath Hospital",
      body:`<p>Busisiwe Zulu, a nurse, was rostered on the <b>night shift from 19:00 on Saturday to 07:00 on Sunday</b>. The ward sign-in sheet and two colleagues confirm she didn't leave the ward.</p>
<p>She drove straight from work to Dee's, arriving at 07:10.</p>`},
    K11:{no:"11",cat:"Scene",title:"Search of Grace's home",short:"R96,000 in cash, and the burnt ledger.",meta:"Search warrant · Monday 08:30",
      body:`<p>In Grace Nkosi's wardrobe, in a church collection bag: <b>R96,000 in cash</b>, in bank-strapped bundles.</p>
<p>In the braai drum in the yard: ash and the scorched cover of a <b>Kopanang Ladies ledger book</b>. A church hat matching the one on camera hangs behind her bedroom door.</p>`},
    K12:{no:"12",cat:"Witness",title:"What the members say",short:"Dee and Busi fought in November. The year-end party is budgeted at R12,000.",meta:"Members' statements, church hall",
      body:`<p>Members say Dee and Busi had a <b>shouting match</b> at the November meeting over Busi's late contributions. Dee threatened to put her out of the stokvel, and Busi said, "You'll regret this."</p>
<p>They also say this year's <b>year-end party is budgeted at R12,000</b>, and it hasn't happened yet: it's on 20 December. Grace volunteered to arrange the catering.</p>`},
  },
  bands:[{from:"22:00",to:"23:30",cls:"tod",label:"Time-of-death window",needs:"K2"}],
  groups:{
    thabo:{name:"Thabo Mahlangu",init:"TM",role:"Nephew, 27",bio:"Dee's sister's son. Unemployed. Dee often helped him out, and the family says she'd started saying no.",
      claims:[
        {id:"t1",q:"Did you see your aunt on Saturday?",a:"No. I didn't go to Aunty's house at all.",truth:"contradicted",ev:["K5"],reply:"The camera shows him at her gate from 21:04 to 21:19."},
        {id:"t2",stage:1,needsClaim:"t1",q:"So what happened when you went there?",a:"She wouldn't give me money. She was alive when I left. I went to drink.",truth:"supported",ev:["K7"],reply:"He was at the tavern from 21:31 to 01:10, which covers the whole time-of-death window."},
        {id:"t3",stage:1,q:"Did you take anything from the house?",a:"Nothing. I swear.",truth:"unresolved",reply:"He left empty-handed on camera, and the loan shark wasn't paid. Nothing proves he took anything, but nothing proves the opposite either."}]},
    grace:{name:"Grace Nkosi",init:"GN",role:"Chairperson, 61",bio:"Founded Kopanang Ladies eleven years ago. Co-signatory on the account. Runs a small catering business.",
      claims:[
        {id:"g1",q:"When did you last see Dee?",a:"I dropped off the attendance book at about eight and went straight home.",truth:"contradicted",ev:["K9"],reply:"Her car was parked opposite Dee's house from 22:12 to 22:51."},
        {id:"g2",q:"What happened to the money?",a:"Dee withdrew the full R186,000 on Saturday. Whoever killed her took it.",truth:"contradicted",ev:["K3"],reply:"Dee withdrew R96,400. That's all there was."},
        {id:"g3",stage:1,q:"What were the transfers to G Nkosi Catering?",a:"Approved catering costs for our year-end function.",truth:"contradicted",ev:["K12"],reply:"The party is budgeted at R12,000 and hasn't happened yet. The transfers total R89,600."},
        {id:"g4",stage:1,q:"Who would want to hurt Dee?",a:"Busi had been threatening her for weeks. Everyone heard it.",truth:"supported",ev:["K12"],reply:"True, Busi did say 'You'll regret this' in November. But Busi was on a hospital ward all night."}]},
    busi:{name:"Busi Zulu",init:"BZ",role:"Member, nurse, 44",bio:"Joined the stokvel three years ago. Found the body. Had a public fight with Dee in November.",
      claims:[
        {id:"b1",q:"Where were you on Saturday night?",a:"At work. Night shift. I only got to Dee's at seven.",truth:"supported",ev:["K10"],reply:"The hospital roster, sign-in sheet and colleagues all confirm it."},
        {id:"b2",q:"Did Dee tell you anything?",a:"That money was missing and she knew who signed. She didn't say who.",truth:"supported",ev:["K4"],reply:"The voice note says exactly that, and that she'd 'speak to her tonight'."},
        {id:"b3",q:"What about your fight with her?",a:"We made peace weeks ago. That's why she trusted me to come early.",truth:"unresolved",reply:"Nobody else saw them make up. Asking her to come early suggests trust, but proves nothing."}]},
    neighbour:{name:"Mr Moloi",init:"NM",role:"Neighbour next door, 70",bio:"Has lived next to Dee for thirty years. Lives next door. The doorbell camera belongs to the house opposite.",
      claims:[
        {id:"nm1",q:"Did you hear anything?",a:"A woman's voice, raised, at about half past ten. Then nothing.",truth:"unresolved",reply:"It fits the time Grace was inside, but he can't say whose voice it was."}]}
  },
  questions:[
    {id:"who",label:"Who killed Dikeledi Mahlangu?",options:[{id:"thabo",label:"Thabo Mahlangu",sub:"Nephew"},{id:"grace",label:"Grace Nkosi",sub:"Chairperson"},{id:"busi",label:"Busi Zulu",sub:"Member"},{id:"robbers",label:"Robbers who knew about the cash",sub:"Strangers"}],answer:"grace"},
    {id:"money",short:"The money",label:"What happened to the R186,000?",options:[{id:"thabo",label:"Thabo took it"},{id:"robbers",label:"Robbers took it all"},{id:"moved",label:"Only R96,400 was left. The rest had been moved out over months."},{id:"hidden",label:"Dee hid it somewhere in the house"}],answer:"moved"}],
  strong:["K3","K4","K8","K9","K11","K5"],
  verdict:`<p><b>What really happened.</b> Since March, Grace Nkosi had been moving stokvel money into her own catering business through the banking app, which Dee wasn't set up on: R89,600 in nine transfers.</p>
<p>On Saturday morning Dee went to withdraw the payout and found only R96,400. That evening she told Busi she knew who had signed and would "speak to her tonight". Grace arrived at 22:12 wearing a wide church hat. Dee let her in. When Dee said she'd tell the members on Sunday, Grace struck her with the candlestick, emptied the cash tin, took the ledger and pulled out the drawers to make it look like a robbery.</p>
<p>Thabo lied about visiting, but he left with nothing at 21:19 and was at the tavern all night. Busi was on a hospital ward.</p>`,
  sources:[]
});
