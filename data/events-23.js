window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ LA MATANZA 1932 */
{
  id: "matanza",
  title: "The 1932 Uprising and La Matanza",
  place: "Izalco, Juayúa and western El Salvador",
  date: "22 January – February 1932",
  year: 1932, lat: 13.745, lon: -89.67, theme: "freedom",
  teaser: "Indigenous peasants and communists rose against a military government in coffee country. The army's revenge killed thousands and nearly wiped out a language.",
  hero: "izalcoChurch",
  background: `
<p>In the early twentieth century, El Salvador's economy depended on coffee. Communal Indigenous lands had been abolished in the 1880s and taken over by coffee planters.</p>
<ul>
  <li>In western El Salvador, many Nahua-Pipil people worked as labourers on coffee estates for very low wages.</li>
  <li>The Great Depression caused coffee prices to collapse. Wages were cut and many workers lost their jobs.</li>
  <li>In 1930, Farabundo Martí and Miguel Mármol founded the Communist Party of El Salvador. Martí had fought alongside Augusto César Sandino against the US occupation of Nicaragua.[1]</li>
  <li>In December 1931, a military coup brought General Maximiliano Hernández Martínez to power. In January 1932, the results of local elections in which communists had done well were cancelled.[1]</li>
</ul>`,
  people: [
    { n: "Farabundo Martí", r: "A communist leader who helped plan the uprising. He was arrested before it began and executed.", img: "farabundo" },
    { n: "Feliciano Ama", r: "An Indigenous leader (cacique) in Izalco, who led Pipil rebels. He was publicly hanged." },
    { n: "Francisco Sánchez", r: "A rebel leader in Juayúa." },
    { n: "General Maximiliano Hernández Martínez", r: "The military ruler who ordered the repression and governed El Salvador until 1944." }
  ],
  happened: `
<p>On the night of 22 January 1932, communist and Indigenous rebels launched an uprising in western El Salvador.[1]</p>
<ul>
  <li>Armed mostly with machetes, rebels captured several towns, including Juayúa, Nahuizalco, Tacuba and Izalco.[1]</li>
  <li>Rebels killed a number of officials, soldiers and civilians, including the mayor of Izalco and a military commander, and some civilians were tortured and murdered.[1] Estimates of the number killed by rebels vary widely: some accounts give figures as high as 2,000, while many historians put it far lower.[1]</li>
  <li>The uprising was quickly crushed by the army within a few days.</li>
</ul>
<p>What followed was a massacre. Over the following weeks, the army, police and civilian militias killed between 10,000 and 40,000 people.[1]</p>
<ul>
  <li>Most of the victims were Pipil peasants and non-combatants, killed simply for being Indigenous.[1]</li>
  <li>Martí, Ama and other leaders were executed.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'La Matanza', on the background, the communist party, the uprising, the killings by rebels, the government repression, the death toll and the impact on the Pipil.", "https://en.wikipedia.org/wiki/La_Matanza"],
    ["Jeffrey L. Gould and Aldo A. Lauria-Santiago, <em>To Rise in Darkness: Revolution, Repression, and Memory in El Salvador, 1920–1932</em> (Duke University Press, 2008).", ""],
    ["Héctor Lindo-Fuentes, Erik Ching and Rafael A. Lara-Martínez, <em>Remembering a Massacre in El Salvador</em> (University of New Mexico Press, 2007).", ""]
  ],
  next: `
<ul>
  <li><strong>Ethnocide:</strong> the massacre has been described as an ethnocide. Afraid of being identified as Indigenous, many Pipil stopped speaking their language and wearing traditional dress. Nawat almost disappeared.[1]</li>
  <li><strong>Military rule:</strong> Hernández Martínez ruled until 1944, and the military dominated El Salvador for decades.</li>
  <li><strong>Civil war:</strong> the guerrilla movement in the civil war of 1980–92 took the name of Farabundo Martí (FMLN). The war killed about 75,000 people, most of them civilians killed by government forces and death squads.</li>
</ul>`,
  why: `
<p>La Matanza was one of the worst massacres in the history of the Americas, and a turning point for El Salvador's Indigenous peoples. For decades it was a silenced memory.</p>
<ul>
  <li>It shows how states can use a revolt as a pretext for mass killing.</li>
  <li>It shows how violence can destroy a language and culture.</li>
  <li>Its memory shaped the politics of El Salvador for the rest of the century.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The government portrayed the uprising as a communist plot of savage violence, justifying the repression. Survivors remembered it as a massacre of innocent Indigenous people.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Communist or Indigenous revolt?</strong> Historians debate how far the rising was led by the Communist Party and how far it grew from Indigenous communities' own grievances. Gould and Lauria-Santiago emphasise a broad rural movement involving both.</li>
  <li><strong>Rebel violence:</strong> the government exaggerated the rebels' violence; historians agree that rebels did kill officials and some civilians, but that the scale of killing by the state was vastly greater.</li>
  <li><strong>The death toll:</strong> estimates range from 10,000 to 40,000; the lack of records makes it impossible to be sure.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Oral histories collected from survivors decades later.</li>
  <li>Government reports, newspapers and photographs, often heavily biased.</li>
  <li>Diplomatic reports, such as those of British and US officials.</li>
</ul>`,
  memory: `
<ul>
  <li>The massacre was rarely discussed publicly for decades. Today, Indigenous organisations commemorate it each January in Izalco.</li>
  <li>In 2010, President Mauricio Funes apologised to Indigenous peoples for the massacre and other abuses.</li>
  <li>Efforts are under way to revive the Nawat language.</li>
</ul>`,
  questions: [
    "Why do you think coffee workers in western El Salvador rose up in 1932?",
    "Why was the state's response so much more violent than the uprising?",
    "How can violence destroy a language?",
    "Why did the memory of 1932 remain silent for so long?"
  ],
  similar: [
    { id: "sandino" }, { id: "guatemala1944" }, { id: "setif" }
  ],
  more: [
    ["read", "Jeffrey L. Gould and Aldo A. Lauria-Santiago — <em>To Rise in Darkness</em> (2008)", ""],
    ["read", "Roque Dalton — <em>Miguel Mármol</em> (1972), the testimony of a survivor", ""],
    ["online", "Wikipedia: La Matanza", "https://en.wikipedia.org/wiki/La_Matanza"]
  ]
},
/* ------------------------------------------------------------------ SANDINO */
{
  id: "sandino",
  title: "Sandino's War against the US Marines",
  place: "Las Segovias, northern Nicaragua",
  date: "1927 – 1934",
  year: 1927, lat: 13.63, lon: -86.47, theme: "freedom",
  teaser: "When Nicaragua's generals made peace under US supervision, one refused. Augusto César Sandino led a peasant army in a six-year guerrilla war against the US occupation.",
  hero: "sandino",
  background: `
<p>From 1912, the United States kept Marines in Nicaragua to protect governments friendly to American business and its interest in a possible canal route.</p>
<ul>
  <li>In 1926, Liberal soldiers revolted against the Conservative president Adolfo Díaz, who had been installed with US support.[1]</li>
  <li>Augusto César Sandino, a mechanic who had worked in Mexico and returned to work at an American-owned mine, joined the Liberal side, raising a force among miners and peasants in the mountainous north, Las Segovias.[1]</li>
  <li>In May 1927, the Liberal general José María Moncada agreed to a US-brokered peace, the Espino Negro accord, and his army disarmed.[1]</li>
</ul>`,
  people: [
    { n: "Augusto César Sandino", r: "A Nicaraguan mechanic and miner who led the Army for the Defence of the National Sovereignty of Nicaragua (EDSN). He was murdered in 1934.", img: "sandino" },
    { n: "The peasants and miners of Las Segovias", r: "Who made up Sandino's army and supported it with food, shelter and intelligence." },
    { n: "Farabundo Martí", r: "A Salvadoran communist who served as Sandino's secretary for a time." },
    { n: "Anastasio Somoza García", r: "The head of the US-trained National Guard, who ordered Sandino's killing and founded a dictatorship." }
  ],
  happened: `
<p>Sandino refused to accept the agreement. In July 1927 he issued a manifesto denouncing Moncada as a "country-seller" and declared war on the US occupation.[1]</p>
<ul>
  <li>On 16 July 1927, Sandino's followers attacked the US Marines and Nicaraguan National Guard at Ocotal. They were driven back with the help of one of the first dive-bombing attacks in history, which killed many of the attackers.[1]</li>
  <li>Sandino turned to guerrilla warfare, using his knowledge of the mountains. Despite repeated efforts, the Marines failed to capture him.[1]</li>
  <li>At its height, Sandino claimed 3,000 soldiers; US officials later estimated about 300.[1]</li>
  <li>The war became a cause célèbre across Latin America and among anti-imperialists worldwide.</li>
</ul>
<p>The war was brutal on both sides. US Marines and the National Guard bombed villages and burned homes suspected of supporting Sandino. Some of Sandino's units killed prisoners and civilians accused of collaborating, and attacked foreign-owned property.</p>
<p>In January 1933, US troops withdrew, after supervising the election of President Juan Bautista Sacasa.[1] Sandino agreed to a peace and to disarm most of his army.</p>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Augusto César Sandino', on his background, the Constitutionalist War, the Espino Negro accord, the battle of Ocotal, the guerrilla war, the US withdrawal and his assassination.", "https://en.wikipedia.org/wiki/Augusto_C%C3%A9sar_Sandino"],
    ["Michael J. Schroeder, The Sandino Rebellion, Nicaragua 1927–1934: A Documentary History (online archive).", "http://www.sandinorebellion.com/"],
    ["Michel Gobat, <em>Confronting the American Dream: Nicaragua under U.S. Imperial Rule</em> (Duke University Press, 2005).", ""]
  ],
  next: `
<ul>
  <li><strong>Assassination:</strong> on 21 February 1934, after dining with President Sacasa, Sandino was seized and executed by National Guard troops on the orders of Anastasio Somoza García.[1]</li>
  <li><strong>Wiwilí:</strong> the National Guard then attacked the agricultural cooperative Sandino's followers had set up at Wiwilí, killing many of its members.</li>
  <li><strong>Dictatorship:</strong> Somoza took power in 1936, and his family ruled Nicaragua for more than 40 years.[1]</li>
  <li><strong>The Sandinistas:</strong> the Sandinista National Liberation Front (FSLN), named after Sandino, overthrew the Somoza dictatorship in 1979.[1]</li>
</ul>`,
  why: `
<p>Sandino became a symbol of resistance to US intervention across Latin America. A small army of peasants and miners forced the world's rising superpower to withdraw.</p>
<ul>
  <li>His war shaped US policy, contributing to the "Good Neighbor" policy of non-intervention in the 1930s.</li>
  <li>His legacy has been claimed by very different political movements.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>US officials and the press called Sandino a bandit. Supporters across Latin America saw him as a patriot fighting imperialism.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Hero or bandit?</strong> Historians now largely see Sandino as a nationalist rebel with deep peasant support, though his forces also used terror against opponents.</li>
  <li><strong>His ideas:</strong> Sandino combined nationalism, anti-imperialism, spiritualism and support for cooperatives; historians debate how far he was a socialist. He broke with the communists, including Martí.</li>
  <li><strong>Violence:</strong> Michael Schroeder's research documents atrocities by both the Marines and National Guard and by Sandinista units, including mutilation of bodies.</li>
  <li><strong>Who owns his legacy?</strong> The FSLN claimed Sandino; critics argue that the later FSLN government of Daniel Ortega has betrayed his ideals.</li>
</ul>`,
  evidence: `
<ul>
  <li>Sandino's manifestos and letters.</li>
  <li>US Marine Corps patrol reports and National Guard records, collected in Schroeder's archive.</li>
  <li>Newspaper coverage in Latin America and the United States.</li>
</ul>`,
  memory: `
<ul>
  <li>A giant silhouette of Sandino stands above Managua.</li>
  <li>His image is seen throughout Nicaragua and in murals across Latin America.</li>
</ul>`,
  questions: [
    "Why do you think Sandino refused to accept the 1927 peace agreement?",
    "Why were US officials so keen to call him a bandit?",
    "How did support from peasants help Sandino's army survive?",
    "Can a movement's legacy be betrayed by its heirs?"
  ],
  similar: [
    { id: "matanza" }, { id: "ayala" }, { id: "panama1964" }
  ],
  more: [
    ["online", "The Sandino Rebellion: A Documentary History (Michael J. Schroeder)", "http://www.sandinorebellion.com/"],
    ["read", "Michel Gobat — <em>Confronting the American Dream</em> (2005)", ""]
  ]
},
/* ------------------------------------------------------------------ HONDURAS 1954 */
{
  id: "honduras1954",
  title: "The Great Banana Strike",
  place: "Tela, San Pedro Sula and the north coast of Honduras",
  date: "April – July 1954",
  year: 1954, lat: 15.50, lon: -88.03, theme: "labour",
  teaser: "In the original 'banana republic', 40,000 workers walked out on the American fruit companies. After 69 days, they won higher pay and the right to a union.",
  hero: "hondurasStrike",
  background: `
<p>From the early twentieth century, Honduras's economy was dominated by American banana companies — the United Fruit Company and the Standard Fruit Company. They owned vast plantations, railways and ports on the north coast and had enormous influence over the government.</p>
<ul>
  <li>Unions were banned, and workers lived in company towns under company control.</li>
  <li>In 1954, President Juan Manuel Gálvez, a former United Fruit lawyer, surprised many by introducing pro-labour measures, including an eight-hour day and extra pay for holiday work.[1]</li>
  <li>In neighbouring Guatemala, the Árbenz government's land reform was challenging United Fruit.</li>
</ul>`,
  people: [
    { n: "The banana workers", r: "Some 25,000 United Fruit workers and 15,000 Standard Fruit workers who went on strike." },
    { n: "The dockworkers of Puerto Cortés", r: "Who went on strike when their leader was dismissed." },
    { n: "Industrial workers of San Pedro Sula", r: "Who joined the strike, making it a general strike." },
    { n: "Women of the banana towns", r: "Who organised food and support for the strikers." }
  ],
  happened: `
<p>In April 1954, banana workers employed by United Fruit began a wildcat strike in Tela, mainly over pay.[1]</p>
<ul>
  <li>In May, dockworkers in Puerto Cortés demanded double pay for holiday work, as the law required. When their leader was dismissed, they went on strike.[1]</li>
  <li>The strike spread to all of United Fruit's workers — some 25,000 — and then to 15,000 workers of Standard Fruit.[1]</li>
  <li>Industrial workers in San Pedro Sula also joined, making it a remarkable labour mobilisation.[1]</li>
  <li>The strikers organised committees to keep order and distribute food; local businesses secretly gave money to support them.[1]</li>
</ul>
<p>The US Secretary of State, John Foster Dulles, claimed that Guatemalan communists were behind the strike.[1] But the United States, worried about events in Guatemala, also pressured the companies and the government to settle.[1]</p>
<p>After 69 days, the strike ended in July. Wages rose substantially, and the banana workers' union was recognised.[1]</p>`,
  gallery: ["telaPier", "fruitRailway"],
  sources: [
    ["Wikipedia, '1954 Honduras general strike', on the background, the start of the strike in Tela, its spread, the role of the Communist Party, US pressure and the outcome.", "https://en.wikipedia.org/wiki/1954_Honduras_general_strike"],
    ["Darío A. Euraque, <em>Reinterpreting the Banana Republic: Region and State in Honduras, 1870–1972</em> (University of North Carolina Press, 1996).", ""],
    ["Marvin Barahona, <em>La huelga de 1954</em> (in Spanish).", ""]
  ],
  next: `
<ul>
  <li><strong>Unions:</strong> the strike gave birth to the Honduran labour movement. Banana workers' unions became among the strongest in Central America.</li>
  <li><strong>Labour code:</strong> the government incorporated some of the workers' demands into reforms, and a labour code was adopted in 1959.[1]</li>
  <li><strong>The Guatemala coup:</strong> in June 1954, while the strike was still going on, the CIA-backed invasion of Guatemala was launched partly from Honduran territory.</li>
</ul>`,
  why: `
<p>The 1954 strike was a watershed in Honduran history. Workers in the original "banana republic" stood up to some of the most powerful corporations in the world — and won.</p>
<ul>
  <li>It shows the power of united action across workplaces.</li>
  <li>It raises questions about the power of multinational corporations in poorer countries.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The companies and the US government claimed the strike was communist-inspired. The strikers said it was about wages and dignity.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Communist influence:</strong> scholars show that the Honduran Communist Party was as much a product of the strike as its cause, and that many groups, including the Liberal Party, supported it.[1]</li>
  <li><strong>Why did the companies give in?</strong> Some historians stress the strength of the workers; others US fears of communism spreading from Guatemala.[1]</li>
  <li><strong>The strike was largely peaceful</strong>, with strikers keeping discipline; historians contrast it with violent repression elsewhere in the region.</li>
</ul>`,
  evidence: `
<ul>
  <li>Strike committee documents and newspapers.</li>
  <li>US diplomatic and company records.</li>
  <li>Oral histories of banana workers.</li>
</ul>`,
  memory: `
<ul>
  <li>The strike is commemorated by Honduran unions as the birth of the country's labour movement.</li>
  <li>The novelist Ramón Amaya Amador's <em>Prisión verde</em> (1950) depicted the lives of banana workers before the strike.</li>
</ul>`,
  questions: [
    "Why did banana workers have so little power before 1954?",
    "Why do you think the strike spread so quickly?",
    "Why did the US government both denounce the strike and push for a settlement?",
    "How much power should multinational companies have in a country?"
  ],
  similar: [
    { id: "guatemala1944" }, { id: "trinidad1937" }, { id: "iquique" }
  ],
  more: [
    ["read", "Darío A. Euraque — <em>Reinterpreting the Banana Republic</em> (1996)", ""],
    ["read", "Ramón Amaya Amador — <em>Prisión verde</em> (1950, novel)", ""],
    ["online", "Wikipedia: 1954 Honduras general strike", "https://en.wikipedia.org/wiki/1954_Honduras_general_strike"]
  ]
},
/* ------------------------------------------------------------------ PANAMA 1964 */
{
  id: "panama1964",
  title: "Martyrs' Day: The Flag Protests in Panama",
  place: "Panama City and the Canal Zone, Panama",
  date: "9 – 12 January 1964",
  year: 1964, lat: 8.97, lon: -79.54, theme: "freedom",
  teaser: "Panamanian students marched into the US-run Canal Zone to raise their country's flag. Days of fighting followed — and, in time, Panama won back its canal.",
  hero: "martyrsMonument",
  background: `
<p>Panama became independent from Colombia in 1903 with US help. Under the Hay–Bunau-Varilla Treaty, it gave the United States control of a ten-mile-wide strip across the country — the Canal Zone — "in perpetuity".[1]</p>
<ul>
  <li>The Canal Zone was effectively US territory, with its own police, schools and courts. Its American residents, the "Zonians", lived separate and privileged lives.[1]</li>
  <li>Many Panamanians resented this foreign enclave in the middle of their country.</li>
  <li>In 1963, President Kennedy agreed that Panama's flag would fly alongside the US flag in the Zone. But after his assassination, the Zone governor ordered that neither flag be flown outside some civilian buildings.[1]</li>
  <li>Angry Zonians raised US flags anyway, including at Balboa High School, where students guarded the flagpole.[1]</li>
</ul>`,
  people: [
    { n: "Students of the Instituto Nacional", r: "About 150–200 students of Panama's leading high school who marched into the Zone with their flag." },
    { n: "Ascanio Arosemena", r: "A 20-year-old student, the first Panamanian killed, who became a symbol of the martyrs." },
    { n: "Canal Zone police and US soldiers", r: "Who confronted the protesters." },
    { n: "Roberto Chiari", r: "Panama's president, who broke off diplomatic relations with the United States." }
  ],
  happened: `
<p>On 9 January 1964, 150 to 200 students from the Instituto Nacional marched into the Canal Zone to Balboa High School, carrying their school's Panamanian flag.[1]</p>
<ul>
  <li>At the flagpole, they were confronted by Zonian students and adults and by Canal Zone police. In the scuffle, the Panamanian flag was torn.[1]</li>
  <li>As news spread, thousands of Panamanians gathered at the border of the Zone. Rioting broke out; protesters threw stones, set fire to buildings and attacked US property.</li>
  <li>Canal Zone police were overwhelmed, and the US Army was called in.[1]</li>
</ul>
<p>After three days of fighting, about 22 Panamanians and four US soldiers had been killed, and hundreds were injured.[1] Some Panamanians died in a fire in a building set alight during the riots.</p>
<p>Panama broke off diplomatic relations with the United States and demanded a new treaty.</p>`,
  gallery: ["martyrsFlame", "arosemenaBuilding"],
  sources: [
    ["Wikipedia, 'Martyrs' Day (Panama)', on the background, the flag incident, the fighting, the casualties and the consequences.", "https://en.wikipedia.org/wiki/Martyrs%27_Day_(Panama)"],
    ["Alan McPherson, <em>Yankee No! Anti-Americanism in U.S.–Latin American Relations</em> (Harvard University Press, 2003).", ""],
    ["Michael L. Conniff, <em>Panama and the United States: The End of the Alliance</em> (University of Georgia Press, 3rd ed., 2012).", ""]
  ],
  next: `
<ul>
  <li><strong>Negotiations:</strong> relations were restored in April 1964, and the United States agreed to negotiate a new treaty.</li>
  <li><strong>The Torrijos–Carter Treaties:</strong> in 1977, the two countries signed treaties to transfer control of the Canal to Panama. The incident is considered a significant factor in that decision.[1]</li>
  <li><strong>Handover:</strong> Panama took full control of the Canal on 31 December 1999.</li>
  <li><strong>1989:</strong> the United States invaded Panama in December 1989 to remove General Manuel Noriega, killing hundreds of Panamanians — a reminder that US power remained.</li>
</ul>`,
  why: `
<p>The flag protests showed the strength of Panamanian nationalism and the anger caused by a foreign enclave. Students' actions helped set in motion the return of the Canal.</p>
<ul>
  <li>It shows the power of symbols, such as flags, in political struggles.</li>
  <li>It shows how young people can trigger historic change.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>Panama accused the United States of aggression and brought the matter to the Organisation of American States and the United Nations. US officials blamed Panamanian agitators and communists for the riots.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Who tore the flag?</strong> Accounts differ: Panamanians say Zonians and police tore it deliberately; some US accounts say it was torn accidentally in the scuffle.</li>
  <li><strong>Violence:</strong> US forces used live ammunition against crowds; rioters also used firearms and burned buildings. An international commission investigated, and historians continue to debate responsibility.</li>
  <li><strong>Anti-Americanism:</strong> Alan McPherson argues that the protests reflected nationalist anger at US policies rather than simple hatred of Americans.</li>
</ul>`,
  evidence: `
<ul>
  <li>The torn flag, preserved as a national relic.</li>
  <li>Photographs, newsreels and press reports.</li>
  <li>US and Panamanian government reports, and the report of the International Commission of Jurists.</li>
</ul>`,
  memory: `
<ul>
  <li>9 January is Martyrs' Day, a national day of mourning in Panama.</li>
  <li>The Avenida de los Mártires and the Monument to the Martyrs commemorate those killed.</li>
  <li>A former Canal Zone building is named after Ascanio Arosemena.</li>
</ul>`,
  questions: [
    "Why do you think a flag caused such strong feelings?",
    "Why did many Panamanians resent the Canal Zone?",
    "How did the protests contribute to the return of the Canal?",
    "When is it right for young people to break the law in protest?"
  ],
  similar: [
    { id: "sandino" }, { id: "ponce" }, { id: "egypt1919" }
  ],
  more: [
    ["read", "Alan McPherson — <em>Yankee No!</em> (2003)", ""],
    ["online", "Wikipedia: Martyrs' Day (Panama)", "https://en.wikipedia.org/wiki/Martyrs%27_Day_(Panama)"]
  ]
},
/* ------------------------------------------------------------------ CUBA 1912 */
{
  id: "cuba1912",
  title: "The Independent Party of Colour and the Massacre of 1912",
  place: "Oriente Province, Cuba",
  date: "1908 – 1912",
  year: 1912, lat: 20.02, lon: -75.82, theme: "civil",
  teaser: "Black veterans of Cuba's independence war founded a party to demand equality. When it was banned, they protested — and thousands of Afro-Cubans were massacred.",
  hero: "picLeaders",
  background: `
<p>Afro-Cubans made up a large part of the Liberation Army that fought for Cuba's independence from Spain between 1868 and 1898. The independence leader José Martí promised a nation "with all and for the good of all", without racial divisions.</p>
<ul>
  <li>But after independence in 1902, under strong US influence, Afro-Cubans were excluded from good jobs and public office, and faced racism.</li>
  <li>Most Afro-Cubans lived and worked in poverty, many on the sugar plantations of eastern Cuba.[1]</li>
  <li>In 1908, veterans led by Evaristo Estenoz and Pedro Ivonnet founded the Independent Party of Colour (Partido Independiente de Color, PIC) to demand equal rights.[1]</li>
</ul>`,
  people: [
    { n: "Evaristo Estenoz", r: "A veteran of the independence war and founder of the party, killed in 1912.", img: "estenoz" },
    { n: "Pedro Ivonnet", r: "A veteran officer and party leader, killed in 1912.", img: "ivonnet" },
    { n: "Martín Morúa Delgado", r: "An Afro-Cuban senator whose law banned parties organised on racial lines." },
    { n: "President José Miguel Gómez", r: "Who used the army against the protest." }
  ],
  happened: `
<p>The PIC quickly gained support among Afro-Cubans.[1] In 1910, Congress passed the Morúa law, which banned political parties based on race, and the party was outlawed.[1]</p>
<p>On 20 May 1912, the party's leaders launched an armed protest to demand that the ban be lifted.[1]</p>
<ul>
  <li>Several hundred rebels, mainly peasants and lightly armed, rose in Oriente Province.[1]</li>
  <li>Some rebels burned property, including the town of La Maya, and attacked stores and estates.</li>
  <li>The United States sent Marines to protect American-owned mines, railways and plantations.[1]</li>
  <li>The Cuban government and press responded with racist propaganda, portraying the rebels as savages threatening "civilisation".[1]</li>
</ul>
<p>The army, rural police and white volunteer militias then carried out massacres of Afro-Cubans, many of them not involved in the rising.[1] Estenoz was shot on 27 June and Ivonnet killed soon after.[1] Between 3,000 and 6,000 people were killed.[1]</p>`,
  gallery: ["ivonnet"],
  sources: [
    ["Wikipedia, 'War of 1912', on the background, the founding of the party, the Morúa law, the rising, US intervention, the racist response, the massacres and the death toll.", "https://en.wikipedia.org/wiki/War_of_1912"],
    ["Aline Helg, <em>Our Rightful Share: The Afro-Cuban Struggle for Equality, 1886–1912</em> (University of North Carolina Press, 1995).", ""],
    ["Alejandro de la Fuente, <em>A Nation for All: Race, Inequality, and Politics in Twentieth-Century Cuba</em> (University of North Carolina Press, 2001).", ""]
  ],
  next: `
<ul>
  <li><strong>Silence:</strong> the massacre was largely erased from Cuban history for decades.</li>
  <li><strong>Fear:</strong> it discouraged independent Afro-Cuban political organisation for a generation.</li>
  <li><strong>Revolution:</strong> after 1959, the revolutionary government declared racism abolished, but historians and Afro-Cuban activists argue that racial inequality persisted.</li>
</ul>`,
  why: `
<p>The 1912 massacre is one of the darkest episodes in Cuban history. It shows how the promise of a nation without racism was betrayed, and how Black political organisation was met with extreme violence.</p>
<ul>
  <li>It raises questions about whether banning race-based parties promotes equality or silences discrimination.</li>
  <li>It connects to wider histories of racial violence in the Americas.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>Critics argued that a party based on race would divide the nation, and that the rebels were a threat to order. The PIC argued that Afro-Cubans were already excluded, and that they needed their own voice.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>A "race war"?</strong> Aline Helg and others show that the rebellion was a limited armed protest, and that the "race war" was mainly the killing of Afro-Cubans by the state and white militias.</li>
  <li><strong>The Morúa law:</strong> historians debate whether it was a genuine attempt at racial unity or a tool to exclude Black political organisation.</li>
  <li><strong>Rebel violence:</strong> rebels destroyed property, but caused few deaths; the scale of the government's response was out of all proportion.</li>
</ul>`,
  evidence: `
<ul>
  <li>Cuban newspapers of the time, which reveal racist attitudes.</li>
  <li>US military and diplomatic records.</li>
  <li>Photographs, including some of executions and their victims.</li>
</ul>`,
  memory: `
<ul>
  <li>Afro-Cuban activists and historians have worked to recover the memory of 1912, especially around its centenary in 2012.</li>
  <li>The filmmaker Gloria Rolando's documentary <em>1912: Breaking the Silence</em> (2010–12) helped bring the story to light.</li>
</ul>`,
  questions: [
    "Why did Afro-Cuban veterans feel betrayed after independence?",
    "Was it right to ban political parties based on race?",
    "Why was the government's response so violent?",
    "Why do you think the massacre was forgotten for so long?"
  ],
  similar: [
    { id: "morantbay" }, { id: "haiti" }, { id: "palmares" }
  ],
  more: [
    ["read", "Aline Helg — <em>Our Rightful Share</em> (1995)", ""],
    ["online", "Wikipedia: War of 1912", "https://en.wikipedia.org/wiki/War_of_1912"]
  ]
},
/* ------------------------------------------------------------------ GUADELOUPE 1967 */
{
  id: "guadeloupe1967",
  title: "Mé 67: The Pointe-à-Pitre Massacre",
  place: "Pointe-à-Pitre and Basse-Terre, Guadeloupe",
  date: "March – May 1967",
  year: 1967, lat: 16.24, lon: -61.53, theme: "labour",
  teaser: "Construction workers struck for a 2.5 per cent pay rise. When negotiations broke down, French police opened fire. The official toll was 7 dead; decades later France admitted at least 87.",
  hero: "victoirePAP",
  background: `
<p>Guadeloupe, a former French slave colony in the Caribbean, became an overseas department of France in 1946. But deep inequalities remained between the white elite and the Black majority, descendants of enslaved Africans.[1]</p>
<ul>
  <li>Much of the land and business was owned by white families, while many Black Guadeloupeans faced poverty and unemployment.</li>
  <li>Inspired by decolonisation movements elsewhere, independence groups such as GONG (the Guadeloupe National Organisation Group) formed. The French government was not willing to negotiate.[1]</li>
  <li>On 20 March 1967, a white shop owner in Basse-Terre, a local leader of the Gaullist party, set his dog on an elderly, disabled Black shoemaker, Raphaël Balzinc, using a racist insult. The incident sparked riots in Basse-Terre and Pointe-à-Pitre.[1]</li>
</ul>`,
  people: [
    { n: "The construction workers", r: "Who went on strike on 24 May 1967 for a 2.5 per cent pay rise and equal social rights." },
    { n: "Jacques Nestor", r: "A GONG activist, the first person killed on 26 May." },
    { n: "The young people of Pointe-à-Pitre", r: "Many of whom were killed or injured over two days." },
    { n: "The gendarmes and riot police", r: "French security forces sent to the island, who opened fire." }
  ],
  happened: `
<p>On 24 May 1967, construction workers went on strike for a 2.5 per cent pay rise and parity in social rights with mainland France.[1]</p>
<p>On 26 May, a crowd gathered outside the Chamber of Commerce in Pointe-à-Pitre during negotiations.[1]</p>
<ul>
  <li>When news came that talks had broken down, a rumour spread that an employers' representative had said that when Black people were hungry, they would go back to work.[1]</li>
  <li>Gendarmes fired tear gas; demonstrators threw conch shells, stones and bottles.[1]</li>
  <li>After a gendarme was seriously injured, the mobile gendarmerie opened fire, killing Jacques Nestor.[1] The authorities claimed that demonstrators fired first.[1]</li>
  <li>Shooting continued into the night and the next day, as security forces fired on young people in the streets.</li>
</ul>
<p>The official toll at the time was 7 or 8 dead.[1] More than 30 gendarmes and riot police were injured.[1] In 1985, a French minister for overseas territories acknowledged a toll of at least 87. Most estimates put the number of dead between 80 and 200.[1]</p>`,
  gallery: ["darsePAP"],
  sources: [
    ["Wikipedia, '1967 Guadeloupe riots', on the background, the March incident, the strike, the events of 26–27 May, the casualties and commemorations.", "https://en.wikipedia.org/wiki/1967_Guadeloupe_riots"],
    ["Raymond Gama and Jean-Pierre Sainton, <em>Mé 67: mémoire d'un événement</em> (Société guadeloupéenne d'édition et de diffusion, 1985; new ed. 2011).", ""],
    ["Benjamin Stora et al., report of the Commission d'information et de recherche historique sur les événements de décembre 1959 en Martinique, de mai 1967 en Guadeloupe et de mars 1974 en Martinique (2016).", ""]
  ],
  next: `
<ul>
  <li><strong>Trials:</strong> independence activists, rather than security forces, were put on trial in Paris for endangering state security; most were acquitted or given light sentences.</li>
  <li><strong>Silence:</strong> many archives were destroyed or remained classified, making it hard to establish the truth.[1]</li>
  <li><strong>Inquiry:</strong> in 2016, a commission of historians led by Benjamin Stora examined the events, but was unable to establish a definitive death toll.</li>
  <li><strong>Strikes continue:</strong> in 2009, a general strike against the high cost of living paralysed Guadeloupe for 44 days.</li>
</ul>`,
  why: `
<p>Mé 67 is a key event in the history of Guadeloupe and of France's overseas territories. It shows how a labour dispute, in a society shaped by slavery and racism, could become a massacre.</p>
<ul>
  <li>It raises questions about how states account for violence by their own forces.</li>
  <li>It remains central to Guadeloupean identity and the independence movement.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The French authorities blamed independence agitators for the violence. Guadeloupeans saw it as a colonial massacre.</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Who fired first?</strong> The authorities said demonstrators opened fire; most witnesses and historians dispute this.[1]</li>
  <li><strong>A planned massacre?</strong> Some sources argue that the use of lethal force was approved in Paris; this is disputed.[1]</li>
  <li><strong>Violence by demonstrators:</strong> demonstrators threw stones and conch shells and injured more than 30 security officers, but the response with live ammunition was out of all proportion.[1]</li>
  <li><strong>The death toll:</strong> because of destroyed archives, the toll remains uncertain.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Survivors' testimonies collected since the 1980s.</li>
  <li>The archives that survive, some of which have since been opened to researchers.</li>
  <li>Press reports and photographs.</li>
</ul>`,
  memory: `
<ul>
  <li>A mural in Pointe-à-Pitre commemorates the victims, painted in 2007.[1]</li>
  <li>Commemorations in 2017, on the fiftieth anniversary, demanded the opening of classified archives.[1]</li>
  <li>The events are remembered in Guadeloupean music and literature.</li>
</ul>`,
  questions: [
    "Why do you think a small pay dispute led to such violence?",
    "Why was the official death toll so low?",
    "Why does it matter to establish the true number of deaths?",
    "How should France account for violence in its overseas territories?"
  ],
  similar: [
    { id: "curacao1969" }, { id: "setif" }, { id: "malagasy" }
  ],
  more: [
    ["online", "Wikipedia: 1967 Guadeloupe riots", "https://en.wikipedia.org/wiki/1967_Guadeloupe_riots"],
    ["read", "Raymond Gama and Jean-Pierre Sainton — <em>Mé 67</em> (in French)", ""]
  ]
}
);
