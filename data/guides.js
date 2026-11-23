/* Issue guides: short guides to one idea or practice, drawing on stories across the site.
   Footnotes [n] refer to the guide's sources. Story notes are drawn from the stories themselves, which give their own sources. */
window.GUIDES = [
{
  id: "enclosure",
  title: "Enclosure: Who Owns the Land?",
  short: "Enclosure",
  teaser: "For centuries, land that villagers shared — to graze animals, gather fuel and grow food — was fenced off and made private. People tore down the hedges, dug the commons and trespassed on the moors. The question of who owns land, and who may use it, is still with us.",
  level: "",
  heroStory: "kett",
  intro: "This is the story of a fence: who put it up, who tore it down, and what happened to the people on either side. It begins in the open fields of medieval England and ends on the shores of a lake in Cambodia. Each chapter can be read on its own, and each leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "what", title: "The land everyone shared", when: "Medieval England", hero: "kett",
      kicker: "Open fields, common rights, and the 'waste' that kept the poorest alive.",
      html: `<p>For most of the Middle Ages, an English village did not look like the countryside we know. There were few hedges. Villagers farmed scattered strips in great <strong>open fields</strong>, and once the harvest was in, the fields became common again, so that everyone's animals could graze on the stubble.[1]</p>
<p>Beyond the fields lay the <strong>common</strong> and the 'waste': rough ground where people had customary rights to graze a cow, cut turf or gather wood. For the poorest — the cottagers and landless labourers — these rights could be the difference between getting by and going under.[1]</p>
<p>None of this was written down as ownership in the modern sense. It was custom, remembered and defended. And it was custom that <strong>enclosure</strong> would sweep away: the land was fenced, hedged or walled, and taken into private hands, and the commoners lost their rights to use it.[1]</p>` },
    { id: "sheep", title: "Sheep that devour men", when: "1490s–1640s", hero: "germanpeasants",
      kicker: "Wool made enclosure profitable — and villagers answered by pulling down the hedges.",
      html: `<p>In Tudor England, wool paid. Landlords who turned their fields over to sheep could raise their rents; tenant farmers who enclosed could improve their land. The justification, then as later, was efficiency.[1] But a field of sheep needs few hands, and villages emptied.</p>
<p>In 1516 Thomas More, in his <em>Utopia</em>, put it in an image that has never been forgotten. Sheep, once 'so meek and tame', had become so wild, he wrote in the first English translation, that they 'eat up, and swallow down the very men themselves'.[8]</p>
<p>The people affected did not simply accept it. Historians call enclosure riots the pre-eminent form of social protest in England from the 1530s to the 1640s.[1] In the German lands, the peasants who rose in 1525 demanded back the woods and pastures their lords had taken. In Norfolk in 1549, villagers tearing down a landlord's fences found a leader in Robert Kett, and thousands camped outside Norwich. In 1607 the Midland Revolt, led by a tinker who called himself 'Captain Pouch', ended at Newton in Northamptonshire, where forty or fifty people were killed and the leaders were hanged.[4]</p>`,
      stories: [
        { id: "germanpeasants", note: "Europe's largest popular rising before the French Revolution, and a printed list of demands that included the return of common land." },
        { id: "kett", note: "A farmer pulled down his own fences and led a rebel camp that ran its own affairs for six weeks." }
      ] },
    { id: "diggers", title: "A common treasury", when: "1649", hero: "diggers",
      kicker: "In the year the king was executed, a few poor families began to dig.",
      html: `<p>The civil wars of the 1640s turned the world upside down, and for a moment it seemed that anything could be questioned — even who owned the earth.</p>
<p>In April 1649, a small group of poor men and women went to St George's Hill in Surrey and began to dig and plant the common land. They did not tear down fences; they simply acted as though the land was already theirs to use. Their spokesman, Gerrard Winstanley, wrote that the earth had been made 'a common treasury for all'. Local landowners organised gangs to beat them and burn their houses; by April 1650 the last colony, near Cobham, had been pulled down. Their ideas outlasted them.</p>`,
      stories: [ { id: "diggers", note: "The full story of the Diggers, their writings and their defeat." } ] },
    { id: "acts", title: "Enclosure by Act of Parliament", when: "1750s–1914", hero: "swing",
      kicker: "Thousands of Acts, millions of acres — and a rhyme about a goose.",
      html: `<p>In the eighteenth century, enclosure stopped being something done in defiance of the law and became something done by it. By the 1750s, the usual method was an Act of Parliament. Between 1604 and 1914, more than 5,200 enclosure Acts were passed, covering some 28,000 square kilometres — about a fifth of England.[1][2]</p>
<p>Commissioners came to each parish and redrew its map. Common rights were extinguished, and the land was shared out among those who could claim it, in fenced and hedged fields — the patchwork of straight hedges that much of the English countryside still shows.</p>
<p>The bitterness was caught in an anonymous rhyme that is still quoted:[1]</p>
<blockquote class="gd-rhyme"><p>The law locks up the man or woman<br>Who steals the goose from off the common<br>But lets the greater villain loose<br>Who steals the common from off the goose.</p></blockquote>
<p>Without the common, labourers depended entirely on wages. When, in 1830, threshing machines took away their winter work as well, farm workers across southern England rose in the Swing Riots.</p>`,
      stories: [ { id: "swing", note: "Machine-breaking, letters signed by a mythical 'Captain Swing', and the hangings and transportations that followed." } ] },
    { id: "clearances", title: "The Clearances", when: "1750–1880s", hero: "crofters",
      kicker: "In the Scottish Highlands, whole communities were moved off the land.",
      html: `<p>In the Highlands, the process went further and faster. Between about 1750 and 1860, landlords evicted large numbers of tenants to make way for sheep farming, and later for deer forests. Families were moved to the coast or onto poor land; many had little choice but to emigrate.[3]</p>
<p>A century on, their descendants fought back. In the 1880s, crofters on Skye refused their rents, occupied land and fought the police. Their land league won them, in law, the security that their ancestors had lacked: the right not to be evicted.</p>`,
      stories: [ { id: "crofters", note: "The Battle of the Braes, the Glendale land war, and the law that ended the clearances." } ] },
    { id: "roam", title: "The right to roam", when: "1932", hero: "kinder",
      kicker: "When the land was gone, people fought for the right simply to walk on it.",
      html: `<p>By the twentieth century, the open moors of northern England were private grouse shoots, kept by gamekeepers. For the people of Manchester and Sheffield, crowded into industrial cities, the hills on the horizon were out of bounds.</p>
<p>In April 1932, hundreds of young walkers set out to trespass on Kinder Scout, deliberately and in public. Several were jailed. The trespass became a landmark in the long campaign for access to the countryside — a reminder that the question of enclosure was not only about who could farm the land, but who could set foot on it.</p>`,
      stories: [ { id: "kinder", note: "The mass trespass, the scuffles with gamekeepers and the prison sentences that made it famous." } ] },
    { id: "world", title: "The same story, elsewhere", when: "1880s–today", hero: "chipko",
      kicker: "Colonial rule, state forests and 'land grabbing': enclosure went global.",
      html: `<p>The pattern did not stay in Britain. Across the world, land that people had used in common was taken into private or state hands — very often under colonial rule, and often by declaring that land used under custom belonged to no one.</p>
<p>The resistance took many forms. Māori at Parihaka ploughed the settlers' fields and rebuilt their own fences. Gurindji workers in Australia walked off a cattle station on their own country. Village women in the Himalayas put themselves between the loggers and the trees. In Mexico, the Zapatistas rose after the constitution was changed to allow communal land to be sold.</p>
<p>The story is not over. Since the world food price crisis of 2007–08, 'land grabbing' has come to describe the large-scale purchase or lease of land by companies, governments and investors, often taken from people who depend on it.[5] In Phnom Penh, a lake was leased to a company for 99 years and filled with sand; the women who resisted the evictions were jailed.</p>`,
      stories: [
        { id: "parihaka", note: "Peaceful resistance to land confiscation in Aotearoa New Zealand, and the troops who ended it." },
        { id: "wavehill", note: "A strike over pay that became the foundation of the Aboriginal land rights movement." },
        { id: "chipko", note: "Village women who hugged the trees, and forced a ban on commercial felling." },
        { id: "zapatistas", note: "An Indigenous rising on the day the North American Free Trade Agreement came into force." },
        { id: "boeungkak", note: "Evictions from Boeung Kak Lake, and the women who went to prison for resisting them." }
      ] },
    { id: "debate", title: "Who was right?", when: "The argument", hero: "", img: "gdCommon",
      kicker: "Progress or theft? Tragedy or triumph of the commons? The argument has never been settled.",
      html: `<p>Supporters of enclosure argued that private ownership made farming more productive, and that it was needed to feed a growing population.[1] Its critics saw something else. The historians John and Barbara Hammond wrote that enclosure was 'fatal to three classes: the small farmer, the cottager and the squatter'.[1] For many Marxist historians it was a founding act of capitalism — separating people from the land, so that they had nothing to live on but their wages.[1]</p>
<p>In 1968 the ecologist Garrett Hardin gave the case for enclosure a new name: 'the tragedy of the commons'. Anything held in common, he argued, will be overused until it is ruined. The political economist Elinor Ostrom spent her career studying communities that had managed shared fields, forests and fisheries successfully for centuries, and won the Nobel Prize for it; some economists see her work as an answer to Hardin.[6]</p>
<p>The idea of the commons has also found new life. Free software and Wikipedia are often described as commons: shared resources, made and kept by the people who use them.[7]</p>
<p>So the questions that the hedge-breakers asked remain open. Who gained from enclosure, and who lost? Was it progress — and if so, for whom? And what is left in common today, and who is looking after it?</p>` }
  ],
  sources: [
    ["Wikipedia, 'Enclosure', on open fields, common rights, the justification, parliamentary enclosure, enclosure riots, the poem and historians' views.", "https://en.wikipedia.org/wiki/Enclosure"],
    ["Wikipedia, 'Inclosure Acts'.", "https://en.wikipedia.org/wiki/Inclosure_Acts"],
    ["Wikipedia, 'Highland Clearances'.", "https://en.wikipedia.org/wiki/Highland_Clearances"],
    ["Wikipedia, 'Midland Revolt'.", "https://en.wikipedia.org/wiki/Midland_Revolt"],
    ["Wikipedia, 'Land grabbing'.", "https://en.wikipedia.org/wiki/Land_grabbing"],
    ["Wikipedia, 'Tragedy of the commons'.", "https://en.wikipedia.org/wiki/Tragedy_of_the_commons"],
    ["Wikipedia, 'Commons'.", "https://en.wikipedia.org/wiki/Commons"],
    ["Thomas More, Utopia (1516), Book I, in Ralph Robinson's translation of 1551 (Luminarium).", "https://luminarium.com/renlit/utopiaenclosures.htm"]
  ]
},
{
  id: "serfdom",
  title: "Serfdom: Bound to the Land",
  short: "Serfdom",
  teaser: "For a thousand years, millions of Europeans were born tied to a lord and a patch of land they could not leave. They rose again and again — in England, France, Hungary, Croatia and across Russia — until serfdom was finally abolished, country by country, between the fourteenth century and the nineteenth.",
  level: "",
  heroStory: "peasants",
  intro: "This is the story of people who were neither slaves nor free. It follows serfdom from the manors of medieval England to the estates of imperial Russia, through the risings that tried to end it and the laws that finally did. Each chapter can be read on its own, and each leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "bound", title: "Neither slave nor free", when: "The Middle Ages", hero: "jacquerie",
      kicker: "What a serf owed, what a serf was owed — and why a serf could not simply leave.",
      html: `<p>A serf worked for the lord of the manor. In return the lord gave protection, justice, and the right to farm certain strips of land for the serf's own family. The serf's duties went beyond the fields, to work in the lord's forests and mines and on the roads.[1]</p>
<p>Serfs were not slaves: they could not be bought or sold one by one. But they could be sold along with the land, and a serf could not leave that land without the lord's permission.[1] The condition was inherited. A child born to serfs was a serf.</p>
<p>For most of the people who lived under it, this was simply the way the world was arranged. It took a catastrophe to make them question it.</p>` },
    { id: "plague", title: "After the Black Death", when: "1347–1381", hero: "peasants",
      kicker: "The plague killed millions — and suddenly the survivors' labour was worth more.",
      html: `<p>The Black Death reached Europe in 1347 and killed on a scale that disrupted everything.[1] With so many dead, those who were left could ask for higher wages and better terms. Lords and governments tried to stop them. In England, the Ordinance of Labourers of 1349 and the Statute of Labourers of 1351 fixed wages at the old levels and limited workers' freedom to move in search of better pay.</p>
<p>In France in 1358, after the nobility had lost a war and their king, peasants north of Paris rose against lords who still demanded their labour and money. The rising was crushed, but its name — the Jacquerie — became the word for a peasant revolt.</p>
<p>In England in 1381, a new poll tax, levied on rich and poor alike, was the last straw.[2] Tens of thousands marched on London and demanded an end to serfdom. Their preachers asked a question that went to the root of the system:[3]</p>
<blockquote class="gd-rhyme"><p>When Adam delved and Eve span,<br>Who was then the gentleman?</p></blockquote>
<p>The young King Richard II promised them freedom, and broke his word once they had gone home. But the poll tax was dropped, the wage laws were enforced less strictly, and over the following generations peasants went on buying their way out of serfdom.[2]</p>`,
      stories: [
        { id: "jacquerie", note: "The French rising of 1358, and how its name passed into the language." },
        { id: "peasants", note: "Wat Tyler, John Ball and the days when the government of England was at the rebels' mercy." }
      ] },
    { id: "second", title: "The second serfdom", when: "1500s–1600s", hero: "gubec",
      kicker: "As serfdom faded in the west, it tightened its grip in the east.",
      html: `<p>In western Europe, serfdom slowly withered. In central and eastern Europe the opposite happened. Lords bound their peasants more tightly to the land — historians often link this to the profits to be made selling grain to the west — and serfdom became the dominant way of life there from around the fifteenth century — a change historians call the 'second serfdom'.[1]</p>
<p>It did not go unresisted. In Hungary in 1514, peasants called up for a crusade turned their weapons on the nobles; after their defeat, new laws strengthened the nobility, and serfdom there lasted until 1848. In the German lands in 1525, peasants armed with the new ideas of the Reformation printed their demands as the Twelve Articles. In Croatia and Slovenia in 1573, serfs rose against a cruel baron and planned a world without nobles. All three risings were crushed.</p>`,
      stories: [
        { id: "dozsa", note: "A crusading army that turned against the nobility, and the harsh laws that followed its defeat." },
        { id: "germanpeasants", note: "Europe's largest popular rising before the French Revolution, and its printed manifesto of rights." },
        { id: "gubec", note: "Matija Gubec's rising, crushed in twelve days and remembered for centuries." }
      ] },
    { id: "russia", title: "Russia's great peasant wars", when: "1670–1775", hero: "pugachev",
      kicker: "In Russia, serfdom came to look like slavery in all but name.",
      html: `<p>Nowhere did serfdom go further than in Russia. Over time it became, in practice, a form of slavery, though it was still called serfdom.[1] Serfs could be moved, punished and sold with the estates they lived on.</p>
<p>Twice, the serfs of the Volga rose in numbers that threatened the state itself. In 1670 a Cossack raider, Stenka Razin, gathered runaway serfs and the poor into an army that took city after city, before he was betrayed and executed in Red Square. A century later, in 1773, a Cossack deserter named Yemelyan Pugachev claimed to be the murdered Tsar Peter III and proclaimed the end of serfdom. Cossacks, serfs, factory workers and Bashkirs joined him, in the largest peasant war in Russian history.</p>`,
      stories: [
        { id: "razin", note: "A rebel army on the Volga, and the songs that kept Razin's name alive." },
        { id: "pugachev", note: "A false tsar, a real promise of freedom, and the brutal end of the rising." }
      ] },
    { id: "end", title: "The long ending", when: "1779–1866", hero: "", img: "gdManifest",
      kicker: "Serfdom was not abolished once, but country by country, over almost a century.",
      html: `<p>In England, serfdom was never formally abolished. It faded away as lords and tenants changed their arrangements over generations.[4] Elsewhere, it took a law — and often a revolution.</p>
<ul>
  <li><strong>France:</strong> serfdom was abolished on the Crown's lands in 1779, and everywhere on the night of 4 August 1789, early in the Revolution. Estimates of how many serfs were still left by then range from 140,000 to 1,500,000.[1]</li>
  <li><strong>The Habsburg lands:</strong> the Serfdom Patent of 1781 ended serfdom in Bohemia and the German-speaking lands, but peasants still owed dues and labour until the revolutions of 1848.[1]</li>
  <li><strong>Prussia:</strong> declared serfdom unacceptable in 1792 and abolished it in 1807.[1]</li>
  <li><strong>Russia:</strong> Tsar Alexander II's edict of 1861 freed more than 23 million privately owned serfs, about 38 per cent of the population; serfs on state land followed in 1866.[1]</li>
</ul>
<p>Freedom rarely came with land. Freed peasants in many countries found themselves paying for the plots they had always farmed, or working them for wages.</p>` },
    { id: "today", title: "Does serfdom still exist?", when: "Today", hero: "", img: "gdKiln",
      kicker: "The word is old. The practice it names is not.",
      html: `<p>Historians still argue about where serfdom ends and other kinds of bondage begin. Some describe forms of serfdom outside Europe, in Qing China or in Tibet before 1959; the Tibetan case in particular is fiercely contested.[1]</p>
<p>International law has taken a clear view. The United Nations' Supplementary Convention on the Abolition of Slavery of 1956 treats serfdom as a practice similar to slavery, and prohibits it.[1] Bonded labour — people tied to an employer or a landlord by a debt they can never repay — is very much alive. In 2021, the International Labour Organization and its partners estimated that 28 million people were in forced labour.[5]</p>
<p>So the questions the rebels of 1381 asked are still worth asking. What makes one person the master of another's work? And what does it take to be free?</p>` }
  ],
  sources: [
    ["Wikipedia, 'Serfdom', on the obligations of serfs, the Black Death, the second serfdom, abolition in France, the Habsburg lands, Prussia and Russia, serfdom outside Europe and the 1956 UN Convention.", "https://en.wikipedia.org/wiki/Serfdom"],
    ["Mark Cartwright, 'Peasants' Revolt', World History Encyclopedia, on the causes and consequences of the 1381 rising.", "https://www.worldhistory.org/Peasants%27_Revolt"],
    ["'The Peasants' Revolt 1381', Marxists Internet Archive, on the Black Death, the Statute of Labourers, the poll tax and John Ball's verse.", "https://www.marxists.org/history/england/peasants-revolt/story.htm"],
    ["Encyclopedia.com, 'Serfdom', on its decline in western Europe through changes in tenure rather than formal abolition.", "https://www.encyclopedia.com/history/modern-europe/heraldry-knighthood-and-chivalry/serfdom"],
    ["International Labour Organization, '50 million people worldwide in modern slavery' (12 September 2022).", "https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0"]
  ]
},
{
  id: "slavery",
  title: "Slavery: The Freedom They Took",
  short: "Slavery and resistance",
  teaser: "Wherever people have been enslaved, some have fought back — by running, by striking, by rising in arms. From Spartacus to the Haitian Revolution and the great Jamaican strike of 1831, the enslaved were not only freed by others. Many freed themselves.",
  level: "",
  heroStory: "haiti",
  intro: "This is the story of slavery told from the side of those who were enslaved: how they resisted, where they won and where they were crushed, and how their struggles helped to bring slavery down. It moves from ancient Rome to nineteenth-century Brazil, and ends with the slavery that still exists today. Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "ancient", title: "Rome's servile wars", when: "135–71 BCE", hero: "spartacus",
      kicker: "The oldest slave revolts we know of shook the greatest power of the ancient world.",
      html: `<p>Slave revolts have happened in nearly every society that has practised slavery.[1] Some of the earliest we know about in detail took place in the Roman Republic, in a series of risings known as the Servile Wars, between 135 and 71 BCE. The first two broke out in Sicily.[1]</p>
<p>In the first, enslaved workers on the island's great estates followed a Syrian slave and prophet called Eunus, crowned him king, and held off Roman armies for three years. In the third, in 73 BCE, a group of gladiators led by Spartacus broke out of their training school in Capua. Their army grew to tens of thousands and defeated legion after legion. When it was finally beaten, about 6,000 captured rebels were crucified along the roads to Rome.[1]</p>`,
      stories: [
        { id: "eunus", note: "The first Sicilian slave war, and the slave king who led it." },
        { id: "spartacus", note: "The breakout from Capua and the two years in which an army of the enslaved defeated Rome." }
      ] },
    { id: "zanj", title: "The marshes of Basra", when: "869–883", hero: "zanj",
      kicker: "Enslaved East Africans built their own state in southern Iraq.",
      html: `<p>Slavery was not only a European institution. In the ninth century, enslaved East Africans were forced to clear the salt-crusted marshes near Basra, in what is now southern Iraq. In 869 they rose against the Abbasid Caliphate.[1] They built their own towns and their own state, and held out for some fourteen years before they were defeated.</p>`,
      stories: [ { id: "zanj", note: "One of the longest slave risings in history, and what is known — and disputed — about it." } ] },
    { id: "atlantic", title: "The Atlantic trade", when: "1500s–1860s", hero: "", img: "gdBrookes",
      kicker: "The largest forced migration in history — and resistance from its very first days.",
      html: `<p>Between the early sixteenth century and the 1860s, about 12.5 million Africans were forced aboard slave ships bound for the Americas. Around 10.7 million survived the crossing.[2] They were put to work on sugar, rice, cotton and tobacco plantations, and in mines and households, across the Caribbean, South America and North America.</p>
<p>Resistance began on the ships themselves. Historians have recorded 485 revolts aboard slave ships; most failed against armed and disciplined crews, but a few succeeded, and the captives sailed home.[1] On land, the first recorded rising in the Americas broke out on the island of Hispaniola in the early 1520s, and many who escaped founded the first free communities of former slaves.[1]</p>` },
    { id: "maroons", title: "Free in the hills", when: "1605–1760s", hero: "palmares",
      kicker: "Some escaped and built free societies that colonial armies could not destroy.",
      html: `<p>Those who escaped — known as maroons — made new lives in mountains, forests and swamps beyond the reach of the plantations. In north-east Brazil, Palmares grew for almost a century into a free kingdom in the hills, and resisted attack after attack until it fell in 1694.[1]</p>
<p>Some maroon communities forced their former enslavers to make peace. In Jamaica, the maroons led by Nanny won treaties in 1739 and 1740 that recognised their freedom.[1] In Suriname, the Saramaka fought the Dutch to a standstill, and in 1762 — a century before slavery there was abolished — the Dutch signed a treaty recognising them as free.</p>`,
      stories: [
        { id: "palmares", note: "Zumbi, Ganga Zumba and the free kingdom of Palmares." },
        { id: "saramaka", note: "A treaty of freedom signed a century before emancipation." }
      ] },
    { id: "risings", title: "The great risings", when: "1760–1804", hero: "haiti",
      kicker: "From Jamaica to Guyana to Saint-Domingue — and the only revolution the enslaved ever won outright.",
      html: `<p>In 1760, enslaved Africans in Jamaica rose in what became known as Tacky's War. Historians once saw it as a spontaneous outburst; more recent research suggests it was carefully planned.[1] Three years later, in the Dutch colony of Berbice, in what is now Guyana, enslaved people led by Cuffy took control of almost the whole colony and held it for nearly a year.</p>
<p>Then, in 1791, the enslaved of the French colony of Saint-Domingue rose. Over the next thirteen years they overthrew colonial rule and defeated French, Spanish and British invasions, and in 1804 they founded the independent republic of Haiti.[1] It remains the only revolution in history in which enslaved people overthrew their enslavers and founded their own state.</p>`,
      stories: [
        { id: "tacky", note: "The greatest slave rebellion in the Caribbean before Haiti." },
        { id: "berbice", note: "Cuffy's rising, and his offer to divide the colony with the Dutch." },
        { id: "haiti", note: "Toussaint Louverture, Dessalines, and the birth of Haiti." }
      ] },
    { id: "britain", title: "The end of British slavery", when: "1816–1838", hero: "baptistwar",
      kicker: "Three great risings, and an act of Parliament that paid the owners, not the enslaved.",
      html: `<p>Britain abolished its slave trade in 1807, but not slavery itself. In 1816, enslaved people in Barbados rose in Bussa's Rebellion. At Christmas 1831 in Jamaica, a Baptist deacon named Samuel Sharpe called on enslaved workers to stop work until they were paid. Up to 60,000 people joined what became known as the Baptist War, the largest slave rising in the British Caribbean.[6] It was put down with mass executions.</p>
<p>Less than two years later, Parliament passed the Slavery Abolition Act. It came into force on 1 August 1834 and freed more than 800,000 enslaved people. Historians count the struggles of the enslaved themselves, and the planters' fear of further risings, among the reasons it passed.[3] Freedom came with conditions: most of the formerly enslaved were made to go on working for their former owners for several more years as 'apprentices'.</p>
<p>The owners were compensated, with around £20 million in more than 40,000 awards.[4] The people who had been enslaved received nothing.[5]</p>`,
      stories: [
        { id: "bussa", note: "The largest revolt in Barbados's history." },
        { id: "baptistwar", note: "Samuel Sharpe's Christmas strike, and how it hastened the end of slavery in the British Empire." }
      ] },
    { id: "americas", title: "The last years in the Americas", when: "1811–1888", hero: "ceara1881",
      kicker: "From Louisiana to Martinique to Brazil, the enslaved kept pressing — until the last law fell.",
      html: `<p>In the United States in 1811, enslaved people on the sugar plantations above New Orleans marched on the city in the largest slave revolt in the country's history; it was crushed with mass executions. In Salvador, Brazil, in 1835, enslaved and freed African Muslims rose during Ramadan.</p>
<p>Sometimes the enslaved simply made abolition happen. In Martinique in 1848, France had already decreed the end of slavery but the news had not arrived; when an enslaved drummer was jailed, thousands marched on Saint-Pierre and forced the governor to declare abolition at once. In Ceará, in north-east Brazil, raft fishermen refused to ferry enslaved people to the ships bound for the south; the province abolished slavery in 1884. Brazil as a whole followed on 13 May 1888 — the last country in the Americas to do so.[7]</p>`,
      stories: [
        { id: "germancoast", note: "The march on New Orleans, and the executions that followed." },
        { id: "male", note: "The most significant urban revolt by enslaved people in the Americas." },
        { id: "martinique1848", note: "The day the enslaved of Martinique freed themselves." },
        { id: "ceara1881", note: "The raftsmen who refused to carry slaves." }
      ] },
    { id: "who", title: "Who ended slavery?", when: "The argument", hero: "", img: "gdMedallion",
      kicker: "Campaigners in parliaments, or the enslaved themselves? And has slavery really ended?",
      html: `<p>For a long time, the end of slavery was told mainly as the story of white campaigners in Britain, France and the United States. From the 1940s, the historian Herbert Aptheker began the first serious study of resistance in the American South, and counted around 250 revolts and conspiracies.[1] Since then, historians have paid far more attention to the enslaved themselves. Steven Hahn has gone as far as to argue that the enslaved people who joined the Union Army in the American Civil War took part in the greatest slave rebellion in modern history.[1] Most historians now see abolition as the work of many hands — on the plantations as well as in parliaments.</p>
<p>And slavery has not ended. In 2021, the International Labour Organization and its partners estimated that 50 million people were living in modern slavery: 28 million in forced labour and 22 million in forced marriage.[8]</p>` }
  ],
  sources: [
    ["Wikipedia, 'Slave rebellion', on the Servile Wars, the Zanj, the Americas, maroons, Haiti, Tacky's War, shipboard revolts and historians including Aptheker and Hahn.", "https://en.wikipedia.org/wiki/Slave_rebellion"],
    ["National Endowment for the Humanities, 'Gross Injustice: The Slave Trade by the Numbers', Humanities 31:5 (2010).", "https://www.neh.gov/humanities/2010/septemberoctober/feature/gross-injustice"],
    ["Encyclopaedia Britannica, 'Slavery Abolition Act'.", "https://www.britannica.com/topic/Slavery-Abolition-Act"],
    ["Wikipedia, 'Slave Compensation Act 1837'.", "https://en.wikipedia.org/wiki/Slave_Compensation_Act_1837"],
    ["Full Fact, 'This is what we know about the government loan to pay slave owners compensation after slavery was abolished in 1833' (2020).", "https://fullfact.org/economy/slavery-abolition-act-loan/"],
    ["Wikipedia, 'Baptist War'.", "https://en.wikipedia.org/wiki/Baptist_War"],
    ["Wikipedia, 'Lei Áurea'.", "https://en.wikipedia.org/wiki/Lei_%C3%81urea"],
    ["International Labour Organization, '50 million people worldwide in modern slavery' (12 September 2022).", "https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0"]
  ]
},
{
  id: "rentstrike",
  title: "The Rent Strike: Refusing the Landlord",
  short: "Rent strikes",
  teaser: "When rents rise faster than wages, tenants have one weapon the landlord cannot do without: the rent. From Irish estates to Glasgow tenements, Buenos Aires courtyards and London student halls, people have refused to pay together — and sometimes changed the law.",
  level: "",
  heroStory: "glasgow",
  intro: "This is the story of a simple idea: if everyone refuses to pay at once, the landlord cannot evict them all. It follows the rent strike from medieval arrears lists through the great urban strikes of the twentieth century to the campaigns of today. Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "old", title: "'Because the tenants refuse to pay'", when: "1400s–1880s", hero: "landwar",
      kicker: "The rent strike is older than the word — and Ireland gave the world another word along the way.",
      html: `<p>A rent strike is simple to describe: tenants agree to withhold some or all of their rent, together, until their demands are met.[1] It is far harder to carry out. Every tenant risks eviction, and the strike only works if almost everyone holds firm.</p>
<p>The idea is old. Some of the earliest evidence comes from fifteenth-century estate records, where landlords' clerks marked unpaid rents with a Latin note meaning 'because the tenants refuse to pay'.[1]</p>
<p>The modern rent strike was forged in the Irish countryside. In the Land War of 1879–82, tenant farmers organised against evictions and high rents, In County Mayo in 1880, the whole community refused to work for, serve or speak to one land agent, Captain Charles Boycott. By December he had left Ireland, and his name had entered the language. In 1886, under the Plan of Campaign, tenants on hundreds of estates offered their landlords what they thought was a fair rent; when it was refused, they paid the money into a common fund to support anyone evicted. The government answered with a new Coercion Act, battering rams and prison.</p>`,
      stories: [
        { id: "landwar", note: "Evictions, the Land League, and the birth of the boycott." },
        { id: "planofcampaign1886", note: "Ireland's organised rent strike, and the battering rams sent to break it." }
      ] },
    { id: "cities", title: "Tenements and brooms", when: "1904–1907", hero: "tenants1907",
      kicker: "In the crowded cities of the Americas, women led tenants out on strike.",
      html: `<p>As cities filled with migrants, tenement rents soared. In New York in 1904, about 2,000 families on the Lower East Side went on rent strike for over a month and won reductions. In the winter of 1907–08, around 10,000 families struck; one of the leading organisers, Pauline Newman, was twenty years old.[1][2]</p>
<p>In the same year, in Buenos Aires, tenants in the crowded <em>conventillos</em> refused to pay. In the dockside district of La Boca, women and children marched with household brooms to 'sweep away the landlords', and used them to block the doors against the police sent to evict them.</p>`,
      stories: [ { id: "tenants1907", note: "The tenants' strike of Buenos Aires and the March of the Brooms." } ] },
    { id: "glasgow", title: "Mrs Barbour's army", when: "1915", hero: "glasgow",
      kicker: "In wartime Glasgow, women stopped the bailiffs — and forced the government to act.",
      html: `<p>In 1915, with many of the city's men away at the war or working in the shipyards and munitions plants, Glasgow landlords raised rents by up to a quarter. Women in Govan, Partick and across the city refused to pay. Led by Mary Barbour, Helen Crawfurd, Agnes Dollan and others, they organised street by street, and when the bailiffs came they drove them off.[1]</p>
<p>The strike spread into the workplaces. When five women were taken to court for refusing to pay, workers marched in their support. On 27 November 1915 the government introduced legislation that held rents at their pre-war levels.[1] It was the beginning of rent control in Britain.</p>
<p>In New York, a new wave of rent strikes between 1918 and 1920 won the city's first rent control laws, which lasted until 1929.[1]</p>`,
      stories: [ { id: "glasgow", note: "The Glasgow rent strikes, and the law they won." } ] },
    { id: "barcelona", title: "Furniture carried back in", when: "1931–1946", hero: "barcelona1931",
      kicker: "In Barcelona the whole neighbourhood stopped paying; in Britain, the homeless moved in.",
      html: `<p>In Barcelona in 1931, with unemployment soaring, working-class families in the city's 'cheap houses' stopped paying rent. Estimates of how many took part vary enormously, from about 5,000 to as many as 100,000.[1] When bailiffs carried families' furniture into the street, neighbours carried it back in again.</p>
<p>A rent strike needs a home to strike from. After the Second World War, families in Britain who had none took direct action of a different kind: in 1946, tens of thousands moved into empty army camps, and in London squatters occupied empty luxury flats.</p>`,
      stories: [
        { id: "barcelona1931", note: "The Barcelona rent strike, and the neighbours who resisted the evictions." },
        { id: "squatters1946", note: "Returning soldiers and their families take over empty camps and flats." }
      ] },
    { id: "estates", title: "Estates and townships", when: "1972–1980s", hero: "", img: "gdTowerHill",
      kicker: "On a Merseyside estate and in South Africa's townships, the rent became a political weapon.",
      html: `<p>In October 1972, about 3,000 tenants in Kirkby, outside Liverpool, began a rent strike against a national law that raised council rents. Led by a women's group on the Tower Hill estate, it lasted fourteen months.[1]</p>
<p>In South Africa in the 1980s, rent boycotts in the townships became part of the struggle against apartheid itself, and a demand that tenants should own the homes they lived in. In 1987 the government sent troops into Soweto. Years later, officials reported that at least 50,000 rented homes had been handed over to their tenants.[1]</p>` },
    { id: "today", title: "Does it work?", when: "Today", hero: "", img: "gdLeedsBanner",
      kicker: "Students, renters and tenants' unions are rediscovering an old weapon.",
      html: `<p>The rent strike has come back. In 2015, about 60 students at University College London refused to pay their hall rents; by 2016 more than a thousand had joined them, and the campaign spread to other universities. In 2017 alone, the UCL strikers won more than £1.5 million in concessions.[1] During the Covid-19 pandemic, job losses and the threat of eviction led to a new wave of rent strikes around the world.[1]</p>
<p>The risks have not changed. Strikers can face eviction, damaged credit records and court action.[1] And historians have tended to treat rent strikes as a side-show of the labour movement, although academic interest has grown since the financial crisis of 2008.[1]</p>
<p>The questions remain the ones the Glasgow women asked. Who should decide what a home costs? And what can tenants do, together, that none of them can do alone?</p>` }
  ],
  sources: [
    ["Wikipedia, 'Rent strike', on the definition, early evidence, New York, Glasgow, Kirkby, South Africa, Barcelona, student and Covid-19 rent strikes, risks and historiography.", "https://en.wikipedia.org/wiki/Rent_strike"],
    ["Wikipedia, '1907 New York City rent strike'.", "https://en.wikipedia.org/wiki/1907_New_York_City_Rent_Strike"]
  ]
},
{
  id: "taxes",
  title: "Taxed Without Consent: Revolts Against Colonial Taxes",
  short: "Colonial taxes",
  teaser: "A tax on every hut, every man, every grain of salt. Colonial governments used taxes not only to raise money but to push people into working for them — and from Sierra Leone to Natal, Nigeria and India, people refused to pay.",
  level: "",
  heroStory: "huttax",
  intro: "This is the story of taxes imposed on people who had no say in them, and of the risings, boycotts and marches that answered them. Most of it takes place in the colonies of Africa and Asia, but it begins and ends with questions that every state has had to face: who pays, and who decides? Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "hut", title: "A tax to make people work", when: "1857–1898", hero: "huttax",
      kicker: "The hut tax raised money — and forced families into the colonial economy.",
      html: `<p>Across Africa, European colonial governments introduced a tax on every 'hut', or household. People paid it in money, labour, grain or livestock.[1] It did more than fill the treasury. Because the tax had to be paid, increasingly, in cash, families who had lived by farming and herding had to send someone to work for wages, in the towns, on the railways or, in southern Africa, in the mines.[1] In Natal, a law of 1857 set the tax at 14 shillings a hut.[1]</p>
<p>In 1898, Britain imposed a house tax on the new Protectorate of Sierra Leone: 10 shillings a year for a larger house, 5 for a smaller one. Chiefs saw it as an attack on their authority and on their ownership of the land, and twenty-four of them petitioned against it. When the British tried to arrest the Temne leader Bai Bureh, he took up arms and fought a guerrilla war from forest stockades. A separate Mende rising in the south killed missionaries and traders. Both were crushed, with villages and crops burned.</p>`,
      stories: [ { id: "huttax", note: "Bai Bureh's war, the Mende rising, and how both were put down." } ] },
    { id: "natal", title: "A pound a head", when: "1906", hero: "bambatha",
      kicker: "In Natal, a new poll tax was meant to drive Zulu men into wage labour.",
      html: `<p>After the Boer War, white employers in Natal struggled to find Black workers. In 1905–06 the colony added a poll tax of £1 on every adult man to the existing hut tax, to push Zulu men into working for wages. It fell on families already hit by evictions, overcrowded reserves and a cattle epidemic.</p>
<p>Protests broke out at the collection points in early 1906. When two police officers were killed, Natal declared martial law. Chief Bambatha, deposed by the government, led guerrilla attacks from the Nkandla forest until colonial troops surrounded his fighters at Mome Gorge. Thousands were killed and thousands more imprisoned.</p>`,
      stories: [ { id: "bambatha", note: "The poll tax, the rising and the slaughter at Mome Gorge." } ] },
    { id: "cotton", title: "Cotton and the water medicine", when: "1905–1907", hero: "majimaji",
      kicker: "In German East Africa, forced cotton growing set off one of Africa's largest anti-colonial wars.",
      html: `<p>German rule in East Africa came with taxes, forced labour and flogging. In 1902 the governor ordered villages in the south to grow cotton for export, on communal fields, for pay so low that people often refused it — and the work took them away from their own food crops.</p>
<p>In July 1905, villagers began uprooting the cotton. A prophet named Kinjikitile gave out <em>maji</em>, a sacred water medicine said to protect against bullets, and peoples across southern Tanzania united in the Maji Maji war. The German response included the deliberate destruction of crops and villages, and the famine that followed killed far more people than the fighting.</p>`,
      stories: [ { id: "majimaji", note: "The Maji Maji war, the water medicine, and the famine that ended it." } ] },
    { id: "women", title: "Women will not pay", when: "1929–1933", hero: "aba",
      kicker: "In Nigeria and Togo, market women led the resistance to new taxes.",
      html: `<p>In south-eastern Nigeria, the British had imposed direct taxation on men in 1928. In late 1929, when a colonial officer ordered a new count of households and property, women feared that they would be next. On 18 November, a man counting property for a Warrant Chief came to the house of a woman named Nwanyeruwa. She raised the alarm, and the women of Oloko sent palm leaves to neighbouring districts to summon others. Within weeks, tens of thousands of Igbo and Ibibio women were 'sitting on' the chiefs — gathering at their compounds to sing, dance and mock them until they gave way. Nwanyeruwa summed up their demand: women would not pay tax 'till the world ends'.</p>
<p>In Lomé, in French Togo, in January 1933, the French arrested two men who had spoken out against new market taxes. Thousands of market women marched on the prison, singing and dancing, and within hours the prisoners were free. The reprisals that followed were brutal.</p>`,
      stories: [
        { id: "aba", note: "The Women's War of 1929, and the women killed when troops opened fire." },
        { id: "lome1933", note: "The Lomé market women, and the price they paid." }
      ] },
    { id: "salt", title: "A pinch of salt", when: "1930", hero: "saltmarch",
      kicker: "Gandhi chose the most ordinary tax of all — and turned it into a campaign that shook the Raj.",
      html: `<p>Under the Salt Act of 1882, the British government of India held a monopoly on salt and taxed it. Making salt from seawater without a licence was a crime. Because everyone needs salt, the tax fell hardest on the poor.</p>
<p>When Gandhi chose the salt tax as the target of a new campaign of civil disobedience in 1930, many laughed. Then he walked for 24 days to the sea at Dandi and picked up a handful of salt. Across India, people made and sold salt illegally, and many thousands were arrested, Gandhi among them. The tax was not abolished, but the campaign showed that the empire's laws could be broken in the open, by millions.</p>`,
      stories: [ { id: "saltmarch", note: "The march to Dandi and the civil disobedience that followed." } ] },
    { id: "tolls", title: "Tolls and monopolies", when: "1839–1892", hero: "rebecca",
      kicker: "Not only colonies: in Wales and Iran, too, people refused to pay for what they saw as theft.",
      html: `<p>Resistance to unjust charges was not confined to the colonies. In west Wales around 1839, private turnpike trusts put toll-gates on the roads, so that poor farmers paid every time they took lime, crops or animals to market. At night, men with blackened faces and women's clothes smashed the gates. They called themselves 'Rebecca and her daughters'.</p>
<p>In Iran in 1890, the shah sold a British subject a fifty-year monopoly over the whole of the country's tobacco trade. Merchants and clerics organised a nationwide boycott, a leading cleric declared the use of tobacco forbidden, and it was said that even the women of the shah's household stopped smoking. In January 1892 the shah cancelled the concession.</p>`,
      stories: [
        { id: "rebecca", note: "Rebecca and her daughters, and the toll-gates of Wales." },
        { id: "tobacco", note: "How a boycott forced the shah to cancel a foreign monopoly." }
      ] },
    { id: "who", title: "Who pays, and who decides?", when: "The argument", hero: "lome1933",
      kicker: "Every state needs taxes. The question is what they are for, and who gets a say.",
      html: `<p>Colonial officials defended these taxes as fair contributions to the cost of government, and as a way of drawing people into a modern economy. Their critics then and since have pointed out that the people who paid them had no vote, little say in how the money was spent, and often no choice but to leave their land and work for others to pay. Historians still study colonial taxation as a form of taxation without representation.[1]</p>
<p>The idea that people should consent to the taxes they pay is an old one; it was a rallying cry of the American Revolution. These stories show what happened when that principle was denied — and how often the people who refused to pay were women, traders and farmers rather than politicians.</p>` }
  ],
  sources: [
    ["Wikipedia, 'Hut tax', on its purposes, forms of payment, the Natal tax of 1857 and the Hut Tax War.", "https://en.wikipedia.org/wiki/Hut_tax"]
  ]
},
{
  id: "squatting",
  title: "Squatting: The Right to a Home",
  short: "Squatting",
  teaser: "Empty houses and homeless people, empty land and landless families: squatters bring the two together. From British army camps in 1946 to the tent cities of São Paulo, people have taken homes they were denied — and sometimes won the right to keep them.",
  level: "",
  heroStory: "lavictoria1957",
  intro: "This is the story of people who solved their housing problem themselves, by moving in. It follows squatters from post-war Britain to Santiago, Copenhagen, Cape Town, Durban and São Paulo. It asks what happens when the right to property and the need for a home collide. Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "oldest", title: "The oldest tenure", when: "Everywhere", hero: "", img: "gdKraak",
      kicker: "A billion people may live on land they do not legally own.",
      html: `<p>Squatting means living in an empty building, or on land, without the owner's permission. It tends to happen wherever poor and homeless people find property standing empty.[1] The anarchist writer Colin Ward called it 'the oldest mode of tenure in the world'.[1]</p>
<p>It is also one of the most common. In 2004 the writer Robert Neuwirth estimated that there were a billion squatters in the world — about one person in seven — and the United Nations estimated in 2003 that around a billion people lived in squatter settlements and slums.[1] Most live in the cities of the global South, but squatting has a long history in Europe too: in England and Wales there were an estimated 50,000 squatters in the late 1970s.[1]</p>` },
    { id: "camps", title: "Homes for heroes", when: "1946", hero: "squatters1946",
      kicker: "Back from the war with nowhere to live, British families moved into the empty army camps.",
      html: `<p>By 1945, bombing had destroyed or damaged hundreds of thousands of homes in Britain, and almost none had been built during the war. Servicemen came home to overcrowded rooms and their parents' houses.</p>
<p>In the summer of 1946, as the military camps emptied, families simply moved in. By October, the minister for housing, Aneurin Bevan, told Parliament that more than 39,000 people were living in over a thousand occupied camps in England and Wales. Squatters set up committees, shared cooking and arranged water and electricity, and many councils accepted them. In London, Communist activists went further, leading families into empty luxury flats.</p>`,
      stories: [ { id: "squatters1946", note: "The camp squatters, the luxury-flat occupations, and how the government responded." } ] },
    { id: "victoria", title: "A neighbourhood in a night", when: "1957", hero: "lavictoria1957",
      kicker: "In Santiago, 1,200 families occupied a farm and built a town.",
      html: `<p>In the 1950s, many of Santiago's poorest families lived in shacks along a polluted channel known as the 'belt of misery'. On 30 October 1957, about 1,200 of these families occupied an empty farm on the edge of the city. It is described as the first organised land seizure in Chile and Latin America.</p>
<p>The residents laid out the plots, planned the public spaces and built their own homes. They set up their own committees to keep order, published their own newspaper, and named the streets after their heroes. A cardinal persuaded the president not to evict them, and La Victoria became a permanent neighbourhood — and, later, a centre of resistance to the Pinochet dictatorship.</p>`,
      stories: [ { id: "lavictoria1957", note: "The land seizure that built a neighbourhood." } ] },
    { id: "christiania", title: "A free town", when: "1971", hero: "christiania",
      kicker: "In Copenhagen, squatters turned an abandoned barracks into a self-governing community.",
      html: `<p>Around 1970, young people in Copenhagen could not find affordable housing. When the army left a barracks in the middle of the city, local residents broke through the fence to make a playground, and squatters followed. In September 1971 a magazine declared the 'Free Town of Christiania' open, and hundreds moved in.</p>
<p>Residents made decisions by consensus and wrote their own rules, banning hard drugs, weapons and cars. Governments tried for decades to close it down. Half a century later, after protests, theatre and court cases, the residents own the land.</p>`,
      stories: [ { id: "christiania", note: "Freetown Christiania, from occupation to ownership." } ] },
    { id: "crossroads", title: "Defying apartheid", when: "1975–1978", hero: "crossroads",
      kicker: "At Crossroads, Black families built homes in Cape Town — where the law said they could not live together.",
      html: `<p>Under apartheid, Black men could work in Cape Town only as migrant labourers, housed in single-sex hostels, while their wives and children were supposed to stay in the impoverished 'homelands'. Many families defied the law and built shacks on the edge of the city so that they could live together. By 1977 around 18,000 people lived at Crossroads.</p>
<p>Eviction orders were issued in 1975, and in 1978 the government launched a campaign to demolish the settlement. The residents refused to go. A Women's Committee led the resistance and won support at home and abroad, and the bulldozers were held back.</p>`,
      stories: [ { id: "crossroads", note: "The women of Crossroads and the campaign to save their homes." } ] },
    { id: "now", title: "Land, housing and dignity", when: "2005–today", hero: "abahlali",
      kicker: "In Durban and São Paulo, movements of the homeless have grown to tens of thousands.",
      html: `<p>After apartheid ended, millions of South Africans still lived in shack settlements without water, electricity or toilets. In 2005, residents of the Kennedy Road settlement in Durban, who had been promised land for housing, blocked a highway in protest. Their movement, Abahlali baseMjondolo, grew to tens of thousands of members — and has faced arrests, attacks and the killing of its leaders.</p>
<p>In Brazil, where estimates of the housing shortage range from six to eight million homes while many buildings stand empty, the Homeless Workers' Movement (MTST) occupies unused land and buildings to demand housing, sometimes in tent cities of thousands of families.</p>`,
      stories: [
        { id: "abahlali", note: "The shack dwellers' movement of Durban." },
        { id: "mtst", note: "Brazil's Homeless Workers' Movement and its occupations." }
      ] },
    { id: "property", title: "Whose property?", when: "The argument", hero: "mtst",
      kicker: "Is squatting theft, or the only answer to empty homes and homeless people?",
      html: `<p>To owners, squatting is trespass, and in many countries it has been made a crime. To squatters, an empty building is a wasted home, and occupying it is a claim to a right that the law does not recognise. Some legal systems have long allowed a person who openly occupies land for many years to become its owner.[1]</p>
<p>Researchers note that, for all the numbers involved, squatting is rarely discussed in housing policy.[1] Yet in many of the world's cities, squatters have built more homes than any government. The question they raise is a simple one: when homes stand empty and people sleep on the streets, whose claim should come first?</p>` }
  ],
  sources: [
    ["Wikipedia, 'Squatting', on its definition, Colin Ward, Robert Neuwirth's and the UN's estimates, England and Wales in the 1970s, adverse possession, and Kesia Reeve on policy.", "https://en.wikipedia.org/wiki/Squatting"]
  ]
},
{
  id: "landback",
  title: "Land Back: Indigenous Peoples and Their Land",
  short: "Land back",
  teaser: "Taken by war, by law, or by declaring it empty, the land of Indigenous peoples was turned into farms, ranches, bombing ranges and pipelines. From Aotearoa to Australia, Hawaiʻi to the Kalahari, people have fought — peacefully, in court and on the barricades — to get it back.",
  level: "",
  heroStory: "wavehill",
  intro: "This is the story of Indigenous peoples who refused to accept that their land was gone. It moves from nineteenth-century New Zealand to twenty-first-century North Dakota, and ends with the movement now known as Land Back. Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "parihaka", title: "Ploughing the settlers' fields", when: "1866–1881", hero: "parihaka",
      kicker: "At Parihaka, Māori resisted the confiscation of their land without violence.",
      html: `<p>During and after the New Zealand Wars of the 1860s, the colonial government confiscated great areas of Māori land in Taranaki. Around 1866, two leaders, Te Whiti o Rongomai and Tohu Kākahi, founded the village of Parihaka on confiscated land. It grew to more than 2,000 people and impressed visitors with its farms and its order.</p>
<p>When surveyors and settlers moved in, the people of Parihaka resisted peacefully: they ploughed the settlers' fields and rebuilt the fences that marked their own. In November 1881, 1,600 troops marched on the village. They were met by singing children. The two leaders were arrested — but Parihaka became a lasting symbol of non-violent resistance.</p>`,
      stories: [ { id: "parihaka", note: "The village of Parihaka and the invasion of 1881." } ] },
    { id: "wavehill", title: "Gurindji country", when: "1966–1975", hero: "wavehill",
      kicker: "A strike over pay became the foundation of Aboriginal land rights in Australia.",
      html: `<p>Wave Hill cattle station, owned by a British company, covered a vast area of Gurindji land. Aboriginal stockmen were paid far less than white workers, often in rations. On 23 August 1966, about 200 Gurindji workers and their families walked off the station, led by Vincent Lingiari.</p>
<p>It quickly became clear that the dispute was about more than wages. The Gurindji moved to Daguragu, a place of deep significance to them, and petitioned for their land back. They held out for more than seven years. In August 1975, the prime minister, Gough Whitlam, poured a handful of soil into Lingiari's hand, returning part of their land. The walk-off led to the Northern Territory's land rights law the following year.</p>`,
      stories: [ { id: "wavehill", note: "The walk-off, the seven-year strike and the handful of soil." } ] },
    { id: "islands", title: "A lake and an island", when: "1970–1990s", hero: "kahoolawe",
      kicker: "In New Mexico and Hawaiʻi, sacred places were won back from the US government.",
      html: `<p>In 1970 the United States returned Blue Lake, sacred to Taos Pueblo, to the Pueblo's control — often described as the first successful modern case of what is now called Land Back.[1]</p>
<p>Six years later, Native Hawaiian activists began landing on Kahoʻolawe, a small island sacred to them that the US Navy had used as a bombing range since 1941. They were arrested, and some jailed for trespass; two of them, George Helm and Kimo Mitchell, were lost at sea in 1977. Their campaign, the Protect Kahoʻolawe ʻOhana, won access to the island, then an end to the bombing, and finally the return of the island to Hawaiʻi.</p>`,
      stories: [ { id: "kahoolawe", note: "The landings on Kahoʻolawe and the long campaign to stop the bombing." } ] },
    { id: "oka", title: "The Pines", when: "1990", hero: "oka",
      kicker: "A golf course on a burial ground led to a 78-day standoff with the Canadian army.",
      html: `<p>The Kanien'kehá:ka (Mohawk) of Kanehsatà:ke, near Montreal, had petitioned for more than two centuries for recognition of their land. In 1990, the town of Oka planned to extend a golf course into the Pines, a forest containing a burial ground.</p>
<p>The Kanien'kehá:ka put up a barricade. When provincial police raided it in July, a police officer was killed in the firefight, and the standoff that followed lasted 78 days and drew in the Canadian army. It forced Indigenous land claims onto Canada's national agenda.</p>`,
      stories: [ { id: "oka", note: "The barricade in the Pines and the 78-day standoff." } ] },
    { id: "kalahari", title: "Going home", when: "1997–2006", hero: "kalahari",
      kicker: "The San took the government of Botswana to court — and won the right to return.",
      html: `<p>The San have lived in the Kalahari for thousands of years. From the mid-1990s, the government of Botswana moved them out of the Central Kalahari Game Reserve, saying it could not provide services there. In 2002 it cut off services, including capping the borehole that gave the remaining residents water.</p>
<p>Led by Roy Sesana, the San went to court, in one of the longest and most expensive cases in Botswana's history. In December 2006, the High Court ruled that the evictions had been unlawful. The struggle over what that ruling means in practice has continued ever since.</p>`,
      stories: [ { id: "kalahari", note: "The San's court victory, and what followed." } ] },
    { id: "standingrock", title: "Water protectors", when: "2016", hero: "standingrock",
      kicker: "At Standing Rock, an oil pipeline brought together the largest gathering of Native Americans in a century.",
      html: `<p>The Dakota Access Pipeline was planned to cross under the Missouri River just upstream of the Standing Rock Sioux Reservation, on land guaranteed to the Sioux by nineteenth-century treaties. The tribe feared for its water and its sacred sites, and said it had not been properly consulted.</p>
<p>From April 2016, young people from Standing Rock began a campaign against it. By September, the camps beside the river were described as the largest gathering of Native Americans in more than a hundred years. The protest was met with dogs, pepper spray and water cannon. The pipeline was built, but the 'water protectors' made Indigenous rights over land and water a global cause.</p>`,
      stories: [ { id: "standingrock", note: "The camps at Standing Rock and the fight over the pipeline." } ] },
    { id: "meaning", title: "What would giving land back mean?", when: "The argument", hero: "", img: "gdLandBack",
      kicker: "Ownership, stewardship or self-government? The movement is still defining itself.",
      html: `<p>In September 2007 the United Nations General Assembly adopted the Declaration on the Rights of Indigenous Peoples by 143 votes to 4, with 11 abstentions. The declaration is not legally binding.[2] In the 2010s, campaigns for the return of Indigenous land spread under the hashtag #LandBack.[1]</p>
<p>What 'land back' means is still argued over, among Indigenous peoples as well as their opponents. It can mean the return of title, a say in how land is used, or the restoration of Indigenous self-government over ancestral territory.[1] For governments and landowners, it raises hard questions about the rights of people who have lived on the land for generations since. For the movement, the starting point is simpler: the land was taken, and it should be returned.</p>` }
  ],
  sources: [
    ["Wikipedia, 'Land Back', on Blue Lake, the movement's aims and #LandBack.", "https://en.wikipedia.org/wiki/Land_Back"],
    ["Wikipedia, 'Declaration on the Rights of Indigenous Peoples', on the vote of 13 September 2007.", "https://en.wikipedia.org/wiki/Declaration_on_the_Rights_of_Indigenous_Peoples"]
  ]
},
{
  id: "development",
  title: "Who Pays for Progress? Dams, Airports and Oil",
  short: "Development",
  teaser: "Dams bring water and power, airports bring trade, oil brings wealth. But someone always lives where the reservoir will be. From Japanese farmers to Sámi herders, Adivasi villagers and the Lenca of Honduras, people have asked who 'development' is for.",
  level: "",
  heroStory: "narmada",
  intro: "This is the story of people who stood in the way of great projects — dams, an airport, a nuclear plant, oilfields — because the projects were going to cost them their homes, their land or their health. It asks a question every one of these struggles raised: when a project benefits millions, what do we owe the few thousand who pay for it? Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "price", title: "The price of progress", when: "The twentieth century", hero: "", img: "gdThreeGorges",
      kicker: "Large dams alone have forced tens of millions of people from their homes.",
      html: `<p>In the twentieth century, governments and development banks built tens of thousands of large dams, along with airports, highways, mines and oilfields. They brought electricity, irrigation and growth. They also moved people out of the way.</p>
<p>In 2000, the World Commission on Dams — set up by the World Bank and the World Conservation Union — estimated that 40 to 80 million people had been physically displaced by dams. Many, it found, were never counted as displaced, and so were never resettled or compensated; where compensation was paid, it was often inadequate.[1]</p>` },
    { id: "narita", title: "The farmers of Sanrizuka", when: "1966–1978", hero: "sanrizuka",
      kicker: "Japan chose their farmland for Tokyo's new airport without asking them.",
      html: `<p>In 1966, Japan's government chose Sanrizuka, an area of farms east of Tokyo, as the site of a new international airport, without consulting most of the people who lived there. Many families had farmed the land for generations.</p>
<p>The farmers formed an opposition union and bought tiny plots inside the site so that the state would have to expropriate thousands of owners. Student radicals joined them, building towers and tunnels. When expropriation began in 1971, the conflict turned violent, and police officers and protesters died. Narita airport opened years late — with a single runway.</p>`,
      stories: [ { id: "sanrizuka", note: "The decades-long struggle against Narita airport." } ] },
    { id: "alta", title: "The Alta river", when: "1979–1982", hero: "alta",
      kicker: "Sámi activists lost the fight against a dam — and won recognition for their people.",
      html: `<p>For a century, Norway's policy of 'Norwegianisation' had ignored Sámi land rights. When the state planned to dam the Alta–Kautokeino river for hydroelectric power, Sámi activists and environmentalists joined forces. In the Arctic autumn of 1979 they chained themselves together across the road to the construction site, and young Sámi went on hunger strike outside Parliament in Oslo.</p>
<p>The dam was built. But the struggle changed how Norway treated the Sámi, leading to a Sámi Parliament and to recognition of their rights in the constitution.</p>`,
      stories: [ { id: "alta", note: "The Alta controversy and its unexpected victory." } ] },
    { id: "europe", title: "Wetlands and reactors", when: "1984–1989", hero: "hainburg",
      kicker: "In Austria and Bavaria, local people stopped a dam and a nuclear plant.",
      html: `<p>In December 1984, thousands of Austrians camped in a frozen Danube floodplain at Hainburg to stop a hydroelectric power plant from flooding it. The police beat them with batons, the public turned against the government, and the wetland became a national park.</p>
<p>Two years later, in the conservative Catholic countryside of Bavaria, farmers, priests and doctors joined tens of thousands of protesters against a nuclear reprocessing plant at Wackersdorf. When the local district administrator refused to sign the permits, the state passed a law to get round him. The protests went on, some of them violent, until the project was abandoned in 1989.</p>`,
      stories: [
        { id: "hainburg", note: "The occupation of the Hainburger Au." },
        { id: "wackersdorf", note: "The Battle of Wackersdorf." }
      ] },
    { id: "narmada", title: "Save the Narmada", when: "1985–today", hero: "narmada",
      kicker: "Villagers vowed to drown rather than leave as the waters rose.",
      html: `<p>India planned a vast system of dams on the Narmada river, the largest of them the Sardar Sarovar dam in Gujarat, to bring water and power to drought-prone regions. The dams would flood the land of tens of thousands of families, many of them Adivasi (indigenous) people.</p>
<p>In 1985, the activist Medha Patkar found that displaced people were being compensated only for their standing crops, not for their land and homes. The movement she helped to build, Narmada Bachao Andolan, used marches, hunger strikes and the courts; villagers vowed to drown rather than leave. Under pressure, the World Bank commissioned an independent review and withdrew from the project. The dam was eventually completed.</p>`,
      stories: [ { id: "narmada", note: "The Narmada movement and the question it put to the world." } ] },
    { id: "oil", title: "Oil and the Niger Delta", when: "1990–1995", hero: "ogoni",
      kicker: "The Ogoni drove Shell from their land. The military government hanged their leaders.",
      html: `<p>Oil was found in Ogoniland, in the Niger Delta, in the 1950s. Spills and gas flaring polluted farmland, creeks and air, while the Ogoni saw little of the wealth and had few schools, hospitals or roads.</p>
<p>In the early 1990s, led by the writer Ken Saro-Wiwa, the Ogoni organised a peaceful mass campaign that forced Shell to leave their land. Nigeria's military government responded with violence, and in 1995 hanged Saro-Wiwa and eight others after a trial widely condemned as unjust.</p>`,
      stories: [ { id: "ogoni", note: "The Ogoni struggle and the execution of the Ogoni Nine." } ] },
    { id: "river", title: "A sacred river", when: "2013–2016", hero: "aguazarca",
      kicker: "The Lenca forced the world's largest dam builder to pull out. Their leader was murdered.",
      html: `<p>After a military coup in 2009, the government of Honduras approved a wave of new mines and dams. One, the Agua Zarca dam on the Gualcarque river, threatened a river sacred to the Lenca people.</p>
<p>Lenca communities blockaded the road to the site for more than a year, and the Chinese company Sinohydro, the world's largest dam builder, pulled out. Their leader, Berta Cáceres, won the Goldman Environmental Prize in 2015. In March 2016 she was shot dead in her home.</p>`,
      stories: [ { id: "aguazarca", note: "Berta Cáceres and the fight for the Gualcarque." } ] },
    { id: "whom", title: "Development for whom?", when: "The argument", hero: "", img: "gdLadybower",
      kicker: "The many benefit; the few pay. Is that a fair bargain — and who gets to decide?",
      html: `<p>Defenders of great projects argue that the benefits — electricity, water, jobs, growth — reach millions, and that a nation cannot let a few thousand people block them. Critics reply that the costs fall again and again on the same people: farmers, indigenous peoples and the poor, who are the least likely to be asked and the least likely to be compensated.[1]</p>
<p>The World Commission on Dams concluded that an unacceptable and often unnecessary price had been paid, and called for the benefits of dams to be shared fairly and for the rights of the people whose homes and livelihoods they destroy to be safeguarded.[2] Each of these stories asks whether that is possible — and what happens when it is not even tried.</p>` }
  ],
  sources: [
    ["World Commission on Dams, 'Dams and Development' (2000), extracts on people and large dams, World Rainforest Movement.", "https://wrm.org.uy/other-information/the-world-commission-on-dams-report"],
    ["'Spheres of Influence: Damming the World's Rivers', Environmental Health Perspectives 109:2 (2001), on the Commission's findings (archived).", "https://webarchive.library.unt.edu/eot2008/20090118185736/http:/www.ehponline.org/docs/2001/109-2/spheres.pdf"]
  ]
},
{
  id: "machines",
  title: "Machines and the People Who Work Them",
  short: "Machines and work",
  teaser: "When new machines threatened their livelihoods, workers smashed them, marched on their employers, or took over the factory. 'Luddite' became an insult — but the question the machine-breakers asked has never gone away: who benefits when work is automated?",
  level: "",
  heroStory: "luddites",
  intro: "This is the story of workers who fought back when machines and the people who owned them threatened their trades, their wages and their way of life. It runs from the knitting frames of Nottingham to a French watch factory in 1973, and ends with a question for our own time. Each chapter leads to fuller stories elsewhere on this site.",
  sections: [
    { id: "riot", title: "Collective bargaining by riot", when: "1700s–1830", hero: "", img: "gdLeeFrame",
      kicker: "Breaking machines was an old tactic — and not always a protest against machines.",
      html: `<p>Long before the Luddites, workers in Britain attacked their employers' looms, frames and property when wages were cut. With workshops scattered across the country and trade unions illegal, a strike was hard to organise; breaking machines was a way to put pressure on employers. The historian Eric Hobsbawm called it 'collective bargaining by riot'.[1]</p>
<p>As another historian, Malcolm Thomis, put it, these attacks did not mean that workers were hostile to machinery as such — machines were simply an exposed target.[1]</p>` },
    { id: "ludd", title: "General Ludd's army", when: "1811–1816", hero: "luddites",
      kicker: "Skilled textile workers, writing as 'Ned Ludd', smashed the frames that were cutting their wages.",
      html: `<p>In 1811, in the middle of war, unemployment and rising food prices, hosiery workers in Nottinghamshire began breaking the knitting frames of employers who were using new machines and cheaper methods to cut wages and the quality of goods. They signed their letters in the name of a mythical leader, Ned Ludd. The movement spread to the woollen districts of Yorkshire and the cotton towns of Lancashire.</p>
<p>The government sent 12,000 troops against them and made machine-breaking a capital crime. Luddites were hanged after special trials in 1812 and 1813. The movement faded after that, through repression and spies, but also through some concessions on wages and a fall in food prices.[3]</p>`,
      stories: [ { id: "luddites", note: "The Luddites, the troops and the hangings." } ] },
    { id: "swing", title: "Captain Swing", when: "1830", hero: "swing",
      kicker: "In the English countryside, threshing machines took away the labourers' winter work.",
      html: `<p>By 1830, farm labourers in southern England had lost the commons and depended entirely on wages. Threshing machines took away the hand threshing that had given them work through the winter. Across the south and east, labourers smashed the machines, burned ricks, and sent threatening letters signed by a mythical 'Captain Swing'. The state answered with hangings and transportation to Australia.</p>`,
      stories: [ { id: "swing", note: "The Swing Riots and their punishment." } ] },
    { id: "weavers", title: "The weavers' song", when: "1844", hero: "silesia",
      kicker: "In Silesia, hand weavers starving on falling pay marched on the merchants' mansions.",
      html: `<p>Machine-made British cloth ruined the hand weavers of Silesia, who worked at home for merchants who kept cutting what they paid. In June 1844, weavers in Peterswaldau marched to their contractors' mansion to demand higher pay. Met with scorn, they broke in and smashed the machinery. Two days later, Prussian troops fired on them, killing eleven.</p>
<p>The rising became a symbol. Heinrich Heine wrote a poem about it, Gerhart Hauptmann a play, Käthe Kollwitz a series of prints, and Karl Marx saw in it the first stirrings of a German working-class movement.</p>`,
      stories: [ { id: "silesia", note: "The Silesian weavers and how artists remembered them." } ] },
    { id: "lip", title: "We make, we sell, we pay ourselves", when: "1973", hero: "lip",
      kicker: "At a French watch factory, workers facing the sack took over production instead.",
      html: `<p>Not every response to change was to break the machines. In 1973, the owners of Lip, a famous watchmaker in Besançon, filed for bankruptcy, and workers discovered plans for hundreds of redundancies. Instead of walking out, they hid the stock, restarted the production lines, and sold the watches to pay their own wages.</p>
<p>'It's possible', they said: 'we make, we sell, we pay ourselves.' The occupation became a symbol of workers' self-management across Europe.</p>`,
      stories: [ { id: "lip", note: "The Lip occupation and what it inspired." } ] },
    { id: "luddite", title: "Were the Luddites right?", when: "The argument", hero: "", img: "gdNimFrames",
      kicker: "'Luddite' became an insult. Historians — and a new age of automation — have reopened the case.",
      html: `<p>'Luddite' has become a word for anyone suspicious of new technology.[2] Historians have long disagreed about the original machine-breakers: some see blind vandalism and a longing for a lost world; others see an early, rational struggle over wages, skill and control of work.[2]</p>
<p>The machines changed, but the question did not. Each new wave of automation brings more goods, more cheaply — and the loss of some people's work and skills. Who gains from the new machines, who loses, and who gets to decide how they are used, are questions the Luddites asked in 1811. They are being asked again about computers and artificial intelligence today.</p>` }
  ],
  sources: [
    ["Wikipedia, 'Luddite', on the movement, Hobsbawm's 'collective bargaining by riot' and Malcolm Thomis.", "https://en.wikipedia.org/wiki/Luddite"],
    ["Encyclopedia.com, 'Luddism', on the term's later meaning and the historians' debate.", "https://encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/luddism"],
    ["Kevin Binfield, 'Luddites and Luddism: History', Murray State University, on how the movement ended.", "https://campus.murraystate.edu/academic/faculty/kBinfield/luddites/LudditeHistory.htm"]
  ]
}

];
