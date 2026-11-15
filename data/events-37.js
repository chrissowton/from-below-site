window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ BHOPAL */
{
  id: "bhopal",
  title: "The Bhopal Gas Disaster and the Survivors' Movement",
  place: "Bhopal, Madhya Pradesh, India",
  date: "3 December 1984 – present",
  year: 1984, lat: 23.28, lon: 77.41, theme: "earth",
  teaser: "A gas leak from a US-owned pesticide factory poisoned more than half a million people in one night. For four decades, survivors — many of them poor women — have campaigned for justice, medical care and a clean-up.",
  hero: "bhopalFactory",
  background: `
<p>Union Carbide India Limited (UCIL), majority-owned by the US company Union Carbide Corporation (UCC), opened a factory in Bhopal in 1969 to make the pesticide Sevin. It used methyl isocyanate (MIC), a highly toxic gas.[1]</p>
<ul>
  <li>The factory stood next to crowded, poor neighbourhoods.[1]</li>
  <li>Safety systems had been allowed to decline, and there had been earlier leaks and warnings.[2]</li>
</ul>`,
  people: [
    { n: "Rashida Bee and Champa Devi Shukla", r: "Survivors and union organisers who led campaigns for justice; awarded the Goldman Environmental Prize in 2004." },
    { n: "Satinath Sarangi", r: "An engineer and activist who helped found the Sambhavna clinic for survivors." },
    { n: "Warren Anderson", r: "Chief executive of Union Carbide, who was briefly arrested in India in 1984 and never stood trial; he died in 2014." },
    { n: "Abdul Jabbar", r: "A survivor who led the Bhopal Gas Peedit Mahila Udyog Sangathan for decades; he died in 2019." }
  ],
  happened: `
<p>On the night of 2–3 December 1984, water entered a tank of MIC, causing a reaction that released a cloud of gas over the city. More than 500,000 people were exposed.[1]</p>
<ul>
  <li>The gas is heavier than air and settled close to the ground. Children, who were shorter, inhaled higher concentrations.[1]</li>
  <li>Hospital staff had no information about the gas and no antidote. Thousands of people were dead by the morning.[1]</li>
  <li>The official number of immediate deaths is 2,259. Other estimates put the number who died from gas-related illnesses at 8,000 or more, and some campaigners give much higher figures.[1]</li>
  <li>A government affidavit in 2006 counted about 558,000 injuries.[1]</li>
</ul>
<h3>The survivors' movement</h3>
<p>Survivors, many of them women from poor neighbourhoods, organised to demand compensation, medical care and justice. They held sit-ins, marches and hunger strikes, including long marches to Delhi.[2]</p>`,
  gallery: ["bhopalMemorial", "bhopalStatue"],
  sources: [
    ["Wikipedia, 'Bhopal disaster', on the factory, the leak, the death and injury estimates, the 1989 settlement, Dow, and the criminal cases.", "https://en.wikipedia.org/wiki/Bhopal_disaster"],
    ["Suroopa Mukherjee, <em>Surviving Bhopal: Dancing Bodies, Written Texts, and Oral Testimonials of Women in the Wake of an Industrial Disaster</em> (Palgrave Macmillan, 2010).", ""],
    ["Environmental Justice Atlas (EJAtlas), entries on the Bhopal disaster and its aftermath.", "https://ejatlas.org"]
  ],
  next: `
<ul>
  <li><strong>Settlement:</strong> in 1989, Union Carbide paid $470 million in a settlement agreed with the Indian government. Survivors' groups argued it was far too little.[1]</li>
  <li><strong>Dow:</strong> Dow Chemical bought Union Carbide in 2001, and denies responsibility for the disaster.[1]</li>
  <li><strong>Convictions:</strong> in 2010, seven former UCIL employees were convicted of causing death by negligence and sentenced to two years' imprisonment.[1]</li>
  <li><strong>Contamination:</strong> chemical waste at the site has polluted groundwater. In 2025, hundreds of tonnes of waste were removed for incineration, after decades of campaigning.</li>
</ul>`,
  why: `
<p>Bhopal is often called the world's worst industrial disaster. It raised lasting questions about the responsibility of multinational companies for harm done in poorer countries.</p>
<ul>
  <li>The survivors' movement shows how ordinary people, especially women, organised after disaster.</li>
  <li>It helped shape environmental and corporate accountability law in India.</li>
</ul>`,
  questions: [
    "Who was responsible for the Bhopal disaster?",
    "Why do estimates of the number of deaths vary so much?",
    "Was the 1989 settlement fair?",
    "Why did women lead so much of the survivors' movement?"
  ],
  debates: `
<h3>At the time</h3>
<p>Union Carbide suggested the leak may have been caused by sabotage by a disgruntled employee. Survivors and the Indian government blamed poor safety and cost-cutting.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Death toll:</strong> official figures and campaigners' estimates differ widely.[1]</li>
  <li><strong>Responsibility:</strong> US courts sent cases back to India, treating UCIL as an Indian company; critics argue the parent company controlled safety.[1]</li>
  <li><strong>The Indian state:</strong> critics also blame Indian authorities for allowing the factory near homes and for the settlement.[2]</li>
</ul>`,
  evidence: `
<ul>
  <li>Medical records and research by the Indian Council of Medical Research.</li>
  <li>Court documents from India and the United States.</li>
  <li>Survivors' testimonies.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>Survivors mark the anniversary every year on 3 December, burning effigies of company executives.</li>
  <li>A memorial statue stands near the factory site.</li>
  <li>The Remember Bhopal Museum opened in 2014.</li>
</ul>`,
  similar: [
    { id: "minamata" }, { id: "ogoni" }, { id: "chipko" }
  ],
  more: [
    ["read", "Suroopa Mukherjee — <em>Surviving Bhopal</em> (2010)", ""],
    ["online", "Wikipedia: Bhopal disaster", "https://en.wikipedia.org/wiki/Bhopal_disaster"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"],
    ["visit", "Remember Bhopal Museum", ""]
  ]
},
/* ------------------------------------------------------------------ NARMADA */
{
  id: "narmada",
  title: "Narmada Bachao Andolan — Save the Narmada",
  place: "The Narmada valley, Gujarat, Madhya Pradesh and Maharashtra, India",
  date: "1985 – present",
  year: 1989, lat: 21.83, lon: 73.75, theme: "earth",
  teaser: "A movement of Adivasi villagers, farmers and activists challenged one of the world's largest dam projects, forcing the World Bank to withdraw and asking who pays the price of 'development'.",
  hero: "sardarSarovar",
  background: `
<p>India planned a vast system of dams on the Narmada River, including 30 major dams. The largest, the Sardar Sarovar Dam in Gujarat, was meant to bring water and electricity to drought-prone regions.[1]</p>
<ul>
  <li>The dams would flood the lands of tens of thousands of families, many of them Adivasi (indigenous) people.[1]</li>
  <li>The World Bank agreed to lend money for the Sardar Sarovar project in 1985.[1]</li>
</ul>`,
  people: [
    { n: "Medha Patkar", r: "A social scientist who left her doctoral studies to found and lead the movement.", img: "medhaPatkar" },
    { n: "Baba Amte", r: "A veteran social reformer who moved to the Narmada valley to support the movement." },
    { n: "Adivasi villagers of the valley", r: "Whose lands and villages faced submergence." },
    { n: "Arundhati Roy", r: "A novelist who wrote in support of the movement and was jailed briefly for contempt of court in 2002." }
  ],
  happened: `
<p>In 1985, Medha Patkar visited the dam area and found that displaced people were being compensated only for standing crops, not for the loss of their land and homes.[1]</p>
<ul>
  <li>She organised the people of the valley, and the Narmada Bachao Andolan (NBA) was formed.[1]</li>
  <li>The movement used court cases, rallies, marches and hunger strikes.[1]</li>
  <li>A 36-day march through the valley was stopped by police, who arrested marchers.[1]</li>
  <li>Villagers vowed to drown rather than leave as the waters rose (the "jal samarpan").[2]</li>
  <li>Under pressure, the World Bank commissioned an independent review, the Morse Report, which was highly critical. The Bank withdrew from the project in 1993.[2]</li>
  <li>The NBA, with Medha Patkar and Baba Amte, received the Right Livelihood Award in 1991.[1]</li>
</ul>`,
  gallery: ["nbaDharna"],
  sources: [
    ["Wikipedia, 'Narmada Bachao Andolan', on the dams, Patkar's role, compensation, the methods of the campaign and the Right Livelihood Award.", "https://en.wikipedia.org/wiki/Narmada_Bachao_Andolan"],
    ["Sanjay Sangvai, <em>The River and Life: People's Struggle in the Narmada Valley</em> (Earthcare Books, 2000).", ""],
    ["Environmental Justice Atlas (EJAtlas), entries on the Narmada dams.", "https://ejatlas.org"]
  ],
  next: `
<ul>
  <li><strong>The Supreme Court:</strong> in 2000, India's Supreme Court allowed construction to continue, subject to resettlement conditions.</li>
  <li><strong>Completion:</strong> the Sardar Sarovar Dam was completed and inaugurated in 2017.</li>
  <li><strong>Resettlement:</strong> the movement continues to campaign for the rights of displaced people, many of whom say they have not been properly resettled.</li>
</ul>`,
  why: `
<p>The Narmada struggle became a global symbol of resistance to large dams and to development that displaces the poor.</p>
<ul>
  <li>It forced the World Bank to rethink its lending for big dams.</li>
  <li>It contributed to the World Commission on Dams (1998–2000).</li>
</ul>`,
  questions: [
    "Who benefits from big dams, and who pays the cost?",
    "Why did the World Bank withdraw?",
    "Was the movement a success or a failure?",
    "How should governments balance the needs of different communities?"
  ],
  debates: `
<h3>At the time</h3>
<p>Supporters of the dam, including the Gujarat government, argued that it would bring drinking water and irrigation to millions in drought-prone areas. The NBA argued the costs were hidden and the displaced ignored.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Development:</strong> the dam now supplies water to many towns and villages in Gujarat; critics argue the benefits are smaller than promised and the costs fell on the poorest.</li>
  <li><strong>Numbers displaced:</strong> estimates vary widely depending on who is counted.[2]</li>
  <li><strong>Non-violence:</strong> the movement was committed to non-violence; it faced arrests and police force.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>The Morse Report (1992).</li>
  <li>Court records of the Supreme Court cases.</li>
  <li>Films such as Anand Patwardhan's <em>A Narmada Diary</em> (1995).</li>
</ul>`,
  memory: `
<ul>
  <li>Arundhati Roy's essay "The Greater Common Good" (1999) brought the struggle international attention.</li>
</ul>`,
  similar: [
    { id: "chipko" }, { id: "sanrizuka" }, { id: "aguazarca" }
  ],
  more: [
    ["watch", "Anand Patwardhan — <em>A Narmada Diary</em> (1995)", ""],
    ["read", "Arundhati Roy — 'The Greater Common Good' (1999)", ""],
    ["online", "Wikipedia: Narmada Bachao Andolan", "https://en.wikipedia.org/wiki/Narmada_Bachao_Andolan"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"]
  ]
},
/* ------------------------------------------------------------------ SARAYAKU */
{
  id: "sarayaku",
  title: "Sarayaku and the Living Forest",
  place: "Sarayaku, Pastaza province, Ecuadorian Amazon",
  date: "2002 – 2012",
  year: 2012, lat: -1.73, lon: -77.48, theme: "rights",
  teaser: "A small Kichwa community in the Amazon stopped an oil company exploring its land — and won a landmark case at the Inter-American Court of Human Rights on the right of indigenous peoples to be consulted.",
  hero: "pastazaRiver",
  background: `
<p>Sarayaku is a Kichwa territory of about 135,000 hectares on the Bobonaza River, reached only by river or small plane. Between 1,000 and 2,000 people live there.[1][2]</p>
<ul>
  <li>Ecuador's economy depended heavily on oil exports.[1]</li>
  <li>In 1996, the government granted an oil concession covering much of Sarayaku's land to the Argentine company CGC, without consulting the community.[3]</li>
</ul>`,
  people: [
    { n: "Patricia Gualinga", r: "A Sarayaku leader and spokesperson for the community's international campaign.", img: "patriciaGualinga" },
    { n: "Franco Viteri", r: "A Sarayaku leader and former president of the Amazonian indigenous confederation CONFENIAE." },
    { n: "José Gualinga", r: "A former president of Sarayaku." },
    { n: "Eriberto Gualinga", r: "A filmmaker from Sarayaku who made the documentary <em>Children of the Jaguar</em>." }
  ],
  happened: `
<p>In 2002–03, CGC began seismic exploration on Sarayaku land, with the support of the military.[1]</p>
<ul>
  <li>The community resisted. Families set up "peace and life camps" in the forest to block the work.[3]</li>
  <li>The government sent soldiers and restricted traffic on the Bobonaza River.[1]</li>
  <li>The company left explosives buried in the forest — more than 1,400 kg of pentolite, according to the court.[3]</li>
  <li>Community members were threatened and some were attacked.[3]</li>
  <li>Sarayaku took its case to the Inter-American system. In 2011, members of the community travelled to Costa Rica to testify; some had never been to Ecuador's capital.[1]</li>
  <li>On 27 June 2012, the Inter-American Court of Human Rights ruled that Ecuador had violated Sarayaku's rights by failing to consult the community.[3]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Sarayaku', on the community, the oil exploration, the soldiers, the court case and the documentary.", "https://en.wikipedia.org/wiki/Sarayaku"],
    ["Wikipedia (Spanish), 'Sarayacu', on the territory and the 2012 ruling.", "https://es.wikipedia.org/wiki/Sarayacu"],
    ["Inter-American Court of Human Rights, <em>Kichwa Indigenous People of Sarayaku v. Ecuador</em>, judgment of 27 June 2012.", "https://www.corteidh.or.cr"]
  ],
  next: `
<ul>
  <li><strong>Reparations:</strong> the court ordered Ecuador to remove the explosives, pay compensation and apologise publicly.[3]</li>
  <li><strong>Apology:</strong> the government made a public apology in Sarayaku in 2014.</li>
  <li><strong>Kawsak Sacha:</strong> Sarayaku has proposed that its territory be recognised as a "Living Forest", a protected and sacred space.[2]</li>
</ul>`,
  why: `
<p>The Sarayaku ruling became a landmark in international law on the right of indigenous peoples to free, prior and informed consultation.</p>
<ul>
  <li>It shows how a small community could challenge a state and an oil company.</li>
  <li>It linked indigenous rights to the protection of the Amazon.</li>
</ul>`,
  questions: [
    "Why did Sarayaku oppose oil exploration?",
    "What does the right to be consulted mean?",
    "Why was the Inter-American Court important?",
    "Should indigenous peoples have a veto over projects on their land?"
  ],
  debates: `
<h3>At the time</h3>
<p>The government argued that oil revenue was essential for the national economy and to pay its debts; Sarayaku argued that oil would destroy its forest and way of life.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Consultation or consent?</strong> The ruling requires consultation; activists argue communities should also be able to say no.</li>
  <li><strong>Violence:</strong> the community's resistance was largely non-violent, though there were confrontations with oil workers and soldiers.[3]</li>
</ul>`,
  evidence: `
<ul>
  <li>The judgment of the Inter-American Court.[3]</li>
  <li>The documentary <em>Children of the Jaguar</em> (2012), made with Amnesty International.[1]</li>
</ul>`,
  memory: `
<ul>
  <li>Sarayaku leaders have spoken at UN climate conferences, presenting the Living Forest proposal.</li>
</ul>`,
  similar: [
    { id: "ecuador1990" }, { id: "standingrock" }, { id: "ogoni" }
  ],
  more: [
    ["watch", "<em>Children of the Jaguar</em> (2012)", ""],
    ["online", "Wikipedia: Sarayaku", "https://en.wikipedia.org/wiki/Sarayaku"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"]
  ]
},
/* ------------------------------------------------------------------ AGUA ZARCA */
{
  id: "aguazarca",
  title: "Berta Cáceres and the Fight for the Gualcarque River",
  place: "Río Blanco and La Esperanza, Intibucá, Honduras",
  date: "2006 – 2016",
  year: 2016, lat: 14.45, lon: -88.13, theme: "earth",
  teaser: "Lenca communities blockaded the road to a dam on their sacred river for more than a year, forcing the world's largest dam builder to pull out. Their leader, Berta Cáceres, won the Goldman Prize — and was murdered a year later.",
  hero: "bertaGoldman",
  background: `
<p>The Lenca are an indigenous people of south-western Honduras. In 1993, Berta Cáceres, then a student, co-founded the Council of Popular and Indigenous Organisations of Honduras (COPINH).[1]</p>
<ul>
  <li>COPINH campaigned against illegal logging, plantation owners and US military bases on Lenca land.[1]</li>
  <li>After a military coup in 2009, the Honduran government approved many new mining and dam projects.[2]</li>
  <li>The Agua Zarca dam on the Gualcarque River, sacred to the Lenca, was planned by the Honduran company DESA, with the Chinese company Sinohydro and finance from the World Bank's International Finance Corporation.[1]</li>
</ul>`,
  people: [
    { n: "Berta Cáceres", r: "A Lenca leader and co-founder of COPINH, murdered in 2016.", img: "bertaPortrait" },
    { n: "The community of Río Blanco", r: "Who asked COPINH for help and held the blockade." },
    { n: "Tomás García", r: "A Río Blanco community leader shot dead by a soldier at a protest in 2013." },
    { n: "Gustavo Castro", r: "A Mexican environmentalist who was wounded during the attack on Cáceres." },
    { n: "Roberto David Castillo", r: "The former president of DESA, convicted in 2021 of helping to plan her murder." }
  ],
  happened: `
<p>In 2006, Lenca people from Río Blanco asked Cáceres to investigate the arrival of construction equipment. She found that the dam was going ahead without their consent.[1]</p>
<ul>
  <li>From 2013, the community blockaded the road to the site, preventing construction for more than a year.[1]</li>
  <li>Protesters faced threats, arrests and violence. In July 2013, Tomás García was shot dead by a soldier at a protest.[2]</li>
  <li>Sinohydro withdrew from the project, and the International Finance Corporation also pulled out.[1]</li>
  <li>In 2015, Cáceres received the Goldman Environmental Prize for her campaign.[1]</li>
  <li>On 2 March 2016, gunmen broke into her home in La Esperanza and shot her dead. Gustavo Castro was wounded.[1]</li>
  <li>Two more activists were killed in Honduras the same month.[1]</li>
</ul>`,
  gallery: ["bertaDrawing"],
  sources: [
    ["Wikipedia, 'Berta Cáceres', on COPINH, the Agua Zarca dam, the Goldman Prize, her murder, the role of DESA and its financiers, and the conviction of Roberto David Castillo.", "https://en.wikipedia.org/wiki/Berta_C%C3%A1ceres"],
    ["Nina Lakhani, <em>Who Killed Berta Cáceres? Dams, Death Squads, and an Indigenous Defender's Battle for the Planet</em> (Verso, 2020).", ""],
    ["Global Witness, reports on the killing of land and environmental defenders.", "https://www.globalwitness.org"]
  ],
  next: `
<ul>
  <li><strong>Convictions:</strong> in 2018, seven men, including a DESA manager and former soldiers, were convicted of her murder.[2]</li>
  <li><strong>The planner:</strong> in July 2021, Roberto David Castillo was found guilty as a co-conspirator, and was later sentenced to 22 years and six months.[1]</li>
  <li><strong>Funders:</strong> the Dutch and Finnish development banks FMO and Finnfund suspended and then ended their involvement.[1]</li>
  <li><strong>Danger:</strong> Honduras remains one of the most dangerous countries for land and environmental defenders.[3]</li>
</ul>`,
  why: `
<p>The struggle shows the risks faced by indigenous and environmental defenders — and the responsibility of companies and international lenders.</p>
<ul>
  <li>A small community stopped a major international project.</li>
  <li>The murder of Cáceres drew worldwide attention to the killing of land defenders.</li>
</ul>`,
  questions: [
    "Why was the Gualcarque River important to the Lenca?",
    "Why did international companies and banks withdraw?",
    "Who was responsible for the murder of Berta Cáceres?",
    "How can environmental defenders be protected?"
  ],
  debates: `
<h3>At the time</h3>
<p>DESA argued that the dam would provide clean energy and that it had consulted local people. COPINH said consultation had been manipulated and opponents threatened.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Responsibility:</strong> a group of international legal experts found in 2017 that DESA's executives, security firms and state officials had worked to neutralise opposition, and criticised the banks for "willful negligence".[1]</li>
  <li><strong>Full justice?</strong> Cáceres's family and COPINH argue that others who ordered or funded the murder have not been tried.[2]</li>
  <li><strong>Violence:</strong> the movement was non-violent; violence came from soldiers, private security and hired gunmen.[1][2]</li>
</ul>`,
  evidence: `
<ul>
  <li>Court records of the murder trials.</li>
  <li>The 2017 report of the International Advisory Group of Experts (GAIPE).[1]</li>
  <li>Reporting by Nina Lakhani and others.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>Murals and banners with Berta Cáceres's image appear across Latin America and Europe.</li>
  <li>COPINH continues its work, and her daughters have taken leading roles.</li>
</ul>`,
  similar: [
    { id: "narmada" }, { id: "sarayaku" }, { id: "chipko" }
  ],
  more: [
    ["read", "Nina Lakhani — <em>Who Killed Berta Cáceres?</em> (2020)", ""],
    ["online", "Wikipedia: Berta Cáceres", "https://en.wikipedia.org/wiki/Berta_C%C3%A1ceres"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"],
    ["online", "Global Witness: land and environmental defenders", "https://www.globalwitness.org"]
  ]
},
/* ------------------------------------------------------------------ WACKERSDORF */
{
  id: "wackersdorf",
  title: "The Battle of Wackersdorf",
  place: "Wackersdorf, Upper Palatinate, Bavaria, West Germany",
  date: "1985 – 1989",
  year: 1986, lat: 49.32, lon: 12.18, theme: "earth",
  teaser: "A rural Catholic region of Bavaria rose against a nuclear reprocessing plant. Farmers, priests, doctors and rock stars joined tens of thousands of protesters — and some violent clashes — until the project was abandoned.",
  hero: "wackersdorfDemo",
  background: `
<p>In the early 1980s, the West German nuclear industry and the Bavarian government chose Wackersdorf, a former coal-mining area, as the site for a plant to reprocess spent nuclear fuel (in German, <em>Wiederaufarbeitungsanlage</em>, or WAA).[1]</p>
<ul>
  <li>The region was conservative and Catholic, and the Bavarian government of Franz Josef Strauss was strongly pro-nuclear.[1]</li>
  <li>The local district administrator, Hans Schuierer, refused to sign the permits. The Bavarian parliament passed a law to bypass him, known as the "Lex Schuierer".[1]</li>
</ul>`,
  people: [
    { n: "Hans Schuierer", r: "Social Democrat district administrator of Schwandorf, who refused to approve the plant." },
    { n: "Franz Josef Strauss", r: "Minister-President of Bavaria and leading supporter of the plant; died in 1988." },
    { n: "Local residents", r: "Farmers, Catholic parishioners and families who formed the backbone of the resistance." },
    { n: "Alois Sonnleitner", r: "A 38-year-old engineer who died during the protests in March 1986." }
  ],
  happened: `
<p>When clearing work began in December 1985, protesters occupied the site and built a camp of huts, the "Free Republic of Wackerland". After 18 days, police cleared it in January 1986. Police repeatedly cleared camps on the site; in one operation, 869 demonstrators were detained.[1][2]</p>
<ul>
  <li>Protesters held prayers at a roadside shrine near the fence, which became a symbol of the resistance.[1]</li>
  <li>At Easter 1986, more than 100,000 people demonstrated. Police used CS gas against demonstrators for the first time in West Germany.[2]</li>
  <li>Alois Sonnleitner died during the Easter protests; his death was linked by protesters to the use of tear gas, which the authorities disputed.[2]</li>
  <li>After the Chernobyl disaster in April 1986, protests grew. Over Whitsun in May, some militant protesters attacked police with stones and steel balls fired from slingshots, and set police vehicles on fire. Police threw tear gas from helicopters. More than 400 people were injured on both sides.[2]</li>
  <li>In 1986, the "Anti-WAAhnsinns" rock festivals — a pun on WAA and <em>Wahnsinn</em>, "madness" — drew huge crowds in support of the protests.[1]</li>
</ul>`,
  gallery: ["wackersdorfDoctors", "wackersdorfSite"],
  sources: [
    ["Wikipedia, 'Wackersdorf reprocessing plant', on the plans, the hut village, the 'Lex Schuierer', the clashes, the festivals and the abandonment of the project.", "https://en.wikipedia.org/wiki/Wackersdorf_reprocessing_plant"],
    ["Wikipedia (German), 'Wiederaufarbeitungsanlage Wackersdorf', on the arrests, the use of CS gas, the death of Alois Sonnleitner, the Whitsun clashes and the injuries.", "https://de.wikipedia.org/wiki/Wiederaufarbeitungsanlage_Wackersdorf"],
    ["Environmental Justice Atlas (EJAtlas), entries on anti-nuclear struggles.", "https://ejatlas.org"]
  ],
  next: `
<ul>
  <li><strong>Abandoned:</strong> in 1989 the project was abandoned. German spent fuel was sent instead to La Hague in France and Sellafield in Britain.[1]</li>
  <li><strong>Why?</strong> It remains unclear whether protests, economics or the death of Strauss in 1988 led to the decision.[1]</li>
  <li><strong>Today:</strong> the site is an industrial park, including a BMW plant.[1]</li>
  <li><strong>Nuclear exit:</strong> Germany later decided to phase out nuclear power; its last reactors closed in 2023.</li>
</ul>`,
  why: `
<p>Wackersdorf showed that opposition to nuclear power could unite conservative rural communities with radical activists.</p>
<ul>
  <li>It was one of the largest protest movements in post-war Germany.</li>
  <li>It contributed to the growth of the German Greens and the anti-nuclear movement.</li>
</ul>`,
  questions: [
    "Why did a conservative Catholic region oppose the plant?",
    "Why was Hans Schuierer's refusal so important?",
    "How did Chernobyl affect the protests?",
    "Did the violence of some protesters help or harm the movement?"
  ],
  debates: `
<h3>At the time</h3>
<p>The Bavarian government presented the protesters as violent extremists. Residents insisted most were peaceful local people, and accused the police of brutality.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Violence:</strong> most protesters were peaceful, but some militants attacked police; police used CS gas, stun grenades and rubber bullets against crowds.[1][2]</li>
  <li><strong>Why it ended:</strong> historians debate whether protest, economics or politics was decisive.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Photographs and films of the protests, including <em>WAAhnsinn – Der Wackersdorf-Film</em> (1986).[1]</li>
  <li>Police and court records.</li>
</ul>`,
  memory: `
<ul>
  <li>A commemorative plaque was unveiled at the roadside shrine (Franziskus-Marterl) in 2016.[1]</li>
  <li>The feature film <em>Wackersdorf</em> (2018) tells the story of Hans Schuierer.</li>
</ul>`,
  similar: [
    { id: "larzac" }, { id: "greenham" }, { id: "sanrizuka" }
  ],
  more: [
    ["watch", "<em>Wackersdorf</em> (2018)", ""],
    ["online", "Wikipedia: Wackersdorf reprocessing plant", "https://en.wikipedia.org/wiki/Wackersdorf_reprocessing_plant"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"]
  ]
}
);
