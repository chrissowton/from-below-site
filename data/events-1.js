window.EVENTS = window.EVENTS || [];
window.EVENTS.push(
/* ------------------------------------------------------------------ HAITI */
{
  id: "haiti",
  title: "The Haitian Revolution",
  place: "Saint-Domingue (now Haiti)",
  date: "August 1791 – 1 January 1804",
  year: 1791, lat: 19.76, lon: -72.2, theme: "freedom",
  teaser: "The only revolution in history in which enslaved people overthrew their enslavers and founded an independent state.",
  hero: "haitiFire",
  background: `
<p>By the late 1780s the French colony of Saint-Domingue, on the western third of the island of Hispaniola, was the most profitable colony in the world. It produced a large share of the world's sugar and coffee, and its wealth flowed through the ports of Bordeaux and Nantes into the French economy. That wealth rested on a system of extraordinary brutality: roughly half a million enslaved Africans, worked so hard and fed so poorly that planters relied on a constant supply of new captives from Africa simply to maintain their numbers.</p>
<p>Colonial society was sharply divided:</p>
<ul>
  <li><strong>Grands blancs</strong> — wealthy white planters and merchants, who held political power.</li>
  <li><strong>Petits blancs</strong> — poorer white artisans, overseers and clerks.</li>
  <li><strong>Gens de couleur libres</strong> — free people of colour, many of them property-owners, who were nonetheless denied equal civil rights.</li>
  <li><strong>The enslaved majority</strong> — outnumbering all free people by roughly ten to one.</li>
</ul>
<p>When the French Revolution broke out in 1789, its language of the "Rights of Man" crossed the Atlantic. Free people of colour demanded equality, and in 1790 a rising led by Vincent Ogé was crushed and its leaders executed. The enslaved population had its own sources of solidarity, however: Vodou religious networks, communities of escaped "maroons" in the mountains, and a long memory of resistance. Even before the revolution, the French writer Guillaume Raynal had warned that the enslaved "only want a chief, sufficiently courageous, to lead them on to vengeance and slaughter."</p>`,
  people: [
    { n: "Dutty Boukman", r: "A Vodou priest (houngan) and enslaved driver who, according to tradition, led the ceremony at Bois Caïman and the first stage of the rising. He was killed by colonial forces in November 1791." },
    { n: "Cécile Fatiman", r: "A Vodou priestess (mambo) remembered as officiating alongside Boukman at Bois Caïman." },
    { n: "Toussaint Louverture", r: "Born into slavery and freed in the 1770s, he became the revolution's outstanding general and statesman. Seized by the French under a flag of truce in 1802, he died in the Fort de Joux in the Jura mountains in April 1803.", img: "toussaint" },
    { n: "Jean-Jacques Dessalines", r: "A formerly enslaved labourer who rose to command the revolutionary army in the final war of independence and proclaimed Haiti's independence in 1804.", img: "dessalines" },
    { n: "Jean-Baptiste Belley", r: "Born in Africa and formerly enslaved, he was elected as a deputy for Saint-Domingue to the National Convention in Paris, where he argued for the abolition of slavery in 1794.", img: "belley" },
    { n: "Sanité Bélair", r: "A free woman of colour who served as a sergeant and lieutenant in the revolutionary army and was executed by the French in 1802. She is one of the few women whose names survive from the fighting." },
    { n: "The rank and file", r: "Tens of thousands of field workers, domestic servants, craftsmen and maroons, nearly all of them unnamed in the surviving records, whose decision to rise and to keep fighting for twelve years made every leader possible." }
  ],
  happened: `
<p>On the night of 14 August 1791, enslaved representatives from plantations across the Northern Plain met in a wooded area known as Bois Caïman, near Le Cap. According to the earliest accounts, the gathering combined a political meeting with a Vodou ceremony at which participants swore to fight for their freedom.[1] One week later, on the night of 21–22 August, the rising began.</p>
<p>The scale and speed of the revolt astonished the colonists:</p>
<ul>
  <li>Within weeks, around 100,000 enslaved people in the north had joined the insurrection.[2]</li>
  <li>Within two months, some 180 sugar plantations and hundreds of coffee and indigo plantations had been burned or destroyed.[2]</li>
  <li>White militias retaliated with mass killings of Black people, and the conflict quickly became a war.</li>
</ul>
<p>What followed was a twelve-year struggle in which the revolutionaries fought, at different times, against the French colonial authorities, Spanish forces from neighbouring Santo Domingo, and a British invasion force. In August 1793 the French commissioner Léger-Félicité Sonthonax, unable to hold the colony without the support of the insurgents, proclaimed the abolition of slavery in the north. On 4 February 1794 the National Convention in Paris extended this to all French colonies, decreeing that "slavery of the Blacks is abolished in all the colonies."[3]</p>
<p>By 1801 Toussaint Louverture governed the colony and had issued a constitution. In a letter of 1792 he had written:</p>
<blockquote>"For too long we have borne your chains without thinking of shaking them off, but any authority which is not founded on virtue and humanity, and which only tends to subject one's fellow man to slavery, must come to an end."<cite>Toussaint Louverture, letter to the General Assembly, 1792[4]</cite></blockquote>
<p>In 1802 Napoleon Bonaparte sent a large expedition under his brother-in-law, General Charles Leclerc, to restore French control — and, as soon became clear, slavery. Leclerc landed at Le Cap in February 1802 and declared Toussaint an outlaw.[5] Toussaint was later seized under a flag of truce and deported to France. Resistance continued under Dessalines and Henri Christophe, using a deliberate scorched-earth strategy that Toussaint had described in a letter to Dessalines:</p>
<blockquote>"Bear in mind that the soil bathed with our sweat must not furnish our enemies with the smallest aliment."<cite>Toussaint Louverture, letter to Dessalines, 1802[4]</cite></blockquote>
<p>Yellow fever devastated the French army, and Leclerc himself died of it in November 1802. On 18 November 1803 the revolutionary army defeated the French at the Battle of Vertières, near Cap-Haïtien. On 1 January 1804, at Gonaïves, Dessalines declared the independence of the new state, giving it the Taíno name <em>Haiti</em>.[6]</p>`,
  gallery: ["ravine", "belley"],
  sources: [
    ["Laurent Dubois, <em>Avengers of the New World: The Story of the Haitian Revolution</em> (Harvard University Press, 2004), chs. 4–5, on Bois Caïman and the August 1791 rising; also the article 'Bois Caïman', Wikipedia.", "https://en.wikipedia.org/wiki/Bois_Ca%C3%AFman"],
    ["James Perry, <em>Arrogant Armies</em> (2005), as cited in the Wikipedia article 'Haitian Revolution', for the numbers involved and plantations destroyed in 1791.", "https://en.wikipedia.org/wiki/Haitian_Revolution"],
    ["Decree of the National Convention of 16 Pluviôse Year II (4 February 1794) abolishing slavery; see C.L.R. James, <em>The Black Jacobins</em> (1938; rev. 1963), ch. 6.", ""],
    ["Toussaint Louverture, letters of 1792 and 1802, collected on Wikiquote with their original citations.", "https://en.wikiquote.org/wiki/Toussaint_Louverture"],
    ["Leclerc's proclamation of 17 February 1802 outlawing Toussaint and Christophe; see Dubois, <em>Avengers of the New World</em>, ch. 12.", ""],
    ["Haitian Declaration of Independence, Gonaïves, 1 January 1804; Battle of Vertières, 18 November 1803. See David Geggus, <em>Haitian Revolutionary Studies</em> (Indiana University Press, 2002).", ""]
  ],
  next: `
<p>Independence did not bring security. The great powers treated Haiti as a dangerous example:</p>
<ul>
  <li>The United States refused to recognise Haiti diplomatically until 1862.</li>
  <li>In 1825, with warships off the coast, France demanded an indemnity of 150 million francs — later reduced to 90 million — to compensate former slaveholders for the loss of their "property" in exchange for recognition. Haiti borrowed heavily from French banks to pay it, and the debt and its interest burdened the country's finances for generations.</li>
  <li>Internally, the new state was shaped by war, by the assassination of Dessalines in 1806, and by a division between a northern kingdom under Henri Christophe and a southern republic under Alexandre Pétion.</li>
</ul>
<p>Haiti nonetheless offered shelter and material support to independence movements elsewhere. In 1815–16 Pétion supplied Simón Bolívar with arms and men, on condition that Bolívar abolish slavery in the lands he liberated.</p>`,
  why: `
<p>For a long time the story of abolition was told chiefly as one of humane reformers in Europe and North America. The Haitian Revolution complicates that story profoundly: enslaved people freed themselves through organisation, sacrifice and armed struggle, and in doing so forced the French Republic to make its own promise of universal rights real. The anthropologist Michel-Rolph Trouillot argued that the revolution was long "silenced" in Western history precisely because it was so difficult for contemporaries to imagine.</p>
<ul>
  <li>It was the first successful revolution led by enslaved people and created the first Black-led republic in the Americas.</li>
  <li>It shaped the politics of slavery throughout the Atlantic world, inspiring the enslaved and frightening slaveholders from Virginia to Brazil.</li>
  <li>The 1825 indemnity has become central to contemporary debates about reparations and the long-term economic consequences of colonialism.</li>
</ul>`,
  similar: [
    { id: "aba" }, { id: "saltmarch" },
    { name: "The Baptist War, Jamaica (1831–32)", text: "A rising of tens of thousands of enslaved people led by Samuel Sharpe, which hastened the abolition of slavery in the British Empire.", url: "https://en.wikipedia.org/w/index.php?search=Baptist+War+Jamaica" },
    { name: "The Malê Revolt, Brazil (1835)", text: "An uprising of enslaved Muslim Africans in Salvador, Bahia.", url: "https://en.wikipedia.org/w/index.php?search=Mal%C3%AA+Revolt" }
  ],
  more: [
    ["read", "C.L.R. James — <em>The Black Jacobins</em> (1938)", ""],
    ["read", "Laurent Dubois — <em>Avengers of the New World</em> (2004)", ""],
    ["read", "Michel-Rolph Trouillot — <em>Silencing the Past: Power and the Production of History</em> (1995)", ""],
    ["read", "<em>The New York Times</em> — 'The Ransom', investigative series on Haiti's independence debt (2022)", ""],
    ["online", "Wikipedia: Haitian Revolution (with extensive references)", "https://en.wikipedia.org/wiki/Haitian_Revolution"],
    ["online", "Wikiquote: Toussaint Louverture", "https://en.wikiquote.org/wiki/Toussaint_Louverture"]
  ]
},
/* ------------------------------------------------------------------ PETERLOO */
{
  id: "peterloo",
  title: "The Peterloo Massacre",
  place: "St Peter's Field, Manchester, England",
  date: "16 August 1819",
  year: 1819, lat: 53.4776, lon: -2.247, theme: "vote",
  teaser: "Tens of thousands of working people gathered peacefully to demand the vote. Within ten minutes, cavalry had cleared the field with sabres.",
  hero: "peterlooCarlile",
  background: `
<p>The end of the Napoleonic Wars in 1815 brought little relief to the working people of Lancashire. Demobilised soldiers returned to find no work; the price of bread was kept high by the Corn Laws, which protected landowners from cheaper foreign grain; and the wages of handloom weavers, once a relatively prosperous trade, collapsed under competition from the new power looms.</p>
<p>Working people also had no political voice. The parliamentary system was a patchwork inherited from the Middle Ages:</p>
<ul>
  <li>Only a small minority of adult men could vote, and none of the women.</li>
  <li>"Rotten boroughs" such as Old Sarum in Wiltshire returned two MPs with a handful of voters, while Manchester — by then a rapidly growing industrial town — had no MP of its own.</li>
  <li>Voting was public, which exposed voters to pressure from landlords and employers.</li>
</ul>
<p>Radical reformers organised Hampden Clubs, reading societies and, from 1818, Female Reform Societies. The government regarded all of this as dangerous. In March 1819 the Home Secretary, Lord Sidmouth, wrote to the Lancashire magistrates that the county "will not be tranquillised until blood shall have been shed, either by the law or the sword."</p>`,
  people: [
    { n: "Henry 'Orator' Hunt", r: "A Wiltshire gentleman-farmer and the most celebrated radical speaker of his day, invited to address the meeting. He urged people to attend 'armed with no other weapon but that of a self-approving conscience'. Arrested on the hustings, he was later imprisoned for two and a half years.", img: "hunt" },
    { n: "Samuel Bamford", r: "A weaver and poet from Middleton who led his town's contingent and later wrote one of the most important eyewitness accounts, <em>Passages in the Life of a Radical</em> (1844).", img: "bamford" },
    { n: "Mary Fildes", r: "President of the Manchester Female Reform Society, who stood on the hustings with Hunt and was injured by a sabre during the charge." },
    { n: "Joseph Johnson", r: "Secretary of the Manchester Patriotic Union, which organised the meeting." },
    { n: "John Lees", r: "A young cotton spinner from Oldham who had fought at Waterloo. He died of his injuries on 9 September 1819." },
    { n: "William Fildes", r: "A two-year-old child, recorded as the first person killed, when he was ridden down by a Yeomanry trooper on the way to the field." },
    { n: "John Tyas", r: "A reporter for <em>The Times</em>, who was on the hustings, was arrested with the speakers, and whose account helped to turn national opinion against the authorities." }
  ],
  happened: `
<p>Monday 16 August 1819 was a hot, clear day. The organisers had made great efforts to ensure a peaceful and orderly meeting. Samuel Bamford recalled that "it was deemed expedient that this meeting should be as morally effective as possible."[1] Contingents marched in from the surrounding towns, many people wearing their Sunday best, with bands and banners reading "No Corn Laws", "Annual Parliaments", "Universal Suffrage" and "Vote By Ballot".[2]</p>
<p>Estimates of the crowd's size have always varied:</p>
<ul>
  <li>Contemporaries gave figures ranging from 30,000 to 150,000.[2]</li>
  <li>Modern historians have generally placed it between about 40,000 and 80,000, with Robert Poole's recent analysis suggesting around 40,000.[3]</li>
</ul>
<p>The magistrates, watching from a house overlooking the field, had substantial forces at their disposal: about 600 men of the 15th Hussars, several hundred infantry, artillery, 400 men of the Cheshire Yeomanry, around 400 special constables, and some 120 members of the Manchester and Salford Yeomanry, a volunteer cavalry force recruited largely from local shopkeepers and publicans.[4]</p>
<p>Shortly after Hunt began to speak, at around 1:40 pm, the magistrates issued a warrant for the arrest of the speakers and ordered the Manchester and Salford Yeomanry to escort the deputy constable through the crowd. The inexperienced Yeomanry quickly became entangled in the dense crowd. John Tyas of <em>The Times</em> reported that they began "cutting most indiscriminately to the right and to the left" to reach the banners, and that "from this point the Manchester and Salford Yeomanry lost all command of temper."[5]</p>
<p>At about 1:50 pm, the chairman of the magistrates, William Hulton, ordered the 15th Hussars into the field with the words: "Good God, Sir, don't you see they are attacking the Yeomanry; disperse the meeting!"[5] An officer of the Hussars was heard trying to restrain the Yeomanry, shouting: "For shame! For shame! Gentlemen: forbear, forbear! The people cannot get away!"[3]</p>
<p>Within about ten minutes the field had been cleared.[6] The casualties were severe:</p>
<ul>
  <li><strong>Deaths:</strong> 18 people, according to the research of Michael Bush and Robert Poole.[3]</li>
  <li><strong>Injuries:</strong> between about 400 and 700, many from sabre cuts and many from being trampled. Of 654 recorded casualties, at least 168 were women.[7]</li>
</ul>
<p>John Lees, the Waterloo veteran, is reported to have told a friend before his death:</p>
<blockquote>"At Waterloo there was man to man but there it was downright murder."<cite>John Lees, as reported in Robert Reid, <em>The Peterloo Massacre</em> (1989), p. 201[8]</cite></blockquote>`,
  gallery: ["peterlooCruik", "peterlooPoster"],
  sources: [
    ["Samuel Bamford, <em>Passages in the Life of a Radical</em> (1844), ch. 30.", ""],
    ["Joyce Marlow, <em>The Peterloo Massacre</em> (1969), pp. 118–125, on the contingents, banners and estimates of the crowd.", ""],
    ["Robert Poole, <em>Peterloo: The English Uprising</em> (Oxford University Press, 2019), ch. 13 and pp. 345–364.", ""],
    ["Robert Reid, <em>The Peterloo Massacre</em> (1989), p. 88 and pp. 162–170, on the forces deployed and the timing of events.", ""],
    ["John Tyas's report in <em>The Times</em>, as reprinted in Donald Read, <em>Peterloo: The 'Massacre' and its Background</em> (1958); and Walmsley, <em>Peterloo: The Case Reopened</em> (1969), p. 214.", ""],
    ["F.A. Bruton, <em>The Story of Peterloo</em> (1919/1921); summarised in the Wikipedia article 'Peterloo Massacre'.", "https://en.wikipedia.org/wiki/Peterloo_Massacre"],
    ["Michael Bush, <em>The Casualties of Peterloo</em> (Carnegie Publishing, 2005), p. 1.", ""],
    ["Reid, <em>The Peterloo Massacre</em>, p. 201.", ""]
  ],
  next: `
<p>The government's response was to defend the magistrates and to tighten the law:</p>
<ul>
  <li>The Prince Regent conveyed his thanks to the magistrates and the troops.</li>
  <li>Parliament passed the "Six Acts" at the end of 1819, restricting public meetings, increasing taxes on radical newspapers and widening the definition of seditious libel.</li>
  <li>Hunt, Bamford and other organisers were tried and imprisoned.</li>
</ul>
<p>Public opinion, however, moved decisively. The radical <em>Manchester Observer</em> coined the bitterly ironic name "Peterloo". In Italy, Percy Bysshe Shelley wrote <em>The Masque of Anarchy</em>, ending with the call "Ye are many — they are few." The local merchant John Edward Taylor, outraged by the events, founded the <em>Manchester Guardian</em> in 1821. The first Reform Act followed in 1832, giving Manchester its own MPs, although it would take until 1918 and 1928 for all adult men and women to win the vote.</p>
<p>For many years the massacre was barely commemorated. A blue plaque placed in 1972 did not mention any violence; it was replaced by a red plaque in 2007, and a permanent memorial by the artist Jeremy Deller was unveiled in 2019.</p>`,
  why: `
<p>Peterloo is one of the foundational moments of British democracy, and its lesson is that the vote was not simply granted from above: it was demanded, at great personal risk, by weavers, spinners and their families who walked for miles to stand in a field. It also left a lasting mark on how the British state polices protest, on the radical press, and on the idea that peaceful assembly is a right rather than a privilege.</p>
<ul>
  <li>It helped to build the momentum that led to the Reform Act of 1832 and, later, Chartism.</li>
  <li>It shows how authorities can treat peaceful protest as a threat to public order — a debate that continues today.</li>
  <li>The prominent role of women, both as organisers and as casualties, has been recovered by recent research.</li>
</ul>`,
  similar: [
    { id: "selma" }, { id: "soweto" }, { id: "nzvote" },
    { name: "The Kennington Common Chartist meeting (1848)", text: "A mass meeting in support of the People's Charter, the next great push for working-class suffrage.", url: "https://en.wikipedia.org/w/index.php?search=Kennington+Common+Chartist+1848" },
    { name: "The Sharpeville massacre, South Africa (1960)", text: "Police opened fire on a crowd protesting against pass laws, killing 69 people.", url: "https://en.wikipedia.org/w/index.php?search=Sharpeville+massacre" }
  ],
  more: [
    ["visit", "People's History Museum, Manchester", "https://phm.org.uk/"],
    ["visit", "Working Class Movement Library, Salford — Peterloo collection", "https://www.wcml.org.uk/our-collections/protest-politics-and-campaigning-for-change/peterloo-massacre/"],
    ["read", "Robert Poole — <em>Peterloo: The English Uprising</em> (2019)", ""],
    ["read", "Jacqueline Riding — <em>Peterloo: The Story of the Manchester Massacre</em> (2018)", ""],
    ["watch", "<em>Peterloo</em> (2018), directed by Mike Leigh", ""],
    ["online", "Wikipedia: Peterloo Massacre", "https://en.wikipedia.org/wiki/Peterloo_Massacre"]
  ]
},
/* ------------------------------------------------------------------ TOLPUDDLE */
{
  id: "tolpuddle",
  title: "The Tolpuddle Martyrs",
  place: "Tolpuddle, Dorset, England",
  date: "February – March 1834",
  year: 1834, lat: 50.748, lon: -2.29, theme: "labour",
  teaser: "Six farm labourers formed a society to resist wage cuts and were sentenced to transportation to Australia.",
  hero: "tolMemorial",
  background: `
<p>In the early 1830s, agricultural labourers in the south of England were among the poorest workers in the country. The introduction of threshing machines had reduced winter work, and the "Swing Riots" of 1830–31, in which labourers had broken machines and burned ricks, had been suppressed with hangings and transportations.</p>
<p>In Tolpuddle, a small village in Dorset, wages had fallen to seven shillings a week and were due to fall again, to six — not enough to feed a family. The labourers asked for ten shillings.</p>
<p>The legal position of trade unions was ambiguous. The Combination Acts that had banned unions outright had been repealed in 1824–25, but the authorities remained deeply hostile to workers' organisations, and older laws remained on the statute book. In 1833 the labourers of Tolpuddle formed the Friendly Society of Agricultural Labourers, whose members swore an oath of loyalty and secrecy, as many friendly societies and lodges of the time did.</p>`,
  people: [
    { n: "George Loveless", r: "A farm labourer and Methodist lay preacher, regarded as the leader of the group. After his return he published an account of the case, <em>The Victims of Whiggery</em> (1837)." },
    { n: "James Loveless", r: "George's brother, also a Methodist preacher." },
    { n: "Thomas Standfield", r: "George Loveless's brother-in-law." },
    { n: "John Standfield", r: "Thomas's son." },
    { n: "James Brine", r: "A young labourer, later the husband of Elizabeth Standfield." },
    { n: "James Hammett", r: "The only one of the six to return permanently to Tolpuddle, where he died in 1891.", img: "hammett" },
    { n: "James Frampton", r: "A local landowner and magistrate who pressed for the prosecution." }
  ],
  happened: `
<p>In February 1834 the six men were arrested. They were not charged with forming a union, which would not in itself have been illegal. Instead, the prosecution relied on the Unlawful Oaths Act 1797, a measure passed in the aftermath of the naval mutinies at Spithead and the Nore, which prohibited the administering of secret oaths.[1]</p>
<p>The case, reported as <em>R v Lovelass and Others</em>, was heard at Dorchester Assizes in March 1834 before Baron Williams.[2] The evidence centred on the initiation ceremony: prosecution witnesses described being blindfolded, kneeling, and repeating an oath. One witness's account, recorded in the law report, conveys both the ritual and the witness's own uncertainty:</p>
<blockquote>"We kissed a book when we were blinded. When we were on our knees, we repeated something that was said by somebody, but who said it I don't know."<cite>Evidence of a prosecution witness, <em>R v Lovelass and Others</em> (1834)[2]</cite></blockquote>
<p>All six were found guilty and in March 1834 sentenced to seven years' transportation to the Australian penal colonies.[3] The severity of the sentence was widely understood as a warning to working people across the country.</p>
<p>The response was one of the first great campaigns of the British labour movement:</p>
<ul>
  <li>A petition calling for their release gathered about 800,000 signatures.[4]</li>
  <li>On 21 April 1834 a huge procession of trade unionists marched from Copenhagen Fields in Islington through London to present a petition to the Home Office — one of the first successful mass marches in Britain.[5]</li>
  <li>Radical MPs, including Thomas Wakley, raised the case repeatedly in Parliament.</li>
</ul>`,
  gallery: ["tolDay"],
  sources: [
    ["Unlawful Oaths Act 1797 (37 Geo. 3 c. 123); see Wikipedia, 'Tolpuddle Martyrs'.", "https://en.wikipedia.org/wiki/Tolpuddle_Martyrs"],
    ["<em>R v Lovelass and Others</em> (1834) 6 Carrington & Payne 596, 172 ER 1380; summary and extracts in Wikipedia, 'R v Lovelass'.", "https://en.wikipedia.org/w/index.php?search=R+v+Lovelass"],
    ["Encyclopaedia Britannica, 'Tolpuddle Martyrs': sentenced March 1834 to seven years' transportation.", "https://www.britannica.com/print/article/598686"],
    ["Wikipedia, 'Tolpuddle Martyrs', on the petition of c. 800,000 signatures.", "https://en.wikipedia.org/wiki/Tolpuddle_Martyrs"],
    ["London Remembers, 'Tolpuddle Martyrs at Copenhagen Fields', recording the march of 21 April 1834; BBC News, 27 November 2010.", "https://londonremembers.com/subjects/tolpuddle-martyrs"]
  ],
  next: `
<p>In March 1836, under sustained public pressure, the Home Secretary Lord John Russell granted the men full pardons. Their return took time:</p>
<ul>
  <li>George Loveless reached England in June 1837.</li>
  <li>James Loveless, the two Standfields and James Brine arrived at Plymouth in March 1838.</li>
  <li>James Hammett, who had been sent to a different part of the colony, did not return until 1839.</li>
</ul>
<p>Supporters raised funds to settle several of the men on farms in Essex. Most of them later emigrated to Canada, settling near London, Ontario, where George Loveless died in 1874. Since 1934 the Trades Union Congress has commemorated the martyrs, and the annual Tolpuddle Martyrs' Festival is held in the village every July.</p>`,
  why: `
<p>The Tolpuddle Martyrs became the founding story of the British trade union movement. Their case demonstrated how the law could be used to suppress workers' organisation, but also how a mass campaign of ordinary people — signing petitions, marching, raising funds — could force a government to reverse an injustice.</p>
<ul>
  <li>It established the principle, now widely accepted, that working people have a right to combine to defend their wages and conditions.</li>
  <li>It showed the importance of solidarity across trades and regions: the London march was organised largely by urban workers on behalf of rural labourers they had never met.</li>
  <li>The memory of the case remains a reference point in debates about trade union law today.</li>
</ul>`,
  similar: [
    { id: "matchwomen" }, { id: "lawrence" }, { id: "wavehill" },
    { name: "The Swing Riots (1830–31)", text: "A wave of machine-breaking and protest by agricultural labourers across southern England.", url: "https://en.wikipedia.org/w/index.php?search=Swing+Riots" },
    { name: "The Grunwick dispute (1976–78)", text: "A strike led by South Asian women workers in north London for union recognition.", url: "https://en.wikipedia.org/w/index.php?search=Grunwick+dispute" }
  ],
  more: [
    ["visit", "Tolpuddle Martyrs Museum, Dorset", "https://www.tolpuddlemartyrs.org.uk/"],
    ["visit", "Shire Hall Historic Courthouse Museum, Dorchester — the courtroom where they were tried", "https://shirehalldorset.org/who-were-the-tolpuddle-martyrs-and-why-are-they-still-important/"],
    ["online", "TUC 150: The Tolpuddle Martyrs", "https://tuc150.tuc.org.uk/?p=439"],
    ["read", "George Loveless — <em>The Victims of Whiggery</em> (1837)", ""],
    ["read", "Joyce Marlow — <em>The Tolpuddle Martyrs</em> (1971)", ""],
    ["online", "Wikipedia: Tolpuddle Martyrs", "https://en.wikipedia.org/wiki/Tolpuddle_Martyrs"]
  ]
},
/* ------------------------------------------------------------------ MATCHWOMEN */
{
  id: "matchwomen",
  title: "The Matchwomen's Strike",
  place: "Bryant & May factory, Bow, East London",
  date: "July 1888",
  year: 1888, lat: 51.531, lon: -0.021, theme: "labour",
  teaser: "About 1,400 women and girls walked out of a match factory, won their demands in three weeks, and founded the largest union of women in Britain.",
  hero: "matchStrikers",
  background: `
<p>Bryant &amp; May's Fairfield Works in Bow was one of the largest factories in the East End of London and a highly profitable business: its original £5 shares were trading at more than £18 by 1888. Most of its match-makers were women and teenage girls, many from Irish Catholic families in the surrounding streets.</p>
<p>Conditions in the factory were harsh:</p>
<ul>
  <li>Working days of up to fourteen hours, for piece-rates that could leave a young worker with only a few shillings a week.</li>
  <li>A system of fines deducted from wages — for example 3d for having dirty feet (many workers could not afford shoes), for talking or for an untidy bench, and a shilling for leaving burnt matches on the bench.</li>
  <li>Exposure to white phosphorus, which caused "phossy jaw", a form of bone necrosis that could disfigure and kill. Safer alternatives existed but were more expensive.</li>
</ul>
<p>Trade unions at this time were dominated by skilled male craftsmen. Unskilled and casual workers, and especially women, were widely regarded as impossible to organise.</p>`,
  people: [
    { n: "Sarah Chapman", r: "A machine operator in her mid-twenties who was elected to the strike committee and then to the first committee of the new union. In 2022 English Heritage unveiled a blue plaque at the factory site in her honour, alongside the strike.", img: "chapman" },
    { n: "Annie Besant", r: "A socialist, secularist and journalist whose article in <em>The Link</em> exposed conditions at the factory, and who helped to organise publicity and funds once the strike began.", img: "besant" },
    { n: "Herbert Burrows", r: "A socialist who worked closely with Besant on the investigation and the strike." },
    { n: "The strike committee", r: "Elected representatives of the workforce who negotiated directly with the company and with Members of Parliament." },
    { n: "The 1,400", r: "Women and girls, many in their teens, who walked out without a union, without strike funds and without the vote." }
  ],
  happened: `
<p>On 23 June 1888, Annie Besant published an article in her halfpenny weekly, <em>The Link</em>, titled "White Slavery in London", based on interviews with match workers about their wages, fines and conditions.[1] In her autobiography she recalled the case of a sixteen-year-old who earned four shillings a week and lived on bread, butter and tea, and who "related with dancing eyes that once a month she went to a meal where 'you get coffee and bread and butter, and jam and marmalade, and lots of it.'"[2]</p>
<p>The company responded by trying to force its workers to sign a statement denying the article's claims. The women refused. According to Besant, a delegation told her:</p>
<blockquote>"You had spoke up for us, and we weren't going back on you."<cite>Matchwomen's delegation to Annie Besant, July 1888, recorded in Besant, <em>An Autobiography</em> (1893)[2]</cite></blockquote>
<p>Around 2 July 1888 a worker was dismissed on a pretext. In response, roughly 1,400 women and girls stopped work, and by 6 July the whole factory had come to a halt.[3] The strike that followed was notable for its organisation and public reach:</p>
<ul>
  <li>The strikers marched to Besant's office in Fleet Street to ask for help, and a strike fund was opened; donations were published in <em>The Link</em>.[3]</li>
  <li>On 11 July a deputation of matchwomen met Members of Parliament at the House of Commons, and Charles Bradlaugh MP raised the case in Parliament.[3]</li>
  <li>The London Trades Council agreed to act as an intermediary with the company.</li>
</ul>
<p>At a meeting on 16 July, terms were agreed: fines and deductions were abolished, grievances could be taken directly to management, and the strikers returned to work.[3] The workers then founded the Union of Women Match Makers — in Besant's words, for some years "the strongest woman's Trades Union in England."[2]</p>`,
  gallery: ["matchCommittee", "theLink", "chapmanGroup"],
  sources: [
    ["Annie Besant, 'White Slavery in London', <em>The Link</em>, no. 21, 23 June 1888.", ""],
    ["Annie Besant, <em>An Autobiography</em> (1893), ch. 14, full text on Wikisource.", "https://en.wikisource.org/wiki/An_Autobiography/Chapter_XIV"],
    ["Wikipedia, 'Matchgirls' strike', on the dismissal, the walk-out of c. 1,400 workers, the meetings of 11 and 16 July and the settlement.", "https://en.wikipedia.org/w/index.php?search=Matchgirls%27+strike"],
    ["Louise Raw, <em>Striking a Light: The Bryant and May Matchwomen and their Place in History</em> (Continuum, 2009).", ""]
  ],
  next: `
<p>The strike's success had effects far beyond Bow:</p>
<ul>
  <li>It became one of the starting points of "New Unionism", the organisation of unskilled and semi-skilled workers in general unions. The gas workers organised in 1889, and the Great London Dock Strike of the same year won the "dockers' tanner".</li>
  <li>Public pressure over phosphorus poisoning continued. The International Berne Convention of 1906 prohibited white phosphorus in matches, and Britain banned it by the White Phosphorus Matches Prohibition Act 1908, which came into force in 1910.</li>
  <li>Bryant &amp; May eventually built a separate drying room and later moved to safer processes; the Bow factory closed in 1979 and is now a housing development, Bow Quarter.</li>
</ul>`,
  why: `
<p>For many years the strike was told as a story of middle-class reformers rescuing helpless working girls. The historian Louise Raw's research in the 2000s helped to change that interpretation, showing that the matchwomen had a tradition of collective action, that they took the decision to strike themselves, and that their own leaders, such as Sarah Chapman, played a central role. This shift — from the famous names to the people in the crowd — is precisely what history from below seeks to achieve.</p>
<ul>
  <li>It demonstrated that unskilled women workers could organise and win.</li>
  <li>It showed the power of combining industrial action with publicity, consumer pressure and political lobbying.</li>
  <li>It contributed directly to the regulation of industrial poisons in the workplace.</li>
</ul>`,
  similar: [
    { id: "lawrence" }, { id: "tolpuddle" },
    { name: "The Great London Dock Strike (1889)", text: "A month-long strike of dock workers that marked the high point of New Unionism.", url: "https://en.wikipedia.org/w/index.php?search=London+Dock+strike+1889" },
    { name: "The Ford sewing machinists' strike, Dagenham (1968)", text: "Women workers whose strike for equal grading helped lead to the Equal Pay Act 1970.", url: "https://en.wikipedia.org/w/index.php?search=Ford+sewing+machinists+strike+1968" }
  ],
  more: [
    ["read", "Louise Raw — <em>Striking a Light</em> (2009)", ""],
    ["online", "Annie Besant, <em>An Autobiography</em>, chapter XIV (Wikisource)", "https://en.wikisource.org/wiki/An_Autobiography/Chapter_XIV"],
    ["online", "Wikipedia: Matchgirls' strike", "https://en.wikipedia.org/w/index.php?search=Matchgirls%27+strike"],
    ["visit", "Bow Quarter (former Bryant & May factory) and the English Heritage blue plaque, Fairfield Road, London E3", ""]
  ]
},
/* ------------------------------------------------------------------ NEW ZEALAND */
{
  id: "nzvote",
  title: "Women Win the Vote in New Zealand",
  place: "Wellington, Aotearoa New Zealand",
  date: "19 September 1893",
  year: 1893, lat: -41.2788, lon: 174.7767, theme: "vote",
  teaser: "A nationwide petition campaign made New Zealand the first self-governing country in which all women could vote in parliamentary elections.",
  hero: "nzPetition",
  background: `
<p>In the 1880s, women in New Zealand were running households, farms and businesses, paying taxes and raising families, yet were excluded from voting for the Parliament that made the laws governing their lives. Many first became politically active through the Women's Christian Temperance Union (WCTU), founded in New Zealand in 1885, which campaigned against the harm caused by alcohol, including domestic violence and poverty.</p>
<p>The temperance campaigners soon concluded that they would make little progress without the vote. Their arguments were set out in a series of pamphlets, including Kate Sheppard's <em>Is It Right?</em> (1892), which asked:</p>
<blockquote>"Is it right that while the gambler, the drunkard, and even the wife-beater has a vote, earnest, educated and refined women are denied it?"<cite>Kate Sheppard, <em>Is It Right?</em> (1892)</cite></blockquote>
<p>The campaign also drew in trade unionists such as Harriet Morison, who organised women in the Dunedin clothing trade, and Māori women, who were simultaneously seeking a voice in Te Kotahitanga, the Māori Parliament.</p>`,
  people: [
    { n: "Kate Sheppard", r: "Superintendent of the WCTU's franchise department and the leading organiser of the national campaign. She is commemorated on the New Zealand ten-dollar note.", img: "sheppard" },
    { n: "Meri Te Tai Mangakāhia", r: "In 1893 she addressed Te Kotahitanga, the Māori Parliament, moving that Māori women be given the right to vote for, and to sit in, that Parliament.", img: "mangakahia" },
    { n: "Harriet Morison", r: "A Dunedin trade unionist who founded the Tailoresses' Union and linked the suffrage cause to working women's conditions.", img: "morison" },
    { n: "Amey Daldy", r: "An Auckland campaigner and president of the Auckland Women's Franchise League.", img: "daldy" },
    { n: "Sir John Hall", r: "The MP who presented the petitions to Parliament." },
    { n: "The petitioners", r: "Around 32,000 women who signed the 1893 petition with their names and addresses, in public and sometimes against the wishes of their husbands." }
  ],
  happened: `
<p>Between 1891 and 1893 the campaigners organised a series of petitions to Parliament, collected door to door and at public meetings throughout the country:[1]</p>
<ul>
  <li>1891: more than 9,000 signatures.</li>
  <li>1892: almost 20,000 signatures.</li>
  <li>1893: nearly 32,000 signatures — close to a quarter of the adult European female population of the colony. The sheets were glued together into a roll about 270 metres long.</li>
</ul>
<p>The 1893 petition was presented to Parliament and a new electoral bill passed the House of Representatives with a large majority. Its fate in the appointed upper house, the Legislative Council, was uncertain. The Premier, Richard Seddon, opposed the measure and tried to secure its defeat by persuading a councillor to change his vote. The manoeuvre backfired: two other councillors, angered by it, switched sides, and the bill passed by 20 votes to 18 on 8 September 1893.[1]</p>
<p>Eighteen legislative councillors then petitioned the new Governor, Lord Glasgow, to withhold his assent. On 19 September 1893 he signed the Electoral Act 1893, giving all women aged 21 or over, Māori and Pākehā alike, the right to vote in parliamentary elections.[1] Kate Sheppard wrote:</p>
<blockquote>"The news is being flashed far and wide, and before our earth has revolved on her axis every civilized community within the reach of the electric wires will have received the tidings that civic freedom has been granted to the women of New Zealand."<cite>Kate Sheppard, statement of September 1893[2]</cite></blockquote>
<p>Women voted for the first time just over ten weeks later, in the general election of 28 November 1893; the Māori electorates voted on 20 December.[1] The same year, Elizabeth Yates became mayor of Onehunga, the first woman to hold such an office anywhere in the British Empire.</p>`,
  gallery: ["mangakahia"],
  sources: [
    ["Wikipedia, 'Women's suffrage in New Zealand', on the petitions of 1891–93, the Legislative Council vote, Lord Glasgow's assent and the 1893 elections.", "https://en.wikipedia.org/wiki/Women%27s_suffrage_in_New_Zealand"],
    ["Kate Sheppard, statement after the passage of the Electoral Act, September 1893; collected on Wikiquote.", "https://en.wikiquote.org/wiki/Kate_Sheppard"],
    ["Patricia Grimshaw, <em>Women's Suffrage in New Zealand</em> (Auckland University Press, 1972; rev. 1987).", ""],
    ["NZHistory (Manatū Taonga, Ministry for Culture and Heritage), 'Women and the vote'.", "https://nzhistory.govt.nz/politics/womens-suffrage"]
  ],
  next: `
<p>Winning the vote was a beginning rather than an end:</p>
<ul>
  <li>Women were not permitted to stand for Parliament until 1919, and the first woman MP, Elizabeth McCombs, was not elected until 1933. The first Māori woman MP, Iriaka Rātana, was elected in 1949.</li>
  <li>In 1896 Kate Sheppard became founding president of the National Council of Women of New Zealand, which campaigned on issues including equal pay, divorce law reform and the rights of children.</li>
  <li>New Zealand's example was widely cited by suffrage campaigners in Australia, Britain and the United States in the decades that followed.</li>
</ul>`,
  why: `
<p>New Zealand's victory demonstrates that democratic rights can be won not only through dramatic confrontations but through years of patient, determined organisation: drafting pamphlets, holding meetings, and collecting signatures one household at a time. The petition itself, now held by Archives New Zealand and inscribed on the UNESCO Memory of the World register, is a remarkable record of thousands of ordinary women putting their names to a political demand.</p>
<ul>
  <li>It made New Zealand the first self-governing country in which all adult women could vote in national elections.</li>
  <li>It included Māori women from the outset, unlike many later franchise reforms elsewhere.</li>
  <li>It shows how a social movement (temperance) can grow into a broader campaign for political equality.</li>
</ul>`,
  similar: [
    { id: "peterloo" }, { id: "selma" },
    { name: "Women's suffrage in the United Kingdom", text: "The long campaign of suffragists and suffragettes, culminating in the Representation of the People Acts of 1918 and 1928.", url: "https://en.wikipedia.org/w/index.php?search=Women%27s+suffrage+in+the+United+Kingdom" },
    { name: "The Seneca Falls Convention (1848)", text: "The first women's rights convention in the United States.", url: "https://en.wikipedia.org/w/index.php?search=Seneca+Falls+Convention" }
  ],
  more: [
    ["online", "NZHistory: Women and the vote", "https://nzhistory.govt.nz/politics/womens-suffrage"],
    ["visit", "He Tohu exhibition, National Library of New Zealand, Wellington (displays the 1893 petition)", "https://natlib.govt.nz/he-tohu"],
    ["read", "Patricia Grimshaw — <em>Women's Suffrage in New Zealand</em> (1972)", ""],
    ["online", "Wikiquote: Kate Sheppard", "https://en.wikiquote.org/wiki/Kate_Sheppard"]
  ]
}
);
