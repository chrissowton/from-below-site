window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ KETT */
{
  id: "kett",
  title: "Kett's Rebellion",
  place: "Mousehold Heath, Norwich, England",
  date: "July – August 1549",
  year: 1549, lat: 52.64, lon: 1.32, theme: "earth",
  teaser: "Villagers tearing down a landlord's fences asked a farmer to join them. He pulled down his own fences and led 16,000 people to camp outside Norwich, where they ran their own affairs for six weeks.",
  hero: "kettOak",
  background: `
<p>In the 1540s, English farming was in crisis, and there was unrest across the country.[1]</p>
<ul>
  <li>The main grievance was enclosure: landlords fencing common land for their own use, leaving peasants nowhere to graze their animals.[1]</li>
  <li>Some landlords forced tenants off farms to turn arable land into sheep pasture for the wool trade.[1]</li>
  <li>Inflation, unemployment, rising rents and falling wages added to the hardship.[1]</li>
  <li>The Lord Protector, the Duke of Somerset, had issued a proclamation against illegal enclosures, so many rioters believed they were acting lawfully.[1]</li>
</ul>`,
  people: [
    { n: "Robert Kett", r: "A yeoman farmer of Wymondham, about 57, who led the rebellion; hanged in 1549." },
    { n: "William Kett", r: "His elder brother, who joined the rebellion." },
    { n: "The Marquess of Northampton", r: "Commander of the first royal army, defeated at Norwich." },
    { n: "John Dudley, Earl of Warwick", r: "Commander of the army that crushed the rebels." }
  ],
  happened: `
<p>On 8 July 1549, after a local feast, people from Wymondham began tearing down fences around nearby villages.[1]</p>
<ul>
  <li>A landowner, Sir John Flowerdew, bribed them to attack Robert Kett's fences instead. Kett listened to their grievances, helped tear down his own fences, and agreed to lead them.[1]</li>
  <li>On 12 July, some 16,000 rebels set up camp on Mousehold Heath outside Norwich.[1]</li>
  <li>Kett held court under the "Oak of Reformation", where the camp was organised and complaints were heard.</li>
  <li>The rebels stormed Norwich on 29 July, and on 1 August defeated a royal army under the Marquess of Northampton.[1]</li>
  <li>On 27 August, they were defeated by the Earl of Warwick at the Battle of Dussindale.[1]</li>
</ul>`,
  gallery: ["kettOakHethersett"],
  sources: [
    ["Wikipedia, 'Kett's Rebellion', on enclosure, the outbreak at Wymondham, Robert Kett, Mousehold Heath, Norwich, Dussindale, the executions and the memorial.", "https://en.wikipedia.org/wiki/Kett%27s_Rebellion"],
    ["Andy Wood, <em>The 1549 Rebellions and the Making of Early Modern England</em> (Cambridge University Press, 2007).", ""]
  ],
  next: `
<ul>
  <li><strong>Executions:</strong> about 3,000 rebels were killed at Dussindale, and dozens more were hanged in Norwich in the days that followed.[1]</li>
  <li><strong>Kett:</strong> captured the night after the battle, he was tried for treason in London and hanged from the walls of Norwich Castle on 7 December 1549.[1]</li>
  <li><strong>Politics:</strong> the risings of 1549 helped bring down the Duke of Somerset.</li>
</ul>`,
  why: `
<p>Kett's Rebellion was the most serious of the 1549 risings against enclosure, and a key moment in the long struggle over common land in England.</p>
<ul>
  <li>The rebels' camp showed ordinary people organising themselves.</li>
</ul>`,
  questions: [
    "Why was enclosure such a threat to ordinary people?",
    "Why did a fairly wealthy farmer join the rebels?",
    "Why did the rebels think the government might be on their side?",
    "Why has Norwich come to honour Kett?"
  ],
  debates: `
<h3>At the time</h3>
<p>The government condemned the rebels as traitors; the rebels saw themselves as loyal subjects enforcing the king's laws against greedy landlords.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Class war?</strong> Historians such as Andy Wood stress the rebels' language of "commonwealth" and their hostility to the gentry.[2]</li>
  <li><strong>Violence:</strong> there is only one attested case of the rebels killing in cold blood (a captured Italian mercenary); about 3,000 rebels died at Dussindale against some 250 of Warwick's men.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>The rebels' list of 29 demands.</li>
  <li>Alexander Neville's hostile account of 1575 and Nicholas Sotherton's account.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>In 1949, 400 years after the rebellion, a plaque was placed on Norwich Castle honouring Kett.[1]</li>
  <li>Campaigners still mark the anniversary of his death.[1]</li>
</ul>`,
  similar: [
    { id: "diggers" }, { id: "peasants" }, { id: "dozsa" }
  ],
  more: [
    ["read", "Andy Wood — <em>The 1549 Rebellions and the Making of Early Modern England</em> (2007)", ""],
    ["online", "Wikipedia: Kett's Rebellion", "https://en.wikipedia.org/wiki/Kett%27s_Rebellion"]
  ]
},
/* ------------------------------------------------------------------ RAZIN */
{
  id: "razin",
  title: "Stenka Razin's Rising",
  place: "Astrakhan and the Volga, Russia",
  date: "1670 – 1671",
  year: 1670, lat: 46.35, lon: 48.04, theme: "labour",
  teaser: "A Cossack raider gathered runaway serfs and the poor of the Volga into an army against the nobles and officials of the tsar. He took city after city before being defeated, betrayed and executed in Red Square.",
  hero: "razinSurikov",
  background: `
<p>In the mid-seventeenth century, Russia's tsars were strengthening their power, and the gap between peasants and nobles was growing.[1]</p>
<ul>
  <li>The Law Code of 1649 made serfdom part of the law.[1]</li>
  <li>Wars with Poland and Sweden brought higher taxes and conscription.[1]</li>
  <li>Many peasants fled south to the Don Cossacks, an independent frontier community.[1]</li>
  <li>From 1667, Stepan (Stenka) Razin led Cossack raids on the Volga and the Caspian Sea, and his reputation grew.[1]</li>
</ul>`,
  people: [
    { n: "Stepan (Stenka) Razin", r: "Don Cossack leader of the rising; executed in 1671." },
    { n: "Frol Razin", r: "His brother, captured with him." },
    { n: "Runaway serfs, the urban poor and non-Russian peoples", r: "Who joined his army." },
    { n: "Prince Yuri Baryatinsky", r: "The tsar's commander who defeated him at Simbirsk." }
  ],
  happened: `
<p>In 1670, Razin turned his raids into a rising against the nobility and the tsar's officials.[1]</p>
<ul>
  <li>He took Astrakhan, Saratov and Samara as he moved up the Volga.[1]</li>
  <li>He aimed to set up a Cossack republic along the Volga before advancing on Moscow.[1]</li>
  <li>He claimed to fight the "traitor-boyars", not the tsar himself.[1]</li>
  <li>At Simbirsk, in October 1670, he was defeated by Baryatinsky's army and fled.[1]</li>
  <li>His proclamations spread revolt further, as far as the regions around Nizhny Novgorod, Tambov and Penza.[1]</li>
  <li>In 1671, Cossack elders handed him over. On 16 June he was quartered in Red Square.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Stenka Razin', on the background of serfdom and war, his raids, the rising, Simbirsk, the spread of the revolt, his capture and execution, and Paul Avrich's assessment.", "https://en.wikipedia.org/wiki/Stenka_Razin"],
    ["Paul Avrich, <em>Russian Rebels, 1600–1800</em> (Schocken, 1972).", ""]
  ],
  next: `
<ul>
  <li><strong>Repression:</strong> many of his followers were killed after Simbirsk.[1]</li>
  <li><strong>Pugachev:</strong> a century later, another Cossack, Yemelyan Pugachev, led an even larger rising.</li>
</ul>`,
  why: `
<p>Razin's rising was one of the great peasant and Cossack revolts of Russian history.</p>
<ul>
  <li>It shows how frontier freedom attracted those fleeing serfdom.</li>
</ul>`,
  questions: [
    "Why did serfs flee to the Cossacks?",
    "Why did Razin claim to fight the boyars rather than the tsar?",
    "Was Razin a rebel, a bandit or both?",
    "Why did Razin become a hero of Russian folk songs?"
  ],
  debates: `
<h3>At the time</h3>
<p>The state and the Church condemned him; to many of the poor he was a liberator.</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Bandit or rebel?</strong> Paul Avrich described the rising as a "curious mixture of brigandage and revolt".[1][2]</li>
  <li><strong>Violence on both sides:</strong> his raids devastated towns and his forces killed nobles and officials; the tsar's armies in turn slaughtered his followers.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Razin's proclamations and government records.</li>
  <li>Accounts by foreign visitors to Russia.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>Razin is the hero of the folk song "Volga, Volga, Mother Volga", and streets and a bridge in St Petersburg bear his name.</li>
</ul>`,
  similar: [
    { id: "pugachev" }, { id: "gubec" }, { id: "germanpeasants" }
  ],
  more: [
    ["read", "Paul Avrich — <em>Russian Rebels, 1600–1800</em> (1972)", ""],
    ["online", "Wikipedia: Stenka Razin", "https://en.wikipedia.org/wiki/Stenka_Razin"]
  ]
},
/* ------------------------------------------------------------------ GUBEC */
{
  id: "gubec",
  title: "The Croatian–Slovene Peasant Revolt",
  place: "Stubičko polje, Hrvatsko Zagorje, Croatia",
  date: "28 January – 15 February 1573",
  year: 1573, lat: 45.97, lon: 15.98, theme: "labour",
  teaser: "Serfs in Croatia and Slovenia rose against a cruel baron and planned a world without nobles, with peasant officials answerable only to the emperor. They were crushed in twelve days.",
  hero: "gubecStatue",
  background: `
<p>In the late sixteenth century, the threat of Ottoman raids strained the economy, and feudal lords kept increasing their demands on peasants.[1]</p>
<ul>
  <li>In Croatian Zagorje, Baron Ferenc Tahy treated his serfs cruelly and fought with neighbouring barons over land.[1]</li>
  <li>When complaints to the emperor went unanswered, the peasants planned a revolt with peasants in Styria and Carniola and with poorer townspeople.[1]</li>
</ul>`,
  people: [
    { n: "Matija Gubec", r: "A member of the peasant government, remembered as the revolt's leader; executed in Zagreb." },
    { n: "Ilija Gregorić", r: "Military captain of the rebels; executed in 1574." },
    { n: "Ivan Pasanec and Ivan Mogaić", r: "Members of the peasant government, killed in the fighting." },
    { n: "Baron Ferenc Tahy", r: "The landlord whose cruelty sparked the revolt." }
  ],
  happened: `
<p>On 28 January 1573, the revolt broke out at the same time in Carniola, Styria and Croatia.[1]</p>
<ul>
  <li>The rebels wanted to replace the nobility with peasant officials answerable to the emperor, and to abolish feudal holdings and obligations to the Church.[1]</li>
  <li>A peasant government was formed, and plans were drawn up to abolish provincial borders, open roads for trade and allow peasant self-rule.[1]</li>
  <li>Each household sent one man to the rebel army.[1]</li>
  <li>The nobles raised armies, and on 5 and 6 February rebel forces were defeated at Krško and near Samobor.[1]</li>
  <li>On 9 February, at Stubičko polje, Gubec and 10,000 peasants were defeated after a four-hour battle.[1]</li>
</ul>`,
  gallery: ["gubecMap"],
  sources: [
    ["Wikipedia, 'Croatian–Slovene Peasant Revolt', on its causes, the rebel programme, the peasant government, the battles, the reprisals and its legacy.", "https://en.wikipedia.org/wiki/Croatian%E2%80%93Slovene_Peasant_Revolt"],
    ["Ivo Goldstein, <em>Croatia: A History</em> (Hurst, 1999).", ""]
  ],
  next: `
<ul>
  <li><strong>Reprisals:</strong> about 3,000 peasants died in the final battle, and many captives were hanged or maimed.[1]</li>
  <li><strong>Gubec</strong> was publicly tortured and executed on 15 February; Gregorić was captured and executed in 1574.[1]</li>
</ul>`,
  why: `
<p>The revolt had one of the most radical programmes of any peasant rising in Europe.</p>
<ul>
  <li>Gubec became a legendary figure in Croatia and Slovenia.</li>
</ul>`,
  questions: [
    "Why did peasants in three provinces rise together?",
    "Why did the rebels look to the emperor rather than the nobles?",
    "Why did the revolt fail so quickly?",
    "Why did Gubec become a national hero?"
  ],
  debates: `
<h3>At the time</h3>
<p>The nobility saw the revolt as a threat to the whole social order.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Leader?</strong> Gubec is remembered as the leader, but he was one of several members of the peasant government.[1]</li>
  <li><strong>Violence:</strong> the rebels attacked castles and manors; the nobles' reprisals were brutal.[1]</li>
  <li><strong>Memory:</strong> socialist Yugoslavia celebrated the revolt as an early class struggle.[2]</li>
</ul>`,
  evidence: `
<ul>
  <li>Records of the trials and the nobles' reports.</li>
</ul>`,
  memory: `
<ul>
  <li>The revolt has inspired writers including August Šenoa and Miroslav Krleža, the sculptor Antun Augustinčić, and the first Croatian rock opera, <em>Gubec-beg</em> (1975).[1]</li>
  <li>A museum and monument stand at Gornja Stubica.</li>
</ul>`,
  similar: [
    { id: "dozsa" }, { id: "germanpeasants" }, { id: "razin" }
  ],
  more: [
    ["read", "Ivo Goldstein — <em>Croatia: A History</em> (1999)", ""],
    ["online", "Wikipedia: Croatian–Slovene Peasant Revolt", "https://en.wikipedia.org/wiki/Croatian%E2%80%93Slovene_Peasant_Revolt"]
  ]
},
/* ------------------------------------------------------------------ PUEBLO */
{
  id: "pueblo",
  title: "The Pueblo Revolt",
  place: "Santa Fe and the Rio Grande pueblos, New Mexico, United States",
  date: "August 1680",
  year: 1680, lat: 35.69, lon: -105.94, theme: "freedom",
  teaser: "Runners carrying knotted cords told more than two dozen Pueblo towns when to rise. Together they drove the Spanish out of New Mexico for twelve years — the most successful Indigenous revolt against Spain in North America.",
  hero: "popayStatue",
  background: `
<p>From 1540, the Pueblo peoples of the Rio Grande faced waves of Spanish soldiers, missionaries and settlers.[1]</p>
<ul>
  <li>In 1599, after a Spanish attack on Acoma Pueblo, about 600 people were seized and enslaved, and many were mutilated as punishment.[1]</li>
  <li>The Pueblos were forced to work for the colonists, and lost access to farmland and water.[1]</li>
  <li>Franciscan missionaries outlawed kachina dances and burned sacred masks and objects.[1]</li>
  <li>In 1675, 47 Pueblo religious leaders were arrested for "sorcery"; three were hanged and the rest whipped. One of them was Po'pay of Ohkay Owingeh.[1]</li>
</ul>`,
  people: [
    { n: "Po'pay (Popé)", r: "Tewa religious leader who planned and organised the revolt.", img: "popayStatue" },
    { n: "Pueblo leaders", r: "From more than two dozen towns speaking six languages." },
    { n: "Antonio de Otermín", r: "Spanish governor of New Mexico." },
    { n: "Diego de Vargas", r: "Who led the Spanish return in 1692." }
  ],
  happened: `
<p>Po'pay spent five years at Taos Pueblo winning support among the 46 Pueblo towns.[1]</p>
<ul>
  <li>He sent runners with knotted cords: each morning a knot was untied, and the last knot was the signal to rise.[1]</li>
  <li>The Spanish learned of the plan, so the revolt began early, on 10 August 1680.</li>
  <li>About 400 people were killed, including men, women, children and 21 of the 33 Franciscan missionaries in New Mexico. Churches were destroyed.[1]</li>
  <li>The Pueblos besieged Santa Fe and cut off its water. On 21 August, Governor Otermín led the surviving colonists, about 2,000, south to El Paso.[1]</li>
</ul>`,
  gallery: ["taosPueblo"],
  sources: [
    ["Wikipedia, 'Pueblo Revolt', on Spanish colonisation, Acoma, religious persecution, the 1675 arrests, Po'pay, the knotted cords, the killings, the siege of Santa Fe, the Spanish return and the statue in the US Capitol.", "https://en.wikipedia.org/wiki/Pueblo_Revolt"],
    ["Andrew L. Knaut, <em>The Pueblo Revolt of 1680: Conquest and Resistance in Seventeenth-Century New Mexico</em> (University of Oklahoma Press, 1995).", ""]
  ],
  next: `
<ul>
  <li><strong>Independence:</strong> the Pueblos were free of Spanish rule for twelve years.</li>
  <li><strong>Return:</strong> in 1692, Diego de Vargas retook Santa Fe. A second revolt in 1696 was crushed.[1]</li>
  <li><strong>Survival:</strong> afterwards, Spanish rule was less harsh in some ways, and Pueblo religion survived.</li>
</ul>`,
  why: `
<p>The Pueblo Revolt was one of the most successful Indigenous uprisings in North American history.</p>
<ul>
  <li>Scholars see it as the first Native American movement to revive traditional religion.[1]</li>
</ul>`,
  questions: [
    "Why was religion at the heart of the revolt?",
    "How did the knotted cords help people speaking six languages act together?",
    "How should we judge the killing of priests and settlers?",
    "Why did the Spanish return, and what changed when they did?"
  ],
  debates: `
<h3>At the time</h3>
<p>The Spanish saw the revolt as an attack on God and the Crown.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Religion and freedom:</strong> the revolt was both a political rising and a religious revival.[1][2]</li>
  <li><strong>Violence on both sides:</strong> the rebels killed about 400 colonists and missionaries; Spanish rule before it included massacre, enslavement and mutilation, and the reconquest brought further executions and enslavement.[1]</li>
  <li><strong>Unity:</strong> after the Spanish left, the Pueblo alliance divided.</li>
</ul>`,
  evidence: `
<ul>
  <li>Spanish records, including testimony taken from Pueblo prisoners.[2]</li>
  <li>Pueblo oral traditions.</li>
</ul>`,
  memory: `
<ul>
  <li>In 2005, a statue of Po'pay by the Pueblo sculptor Cliff Fragua was placed in the US Capitol as one of New Mexico's two statues.[1]</li>
</ul>`,
  similar: [
    { id: "tupacamaru" }, { id: "curalaba" }, { id: "alcatraz" }
  ],
  more: [
    ["read", "Andrew L. Knaut — <em>The Pueblo Revolt of 1680</em> (1995)", ""],
    ["online", "Wikipedia: Pueblo Revolt", "https://en.wikipedia.org/wiki/Pueblo_Revolt"]
  ]
},
/* ------------------------------------------------------------------ CURALABA */
{
  id: "curalaba",
  title: "Curalaba and the Mapuche Uprising",
  place: "Curalaba, Araucanía, Chile",
  date: "1598 – 1604",
  year: 1598, lat: 38.16, lon: -72.89, theme: "freedom",
  teaser: "A Mapuche ambush killed the Spanish governor of Chile and set off a general uprising that destroyed seven Spanish cities. The Mapuche kept their independence south of the Biobío River for nearly three centuries.",
  hero: "anganamon",
  background: `
<p>The Spanish began the Arauco War against the Mapuche in 1536.[1]</p>
<ul>
  <li>Diseases brought by the Spanish may have reduced the Mapuche population by up to 80%.[1]</li>
  <li>By the 1590s, the Spanish believed they were close to victory.[1]</li>
  <li>The Mapuche had turned to guerrilla tactics, using small mounted groups to ambush the Spanish.[1]</li>
</ul>`,
  people: [
    { n: "Pelantaro (Pelantaru)", r: "Mapuche leader at Curalaba.", img: "pelantaroStatue" },
    { n: "Anganamón and Guaiquimilla", r: "His lieutenants." },
    { n: "Martín García Óñez de Loyola", r: "Spanish governor of Chile, killed at Curalaba." }
  ],
  happened: `
<p>On 23 December 1598, Pelantaro and about 300 warriors ambushed and killed Governor Óñez de Loyola and nearly all his companions at Curalaba.[2]</p>
<ul>
  <li>It was the second time a Spanish governor of Chile had been killed by the Mapuche.[1]</li>
  <li>The news set off a general uprising of Mapuche and Huilliche peoples.[2]</li>
  <li>Over the next few years, all seven Spanish cities in Mapuche territory south of the Biobío River were destroyed or abandoned.[2]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Battle of Curalaba', on the Arauco War, the population collapse, Mapuche tactics, the battle and its aftermath.", "https://en.wikipedia.org/wiki/Battle_of_Curalaba"],
    ["Wikipedia, 'Destruction of the Seven Cities', on the ambush, the general uprising, the cities destroyed, the death toll and the captives.", "https://en.wikipedia.org/wiki/Destruction_of_the_Seven_Cities"]
  ],
  next: `
<ul>
  <li><strong>A frontier:</strong> a border between Spanish and Mapuche lands was set at the Biobío River.[1]</li>
  <li><strong>Independence:</strong> the Mapuche kept their independence until the Chilean state occupied Araucanía in 1883.[1]</li>
</ul>`,
  why: `
<p>Curalaba was one of the greatest Indigenous victories over the Spanish Empire.</p>
<ul>
  <li>It explains why the Mapuche, unlike most Indigenous peoples of the Americas, stayed independent for centuries.</li>
</ul>`,
  questions: [
    "How did the Mapuche adapt their way of fighting?",
    "Why was the governor's death so important?",
    "How should we treat the killing and capture of Spanish settlers?",
    "Why is Curalaba important to Mapuche movements today?"
  ],
  debates: `
<h3>At the time</h3>
<p>Spanish chroniclers called it the "Disaster of Curalaba".[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>End of conquest:</strong> Chilean historians treat Curalaba as the end of the conquest period.[1]</li>
  <li><strong>Violence on both sides:</strong> a Spanish chronicler wrote that the Mapuche killed more than 3,000 Spaniards and captured over 500 women; the Spanish conquest had brought massacre, enslavement and disease.[2]</li>
</ul>`,
  evidence: `
<ul>
  <li>Spanish chronicles, including that of Alonso González de Nájera.[2]</li>
  <li>Drawings by the friar Diego de Ocaña.</li>
</ul>`,
  memory: `
<ul>
  <li>A statue of Pelantaro stands in Purén, and Curalaba is remembered by Mapuche organisations as a symbol of resistance.</li>
</ul>`,
  similar: [
    { id: "pueblo" }, { id: "tupackatari" }, { id: "palmares" }
  ],
  more: [
    ["online", "Wikipedia: Battle of Curalaba", "https://en.wikipedia.org/wiki/Battle_of_Curalaba"],
    ["online", "Wikipedia: Destruction of the Seven Cities", "https://en.wikipedia.org/wiki/Destruction_of_the_Seven_Cities"]
  ]
}
);
