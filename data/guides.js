/* Issue guides: short guides to one idea or practice, drawing on stories across the site.
   Footnotes [n] refer to the guide's sources. Story notes are drawn from the stories themselves, which give their own sources. */
window.GUIDES = [
{
  id: "enclosure",
  title: "Enclosure: Who Owns the Land?",
  short: "Enclosure",
  teaser: "For centuries, land that villagers shared — to graze animals, gather fuel and grow food — was fenced off and made private. People tore down the hedges, dug the commons and trespassed on the moors. The question of who owns land, and who may use it, is still with us.",
  level: "Ages 14 and up; adult and community groups",
  heroStory: "kett",
  intro: "This guide explains what enclosure was, why it happened, how people resisted it, and how the same questions arise across the world today. It links to stories on this site, so you can follow any part in more depth. It can be used on screen or printed.",
  sections: [
    { id: "what", title: "What was enclosure?",
      html: `<p>In much of medieval and early modern England, villagers farmed scattered strips in large <strong>open fields</strong>, and had customary rights over <strong>common land</strong>: after harvest the fields became common, so that they could graze their animals there, and the 'waste' was used by the poorest, including landless people.[1]</p>
<p><strong>Enclosure</strong> meant taking this land into private hands: fencing it, hedging it or walling it, and so depriving commoners of their traditional rights of access and use.[1]</p>` },
    { id: "how", title: "How it happened",
      html: `<p>Landowners enclosed land to raise their rents, and tenant farmers to improve their farms. The stated justification was to make farming more efficient.[1]</p>
<ul>
  <li><strong>Sheep and wool:</strong> in the Tudor period, Thomas More complained in his <em>Utopia</em> (1516) that sheep, 'naturally mild', had begun to 'devour men' — that pasture for sheep was emptying villages and towns.[1]</li>
  <li><strong>By Act of Parliament:</strong> later, enclosure was increasingly carried out by Acts of Parliament, the usual method by the 1750s. Between 1604 and 1914, over 5,200 enclosure Acts were passed, affecting 28,000 square kilometres.[1][2]</li>
  <li><strong>The Highlands:</strong> in Scotland, the Highland Clearances evicted large numbers of tenants, mostly between 1750 and 1860, often for sheep farming; many had little choice but to emigrate.[3]</li>
</ul>` },
    { id: "resist", title: "How people resisted",
      html: `<p>Historians describe enclosure riots as 'the pre-eminent form' of social protest in England from the 1530s to the 1640s.[1] In 1607, the Midland Revolt against enclosure, led by a tinker known as 'Captain Pouch', ended at Newton in Northamptonshire, where forty or fifty people were killed and the leaders hanged.[4]</p>`,
      stories: [
        { id: "germanpeasants", note: "In the German lands, lords were enclosing common woods and pastures; the peasants' Twelve Articles demanded them back." },
        { id: "kett", note: "Villagers tearing down a landlord's fences began a rising that camped outside Norwich. The main grievance was enclosure." },
        { id: "diggers", note: "In 1649, the Diggers began to dig and plant common land, declaring the earth 'a common treasury for all'." },
        { id: "swing", note: "Between 1770 and 1830, about six million acres of common land in England were enclosed; in 1830 farm labourers rose against the threshing machines that took their winter work." },
        { id: "crofters", note: "Highland crofters, cleared to make way for sheep and deer, refused rent and occupied land — and won the right not to be evicted." },
        { id: "kinder", note: "In 1932, about 400 walkers trespassed on private moorland to demand the right to roam." }
      ] },
    { id: "world", title: "Enclosure around the world",
      html: `<p>The same pattern — land used in common being taken into private or state hands — has happened across the world, often through colonial rule. In the 21st century, 'land grabbing' describes large-scale purchases and leases of land by companies, governments and individuals, especially since the world food price crisis of 2007–08.[5]</p>`,
      stories: [
        { id: "parihaka", note: "After the colonial government of New Zealand confiscated Māori land, the people of Parihaka resisted peacefully, ploughing settlers' fields and rebuilding fences." },
        { id: "wavehill", note: "Gurindji workers walked off a cattle station on their own land — the start of the Aboriginal land rights movement in Australia." },
        { id: "chipko", note: "In the Himalayas, forests that villagers depended on were controlled by the state and auctioned to outside contractors; village women protected the trees." },
        { id: "zapatistas", note: "A change to Mexico's constitution allowed communal land to be privatised; the Zapatistas rose demanding 'work, land, housing'." },
        { id: "boeungkak", note: "In Phnom Penh, a lake and its land were leased to a company for 99 years; the women who resisted eviction were jailed." }
      ] },
    { id: "debate", title: "The arguments",
      html: `<ul>
  <li><strong>For enclosure:</strong> supporters argued that private ownership made farming more efficient and productive, and was needed to feed a growing population.[1]</li>
  <li><strong>Against:</strong> the historians John and Barbara Hammond wrote that enclosure was 'fatal to three classes: the small farmer, the cottager and the squatter'.[1] For many Marxist historians, enclosure was a form of 'primitive accumulation' — separating people from the land so that they had to work for wages, and laying the ground for capitalism.[1]</li>
  <li><strong>'The tragedy of the commons':</strong> in 1968 the ecologist Garrett Hardin argued that resources held in common will be overused. The economist Elinor Ostrom, who won the Nobel Prize, studied how communities successfully manage shared resources; some economists see her work as refuting Hardin.[6]</li>
  <li><strong>New commons:</strong> today, 'commons' also describes shared resources such as free software and Wikipedia, created and maintained by communities.[7]</li>
</ul>` }
  ],
  source: { kind: "Poem", made: "England, 18th century (anonymous)",
    text: "The law locks up the man or woman / Who steals the goose from off the common / But lets the greater villain loose / Who steals the common from off the goose.",
    about: "This anonymous rhyme has come to stand for the opposition to enclosure in the 18th century. In four lines it contrasts the punishment of a poor thief with the treatment of the powerful, and questions where the right to property comes from.[1]",
    questions: ["Who is the 'greater villain' in the poem?", "What does the poem say about the law, and who it serves?", "Why might a short rhyme be a powerful form of protest?"] },
  words: [
    ["Common land", "Land over which local people had shared rights, such as grazing animals or collecting wood."],
    ["Commoner", "A person with rights over common land."],
    ["Enclosure", "Taking common or open land into private ownership, usually by fencing or hedging it."],
    ["Open field system", "Farming in large unfenced fields divided into strips held by different households."],
    ["Clearance", "The eviction of tenants from land, as in the Scottish Highlands."],
    ["Land grabbing", "Large-scale buying or leasing of land, often taking it from people who depend on it."]
  ],
  questions: [
    "Who gained from enclosure, and who lost?",
    "Was enclosure progress? For whom?",
    "Why did so many people break the law to resist it?",
    "What 'commons' — shared spaces or resources — exist where you live? Who looks after them, and are any under threat?"
  ],
  activities: [
    "Find a map of your area from before and after 1800. Can you see signs of enclosure, such as straight hedges and field names with 'common' or 'moor'?",
    "Debate the motion: 'Enclosure was necessary to feed a growing country.' Use the arguments above, and the stories, as evidence.",
    "Choose two stories from this guide, one from England and one from elsewhere. What is similar, and what is different?"
  ],
  sources: [
    ["Wikipedia, 'Enclosure', on open fields, common rights, the justification, parliamentary enclosure, enclosure riots, the poem and historians' views.", "https://en.wikipedia.org/wiki/Enclosure"],
    ["Wikipedia, 'Inclosure Acts'.", "https://en.wikipedia.org/wiki/Inclosure_Acts"],
    ["Wikipedia, 'Highland Clearances'.", "https://en.wikipedia.org/wiki/Highland_Clearances"],
    ["Wikipedia, 'Midland Revolt'.", "https://en.wikipedia.org/wiki/Midland_Revolt"],
    ["Wikipedia, 'Land grabbing'.", "https://en.wikipedia.org/wiki/Land_grabbing"],
    ["Wikipedia, 'Tragedy of the commons'.", "https://en.wikipedia.org/wiki/Tragedy_of_the_commons"],
    ["Wikipedia, 'Commons'.", "https://en.wikipedia.org/wiki/Commons"]
  ]
}
];
