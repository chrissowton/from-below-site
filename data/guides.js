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
    { id: "debate", title: "Who was right?", when: "The argument", hero: "",
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
}
];
