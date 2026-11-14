window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ BAIXA DE CASSANJE */
{
  id: "cassanje",
  title: "The Baixa de Cassanje Revolt",
  place: "Baixa de Cassanje, Malanje, Angola",
  date: "January 1961",
  year: 1961, lat: -9.6, lon: 17.1, theme: "labour",
  teaser: "Angolan farmers forced to grow cotton for a colonial company refused to work and burned their identity cards. Portugal answered with air raids — and within weeks Angola's war of independence had begun.",
  hero: "malanjeMap",
  background: `
<p>Portugal had claimed Angola since the sixteenth century, but its control of the interior was established only in the early twentieth century. Under the dictatorship of António de Oliveira Salazar, Portugal insisted that its colonies were "overseas provinces" of a single nation, and refused to consider independence.</p>
<ul>
  <li>Most Africans were classified as <em>indígenas</em> (natives), without civil rights, subject to a special labour code and to forced labour.</li>
  <li>In the fertile Baixa de Cassanje, in the district of Malanje, African farmers were compelled to grow cotton for Cotonang, a company with Portuguese and Belgian capital, which bought the crop at low fixed prices. Farmers had to neglect their own food crops to meet their quotas.[1][2]</li>
  <li>Across Africa, colonies were becoming independent. In June 1960, the neighbouring Belgian Congo became independent, and news spread across the border.</li>
</ul>`,
  people: [
    { n: "António Mariano", r: "A previously unknown Angolan, sometimes said to have been a former catechist, who led the protest; the revolt is also called 'Mariano's revolt' or 'Maria's war'." },
    { n: "Kulu-Xingu", r: "Another leader of the protest." },
    { n: "The cotton farmers of the Baixa de Cassanje", r: "Thousands of Mbundu farmers who refused to cultivate cotton." },
    { n: "Cotonang", r: "The cotton company that held the monopoly on buying the crop." }
  ],
  happened: `
<p>In the closing weeks of 1960, discontent among the cotton farmers of the Baixa de Cassanje boiled over. On 4 January 1961, workers refused to work and rose in protest, led by two previously unknown Angolans, António Mariano and Kulu-Xingu.[1]</p>
<ul>
  <li>The workers burned their identification cards, which marked their status as colonial subjects.[1]</li>
  <li>Some protesters attacked Portuguese traders on company premises, and destroyed seed, property and equipment.[1]</li>
  <li>The protest became a general uprising across the area.[1]</li>
</ul>
<p>The Portuguese authorities responded with overwhelming force. The next day, the air force bombed some twenty villages in the area, killing large numbers of villagers, and troops moved in to crush the revolt. Many survivors fled into the bush or across the border.[1] The number of deaths has never been established: the MPLA independence movement later claimed some 10,000; most estimates range from 400 to as many as 7,000.[1]</p>`,
  gallery: ["malanjeCity"],
  sources: [
    ["Wikipedia, 'Strike in Baixa do Cassange', on the leaders, the burning of identity cards, the attacks on traders, the air raids, the casualty estimates and the events of February and March 1961.", "https://en.wikipedia.org/wiki/Strike_in_Baixa_do_Cassange"],
    ["Wikipedia, 'Baixa de Cassanje', on the region and the revolt as a trigger for the war of independence.", "https://en.wikipedia.org/wiki/Baixa_de_Cassanje"],
    ["Aida Freudenthal, 'A Baixa de Cassanje: algodão e revolta (1945–1961)', <em>Revista Internacional de Estudos Africanos</em> 18–22 (1995–99).", ""],
    ["John Marcum, <em>The Angolan Revolution</em>, vol. 1: <em>The Anatomy of an Explosion (1950–1962)</em> (MIT Press, 1969).", ""]
  ],
  next: `
<ul>
  <li><strong>Luanda, 4 February 1961:</strong> a month later, nationalists attacked prisons and a police station in the capital, Luanda, to free political prisoners. Reprisals by settlers and police killed many Africans in the city's musseques (shanty towns).</li>
  <li><strong>The north, 15 March 1961:</strong> an uprising in the north, linked to the UPA (later FNLA), killed some 1,000 white settlers and many Africans, including contract workers from the south. Portugal's counter-insurgency campaign that followed destroyed villages and killed many thousands of Africans.</li>
  <li><strong>War of independence:</strong> the fighting became a thirteen-year war between Portugal and three rival nationalist movements (the MPLA, FNLA and UNITA). Forced cotton cultivation was abolished in 1961, and the <em>indigenato</em> system in 1961–62.</li>
  <li><strong>Independence and civil war:</strong> after the 1974 Carnation Revolution in Portugal, Angola became independent in November 1975 — but the rival movements were already fighting a civil war that lasted, with interruptions, until 2002.</li>
</ul>`,
  why: `
<p>The Baixa de Cassanje revolt is remembered in Angola as the first great act of resistance in the struggle that led to independence. It began as a protest by farmers against forced cotton cultivation, and showed how economic exploitation lay at the heart of colonial rule.</p>
<ul>
  <li>Its brutal suppression helped to convince Angolans that independence could only be won by force.</li>
  <li>It drew international attention to Portugal's colonial policies at the United Nations.</li>
  <li>4 January is a national holiday in Angola: the Day of the Martyrs of Colonial Repression.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The Portuguese authorities claimed that the revolt was the work of foreign agitators from the Congo and of a millenarian sect. Angolan nationalists presented it as a protest against forced labour that was answered with massacre.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>How many died?</strong> Estimates vary from a few hundred to 10,000; Portuguese records are incomplete and the figure remains disputed.</li>
  <li><strong>Religion and politics:</strong> some historians emphasise the influence of prophetic religious movements from the Congo; others stress the economic grievances over cotton prices and forced labour.</li>
  <li><strong>The violence that followed:</strong> historians of the 1961 uprisings document atrocities by all sides: the killing of settler families and southern contract workers in the north in March 1961, and the much larger number of Africans killed by the Portuguese army, air force and settler militias.</li>
</ul>`,
  evidence: `
<ul>
  <li>Portuguese military and administrative records.</li>
  <li>Reports by Protestant missionaries, which reached the international press.</li>
  <li>Oral histories collected in Malanje and among refugees.</li>
</ul>`,
  memory: `
<ul>
  <li>4 January is commemorated each year in Angola as the Day of the Martyrs of Colonial Repression.</li>
  <li>Memorials to the victims have been erected in Malanje province.</li>
</ul>`,
  questions: [
    "Why do you think burning identity cards was such a powerful act?",
    "How did forced cotton cultivation affect farmers' lives?",
    "Why might the Portuguese authorities have responded with air raids?",
    "How should historians write about a war in which civilians on all sides were killed?"
  ],
  similar: [
    { id: "majimaji" }, { id: "kongowara" }, { id: "malagasy" },
    { name: "The Wiriyamu massacre (1972)", text: "A massacre of villagers by Portuguese troops in Mozambique.", url: "https://en.wikipedia.org/w/index.php?search=Wiriyamu+massacre" }
  ],
  more: [
    ["read", "John Marcum — <em>The Angolan Revolution</em>, vol. 1 (1969)", ""],
    ["online", "Wikipedia: Strike in Baixa do Cassange", "https://en.wikipedia.org/wiki/Strike_in_Baixa_do_Cassange"]
  ]
},
/* ------------------------------------------------------------------ WATHBAH */
{
  id: "wathbah",
  title: "Al-Wathbah: The Baghdad Uprising of 1948",
  place: "Baghdad, Iraq",
  date: "January 1948",
  year: 1948, lat: 33.31, lon: 44.37, theme: "freedom",
  teaser: "When Iraq's government signed a new treaty with Britain, students, workers and the urban poor of Baghdad rose up — 'the leap' — and forced it to back down.",
  hero: "baghdadLaw1948",
  background: `
<p>Iraq was created under British control after the First World War and became formally independent in 1932, under a monarchy. But the Anglo-Iraqi Treaty of 1930 kept British air bases in the country and tied Iraq closely to British interests; many Iraqis saw it as making Iraq a British protectorate in all but name.[1]</p>
<ul>
  <li>In 1947, the government began secret negotiations with Britain to renew the treaty in a revised form.[1]</li>
  <li>Iraqi society was deeply unequal. Large landowners dominated the countryside, and Baghdad's outskirts were crowded with poor migrants from the south.[1]</li>
  <li>After the Second World War, prices rose sharply and the purchasing power of workers was at a historic low; the winter of 1947–48 brought bread shortages.[1]</li>
  <li>A growing student population and new political parties, including the Iraqi Communist Party and nationalist parties, were challenging the old elite.[1]</li>
</ul>`,
  people: [
    { n: "The students", r: "Students of the Law College and other colleges in Baghdad, who began the protests." },
    { n: "The workers and the urban poor", r: "Including railway workers and residents of Baghdad's poorest districts, who joined in large numbers." },
    { n: "The Iraqi Communist Party", r: "Which organised many of the protests; its leader, Yusuf Salman Yusuf ('Fahd'), was later executed in 1949." },
    { n: "Salih Jabr", r: "The prime minister, the first Shia to hold the post, who signed the new treaty and was forced to resign." },
    { n: "The Regent, 'Abd al-Ilah", r: "Who ruled on behalf of the young King Faisal II, and disavowed the treaty." }
  ],
  happened: `
<p>Protests began in early January 1948, after the foreign minister made statements about the treaty. On 4 January, secondary school students marched to the Law College, where students joined them. Police broke up the protest with clubs and gunfire; many students were wounded and 39 were arrested, and the Law College was closed. On 6 January, students from all the colleges went on strike, and the authorities released the arrested students.[1]</p>
<p>On 16 January, it was announced that the government had signed a new treaty with Britain at Portsmouth. The protests exploded:[1]</p>
<ul>
  <li>Students launched a strike and demonstrations, supported by the Communist Party and nationalist parties.</li>
  <li>Workers, especially railway workers, and the urban poor joined the students, and the protests spread across Baghdad.</li>
  <li>The Regent announced that he would not ratify a treaty that did not meet the wishes of the people.</li>
</ul>
<p>When the prime minister returned from London on 26 January, he called for calm. On 27 January, a large crowd tried to cross the Ma'mun Bridge into western Baghdad to join the students and the railway workers. Police fired directly into the crowd with machine guns. It is estimated that 300 to 400 demonstrators were killed in the uprising as a whole.[1] Salih Jabr resigned and left the country, and the treaty was abandoned.[1]</p>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Al-Wathbah uprising', on the background, the treaty negotiations, the student protests, the events of 16–27 January, the shootings at the bridge, the casualty estimate and the aftermath.", "https://en.wikipedia.org/wiki/Al-Wathbah_uprising"],
    ["Hanna Batatu, <em>The Old Social Classes and the Revolutionary Movements of Iraq</em> (Princeton University Press, 1978).", ""],
    ["Charles Tripp, <em>A History of Iraq</em> (Cambridge University Press, 3rd edn 2007).", ""]
  ],
  next: `
<ul>
  <li><strong>Unrest continues:</strong> strikes and protests continued; in April, peasants rose in the village of Arbat. In May 1948, the government declared martial law after the outbreak of war in Palestine, ending the demonstrations.</li>
  <li><strong>Repression:</strong> the Communist Party was severely repressed, and its leader Fahd and others were executed in 1949.</li>
  <li><strong>More uprisings:</strong> further mass protests, known as the <em>intifada</em>, followed in 1952 and 1956.</li>
  <li><strong>Revolution:</strong> on 14 July 1958, army officers overthrew the monarchy; the king, the regent and Nuri al-Said were killed. The revolution was followed by decades of coups and dictatorship.</li>
</ul>`,
  why: `
<p>Al-Wathbah ("the leap") was one of the largest popular uprisings in modern Iraqi history, and it succeeded in its immediate aim: the treaty with Britain was abandoned. It brought together students, workers and the urban poor in a movement against both foreign domination and social injustice.</p>
<ul>
  <li>It showed the strength of the new urban classes and political movements that would transform Iraq.</li>
  <li>It weakened the monarchy and its British alliance, paving the way for the revolution of 1958.</li>
  <li>It remains an important memory for the Iraqi left and for later protest movements, such as the protests of 2019.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The government blamed communists and agitators, and claimed that the treaty was in Iraq's interest. The protesters saw it as a betrayal of Iraq's independence.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Treaty or hunger?</strong> Hanna Batatu and others stress that the uprising was about poverty, inequality and the price of bread as much as about the treaty.</li>
  <li><strong>The role of the communists:</strong> historians debate how far the Communist Party led the uprising, and how far it rode a wave of spontaneous anger.</li>
  <li><strong>The 1958 revolution:</strong> historians debate whether the uprisings of 1948–1956 opened the way for democracy or for the military dictatorships that followed the 1958 revolution.</li>
</ul>`,
  evidence: `
<ul>
  <li>British diplomatic reports from Baghdad.</li>
  <li>Iraqi newspapers and the leaflets of the Communist Party and other organisations.</li>
  <li>The poetry of Muhammad Mahdi al-Jawahiri, whose brother was killed in the uprising.</li>
</ul>`,
  memory: `
<ul>
  <li>The poet Muhammad Mahdi al-Jawahiri's elegy for his brother Ja'far, killed in the uprising, became one of the most famous poems of modern Iraq.</li>
  <li>Al-Wathbah has been commemorated by the Iraqi left and invoked by later protest movements.</li>
</ul>`,
  questions: [
    "Why do you think a treaty with Britain caused such anger in 1948?",
    "How did economic hardship contribute to the uprising?",
    "Why did the government back down?",
    "Did the uprisings of 1948–1956 make Iraq more democratic? Why or why not?"
  ],
  similar: [
    { id: "egypt1919" }, { id: "iran1906" }, { id: "sudan1964" },
    { name: "The 2019 Iraqi protests (Tishreen)", text: "Mass youth-led protests against corruption and sectarian politics.", url: "https://en.wikipedia.org/w/index.php?search=2019%E2%80%932021+Iraqi+protests" }
  ],
  more: [
    ["read", "Hanna Batatu — <em>The Old Social Classes and the Revolutionary Movements of Iraq</em> (1978)", ""],
    ["read", "Charles Tripp — <em>A History of Iraq</em> (2007)", ""],
    ["online", "Wikipedia: Al-Wathbah uprising", "https://en.wikipedia.org/wiki/Al-Wathbah_uprising"]
  ]
},
/* ------------------------------------------------------------------ PALESTINE 1936 */
{
  id: "palestine1936",
  title: "The Palestinian General Strike and Revolt",
  place: "Mandatory Palestine",
  date: "1936 – 1939",
  year: 1936, lat: 32.05, lon: 34.75, theme: "freedom",
  teaser: "Palestinian Arabs began a six-month general strike against British rule and Jewish immigration, which became a three-year revolt. It was crushed with great force, and violence struck Arabs, Jews and Britons alike.",
  hero: "jaffaGateSoldiers",
  background: `
<p>After the First World War, Britain governed Palestine under a League of Nations mandate. The mandate incorporated the Balfour Declaration of 1917, in which Britain promised to support "a national home for the Jewish people" in Palestine, while protecting the rights of its existing, mainly Arab population.</p>
<ul>
  <li>Jewish immigration grew rapidly in the 1930s, as Jews fled persecution in Europe, especially after the Nazis came to power in 1933. Between 1931 and 1936 the Jewish population more than doubled, from 175,000 to 370,000.[2]</li>
  <li>Arab peasants were losing land as estates were sold, often by absentee landlords, to Jewish settlement agencies; many landless people crowded into shanty towns in Jaffa and Haifa.[2]</li>
  <li>Both Palestinian Arabs and the Jewish community (the Yishuv) were developing national movements. The Yishuv was building the institutions of a future state, including a covert militia, the Haganah.[2]</li>
  <li>Violence between Arabs and Jews had recurred since 1920, including the riots of 1929. In 1935 the preacher Izz ad-Din al-Qassam, who had organised armed groups among the poor, was killed by British police.[2]</li>
</ul>`,
  people: [
    { n: "The Arab Higher Committee", r: "Formed on 25 April 1936 under the chairmanship of Amin al-Husseini, the Mufti of Jerusalem, to coordinate the strike." },
    { n: "The local national committees", r: "Committees of workers, merchants and townspeople that began and organised the strike from below." },
    { n: "The rebel bands (fasa'il)", r: "Armed groups, many of them peasants, that led the revolt in the countryside, especially in 1937–39." },
    { n: "The British authorities", r: "The mandatory government, the Palestine Police and the British Army, which suppressed the revolt." },
    { n: "The Yishuv", r: "The Jewish community in Palestine, whose people were among the victims of the revolt's violence, and whose militias were expanded during it." }
  ],
  happened: `
<p>In April 1936, after the killing of two Jews by armed Arabs and reprisal killings of two Arabs, rioting in Jaffa killed a number of Jews. Local national committees called a general strike, and on 21 April the leaders of the five main Arab parties endorsed it.[1] The Arab Higher Committee resolved to continue the strike until Britain changed its policy "in a fundamental manner". Its demands included an end to Jewish immigration, a ban on the transfer of land to Jews, and a national government responsible to a representative council.[1]</p>
<p>The strike, beginning on 19–20 April 1936, lasted until October and became one of the longest general strikes in history:[1]</p>
<ul>
  <li>Arab workers, transport and shopkeepers stopped work; the port of Jaffa was paralysed, and Arabs were called on not to pay taxes.</li>
  <li>Britain responded with heavy collective fines on villages and towns. In Jaffa, under the guise of urban renewal, the British demolished hundreds of homes in the old city.</li>
  <li>Strikers also used sabotage — throwing tacks on roads and attacking railways and the oil pipeline — and armed bands attacked British forces and Jewish settlements and travellers.</li>
</ul>
<p>The strike was called off in October 1936, after appeals by the rulers of Iraq, Saudi Arabia and Transjordan.[1] A British Royal Commission, the Peel Commission, recommended in 1937 that Palestine be partitioned. The proposal was rejected by the Arab leadership, and the revolt resumed in late 1937 as a mainly peasant-led insurgency. By 1938 rebels controlled much of the countryside and, briefly, the Old City of Jerusalem.[2]</p>
<p>The British responded with overwhelming force: collective punishment, the demolition of homes and villages, mass detention, and military courts. According to British figures, the army and police killed more than 2,000 Arabs in combat and 108 were hanged.[2] The historian Walid Khalidi estimated some 5,000 Arab dead in total, including about 1,200 killed in internal violence among Palestinians. Estimates of the number of Jews killed are up to several hundred, and many British soldiers and police were also killed.[2]</p>`,
  gallery: ["tacksCar", "jerusalemFuneral"],
  sources: [
    ["Wikipedia, 'Arab general strike' (Mandatory Palestine), on the origins of the strike, the national committees, the Arab Higher Committee and its demands, British fines and demolitions in Jaffa, and the end of the strike.", "https://en.wikipedia.org/wiki/Arab_general_strike"],
    ["Wikipedia, '1936–1939 Arab revolt in Palestine', on the background, immigration and land, the two phases of the revolt, British repression, casualty figures and consequences.", "https://en.wikipedia.org/wiki/1936%E2%80%931939_Arab_revolt_in_Palestine"],
    ["Matthew Hughes, <em>Britain's Pacification of Palestine: The British Army, the Colonial State, and the Arab Revolt, 1936–1939</em> (Cambridge University Press, 2019).", ""],
    ["Ted Swedenburg, <em>Memories of Revolt: The 1936–1939 Rebellion and the Palestinian National Past</em> (University of Minnesota Press, 1995).", ""]
  ],
  next: `
<ul>
  <li><strong>The White Paper:</strong> in May 1939, Britain issued a White Paper limiting Jewish immigration to 75,000 over five years, restricting land sales and promising an independent Palestine within ten years. It was rejected by both the Arab leadership and the Zionist movement — which saw it as closing Palestine to Jews fleeing Nazi persecution.</li>
  <li><strong>A weakened society:</strong> by one estimate, ten per cent of the adult male Arab population had been killed, wounded, imprisoned or exiled; much of the Palestinian leadership was in exile, and the society was deeply divided.</li>
  <li><strong>Strengthened Jewish forces:</strong> Britain had armed and trained Jewish auxiliaries, and the Haganah grew stronger. Jewish militant groups, notably the Irgun, carried out bombings in Arab markets that killed many civilians.</li>
  <li><strong>1948:</strong> the outcome of the revolt shaped the balance of forces in the war of 1947–49, which saw the establishment of the State of Israel and the displacement of more than 700,000 Palestinians — the Nakba.</li>
</ul>`,
  why: `
<p>The general strike and revolt of 1936–39 were the largest uprising in Palestine during British rule, and a defining event for Palestinian national identity. Ordinary townspeople and peasants sustained a six-month strike and a long rebellion against colonial rule and the loss of their land.</p>
<ul>
  <li>It is remembered by Palestinians as the "Great Revolt" and a forerunner of later struggles.</li>
  <li>It is also remembered by Israelis as a period of attacks on Jewish communities, and of the building of Jewish defence forces.</li>
  <li>The British methods used to crush it — collective punishment, home demolitions and detention without trial — were used again in later conflicts.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>Britain described the revolt as "disturbances" and the rebels as bandits and terrorists. Palestinian Arabs saw a national revolt against colonial rule and dispossession. The Zionist leadership saw an attack on the Jewish community and its right to build a national home; David Ben-Gurion acknowledged that Arabs feared growing Jewish economic power and mass immigration.</p>
<h3>Historians' debates</h3>
<ul>
  <li><strong>Violence against whom?</strong> Historians record violence in many directions: rebel attacks on British forces, on Jewish civilians and settlements, and on Arabs accused of collaboration or belonging to rival factions; British repression, including killings, torture and destruction of villages; and attacks by Jewish groups on Arab civilians. Every side has its victims, and none of these can be left out.</li>
  <li><strong>Leaders and peasants:</strong> Ted Swedenburg and others emphasise the role of peasants and the urban poor, often acting independently of — or against — the traditional Palestinian elite.</li>
  <li><strong>British methods:</strong> Matthew Hughes has documented the systematic use of collective punishment and abuse by British forces.</li>
  <li><strong>Consequences:</strong> historians debate how far the defeat of the revolt determined the outcome of 1948.</li>
</ul>`,
  evidence: `
<ul>
  <li>British government and military records, and the report of the Peel Commission (1937).</li>
  <li>Arabic newspapers, leaflets and the memoirs of participants.</li>
  <li>Hebrew newspapers and Jewish Agency records.</li>
  <li>Oral histories of Palestinian villagers, such as those collected by Ted Swedenburg.</li>
  <li>Photographs, including those of the Matson Photo Service, now in the US Library of Congress.</li>
</ul>`,
  memory: `
<ul>
  <li>The revolt is commemorated by Palestinians as a central event in their national history, and its songs and figures, such as al-Qassam, remain important symbols.</li>
  <li>In Israeli memory, the "events of 1936–39" are remembered as a time of Arab attacks and Jewish self-defence.</li>
  <li>The British use of collective punishment and emergency regulations remains the subject of public and legal debate.</li>
</ul>`,
  questions: [
    "Why do you think a general strike was chosen as the first form of protest?",
    "How did British policy try to satisfy two national movements, and why did it fail?",
    "How can historians write fairly about a conflict remembered so differently by different peoples?",
    "How did the events of 1936–39 shape what happened in 1948?"
  ],
  similar: [
    { id: "egypt1919" }, { id: "wathbah" }, { id: "maumau" },
    { name: "The Syrian general strike (1936)", text: "A fifty-day strike that won a promise of self-government from France.", url: "https://en.wikipedia.org/w/index.php?search=Syrian+general+strike+1936" }
  ],
  more: [
    ["read", "Matthew Hughes — <em>Britain's Pacification of Palestine</em> (2019)", ""],
    ["read", "Ted Swedenburg — <em>Memories of Revolt</em> (1995)", ""],
    ["read", "Tom Segev — <em>One Palestine, Complete: Jews and Arabs under the British Mandate</em> (2000)", ""],
    ["online", "Wikipedia: 1936–1939 Arab revolt in Palestine", "https://en.wikipedia.org/wiki/1936%E2%80%931939_Arab_revolt_in_Palestine"]
  ]
},
/* ------------------------------------------------------------------ IRAN 2022 */
{
  id: "iran2022",
  title: "Woman, Life, Freedom",
  place: "Saqqez, Tehran and across Iran",
  date: "September 2022 – 2023",
  year: 2022, lat: 36.25, lon: 46.27, theme: "rights",
  teaser: "The death in custody of a young Kurdish woman arrested for 'improper' hijab sparked the largest protests in Iran in decades, led by women and girls under the slogan 'Woman, Life, Freedom'.",
  hero: "berlinProtest",
  background: `
<p>After the 1979 revolution, the Islamic Republic of Iran made the hijab compulsory for women in public, and rolled back many legal rights that women had gained. Yet over the following decades Iranian women became highly educated, and many came to resent restrictions on their dress, work and lives.[1]</p>
<ul>
  <li>The "Guidance Patrol", known as the morality police, enforced the dress code, detaining women it considered improperly dressed.</li>
  <li>Iran had seen several waves of protest, including the Green Movement of 2009 and the protests of November 2019, when more than 1,500 people were reported killed.[1]</li>
  <li>Kurds, who make up around 15 per cent of the population, and other minorities such as the Baluch, faced discrimination and poverty.[1]</li>
</ul>`,
  people: [
    { n: "Mahsa (Jina) Amini", r: "A 22-year-old Kurdish woman from Saqqez, arrested in Tehran on 13 September 2022 for allegedly wearing her hijab improperly. She died in custody on 16 September." },
    { n: "Iranian women and girls", r: "Who led the protests, removing and burning headscarves and cutting their hair in public; schoolgirls demonstrated in large numbers for the first time." },
    { n: "Protesters across Iran", r: "Students, workers, shopkeepers and people from many ethnic groups, in more than a hundred cities." },
    { n: "The security forces", r: "Police, the Basij militia and the Revolutionary Guards, who suppressed the protests." },
    { n: "Narges Mohammadi", r: "An imprisoned Iranian human rights activist awarded the Nobel Peace Prize in 2023." }
  ],
  happened: `
<p>Mahsa Amini was arrested by the Guidance Patrol on 13 September 2022 while visiting Tehran from Saqqez. She collapsed in custody and was pronounced dead on 16 September. Her family and witnesses said she had been beaten; the authorities denied this.[1]</p>
<p>Protests began in Tehran while she was in hospital, and spread from her funeral in Saqqez to Kurdish cities and across Iran:[1]</p>
<ul>
  <li>Women removed and burned their headscarves and cut their hair in public. The signature slogan was "Woman, Life, Freedom" — in Kurdish, <em>Jin, Jiyan, Azadî</em> — which had its roots in the Kurdish women's movement.</li>
  <li>Students, workers, shopkeepers and schoolgirls joined in. The protests spread across social classes and regions; many came to call for the end of the Islamic Republic.</li>
  <li>The government responded with internet blackouts, mass arrests and live fire. In Zahedan, in the Baluch region, dozens of people were killed on a single day, 30 September 2022, which became known as "Bloody Friday".</li>
</ul>
<p>Human rights groups reported that at least 551 people, including 68 children, had been killed by the security forces by September 2023. An estimated 19,000–20,000 people were arrested.[1] The government also reported that dozens of members of the security forces were killed. After trials widely condemned as unfair, several protesters were executed, beginning in December 2022.[2]</p>`,
  gallery: ["leedsProtest", "copenhagenProtest"],
  sources: [
    ["Wikipedia, 'Mahsa Amini protests', on the background, Amini's arrest and death, the spread of the protests, the slogan, Zahedan, the numbers killed and arrested, and the government's response.", "https://en.wikipedia.org/wiki/Mahsa_Amini_protests"],
    ["Amnesty International and Iran Human Rights (IHRNGO), reports on the killing of protesters and the executions (2022–2024).", "https://www.amnesty.org/"],
    ["UN Independent International Fact-Finding Mission on the Islamic Republic of Iran, report to the Human Rights Council (March 2024).", ""]
  ],
  next: `
<ul>
  <li><strong>Suppression:</strong> by 2023 the street protests had largely been suppressed, but many women continued to defy the hijab law in public.</li>
  <li><strong>Executions:</strong> several protesters were executed after trials condemned by human rights organisations, and many others received long prison sentences.</li>
  <li><strong>International recognition:</strong> in 2023 the European Parliament awarded its Sakharov Prize to Mahsa Amini and the Woman, Life, Freedom movement, and the Nobel Peace Prize was awarded to the imprisoned activist Narges Mohammadi.</li>
  <li><strong>A UN finding:</strong> in 2024, a UN fact-finding mission concluded that the state's repression of the protests involved serious human rights violations, some amounting to crimes against humanity.</li>
</ul>`,
  why: `
<p>The Woman, Life, Freedom movement was the largest challenge to the Islamic Republic in decades, and one of the most important women-led movements of the twenty-first century. It placed women's bodily freedom at the centre of a demand for wider political freedom.</p>
<ul>
  <li>It united people across ethnic groups, classes and generations, and gave a central place to Kurdish and Baluch grievances.</li>
  <li>Its slogan has been taken up around the world.</li>
  <li>The everyday defiance of the hijab law that continued afterwards has changed public life in Iran.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The Iranian government described the protests as "riots" instigated by the United States, Israel and other foreign enemies, and pointed to attacks on security forces and public property. Protesters, human rights organisations and the UN described an overwhelmingly peaceful movement met with lethal force.</p>
<h3>Commentators' debates</h3>
<ul>
  <li><strong>Violence:</strong> the great majority of those killed were protesters and bystanders, many shot by security forces. There were also incidents in which members of the security forces were killed; the government used these to justify executions, though trials were widely criticised as unfair and confessions as coerced.</li>
  <li><strong>Reform or revolution?</strong> Commentators debate whether the movement sought reform of the hijab law or the overthrow of the Islamic Republic, and whether its lack of leadership was a strength or a weakness.</li>
  <li><strong>The diaspora:</strong> diaspora communities organised huge solidarity protests, but some in Iran felt that exiled voices claimed too much of the movement.</li>
</ul>`,
  evidence: `
<ul>
  <li>Videos and photographs shared on social media by protesters, despite internet shutdowns.</li>
  <li>Reports by Amnesty International, Human Rights Watch, Iran Human Rights and the UN fact-finding mission.</li>
  <li>Testimonies of detainees and families of victims.</li>
</ul>`,
  memory: `
<ul>
  <li>The anniversary of Mahsa Amini's death, 16 September, is marked by Iranians around the world.</li>
  <li>The slogan "Woman, Life, Freedom" has become a global symbol of women's rights.</li>
  <li>Songs written for the movement, such as Shervin Hajipour's "Baraye" ("For"), became anthems; Hajipour was later sentenced to prison.</li>
</ul>`,
  questions: [
    "Why do you think the death of one young woman sparked such widespread protests?",
    "What does the slogan 'Woman, Life, Freedom' mean, and why did it become so powerful?",
    "How should we weigh the government's claims about violence against the evidence gathered by human rights organisations?",
    "Can a movement that is suppressed on the streets still change a society?"
  ],
  similar: [
    { id: "iran1906" }, { id: "tunisia" }, { id: "plazademayo" },
    { name: "The Iranian Green Movement (2009)", text: "Mass protests against the disputed presidential election.", url: "https://en.wikipedia.org/w/index.php?search=2009+Iranian+presidential+election+protests" }
  ],
  more: [
    ["online", "Wikipedia: Mahsa Amini protests", "https://en.wikipedia.org/wiki/Mahsa_Amini_protests"],
    ["online", "Amnesty International: reports on Iran", "https://www.amnesty.org/"]
  ]
},
/* ------------------------------------------------------------------ KAHOʻOLAWE */
{
  id: "kahoolawe",
  title: "Protect Kahoʻolawe: Reclaiming a Sacred Island",
  place: "Kahoʻolawe, Hawaiʻi",
  date: "1976 – 1994",
  year: 1976, lat: 20.55, lon: -156.6, theme: "earth",
  teaser: "Native Hawaiian activists landed on an island the US Navy had been bombing for decades. Their campaign stopped the bombing and won the island back for the Hawaiian people.",
  hero: "kahoolaweAir",
  background: `
<p>Kahoʻolawe, the smallest of the eight main Hawaiian islands, is sacred to Native Hawaiians as a place associated with Kanaloa, god of the ocean, and has many archaeological and religious sites. After the overthrow of the Hawaiian Kingdom in 1893 and annexation by the United States in 1898, the island was leased for ranching, which badly eroded its land.[1]</p>
<ul>
  <li>After the Japanese attack on Pearl Harbor in December 1941, the US military took over Kahoʻolawe and used it as a training ground and bombing range.[1]</li>
  <li>Bombing continued throughout the Cold War and the Vietnam War. In 1965, in "Operation Sailor Hat", 500 tons of TNT were exploded on the island's shore to test the blast resistance of ships, leaving a large crater.[1]</li>
  <li>From the late 1960s, a "Hawaiian Renaissance" saw a revival of Hawaiian language, music, hula and voyaging, and a new political awareness among Native Hawaiians.[1]</li>
</ul>`,
  people: [
    { n: "George Helm", r: "A musician and activist, a leader of the Protect Kahoʻolawe ʻOhana. He was lost at sea with Kimo Mitchell in March 1977 while trying to return from the island." },
    { n: "Kimo Mitchell", r: "A park ranger and activist who disappeared with George Helm." },
    { n: "Walter Ritte and Emmett Aluli", r: "Activists among the first group to land on the island in January 1976. Aluli, a doctor, led the ʻOhana for decades." },
    { n: "Protect Kahoʻolawe ʻOhana (PKO)", r: "The organisation formed to stop the bombing and restore the island, which practises the principle of <em>aloha ʻāina</em> (love of the land)." },
    { n: "The US Navy", r: "Which used the island as a bombing range from 1941 to 1990." }
  ],
  happened: `
<p>In January 1976, more than fifty people from across the Hawaiian islands gathered on Maui with the aim of "invading" Kahoʻolawe. A small group — including Walter Ritte, Emmett Aluli and others — succeeded in landing on the island, in defiance of the Navy. They were removed and arrested.[1]</p>
<p>The landings continued:[1]</p>
<ul>
  <li>Activists repeatedly landed on the island, risking arrest and the danger of unexploded bombs. Several, including Ritte and Richard Sawyer, served jail sentences for trespass.</li>
  <li>In March 1977, George Helm and Kimo Mitchell were lost at sea while trying to return from the island; their bodies were never found. They became martyrs of the movement.</li>
  <li>The Protect Kahoʻolawe ʻOhana went to federal court to stop the bombing and to require the Navy to protect the island's cultural sites and comply with environmental laws.</li>
</ul>
<p>In 1977, a federal court allowed the bombing to continue, but ordered the Navy to prepare an environmental impact statement and survey the island's historic sites.[1] In 1980, a consent decree allowed the ʻOhana regular access to the island for religious, cultural and educational purposes, and in 1981 the entire island was placed on the National Register of Historic Places.</p>`,
  gallery: ["kahoolaweVolunteers"],
  sources: [
    ["Wikipedia, 'Kahoʻolawe', on the island's history, military use, Operation Sailor Hat, the first landings, the deaths of Helm and Mitchell, the legal cases, the end of the bombing, the transfer and the restoration.", "https://en.wikipedia.org/wiki/Kaho%CA%BBolawe"],
    ["Protect Kahoʻolawe ʻOhana, history of the movement.", "https://www.protectkahoolaweohana.org/"],
    ["Haunani-Kay Trask, <em>From a Native Daughter: Colonialism and Sovereignty in Hawaiʻi</em> (University of Hawaiʻi Press, rev. edn 1999).", ""]
  ],
  next: `
<ul>
  <li><strong>The bombing stops:</strong> after years of protest and legal action, the Navy ended live-fire training on Kahoʻolawe in 1990, following an order by President George H. W. Bush.</li>
  <li><strong>The island returned:</strong> in 1994 the whole island was transferred to the state of Hawaiʻi. The Kahoʻolawe Island Reserve was created to manage it, and the island may be used only for Native Hawaiian cultural, spiritual and subsistence purposes, restoration and education.</li>
  <li><strong>Clean-up:</strong> the Navy carried out a ten-year clean-up of unexploded ordnance, but large areas remain dangerous.</li>
  <li><strong>Restoration:</strong> volunteers plant native vegetation and hold ceremonies, including the annual Makahiki, on the island.</li>
</ul>`,
  why: `
<p>The struggle for Kahoʻolawe was a turning point in the Native Hawaiian movement. Through non-violent direct action, legal challenges and the revival of cultural practice, a small group of activists forced the US military to stop bombing a sacred island and return it to the Hawaiian people.</p>
<ul>
  <li>It brought together cultural revival and political activism under the principle of <em>aloha ʻāina</em>.</li>
  <li>It inspired the wider Hawaiian sovereignty movement.</li>
  <li>It is an example of land being returned to Indigenous stewardship.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>The Navy argued that Kahoʻolawe was essential for military training and national security. Some politicians and members of the public saw the activists as trespassers. Supporters saw the bombing as the desecration of a sacred place and a symbol of colonial domination.</p>
<h3>Historians' and commentators' debates</h3>
<ul>
  <li><strong>Sovereignty or stewardship?</strong> Some activists saw Kahoʻolawe as the first step towards Hawaiian sovereignty; others focused on cultural restoration and land protection.</li>
  <li><strong>Military presence:</strong> the struggle raised wider questions about the large US military presence in Hawaiʻi, which continue in campaigns over sites such as Pōhakuloa and the Red Hill fuel tanks.</li>
  <li><strong>The cost:</strong> the deaths of Helm and Mitchell remain a painful part of the story, and the clean-up left much of the island still contaminated.</li>
</ul>`,
  evidence: `
<ul>
  <li>Court records from the ʻOhana's lawsuits and the 1980 consent decree.</li>
  <li>Navy records on the use of the island.</li>
  <li>Photographs, films and oral histories of the activists, and the songs of George Helm.</li>
</ul>`,
  memory: `
<ul>
  <li>George Helm and Kimo Mitchell are honoured as heroes of the Hawaiian movement.</li>
  <li>The Protect Kahoʻolawe ʻOhana continues to organise trips to the island for restoration and ceremony.</li>
  <li>The struggle is celebrated in Hawaiian music and literature.</li>
</ul>`,
  questions: [
    "Why do you think the activists chose to land on the island illegally?",
    "How did the revival of Hawaiian culture help to inspire political action?",
    "Should military needs ever override the protection of sacred sites?",
    "What does it mean for land to be returned to Indigenous stewardship?"
  ],
  similar: [
    { id: "alta" }, { id: "standingrock" }, { id: "alcatraz" },
    { name: "Bastion Point (1977–78)", text: "Ngāti Whātua protesters occupied land in Auckland for 506 days.", url: "https://en.wikipedia.org/w/index.php?search=Bastion+Point" }
  ],
  more: [
    ["online", "Protect Kahoʻolawe ʻOhana", "https://www.protectkahoolaweohana.org/"],
    ["read", "Haunani-Kay Trask — <em>From a Native Daughter</em> (1999)", ""],
    ["online", "Wikipedia: Kahoʻolawe", "https://en.wikipedia.org/wiki/Kaho%CA%BBolawe"]
  ]
},
/* ------------------------------------------------------------------ KANAK */
{
  id: "kanak",
  title: "The Kanak Struggle: 'Les Événements'",
  place: "New Caledonia (Kanaky)",
  date: "1984 – 1988",
  year: 1984, lat: -21.0, lon: 165.5, theme: "freedom",
  teaser: "The Indigenous Kanak people of New Caledonia boycotted elections and set up a provisional government. Four years of violence on all sides ended in a historic peace agreement — and a debate about independence that continues.",
  hero: "tjibaouCentre",
  background: `
<p>France annexed New Caledonia, in the south-west Pacific, in 1853. The Indigenous Melanesian people, the Kanak, were dispossessed of much of their land, confined to reservations and excluded from the colonial economy. A revolt led by the High Chief Ataï in 1878 was crushed; around 200 French settlers and 1,000 Kanak were killed.[2] The Kanak population fell from around 60,000 in 1878 to 27,100 in 1921.[2]</p>
<ul>
  <li>New Caledonia also became a penal colony, and from the late nineteenth century a major producer of nickel. Settlers from France (Caldoches), and migrants from Wallis and Futuna, Asia and elsewhere, made the Kanak a minority in their own land.[2]</li>
  <li>In the 1970s, Kanak activists, inspired by decolonisation across the Pacific, began to demand independence and the return of land.</li>
  <li>In 1983, a French proposal for "enlarged autonomy" promised a referendum in 1989, but many Kanak feared that settlers and migrants would outvote them.[2]</li>
</ul>`,
  people: [
    { n: "Jean-Marie Tjibaou", r: "A former Catholic priest and ethnologist, leader of the Kanak and Socialist National Liberation Front (FLNKS). He signed the Matignon Accords in 1988 and was assassinated in 1989." },
    { n: "Éloi Machoro", r: "An FLNKS leader who famously smashed a ballot box with an axe in 1984. He was shot dead by French gendarmerie marksmen in January 1985." },
    { n: "Yeiwéné Yeiwéné", r: "Tjibaou's deputy, assassinated with him in 1989." },
    { n: "Jacques Lafleur", r: "Leader of the anti-independence party RPCR, who signed the Matignon Accords with Tjibaou." },
    { n: "Alphonse Dianou", r: "The leader of the group that took gendarmes hostage on Ouvéa in 1988, who died after the French assault." },
    { n: "Michel Rocard", r: "The French prime minister who negotiated the Matignon Accords." }
  ],
  happened: `
<p>The FLNKS was founded in 1984 to unite the independence movement.[1] In November 1984, it boycotted territorial elections, set up roadblocks across the territory and, in December, proclaimed a provisional government of Kanaky with Jean-Marie Tjibaou as president.[2] The period of conflict that followed, known as <em>les Événements</em> (the Events), saw violence on all sides:</p>
<ul>
  <li>On 5 December 1984, settlers ambushed a group of Kanak activists near Hienghène, killing ten, including two of Tjibaou's brothers. The killers were later acquitted on grounds of self-defence.</li>
  <li>Kanak activists occupied farms, and there were attacks on settlers and their property; settlers formed armed groups.</li>
  <li>In January 1985, Éloi Machoro was shot dead by French gendarmerie marksmen.</li>
  <li>The Socialist government in Paris offered a form of sovereignty in 1985, but a centre-right government elected in 1986 reversed many of the reforms and redistributed land with little regard for Kanak claims.[2] The FLNKS boycotted a 1987 referendum on independence.[1]</li>
</ul>
<p>The violence peaked in April 1988, on the island of Ouvéa. A group of FLNKS militants led by Alphonse Dianou attacked a gendarmerie, killing four gendarmes and taking others hostage in a cave.[1] The French government refused to negotiate. On 5 May, special forces stormed the cave: all the hostages were freed, two soldiers were killed, and nineteen Kanak militants died.[1] There were later allegations that some militants were killed after they had surrendered.[1]</p>`,
  gallery: ["kanakHouse", "kanakyFlag", "ouveaPlaque"],
  sources: [
    ["Wikipedia, 'Kanak and Socialist National Liberation Front', on the founding of the FLNKS, the referendum boycotts, the Ouvéa crisis, the Matignon Accords and the assassination of Tjibaou and Yeiwéné.", "https://en.wikipedia.org/wiki/Kanak_and_Socialist_National_Liberation_Front"],
    ["Wikipedia, 'New Caledonia', on the colonial history, Ataï's revolt, the population, the 1983 statute, the events of 1984–86 and the later referendums.", "https://en.wikipedia.org/wiki/New_Caledonia"],
    ["Jean-Marie Tjibaou, <em>Kanaky</em>, trans. Helen Fraser and John Trotter (Pandanus Books, 2005).", ""],
    ["David Chappell, <em>The Kanak Awakening: The Rise of Nationalism in New Caledonia</em> (University of Hawaiʻi Press, 2013).", ""]
  ],
  next: `
<ul>
  <li><strong>The Matignon Accords:</strong> in June 1988, Tjibaou and Lafleur signed the Matignon Accords, negotiated by Michel Rocard, which provided for a ten-year period of development, the rebalancing of the economy towards the Kanak-majority provinces, an amnesty, and a future referendum.</li>
  <li><strong>Assassination:</strong> on 4 May 1989, at a ceremony on Ouvéa, Tjibaou and Yeiwéné were assassinated by Djubelly Wéa, an FLNKS militant who saw the accords as a betrayal.</li>
  <li><strong>The Nouméa Accord:</strong> in 1998, a further agreement recognised Kanak identity and the "shadows" of colonisation, transferred powers to New Caledonia, and provided for up to three referendums on independence.</li>
  <li><strong>Referendums:</strong> majorities voted against independence in 2018 and 2020. The third referendum, in 2021, was boycotted by the independence movement and produced a large "No" vote, whose legitimacy the FLNKS rejected.</li>
  <li><strong>2024:</strong> a French plan to change who could vote in provincial elections sparked serious unrest in May 2024, in which more than a dozen people were killed.</li>
</ul>`,
  why: `
<p>The Kanak struggle is one of the most important Indigenous independence movements in the Pacific. It forced France to recognise the Kanak people, their identity and their claim to self-determination, and produced, in the Matignon and Nouméa accords, a rare example of a negotiated path out of colonial conflict.</p>
<ul>
  <li>It shows how Indigenous people can become a minority in their own land through colonial settlement.</li>
  <li>The accords are studied as a model of conflict resolution — though their outcome remains contested.</li>
  <li>The question of New Caledonia's future is still unresolved.</li>
</ul>`,
  debates: `
<h3>At the time</h3>
<p>Anti-independence parties and the French right described the FLNKS as terrorists and stressed attacks on settlers and gendarmes. The independence movement described a colonial system defended by force and by armed settlers, and pointed to the Hienghène ambush and the killings at Ouvéa.</p>
<h3>Historians' and commentators' debates</h3>
<ul>
  <li><strong>Violence on all sides:</strong> the period saw killings of Kanak activists by settlers and police, killings of gendarmes and settlers by Kanak militants, and the deaths at Ouvéa, where allegations of extrajudicial killings by French forces have never been fully resolved. Each community has its own martyrs.</li>
  <li><strong>The accords:</strong> some see the Matignon and Nouméa accords as a model of reconciliation; others argue that they delayed independence and entrenched the interests of settlers and nickel companies.</li>
  <li><strong>Who should vote?</strong> The question of who has the right to vote on New Caledonia's future — only long-term residents, or all French citizens living there — lies at the heart of the conflict, and was the trigger for the unrest of 2024.</li>
</ul>`,
  evidence: `
<ul>
  <li>The writings and speeches of Jean-Marie Tjibaou and other Kanak leaders.</li>
  <li>French government records, court records and the reports of inquiries into Ouvéa.</li>
  <li>Testimonies of survivors from all communities, and the film <em>L'Ordre et la Morale</em> (2011), directed by Mathieu Kassovitz, about Ouvéa.</li>
</ul>`,
  memory: `
<ul>
  <li>The Jean-Marie Tjibaou Cultural Centre in Nouméa, designed by Renzo Piano, opened in 1998 as a centre for Kanak culture.</li>
  <li>The dead of Hienghène and Ouvéa are commemorated by Kanak communities; the gendarmes and soldiers killed at Ouvéa are commemorated in France.</li>
  <li>The Kanaky flag is flown by the independence movement and its supporters across the Pacific.</li>
</ul>`,
  questions: [
    "Why did the FLNKS boycott elections and referendums?",
    "How should the violence of 1984–88 be remembered by communities with very different experiences of it?",
    "Why was Jean-Marie Tjibaou assassinated by a member of his own movement?",
    "Who should have the right to decide the future of a territory with a colonial history?"
  ],
  similar: [
    { id: "mau" }, { id: "maoripetition" }, { id: "oka" },
    { name: "The Bougainville conflict (1988–1998)", text: "A war over a copper mine and independence in Papua New Guinea.", url: "https://en.wikipedia.org/w/index.php?search=Bougainville+Civil+War" }
  ],
  more: [
    ["read", "David Chappell — <em>The Kanak Awakening</em> (2013)", ""],
    ["read", "Jean-Marie Tjibaou — <em>Kanaky</em> (2005)", ""],
    ["watch", "<em>L'Ordre et la Morale</em> (<em>Rebellion</em>, 2011), directed by Mathieu Kassovitz", ""],
    ["online", "Wikipedia: Kanak and Socialist National Liberation Front", "https://en.wikipedia.org/wiki/Kanak_and_Socialist_National_Liberation_Front"]
  ]
}
);
