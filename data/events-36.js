window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ DUBLIN LOCKOUT */
{
  id: "dublinlockout",
  title: "The Dublin Lockout",
  place: "Dublin, Ireland",
  date: "26 August 1913 – 18 January 1914",
  year: 1913, lat: 53.35, lon: -6.26, theme: "labour",
  teaser: "When 300 employers locked out some 20,000 workers to destroy a new union of the unskilled, Dublin's poorest families held out for five months, fed by food ships from British workers.",
  hero: "sackville1913",
  background: `
<p>In 1913, Dublin had some of the worst slums in Europe. In Henrietta Street, more than 830 people lived in just 15 houses, and infant mortality among the poor was 142 per 1,000 births.[1]</p>
<ul>
  <li>Unskilled workers competed every day for casual work, which usually went to whoever would accept the lowest wage.[1]</li>
  <li>James Larkin, a Liverpool docker and union organiser, founded the Irish Transport and General Workers' Union (ITGWU) in 1909 to organise them. Membership grew from 4,000 to 10,000 between 1911 and 1913.[1]</li>
  <li>Larkin used the sympathetic strike: workers striking in support of others in dispute.[1]</li>
  <li>William Martin Murphy, Ireland's leading businessman and owner of the Dublin tramways, was determined to stop the ITGWU.[1]</li>
</ul>`,
  people: [
    { n: "James Larkin", r: "Founder of the ITGWU and the leading figure of the workers' side.", img: "larkinStatue" },
    { n: "James Connolly", r: "A Marxist organiser for the ITGWU, later executed after the 1916 Rising." },
    { n: "Delia Larkin", r: "James Larkin's sister, founder of the Irish Women Workers' Union, who ran food kitchens at Liberty Hall." },
    { n: "William Martin Murphy", r: "Chairman of the Dublin United Tramway Company, who led the employers." },
    { n: "James Nolan and John Byrne", r: "Workers who died after police baton charges." },
    { n: "Constance Markievicz", r: "A nationalist who helped run the soup kitchens." }
  ],
  happened: `
<p>In July 1913, Murphy led a meeting of 300 employers who agreed to resist the ITGWU. In August, he dismissed 40 workers suspected of union membership, then 300 more.[1]</p>
<ul>
  <li>On 26 August, tram workers walked off their trams during Dublin Horse Show week. Employers across the city then locked out workers who refused to sign a pledge not to join the ITGWU.[1]</li>
  <li>About 20,000 workers were affected, with their families perhaps 100,000 people.[1][2]</li>
  <li>The Dublin Metropolitan Police baton-charged workers' rallies. Two workers, James Nolan and John Byrne, died of their injuries.[1]</li>
  <li>On 31 August, police charged crowds in Sackville Street after Larkin appeared on a hotel balcony; hundreds were injured. The day became known as Bloody Sunday.[2]</li>
  <li>The British Trades Union Congress and others sent about £150,000, including ships of food.[1]</li>
  <li>A scheme to send hungry children to the homes of British trade unionists was blocked by the Catholic Church, which feared they would lose their faith.[1]</li>
  <li>The British TUC refused to call sympathy strikes. By January 1914, starving workers began to return, many having signed the pledge.[1]</li>
</ul>`,
  gallery: ["libertyHall"],
  sources: [
    ["Wikipedia, 'Dublin lock-out', on the slums, Larkin and the ITGWU, Murphy and the employers, the baton charges, the TUC aid, the Kiddies' Scheme and the end of the dispute.", "https://en.wikipedia.org/wiki/Dublin_lock-out"],
    ["Pádraig Yeates, <em>Lockout: Dublin 1913</em> (Gill & Macmillan, 2000).", ""],
    ["Working Class History, stories on the Dublin Lockout.", "https://workingclasshistory.com"]
  ],
  next: `
<ul>
  <li><strong>The Irish Citizen Army:</strong> formed during the lockout to protect workers from the police, it fought in the Easter Rising of 1916.</li>
  <li><strong>The union survives:</strong> the ITGWU recovered and grew rapidly after 1917. Today it is part of SIPTU, Ireland's largest union.</li>
  <li><strong>Connolly</strong> was executed by the British after the Rising in 1916.</li>
</ul>`,
  why: `
<p>The lockout was a defeat in the short term, but it established the right of unskilled workers in Ireland to organise.</p>
<ul>
  <li>It linked labour to the struggle for Irish independence.</li>
  <li>It showed both the power and the limits of international working-class solidarity.</li>
</ul>`,
  questions: [
    "Why did Murphy see the ITGWU as such a threat?",
    "Why did the Catholic Church oppose the Kiddies' Scheme?",
    "Why did the British TUC send food but not strike?",
    "Was the lockout a defeat or a victory for the workers?"
  ],
  debates: `
<h3>At the time</h3>
<p>Murphy and his newspapers presented Larkin as a dangerous revolutionary. Supporters, including the writers W. B. Yeats and George Russell, attacked the employers.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Murphy:</strong> his defenders argue that he paid fair wages and accepted craft unions; critics see him as starving workers into submission.[1]</li>
  <li><strong>Violence:</strong> police baton charges caused deaths and hundreds of injuries; some strikers also attacked trams and strikebreakers.[2]</li>
  <li><strong>Larkin's leadership:</strong> some historians argue his tactics alienated potential allies.</li>
</ul>`,
  evidence: `
<ul>
  <li>The report of the 1913 Dublin Disturbances Commission.</li>
  <li>Newspapers, including Larkin's <em>Irish Worker</em> and Murphy's <em>Irish Independent</em>.</li>
  <li>Photographs and cartoons of the lockout.</li>
</ul>`,
  memory: `
<ul>
  <li>A statue of Larkin stands on O'Connell Street.</li>
  <li>The centenary in 2013 was marked by re-enactments, exhibitions and a tapestry.</li>
  <li>The lockout is the setting of James Plunkett's novel <em>Strumpet City</em> (1969).</li>
</ul>`,
  similar: [
    { id: "matchwomen" }, { id: "glasgow" }, { id: "lawrence" }
  ],
  more: [
    ["read", "Pádraig Yeates — <em>Lockout: Dublin 1913</em> (2000)", ""],
    ["read", "James Plunkett — <em>Strumpet City</em> (1969)", ""],
    ["online", "Working Class History", "https://workingclasshistory.com"],
    ["visit", "Liberty Hall and the Larkin statue, Dublin", ""]
  ]
},
/* ------------------------------------------------------------------ LUDLOW */
{
  id: "ludlow",
  title: "The Ludlow Massacre and the Colorado Coalfield War",
  place: "Ludlow, Colorado, United States",
  date: "September 1913 – April 1914",
  year: 1914, lat: 37.34, lon: -104.58, theme: "labour",
  teaser: "Striking coal miners and their families were living in a tent colony when National Guard soldiers and company guards attacked. Two women and eleven children died in a pit beneath a burning tent. The armed miners' revenge turned a strike into a war.",
  hero: "ludlowRuins",
  background: `
<p>The southern Colorado coalfields were dominated by the Colorado Fuel and Iron Company (CF&I), controlled by John D. Rockefeller Jr. from New York.[1]</p>
<ul>
  <li>Between 1884 and 1912, mining accidents killed more than 1,700 people in Colorado.[1]</li>
  <li>Miners lived in company towns, patrolled by armed guards; those who complained could be evicted.[1]</li>
  <li>In September 1913, the United Mine Workers of America called a strike for union recognition, better pay and enforcement of safety laws.[1]</li>
  <li>Evicted from company housing, strikers and their families moved into tent colonies, the largest at Ludlow, with about 1,200 people.[1]</li>
</ul>`,
  people: [
    { n: "Louis Tikas", r: "A Greek immigrant and leader of the Ludlow tent colony, killed in the attack." },
    { n: "Karl Linderfelt", r: "A National Guard lieutenant who commanded troops at Ludlow and was accused of killing Tikas." },
    { n: "Mary 'Mother' Jones", r: "A veteran union organiser who campaigned among the miners and was repeatedly arrested." },
    { n: "John D. Rockefeller Jr.", r: "The controlling owner of CF&I, widely blamed for the violence." },
    { n: "The Costa and Petrucci families", r: "Mothers and children who died in the pit beneath their tent." }
  ],
  happened: `
<p>The company hired the Baldwin–Felts Detective Agency to harass strikers. Guards shone searchlights on the tents at night, fired into them and patrolled in an armoured car with a machine gun, known to the strikers as the "Death Special". Families dug pits beneath their tents for shelter.[1]</p>
<ul>
  <li>Some strikers were also armed, and there were gun battles and killings on both sides before Ludlow.[1]</li>
  <li>The governor sent the Colorado National Guard. Mine guards were enrolled in a new unit, "Troop A", and given Guard uniforms.[1]</li>
  <li>On 20 April 1914, the Guard set up a machine gun overlooking the colony and fighting began. The battle lasted all day.[1]</li>
  <li>Louis Tikas was captured and killed. The tents were set alight. Two women and eleven children who were sheltering in a pit died of suffocation.[1][2]</li>
  <li>About 21 people were killed at Ludlow in total.[1]</li>
</ul>
<h3>The Ten Days' War</h3>
<p>In revenge, armed miners attacked mines and company buildings along a 225-mile front, fighting the Guard and killing mine guards and strikebreakers.[1] Federal troops arrived on 29 April. In all, an estimated 69 to 199 people were killed during the strike.[1]</p>`,
  gallery: ["ludlowMasses", "ludlowMonument"],
  sources: [
    ["Wikipedia, 'Ludlow Massacre', on CF&I, the Baldwin–Felts guards, the 'Death Special', Troop A, the attack, the deaths, the Ten Days' War and the overall death toll.", "https://en.wikipedia.org/wiki/Ludlow_Massacre"],
    ["Thomas G. Andrews, <em>Killing for Coal: America's Deadliest Labor War</em> (Harvard University Press, 2008).", ""],
    ["US Commission on Industrial Relations, <em>Report on the Colorado Strike</em> (1915).", ""]
  ],
  next: `
<ul>
  <li><strong>Defeat:</strong> the strike ended in December 1914 without union recognition.</li>
  <li><strong>Investigation:</strong> congressional hearings and the 1915 report of the Commission on Industrial Relations helped promote reforms such as child labour laws and the eight-hour day.[1]</li>
  <li><strong>Company unions:</strong> Rockefeller introduced a company-run "employee representation plan" instead of an independent union.</li>
  <li><strong>Courts martial:</strong> Linderfelt and other Guardsmen were acquitted.</li>
</ul>`,
  why: `
<p>Thomas G. Andrews called it the deadliest strike in US history.[1] Ludlow became a symbol of the violence that workers faced when they tried to organise.</p>
<ul>
  <li>It shows how private and state forces could act together against strikers.</li>
  <li>It also shows how violence escalated on both sides once it began.</li>
</ul>`,
  questions: [
    "Why did the miners live in tents?",
    "Who was responsible for the deaths at Ludlow?",
    "Was the miners' armed response justified?",
    "Why did the strike fail, despite public outrage?"
  ],
  debates: `
<h3>At the time</h3>
<p>The company and the Guard claimed the strikers fired first; the union called it a massacre. Rockefeller's reputation was badly damaged.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Who fired first?</strong> Accounts conflict. Later investigations and modern archaeology largely support some of the strikers' accounts.[1]</li>
  <li><strong>Violence on both sides:</strong> historians stress that armed strikers killed guards, strikebreakers and soldiers, especially in the Ten Days' War.[2]</li>
  <li><strong>Death toll:</strong> estimates for the whole conflict range from 69 to 199.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Congressional hearings and the Commission on Industrial Relations report.[3]</li>
  <li>Photographs of the colony before and after the attack.</li>
  <li>Archaeological excavations of the tent colony by the University of Denver.</li>
</ul>`,
  memory: `
<ul>
  <li>The United Mine Workers own the site and hold a memorial service there every year.[1]</li>
  <li>The site became a National Historic Landmark in 2009.[1]</li>
  <li>Woody Guthrie wrote a song about the massacre.</li>
</ul>`,
  similar: [
    { id: "matanza" }, { id: "iquique" }, { id: "lawrence" }
  ],
  more: [
    ["read", "Thomas G. Andrews — <em>Killing for Coal</em> (2008)", ""],
    ["online", "Wikipedia: Ludlow Massacre", "https://en.wikipedia.org/wiki/Ludlow_Massacre"],
    ["online", "Working Class History", "https://workingclasshistory.com"],
    ["visit", "Ludlow Massacre Memorial, Colorado", ""]
  ]
},
/* ------------------------------------------------------------------ DURBAN 1973 */
{
  id: "durban1973",
  title: "The Durban Strikes of 1973",
  place: "Durban, South Africa",
  date: "9 January – March 1973",
  year: 1973, lat: -29.86, lon: 31.02, theme: "labour",
  teaser: "Under apartheid it was illegal for Black workers to strike. In 1973, around 60,000 of them did so anyway, at more than 100 firms in Durban — reviving the Black trade union movement that would help bring down apartheid.",
  hero: "durbanHarbour",
  background: `
<p>In 1970, about 80 per cent of private-sector jobs in South Africa paid Black African workers below the poverty line, which in Durban was R18 a week. Inflation was rising.[1]</p>
<ul>
  <li>Under the Native Labour (Settlement of Disputes) Act of 1953, Black African workers were not legally "employees". They could not join registered trade unions, and strikes were illegal.[1]</li>
  <li>Instead, they had only works committees supervised by the state. By January 1973, Durban had just two.[1]</li>
  <li>Strikers risked arrest, imprisonment and, for migrant workers, deportation to the "homelands".[1]</li>
</ul>`,
  people: [
    { n: "Workers at Coronation Brick and Tile", r: "Who began the strikes on 9 January 1973." },
    { n: "Textile workers of the Frame Group", r: "Some paid between R5 and R9 a week, who staged the largest strikes." },
    { n: "Municipal workers", r: "Street cleaners and refuse collectors who brought the city's services to a halt." },
    { n: "Rick Turner", r: "A philosopher and activist linked to the workers' advice groups that grew up around the strikes; assassinated in 1978." }
  ],
  happened: `
<p>At 3am on 9 January 1973, migrant workers at the Coronation Brick and Tile works were woken by colleagues and told to meet at a sports field instead of going to work.[1]</p>
<ul>
  <li>The strikes spread from firm to firm. Workers at the Frame Group's textile mills, some paid R5 to R9 a week, demanded R20. By the end of January, every Frame textile factory in Natal had stopped.[1]</li>
  <li>On 5 February, 3,000 municipal workers struck; the next day there were 13,000.[1]</li>
  <li>Around 60,000 Black workers at more than 100 firms took part between January and March.[1]</li>
  <li>The strikes had no visible leaders. Workers gathered in crowds and refused to elect representatives who could be arrested.[2]</li>
  <li>Most employers gave wage increases. Police were present throughout but made relatively few arrests — 353 by the end of the year.[1]</li>
</ul>
<p>By the end of 1973, an estimated 100,000 Black and Indian workers had taken some form of industrial action.[1]</p>`,
  gallery: [],
  sources: [
    ["Wikipedia, '1973 Durban strikes', on wages, the labour laws, the start at Coronation, the Frame strikes, the municipal strike, the numbers and the police response.", "https://en.wikipedia.org/wiki/1973_Durban_strikes"],
    ["Institute for Industrial Education, <em>The Durban Strikes 1973: 'Human Beings with Souls'</em> (Ravan Press, 1974).", ""],
    ["South African History Online, '1973 Durban strikes'.", "https://www.sahistory.org.za"]
  ],
  next: `
<ul>
  <li><strong>New unions:</strong> independent Black unions grew in Natal and beyond, leading to the Federation of South African Trade Unions (FOSATU) in 1979.[1]</li>
  <li><strong>COSATU:</strong> in 1985, the Congress of South African Trade Unions was founded and became a central force in the struggle against apartheid.[1]</li>
  <li><strong>Reform:</strong> after the Wiehahn Commission, Black unions were legally recognised in 1979.</li>
  <li><strong>Repression:</strong> Rick Turner was banned in 1973 and murdered in 1978; his killers were never found.</li>
</ul>`,
  why: `
<p>The Durban strikes broke a decade of silence after the crushing of resistance in the 1960s, and showed that Black workers could win through collective action.</p>
<ul>
  <li>They were a form of mass civil disobedience.[1]</li>
  <li>They show the economic power of workers who had no political rights.</li>
</ul>`,
  questions: [
    "Why was it illegal for Black workers to strike?",
    "Why did workers refuse to elect leaders?",
    "Why did most employers give way?",
    "How did the strikes contribute to the end of apartheid?"
  ],
  debates: `
<h3>At the time</h3>
<p>The government blamed agitators; the police said they found no evidence of any organisation behind the strikes.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Spontaneous or organised?</strong> Historians debate the role of student activists, workers' advice bureaux and existing networks among migrant workers.[2]</li>
  <li><strong>The "Durban Moment":</strong> some historians link the strikes to a wider flowering of radical ideas in Durban, including Black Consciousness.</li>
  <li><strong>Violence:</strong> the strikes were overwhelmingly peaceful on both sides, which helped them succeed.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li><em>The Durban Strikes 1973</em>, based on interviews with workers.[2]</li>
  <li>Newspaper reports and photographs.</li>
  <li>Records of employers and the Department of Labour.</li>
</ul>`,
  memory: `
<ul>
  <li>The strikes are commemorated by COSATU and South African unions as the start of the modern labour movement.</li>
</ul>`,
  similar: [
    { id: "soweto" }, { id: "pretoria1956" }, { id: "hotautumn" }
  ],
  more: [
    ["read", "Institute for Industrial Education — <em>The Durban Strikes 1973</em> (1974)", ""],
    ["online", "Wikipedia: 1973 Durban strikes", "https://en.wikipedia.org/wiki/1973_Durban_strikes"],
    ["online", "South African History Online", "https://www.sahistory.org.za"]
  ]
},
/* ------------------------------------------------------------------ GREEN BANS */
{
  id: "greenbans",
  title: "The Green Bans",
  place: "Sydney, New South Wales, Australia",
  date: "1971 – 1974",
  year: 1971, lat: -33.86, lon: 151.21, theme: "earth",
  teaser: "Construction workers refused to build. At the request of residents, the Builders Labourers Federation banned work on 54 projects that would have destroyed bushland, historic buildings and working-class homes — and saved much of old Sydney.",
  hero: "kellysBush",
  background: `
<p>In the early 1970s, a property boom in Sydney threatened parks, old working-class neighbourhoods and historic buildings with demolition and redevelopment.[1]</p>
<ul>
  <li>The New South Wales branch of the Builders Labourers Federation (BLF), led by Jack Mundey, Bob Pringle and Joe Owens, believed workers should have a say in what they built.[1][2]</li>
  <li>The union also campaigned for women's right to work on building sites and for Aboriginal rights.[2]</li>
</ul>`,
  people: [
    { n: "Jack Mundey", r: "Secretary of the NSW BLF and the leading voice of the green bans.", img: "jackMundey" },
    { n: "The 'Battlers for Kelly's Bush'", r: "Local women in Hunters Hill who asked the union for help." },
    { n: "Bob Pringle and Joe Owens", r: "Leaders of the NSW BLF." },
    { n: "Juanita Nielsen", r: "A publisher and heiress who campaigned against development in Victoria Street, Kings Cross; she disappeared in 1975." },
    { n: "Norm Gallagher", r: "Federal leader of the BLF, who removed the NSW leadership in 1974." }
  ],
  happened: `
<p>The first green ban protected Kelly's Bush, the last undeveloped bushland in Hunters Hill. Local women had appealed to the council and the state government without success.[1]</p>
<ul>
  <li>The BLF asked them to call a public meeting. Six hundred residents asked the union to stop construction.[1]</li>
  <li>When the developer, A. V. Jennings, threatened to use non-union labour, BLF members stopped work on its other sites. The company gave up.[1]</li>
  <li>Green bans were never imposed by the union alone, only at the request of residents' groups.[1]</li>
  <li>Between 1971 and 1974, 54 bans were imposed in New South Wales.[1]</li>
  <li>They saved nineteenth-century buildings in The Rocks, Sydney's oldest neighbourhood, and stopped the Royal Botanic Gardens being turned into a car park for the Opera House.[1]</li>
  <li>Workers, residents and students occupied buildings at The Rocks in 1973; police arrested many.[2]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipedia, 'Green ban', on the BLF, Kelly's Bush, the principle of resident requests, the 54 bans, The Rocks and the Botanic Gardens, and the end of the bans.", "https://en.wikipedia.org/wiki/Green_ban"],
    ["Meredith Burgmann and Verity Burgmann, <em>Green Bans, Red Union: The Saving of a City</em> (UNSW Press, 1998; new ed. 2017).", ""],
    ["Environmental Justice Atlas (EJAtlas), on labour and community struggles over urban land.", "https://ejatlas.org"]
  ],
  next: `
<ul>
  <li><strong>The end:</strong> in 1974, the federal BLF under Norm Gallagher took over the NSW branch and expelled its leaders. The green bans ended.[1]</li>
  <li><strong>Juanita Nielsen</strong> disappeared in 1975 while campaigning against a development; she is believed to have been murdered, and no one was convicted.</li>
  <li><strong>Heritage law:</strong> the bans helped bring about the NSW Heritage Act of 1977.</li>
  <li><strong>Influence:</strong> the idea spread to Germany, where Petra Kelly cited the green bans as an influence on the Green Party.</li>
</ul>`,
  why: `
<p>The green bans showed that workers could use their power not only for wages but for the environment and the community.</p>
<ul>
  <li>They united unions with middle-class residents and environmentalists.</li>
  <li>They anticipated later ideas of a "just transition" between labour and the environment.</li>
</ul>`,
  questions: [
    "Why would construction workers refuse to build?",
    "Why did the union only act at the request of residents?",
    "What was saved by the green bans?",
    "Should unions take action over issues beyond pay and conditions?"
  ],
  debates: `
<h3>At the time</h3>
<p>Developers and the state government accused the union of holding the city to ransom. Supporters said it was protecting the city for ordinary people.[2]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Unions and democracy:</strong> critics ask whether unelected unions should decide what gets built; supporters reply that residents made the requests.[1]</li>
  <li><strong>Why it ended:</strong> historians debate how far the NSW branch was destroyed by developers, employers and its own federal union.[2]</li>
</ul>`,
  evidence: `
<ul>
  <li>Union records and the Burgmanns' interviews with participants.[2]</li>
  <li>Photographs and newspaper reports of the occupations at The Rocks.</li>
</ul>`,
  memory: `
<ul>
  <li>Plaques at The Rocks and elsewhere mark the green bans.</li>
  <li>A Sydney ferry was named after Jack Mundey, who died in 2020.</li>
</ul>`,
  similar: [
    { id: "chipko" }, { id: "barcelona1931" }, { id: "larzac" }
  ],
  more: [
    ["read", "Meredith and Verity Burgmann — <em>Green Bans, Red Union</em> (1998)", ""],
    ["online", "Wikipedia: Green ban", "https://en.wikipedia.org/wiki/Green_ban"],
    ["online", "Environmental Justice Atlas", "https://ejatlas.org"],
    ["visit", "The Rocks and Kelly's Bush, Sydney", ""]
  ]
},
/* ------------------------------------------------------------------ LIP */
{
  id: "lip",
  title: "The Lip Watch Factory Occupation",
  place: "Palente, Besançon, France",
  date: "June 1973 – 1976",
  year: 1973, lat: 47.25, lon: 6.05, theme: "labour",
  teaser: "When the owners of a famous watch factory planned mass sackings, the workers hid the stock, restarted production and sold watches to pay themselves. 'It's possible,' they said: 'we make, we sell, we pay ourselves.'",
  hero: "lipPoster",
  background: `
<p>Lip, founded in Besançon in 1867, was one of France's best-known watchmakers. In the 1960s it faced cheap competition from Asia, and the Swiss firm Ébauches SA took a stake.[1]</p>
<ul>
  <li>On 17 April 1973, the managing director resigned and the company filed for bankruptcy.[1]</li>
  <li>An action committee, inspired by May 1968, formed among the workers.[1]</li>
  <li>On 12 June, workers grabbed an administrator's briefcase and discovered plans for 480 redundancies.[1]</li>
</ul>`,
  people: [
    { n: "Charles Piaget", r: "A skilled worker and union leader (CFDT and PSU) who became the face of the struggle.", img: "charlesPiaget" },
    { n: "Jean Raguenès", r: "A Dominican priest who worked in the factory and helped lead the action committee." },
    { n: "The women workers of Lip", r: "Women made up much of the workforce and played a key role in the struggle." },
    { n: "Claude Neuschwander", r: "A businessman who restarted the company in 1974." },
    { n: "Pierre Messmer", r: "Prime minister of France, 1972–74." }
  ],
  happened: `
<p>The workers occupied the factory at Palente immediately. That night, they hid the stock of 25,000 watches in secret locations.[1]</p>
<ul>
  <li>They restarted production under their own control and sold the watches directly, at a 42 per cent discount, to pay their own wages.[1]</li>
  <li>Their slogan was: "It's possible: we make, we sell, we pay ourselves."[1]</li>
  <li>On 14 August 1973, riot police (CRS) evicted the workers from the factory and occupied it until February 1974. Workers in Besançon struck in protest, and there were clashes with police.[1]</li>
  <li>On 29 September 1973, more than 100,000 people joined a march through Besançon in support.[1]</li>
  <li>The workers rejected a government plan that involved redundancies.[1]</li>
</ul>`,
  gallery: [],
  sources: [
    ["Wikipédia (French), 'Affaire Lip', on the company's history, the bankruptcy, the discovery of the redundancy plans, the hidden watches, self-management, the eviction, the march and the later history.", "https://fr.wikipedia.org/wiki/Affaire_Lip"],
    ["Donald Reid, <em>Opening the Gates: The Lip Affair, 1968–1981</em> (Verso, 2018).", ""],
    ["Working Class History, stories on factory occupations.", "https://workingclasshistory.com"]
  ],
  next: `
<ul>
  <li><strong>A new company:</strong> in January 1974, an agreement brought in Claude Neuschwander to restart Lip and rehire the workers.</li>
  <li><strong>Collapse again:</strong> the new company failed in 1976, and the workers occupied the factory again.</li>
  <li><strong>Co-operatives:</strong> some workers later formed co-operatives to continue production.</li>
</ul>`,
  why: `
<p>Lip became the symbol of workers' self-management (<em>autogestion</em>) in 1970s Europe.</p>
<ul>
  <li>It showed workers could run production themselves.</li>
  <li>It raised questions about who should control a firm when its owners fail.</li>
</ul>`,
  questions: [
    "Why did the workers hide the watches?",
    "What does 'self-management' mean?",
    "Why did the government oppose the Lip workers?",
    "Could workers' control work in the long term?"
  ],
  debates: `
<h3>At the time</h3>
<p>Many on the left saw Lip as a model; employers and the government saw illegal sales and the seizure of stock as a threat to property.[1]</p>
<h3>Debates since</h3>
<ul>
  <li><strong>Success or failure?</strong> Lip's later collapse leads some to see it as a heroic failure; others stress the lasting influence of its ideas.[2]</li>
  <li><strong>Why it ended:</strong> some argue that the government and employers deliberately let Lip fail to prevent it becoming a model.[1]</li>
  <li><strong>Violence:</strong> the occupation itself was peaceful; clashes followed the police eviction.[1]</li>
</ul>`,
  evidence: `
<ul>
  <li>Leaflets, posters and the workers' newspaper, <em>Lip Unité</em>.</li>
  <li>Films, including Christian Rouaud's <em>Les Lip, l'imagination au pouvoir</em> (2007).</li>
</ul>`,
  memory: `
<ul>
  <li>The Lip struggle remains a reference point for French unions and for co-operatives.</li>
  <li>The Palente factory district remains a site of memory for the struggle.</li>
</ul>`,
  similar: [
    { id: "hotautumn" }, { id: "cordobazo" }, { id: "solidarity" }
  ],
  more: [
    ["read", "Donald Reid — <em>Opening the Gates: The Lip Affair, 1968–1981</em> (2018)", ""],
    ["watch", "<em>Les Lip, l'imagination au pouvoir</em> (2007)", ""],
    ["online", "Wikipédia: Affaire Lip", "https://fr.wikipedia.org/wiki/Affaire_Lip"]
  ]
}
);
