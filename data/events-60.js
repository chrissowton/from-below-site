window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ TAIPING */
{
  id: "taiping",
  title: "The Taiping Heavenly Kingdom",
  place: "Nanjing, Jiangsu, China",
  date: "1850 – 1864",
  year: 1851, lat: 32.06, lon: 118.80, theme: "freedom",
  teaser: "A failed examination candidate who believed he was the younger brother of Jesus led millions of poor Chinese against the Qing dynasty. His Heavenly Kingdom promised equality — and the war that followed was the deadliest civil war in history.",
  hero: "taipingWangjiakou",
  background: `
<p>By the 1840s, China faced economic crisis and foreign defeat.[1]</p>
<ul>
  <li>Farmers were heavily overtaxed, rents rose sharply, and many peasants abandoned their land.[1]</li>
  <li>China's population had nearly doubled between 1766 and 1833, but farmland had not grown.[1]</li>
  <li>The Qing had lost the First Opium War, and the opium trade drained the economy.[1]</li>
  <li>Hong Xiuquan, a Hakka who had repeatedly failed the civil service exams, had visions after reading Christian tracts and came to believe he was the younger brother of Jesus.[1]</li>
</ul>`,
  people: [
    { n: "Hong Xiuquan", r: "Founder and 'Heavenly King' of the Taiping; died in 1864." },
    { n: "Feng Yunshan", r: "Early organiser of the God Worshipping Society." },
    { n: "Peasants, miners and the poor of Guangxi", r: "Who formed the first Taiping armies." },
    { n: "Zeng Guofan", r: "Qing official whose Xiang Army defeated the Taiping." }
  ],
  happened: `
<p>In late 1850, a Taiping army of 10,000 defeated Qing forces at Jintian in Guangxi, and in January 1851 Hong declared the Taiping Heavenly Kingdom.[1]</p>
<ul>
  <li>In 1853, the Taiping took Nanjing and made it their capital.[1]</li>
  <li>They announced sweeping reforms: abolition of foot binding, shared ownership of land, strict separation of the sexes and a ban on opium.[1]</li>
  <li>At its height, the Heavenly Kingdom ruled nearly 30 million people.[1]</li>
  <li>A failed march on Beijing and a violent power struggle among the leaders in 1856 weakened the movement.[1]</li>
  <li>Qing provincial armies besieged Nanjing from 1862. Hong died in June 1864, and Nanjing fell a month later.[1]</li>
</ul>`,
  gallery: ["taipingMural"],
  sources: [
    ["Wikipedia, 'Taiping Rebellion', on its causes, Hong Xiuquan, the Taiping reforms, the war, the death toll, the massacres on both sides and its legacy.", "https://en.wikipedia.org/wiki/Taiping_Rebellion"],
    ["Stephen R. Platt, <em>Autumn in the Heavenly Kingdom: China, the West, and the Epic Story of the Taiping Civil War</em> (Knopf, 2012).", ""]
  ],
  next: `
<ul>
  <li><strong>Death toll:</strong> estimates range from 20–30 million to as many as 73–100 million; some 30 million people fled their homes.[1]</li>
  <li><strong>The Qing:</strong> the dynasty survived, but was weakened and relied on provincial armies.[1]</li>
  <li><strong>Influence:</strong> the Taiping mix of radical equality and Christianity influenced Sun Yat-sen and later revolutionaries.[1]</li>
</ul>`,
  why: `
<p>The Taiping rebellion was one of the largest peasant movements in history, and promised a social revolution.</p>
<ul>
  <li>It is also a warning about how utopian movements can become violent and authoritarian.</li>
</ul>`,
  questions: [
    "Why did so many poor people follow Hong Xiuquan?",
    "How radical were the Taiping reforms for women and land?",
    "How should we judge a movement that preached equality but committed massacres?",
    "Why did the war kill so many people?"
  ],
  debates: `
<h3>At the time</h3>
<p>The Qing saw heretical rebels; some Western observers at first hoped for a Christian China, then turned against the Taiping.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Revolution?</strong> Marx saw only destruction; Mao and Chinese Communist historians called it a proto-communist uprising.[1]</li>
  <li><strong>Violence on both sides:</strong> the war was marked by extreme brutality. The Taiping massacred Manchus, including women burned to death in Nanjing; Qing forces massacred civilians, above all when Nanjing fell.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Taiping proclamations and religious texts.</li>
  <li>Qing records and accounts by Western missionaries and diplomats.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>The People's Republic honoured the Taiping as revolutionaries; a museum stands in Nanjing.</li>
</ul>`,
  similar: [
    { id: "redturbans" }, { id: "donghak" }, { id: "yellowturban" }
  ],
  more: [
    ["read", "Stephen R. Platt — <em>Autumn in the Heavenly Kingdom</em> (2012)", ""],
    ["online", "Wikipedia: Taiping Rebellion", "https://en.wikipedia.org/wiki/Taiping_Rebellion"]
  ]
},
/* ------------------------------------------------------------------ 1857 */
{
  id: "india1857",
  title: "The Indian Rebellion of 1857",
  place: "Meerut, Delhi and northern India",
  date: "May 1857 – 1858",
  year: 1857, lat: 28.98, lon: 77.71, theme: "freedom",
  teaser: "Indian soldiers in the East India Company's army mutinied at Meerut and marched on Delhi. Their revolt spread into a great rebellion of soldiers, peasants and princes across northern India.",
  hero: "raniJhansi",
  background: `
<p>By 1857, the East India Company ruled much of India.[1]</p>
<ul>
  <li>Resentment had grown over British-style social reforms, harsh land taxes and the treatment of landowners and princes.[1]</li>
  <li>Many doubted British claims that their rule improved India's economy.[1]</li>
  <li>Sepoys (Indian soldiers) had grievances over overseas service and the new Enfield rifle cartridges, rumoured to be greased with cow and pig fat.[1]</li>
  <li>In March 1857, Mangal Pandey, a sepoy at Barrackpore, attacked his officers.[1]</li>
</ul>`,
  people: [
    { n: "Sepoys of the Bengal Army", r: "Who began the rebellion at Meerut." },
    { n: "Bahadur Shah Zafar", r: "The 81-year-old Mughal ruler, proclaimed Emperor of Hindustan." },
    { n: "Rani Lakshmibai of Jhansi", r: "Queen who led resistance and died in battle in 1858.", img: "raniJhansi" },
    { n: "Peasants of Awadh", r: "Who turned the rebellion into a popular revolt." }
  ],
  happened: `
<p>On 10 May 1857, sepoys at Meerut mutinied and marched to Delhi, where Bahadur Shah Zafar was declared emperor.[1]</p>
<ul>
  <li>The rebels took large parts of the North-Western Provinces and Awadh.[1]</li>
  <li>In Awadh especially, the revolt became a popular rising against British rule.[1]</li>
  <li>At Cawnpore (Kanpur), British soldiers and civilians who surrendered were killed, and women and children held hostage were later massacred at the Bibighar.[1]</li>
  <li>Company forces retook Kanpur in July and Delhi in September, and Delhi and Lucknow were laid waste.[1]</li>
  <li>Many Indians fought for the British, including the Sikh princes of Punjab, and many princely states stayed loyal.[1]</li>
  <li>The rebellion was defeated at Gwalior in June 1858.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Indian Rebellion of 1857', on its causes, the outbreak at Meerut, Delhi, Cawnpore, the violence on both sides, the British reprisals, the end of Company rule and the debate over its name.", "https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857"],
    ["William Dalrymple, <em>The Last Mughal: The Fall of a Dynasty, Delhi 1857</em> (Bloomsbury, 2006).", ""]
  ],
  next: `
<ul>
  <li><strong>End of the Company:</strong> the Government of India Act 1858 abolished Company rule, and India was ruled directly by the British Crown.[1]</li>
  <li><strong>The last Mughal:</strong> Bahadur Shah Zafar was exiled to Rangoon.[2]</li>
</ul>`,
  why: `
<p>1857 was the greatest challenge to British rule in India in the nineteenth century, and changed how India was governed.</p>
<ul>
  <li>It remains one of the most contested events in the history of empire.</li>
</ul>`,
  questions: [
    "Why did a dispute over cartridges become a great rebellion?",
    "Why did some regions rise while others stayed calm?",
    "How should we remember the violence on both sides?",
    "Was it a mutiny, a rebellion or a war of independence?"
  ],
  debates: `
<h3>At the time</h3>
<p>The British called it a mutiny; many rebels fought to restore older rulers and ways of life.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Its name:</strong> it is called the Sepoy Mutiny, the Great Rebellion and the First War of Independence; V. D. Savarkar's 1909 book popularised the last name.[1]</li>
  <li><strong>Violence on both sides:</strong> rebels killed British officers and civilians, including women and children; British reprisals hanged rebels, blew some from cannon and destroyed whole villages.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Records of the Mughal court in Delhi, studied by William Dalrymple.[2]</li>
  <li>British accounts, letters and photographs by Felice Beato.</li>
</ul>`,
  memory: `
<ul>
  <li>Rani Lakshmibai became one of India's best-known heroines.</li>
</ul>`,
  similar: [
    { id: "santhal" }, { id: "paika" }, { id: "indigo" }
  ],
  more: [
    ["read", "William Dalrymple — <em>The Last Mughal</em> (2006)", ""],
    ["online", "Wikipedia: Indian Rebellion of 1857", "https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857"]
  ]
},
/* ------------------------------------------------------------------ MOKRANI */
{
  id: "mokrani",
  title: "The Mokrani Revolt",
  place: "Medjana and Kabylie, Algeria",
  date: "March 1871 – January 1872",
  year: 1871, lat: 36.07, lon: 4.76, theme: "freedom",
  teaser: "After years of famine and disease, a third of Algeria's people rose against French colonial rule. When it was crushed, France seized nearly half a million hectares of land for settlers.",
  hero: "boumezrag",
  background: `
<p>France had invaded Algeria in 1830, and crushed the resistance of Abd al-Qadir by 1847.[1]</p>
<ul>
  <li>Between 1866 and 1868, drought, cold winters, cholera and an earthquake killed more than 10% of the Kabyle population.[1]</li>
  <li>In 1870, France gave Algeria a civilian government that favoured the European settlers.[1]</li>
  <li>Cheikh Mokrani, a local leader who had guaranteed loans for the authorities during the famine, was left to repay them himself.[1]</li>
</ul>`,
  people: [
    { n: "Cheikh Mohamed el-Mokrani", r: "Leader of the revolt; killed in battle in May 1871." },
    { n: "Boumezrag Mokrani", r: "His brother, who continued the fight; deported.", img: "boumezrag" },
    { n: "Cheikh El Haddad", r: "Head of the Rahmaniyya Sufi order, who called for holy war." }
  ],
  happened: `
<p>On 16 March 1871, the revolt began. More than 250 tribes — about a third of Algeria's population — joined it.[1]</p>
<ul>
  <li>The Rahmaniyya Sufi order under Cheikh El Haddad brought many followers into the revolt.[1]</li>
  <li>On 5 May, Cheikh Mokrani was killed in battle.[1]</li>
  <li>French columns advanced into Kabylie, and El Haddad was captured in July.[1]</li>
  <li>Boumezrag Mokrani was captured in January 1872.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Mokrani Revolt', on the background, the leaders, the course of the revolt, the casualties, the deportations, the collective fine and the land confiscations.", "https://en.wikipedia.org/wiki/Mokrani_Revolt"],
    ["Charles-Robert Ageron, <em>Modern Algeria: A History from 1830 to the Present</em> (Hurst, 1991).", ""]
  ],
  next: `
<ul>
  <li><strong>Deportation:</strong> rebels were deported to Cayenne and New Caledonia, where they became known as the "Algerians of the Pacific".[1]</li>
  <li><strong>Land:</strong> Kabylie was fined 36 million francs, and 450,000 hectares of land were confiscated and given to settlers, many from Alsace-Lorraine.[1]</li>
</ul>`,
  why: `
<p>The Mokrani Revolt was the most important rising against France in Algeria between the conquest and the war of independence.[1]</p>
<ul>
  <li>Its defeat opened the way to massive settler land grabs.</li>
</ul>`,
  questions: [
    "How did famine and disease prepare the ground for revolt?",
    "Why did a local leader once allied with France turn against it?",
    "How did religion help to spread the revolt?",
    "How did the punishment of the revolt shape colonial Algeria?"
  ],
  debates: `
<h3>At the time</h3>
<p>French settlers blamed the revolt on the Crémieux Decree, which made Algerian Jews French citizens; many historians doubt this.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Causes:</strong> historians stress famine, debt, settler power and the loss of land and autonomy.[1][2]</li>
  <li><strong>Violence on both sides:</strong> about 100 European civilians died, along with an unknown number of Algerian civilians; the collective punishment of the population was severe.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>French military and court records.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>The revolt is remembered in Algeria as a key moment of resistance; descendants of the deportees still live in New Caledonia.</li>
</ul>`,
  similar: [
    { id: "setif" }, { id: "rif" }, { id: "mukhtar" }
  ],
  more: [
    ["read", "Charles-Robert Ageron — <em>Modern Algeria</em> (1991)", ""],
    ["online", "Wikipedia: Mokrani Revolt", "https://en.wikipedia.org/wiki/Mokrani_Revolt"]
  ]
},
/* ------------------------------------------------------------------ TOBACCO */
{
  id: "tobacco",
  title: "The Persian Tobacco Protest",
  place: "Tehran, Iran",
  date: "1890 – 1892",
  year: 1891, lat: 35.675, lon: 51.42, theme: "freedom",
  teaser: "When the shah sold the whole of Iran's tobacco trade to a British company, merchants and clerics organised a nationwide boycott. Even the women of the shah's household stopped smoking.",
  hero: "mirzaShirazi",
  background: `
<p>In the nineteenth century, Qajar Iran was under heavy pressure from Russia and Britain, and granted many concessions to foreigners.[1]</p>
<ul>
  <li>Iranian merchants (bazaaris) could not compete with the privileges given to European merchants.[1]</li>
  <li>In 1872, a huge concession to Paul Reuter caused such outrage that the shah cancelled it.[1]</li>
  <li>On 20 March 1890, Naser al-Din Shah granted a British subject, Major G. F. Talbot, a 50-year monopoly over the production, sale and export of all Iranian tobacco.[1]</li>
</ul>`,
  people: [
    { n: "Grand Ayatollah Mirza Shirazi", r: "Senior cleric whose ruling against tobacco was widely obeyed.", img: "mirzaShirazi" },
    { n: "Bazaar merchants", r: "Who led protests in Tehran, Shiraz, Mashhad and Isfahan." },
    { n: "Naser al-Din Shah", r: "The ruler who granted, then cancelled, the concession." }
  ],
  happened: `
<p>Merchants in major cities protested against the concession, supported by the clergy.[1]</p>
<ul>
  <li>In December 1891, a fatwa (ruling) attributed to Mirza Shirazi declared the use of tobacco forbidden.[1]</li>
  <li>The boycott was widely obeyed; it was said that even the women of the shah's household stopped smoking.[1]</li>
  <li>In January 1892, the shah cancelled the concession, and the fatwa was lifted.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Tobacco Protest', on foreign concessions, the Reuter concession, the tobacco concession, the protests, the fatwa, the cancellation and its consequences.", "https://en.wikipedia.org/wiki/Tobacco_Protest"],
    ["Nikki R. Keddie, <em>Religion and Rebellion in Iran: The Tobacco Protest of 1891–1892</em> (Frank Cass, 1966).", ""]
  ],
  next: `
<ul>
  <li><strong>Compensation:</strong> Iran had to pay the company £500,000.[1]</li>
  <li><strong>Revolution:</strong> the protest is seen as one of the roots of the Constitutional Revolution of 1905–11.[1]</li>
</ul>`,
  why: `
<p>The Tobacco Protest showed how a mass boycott could defeat a foreign monopoly and a powerful ruler.</p>
<ul>
  <li>It brought merchants, clergy and ordinary consumers together.</li>
</ul>`,
  questions: [
    "Why did one concession cause such anger?",
    "Why did a religious ruling work so well?",
    "What role did ordinary consumers play?",
    "How did the protest prepare the way for the Constitutional Revolution?"
  ],
  debates: `
<h3>At the time</h3>
<p>The shah and the company saw an attack on lawful agreements; the protesters saw the sale of the country to foreigners.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Religion and nation:</strong> historians such as Nikki Keddie stress the alliance of merchants and clerics, and the role of Russian rivalry with Britain.[2]</li>
  <li><strong>Violence:</strong> the protest was mainly a boycott; there were clashes in Tehran in which some protesters were killed.[2]</li>
</ul>`,
  evidence: `
<ul>
  <li>British diplomatic reports and Persian accounts.[2]</li>
</ul>`,
  memory: `
<ul>
  <li>The boycott is remembered in Iran as an early victory against foreign economic domination.</li>
</ul>`,
  similar: [
    { id: "iran1906" }, { id: "urabi" }, { id: "saltmarch" }
  ],
  more: [
    ["read", "Nikki R. Keddie — <em>Religion and Rebellion in Iran</em> (1966)", ""],
    ["online", "Wikipedia: Tobacco Protest", "https://en.wikipedia.org/wiki/Tobacco_Protest"]
  ]
},
/* ------------------------------------------------------------------ EUREKA */
{
  id: "eureka",
  title: "The Eureka Stockade",
  place: "Ballarat, Victoria, Australia",
  date: "1851 – December 1854",
  year: 1854, lat: -37.56, lon: 143.87, theme: "vote",
  teaser: "Gold miners furious at licence hunts and a tax they could not afford swore an oath under a blue flag with white stars. Soldiers stormed their stockade — but within two years the miners had won the vote.",
  hero: "eurekaHenderson",
  background: `
<p>In 1851, gold was discovered in Victoria, and prospectors poured in.[1]</p>
<ul>
  <li>The colonial government imposed a mining licence of 30 shillings a month, charged whether or not miners found gold.[1]</li>
  <li>Police carried out frequent "licence hunts", and the system was enforced harshly.[1]</li>
  <li>Miners organised meetings and stopped paying the tax en masse.[1]</li>
  <li>In October 1854, the killing of a miner and the acquittal of the hotel keeper accused of it led to a riot in which the Eureka Hotel was burned.[1]</li>
</ul>`,
  people: [
    { n: "Peter Lalor", r: "Irish miner who led the oath and the stockade; later elected to parliament." },
    { n: "Raffaello Carboni", r: "Italian miner who wrote an account of the rebellion." },
    { n: "The Ballarat Reform League", r: "Miners' organisation that demanded the vote and an end to the licence." },
    { n: "Sir Charles Hotham", r: "Lieutenant-governor of Victoria." }
  ],
  happened: `
<p>The Ballarat Reform League demanded reforms, including the vote for all men and the abolition of the licence.</p>
<ul>
  <li>On 29 November 1854, about 10,000 people met at Bakery Hill, where the Eureka Flag was flown for the first time.[1]</li>
  <li>Peter Lalor led the swearing of an oath of allegiance to the flag, and the rebels built a stockade.[1]</li>
  <li>At dawn on 3 December, soldiers and police stormed the stockade. According to official records, 27 people died, most of them rebels.[1]</li>
  <li>Thirteen captured rebels were tried for high treason in Melbourne, but juries acquitted them all.[1]</li>
</ul>`,
  gallery: ["eurekaFlag"],
  sources: [
    ["Wikipedia, 'Eureka Rebellion', on the gold rush, the licence, the protests, the Eureka Hotel, the oath, the battle, the trials, the reforms and Peter Lalor.", "https://en.wikipedia.org/wiki/Eureka_Rebellion"],
    ["Clare Wright, <em>The Forgotten Rebels of Eureka</em> (Text Publishing, 2013).", ""]
  ],
  next: `
<ul>
  <li><strong>Democracy:</strong> reforms followed, including the vote for all adult men in elections to Victoria's Legislative Assembly and the end of property qualifications for members.[1]</li>
  <li><strong>Lalor:</strong> in 1856, Peter Lalor was elected to the Legislative Assembly.[1]</li>
</ul>`,
  why: `
<p>Eureka is often seen as a birthplace of democracy in Australia.[1]</p>
<ul>
  <li>Historian Clare Wright has shown the role of women on the goldfields in the rebellion.[2]</li>
</ul>`,
  questions: [
    "Why did the licence feel so unjust to the miners?",
    "Why did juries refuse to convict the rebels?",
    "How did a short battle lead to lasting reform?",
    "Whose story is left out of the usual account of Eureka?"
  ],
  debates: `
<h3>At the time</h3>
<p>The government saw a treasonous revolt; many colonists sympathised with the miners.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Democracy for whom?</strong> The miners won the vote for men; women, Aboriginal people and Chinese miners were left out, and the same report that recommended reform called for limits on Chinese miners.[1]</li>
  <li><strong>Violence:</strong> most of the dead were rebels killed in the storming of the stockade; some soldiers were also killed.[1]</li>
  <li><strong>The flag:</strong> the Eureka Flag has been used by unions, the left and, at times, the far right.</li>
</ul>`,
  evidence: `
<ul>
  <li>Raffaello Carboni's <em>The Eureka Stockade</em> (1855).</li>
  <li>The surviving Eureka Flag.[1]</li>
</ul>`,
  memory: `
<ul>
  <li>The Eureka Flag is displayed at the Eureka Centre in Ballarat, and the anniversary is marked each December.</li>
</ul>`,
  similar: [
    { id: "peterloo" }, { id: "newport" }, { id: "nzvote" }
  ],
  more: [
    ["read", "Clare Wright — <em>The Forgotten Rebels of Eureka</em> (2013)", ""],
    ["online", "Wikipedia: Eureka Rebellion", "https://en.wikipedia.org/wiki/Eureka_Rebellion"]
  ]
}
);
