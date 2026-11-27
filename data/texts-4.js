/* The Library, fourth shelf. Same rules as data/texts.js. */
window.TEXTS = (window.TEXTS || []).concat([
{
  id: "toussaintsonnet",
  title: "To Toussaint L'Ouverture",
  author: "William Wordsworth",
  year: 1802, place: "England",
  kind: "Poem",
  stories: ["haiti"],
  heroStory: "haiti",
  teaser: "'Thou hast great allies.' An English poet's sonnet to the leader of the Haitian Revolution, written while Toussaint lay in a French prison.",
  intro: `<p>In 1802 Napoleon sent an army to Saint-Domingue to restore French control — and, it soon became clear, slavery. Toussaint Louverture, who had led the formerly enslaved people of the colony for nearly a decade, was tricked into a meeting, arrested and shipped to France. He was held in a cold fortress in the Jura mountains, where he died in April 1803.</p>
<p>William Wordsworth, then a young poet who had welcomed the French Revolution and grown disillusioned with it, wrote this sonnet while Toussaint was imprisoned. It was published in a London newspaper in February 1803 and later in his Poems, in Two Volumes.</p>`,
  reading: "Wordsworth writes to a man he expects never to be freed — 'Though fallen Thyself, never to rise again' — and offers him not hope of release but a different kind of victory. The last lines are the famous ones: the wind, the earth and the skies will remember him, and his allies are 'exultations, agonies, and love, and Man's unconquerable mind'. It is a sympathetic poem by an outsider, more about the cause than the man; it says nothing of the hundreds of thousands who made the revolution.",
  after: `<p>Toussaint died before the poem appeared in print. Within a year of his death, the army he had built defeated the French, and Haiti declared its independence on 1 January 1804. The sonnet helped make Toussaint a hero to British and American abolitionists, and its closing lines are still quoted in writing about the revolution.</p>`,
  abridged: false,
  edition: "William Wordsworth, Poems, in Two Volumes (1807), vol. 1, as transcribed on Wikisource",
  src: ["Wikisource: To Toussaint L'Ouverture (1807)", "https://en.wikisource.org/wiki/Poems,_in_Two_Volumes_(Wordsworth,_1807)/Volume_1/To_Toussaint_L%27Ouverture"],
  fixes: "",
  body: [
    { v: ["Toussaint, the most unhappy Man of Men!", "Whether the rural Milk-maid by her Cow", "Sing in thy hearing, or thou liest now", "Alone in some deep dungeon's earless den,", "O miserable chieftain! where and when", "Wilt thou find patience? Yet die not; do thou", "Wear rather in thy bonds a chearful brow:", "Though fallen Thyself, never to rise again,", "Live, and take comfort. Thou hast left behind", "Powers that will work for thee; air, earth, and skies;", "There's not a breathing of the common wind", "That will forget thee; thou hast great allies;", "Thy friends are exultations, agonies,", "And love, and Man's unconquerable mind."] }
  ]
},
{
  id: "menofengland",
  title: "Song to the Men of England",
  author: "Percy Bysshe Shelley",
  year: 1819, place: "England",
  kind: "Poem",
  stories: ["peterloo", "luddites"],
  heroStory: "peterloo",
  teaser: "'The seed ye sow, another reaps.' Shelley's other poem of 1819, asking the workers of England why they labour for those who live off them.",
  intro: `<p>Shelley wrote this short poem in 1819, the year of Peterloo, alongside The Mask of Anarchy. He hoped to publish a book of popular political songs for working people, but no publisher would take the risk.</p>
<p>The poem was printed only in 1839, seventeen years after Shelley's death, when his widow, Mary Shelley, included it in her edition of his works. By then the Chartists were organising, and they took it up at once.</p>`,
  reading: "The poem is built from questions, and the questions do the arguing: why plough for lords, why weave robes for tyrants, why forge the weapons used against you? The fifth verse sets out the injustice in four plain lines, and the sixth turns each one around. Notice the 'drones' and 'bees' — the old image of a hive, where the workers feed idlers who produce nothing. The last two verses are bitter, almost despairing: if things do not change, the workers are simply building their own graves.",
  after: `<p>Chartist newspapers reprinted the poem, and it became part of the radical and socialist tradition in Britain, and quoted at radical and labour meetings. Like The Mask of Anarchy, it shaped how later generations imagined the struggles of 1819.</p>`,
  abridged: false,
  edition: "The Complete Poetical Works of Percy Bysshe Shelley, ed. Thomas Hutchinson (1914), as transcribed on Wikisource",
  src: ["Wikisource: Song to the Men of England (Hutchinson edition)", "https://en.wikisource.org/wiki/The_Complete_Poetical_Works_of_Percy_Bysshe_Shelley_(ed._Hutchinson,_1914)/Song_to_the_Men_of_England"],
  fixes: "",
  body: [
    { v: ["Men of England, wherefore plough", "For the lords who lay ye low?", "Wherefore weave with toil and care", "The rich robes your tyrants wear?"] },
    { v: ["Wherefore feed, and clothe, and save,", "From the cradle to the grave,", "Those ungrateful drones who would", "Drain your sweat—nay, drink your blood?"] },
    { v: ["Wherefore, Bees of England, forge", "Many a weapon, chain, and scourge,", "That these stingless drones may spoil", "The forced produce of your toil?"] },
    { v: ["Have ye leisure, comfort, calm,", "Shelter, food, love's gentle balm?", "Or what is it ye buy so dear", "With your pain and with your fear?"] },
    { v: ["The seed ye sow, another reaps;", "The wealth ye find, another keeps;", "The robes ye weave, another wears;", "The arms ye forge, another bears."] },
    { v: ["Sow seed,—but let no tyrant reap;", "Find wealth,—let no impostor heap;", "Weave robes,—let not the idle wear;", "Forge arms,—in your defence to bear."] },
    { v: ["Shrink to your cellars, holes, and cells;", "In halls ye deck another dwells.", "Why shake the chains ye wrought? Ye see", "The steel ye tempered glance on ye."] },
    { v: ["With plough and spade, and hoe and loom,", "Trace your grave, and build your tomb,", "And weave your winding-sheet, till fair", "England be your sepulchre."] }
  ]
},
{
  id: "deanglicising",
  title: "The Necessity for De-Anglicising Ireland",
  author: "Douglas Hyde",
  year: 1892, place: "Ireland",
  kind: "Lecture",
  stories: ["gaelicleague1893"],
  heroStory: "gaelicleague1893",
  teaser: "The lecture that launched the Irish language revival: why, Hyde asked, did people who claimed to hate England copy it in everything — and let their own language die?",
  intro: `<p>Douglas Hyde was the son of a Protestant clergyman in County Roscommon, who learned Irish as a boy from local farmers and gamekeepers. By the 1890s he was a scholar and collector of Irish songs and stories, at a time when the number of Irish speakers was falling fast and very few children were being raised in the language.</p>
<p>On 25 November 1892 he gave this lecture to the Irish National Literary Society in Dublin. The following year he and others founded the Gaelic League to keep Irish alive, with Hyde as its president.</p>`,
  reading: "Hyde's target is not England but Irish people themselves — those who 'drop their own language to speak English' while 'protesting as a matter of sentiment that they hate the country which at every hand's turn they rush to imitate'. He insists, again and again, that this is 'no political matter' and appeals to unionists as well as nationalists. He also speaks in the language of his time about 'the Irish race' and its character, a way of talking about nations that sounds very different today. The source of this transcription is not named on Wikisource.",
  after: `<p>The Gaelic League grew to some 600 branches and 50,000 members by 1904. Despite Hyde's hopes, it became bound up with nationalism; several leaders of the 1916 Rising were members, and Hyde resigned as president in 1915 when it adopted political aims. In 1938 he became the first President of Ireland.</p>`,
  abridged: true,
  edition: "Douglas Hyde, The Necessity for De-Anglicising Ireland, lecture of 25 November 1892, as transcribed on Wikisource",
  src: ["Wikisource: The Necessity for the De-Anglicising the Irish Nation", "https://en.wikisource.org/wiki/The_Necessity_for_the_De-Anglicising_the_Irish_Nation"],
  fixes: "Wikisource does not name the printed edition this transcription came from.",
  body: [
    { p: "When we speak of 'The Necessity for De-Anglicising the Irish Nation', we mean it, not as a protest against imitating what is best in the English people, for that would be absurd, but rather to show the folly of neglecting what is Irish, and hastening to adopt, pell-mell, and indiscriminately, everything that is English, simply because it is English. This is a question which most Irishmen will naturally look at from a National point of view, but it is one which ought also to claim the sympathies of every intelligent Unionist, and which, as I know, does claim the sympathy of many." },
    { gap: 1 },
    { p: "I should also like to call attention to the illogical position of men who drop their own language to speak English, of men who translate their euphonious Irish names into English monosyllables, of men who read English books, and know nothing about Gaelic literature, nevertheless protesting as a matter of sentiment that they hate the country which at every hand's turn they rush to imitate. I wish to show you that in Anglicising ourselves wholesale we have thrown away with a light heart the best claim which we have upon the world's recognition of us as a separate nationality." },
    { gap: 1 },
    { p: "So much for the greatest stroke of all in our Anglicisation, the loss of our language. I have often heard people thank God that if the English gave us nothing else they gave us at least their language. In this way they put a bold face upon the matter, and pretend that the Irish language is not worth knowing, and has no literature. But the Irish language is worth knowing, or why would the greatest philologists of Germany, France, and Italy be emulously studying it, and it does possess a literature, or why would a German savant have made the calculation that the books written in Irish between the eleventh and seventeenth centuries, and still extant, would fill a thousand octavo volumes." },
    { p: "I have no hesitation at all in saying that every Irish-feeling Irishman, who hates the reproach of West-Britonism, should set himself to encourage the efforts, which are being made to keep alive our once great national tongue. The losing of it is our greatest blow, and the sorest stroke that the rapid Anglicisation of Ireland has inflicted upon us. In order to de-Anglicise ourselves we must at once arrest the decay of the language. We must bring pressure upon our politicians not to snuff it out by their tacit discouragement merely because they do not happen themselves to understand it. We must arouse some spark of patriotic inspiration among the peasantry who still use the language, and put an end to the shameful state of feeling—a thousand-tongued reproach to our leaders and statesmen—which makes young men and women blush and hang their heads when overheard speaking their own language." },
    { gap: 1 },
    { p: "I knew fifteen Irish workmen who were working in a haggard in England give up talking Irish amongst themselves because the English farmer laughed at them. … We must teach ourselves to be less sensitive, we must teach ourselves not to be ashamed of ourselves, because the Gaelic people can never produce its best before the world as long as it remains tied to the apron-strings of another race and another island, waiting for it to move before it will venture to take any step itself." },
    { p: "In conclusion, I would earnestly appeal to every one, whether Unionist or Nationalist, who wishes to see the Irish nation produce its best—surely whatever our politics are we all wish that—to set his face against this constant running to England for our books, literature, music, games, fashions, and ideas. I appeal to every one whatever his politics—for this is no political matter—to do his best to help the Irish race to develop in future upon Irish lines, even at the risk of encouraging national aspirations, because upon Irish lines alone can the Irish race once more become what it was of yore—one of the most original, artistic, literary, and charming peoples of Europe." }
  ]
},
{
  id: "gaponpetition",
  title: "The workers' petition to the Tsar",
  author: "Father Georgy Gapon and the workers of St Petersburg",
  year: 1905, place: "Russia",
  kind: "Petition",
  stories: ["bloodysunday1905"],
  heroStory: "bloodysunday1905",
  teaser: "'For us there are but two roads, one leading to liberty and happiness, the other to the tomb.' The petition tens of thousands of workers carried towards the Winter Palace on Bloody Sunday.",
  intro: `<p>Father Georgy Gapon was an Orthodox priest who led the Assembly of Russian Factory and Mill Workers in St Petersburg — a workers' organisation that, at first, had the approval of the police. In January 1905, as a strike spread through the city's factories, Gapon and the Assembly drew up a petition to Tsar Nicholas II, which tens of thousands of workers signed.</p>
<p>On Sunday 22 January (9 January in the Russian calendar of the time), columns of workers and their families, carrying icons and portraits of the Tsar, marched to present it at the Winter Palace. Soldiers opened fire.</p>`,
  reading: "The petition is written as an appeal from children to a father — 'Sire', 'O Tsar' — and it asks him to save his people from officials and employers. But inside that loyal frame are demands that amounted to a political revolution: a constituent assembly elected by universal suffrage, freedom of speech and association, separation of Church and State, an eight-hour day, and a progressive income tax. Its closing words, offering to die on the square, read differently once you know what happened next.",
  after: `<p>Officials recorded 96 dead and 333 injured; anti-government sources claimed more than 4,000 dead, and moderate estimates are around 1,000 killed or wounded. Strikes spread across the empire, and by October the Tsar was forced to promise a parliament and civil rights. Gapon fled abroad. He later returned to Russia, renewed his contacts with the police, and was killed in 1906 by revolutionaries who believed he had become an informer.</p>`,
  abridged: false,
  edition: "From The Story of My Life, by Father Gapon (London: Chapman & Hall, 1906), as transcribed on Wikisource",
  src: ["Wikisource: The St. Petersburg workmen's petition to the Tsar, January 22, 1905", "https://en.wikisource.org/wiki/The_St._Petersburg_workmen%27s_petition_to_the_Tsar,_January_22,_1905"],
  fixes: "",
  body: [
    { p: "Sire,—" },
    { p: "We working men of St. Petersburg, our wives and children, and our parents, helpless, aged men and women, have come to you, O Tsar, in quest of justice and protection. We have been beggared, oppressed, over-burdened with excessive toil, treated with contumely. We are not recognized as normal human beings, but are dealt with as slaves who have to bear their bitter lot in silence. Patiently we endured this; but now we are being thrust deeper into the slough of right-lessness and ignorance, are being suffocated by despotism and arbitrary whims, and now, O Tsar, we have no strength left. The awful moment has come when death is better than the prolongation of our unendurable tortures. Therefore, we have left work, and informed our employers that we shall not resume it until they have fulfilled our demands. What we have asked is little, consisting solely of that without which our life is not life, but hell and eternal torture." },
    { p: "Our first petition was that our employers should investigate our needs together with ourselves, and even that has been refused. The very right of discussing our wants has been withheld from us on the ground that the law does not recognize any such right, and our demand for an eight-hours day has been dismissed as illegal. To fix the prices of our labour in concert with ourselves, to adjudge upon misunderstandings between us and the lower administration of the factories, to raise the wages of unskilled work men and women up to a rouble a day, to abolish overtime, to take better care of the sick, to instruct without insulting us, to arrange the workshops so that we might work there without encountering death through draughts, rain, and snow: all these requests have been condemned by our employers as unlawful, and our very petition treated as a crime, while the wish to better our condition is regarded as a piece of insolence towards the employers." },
    { p: "O Emperor, there are more than three hundred thousand of us here, yet we are all of us human beings only in appearance and outwardly, while in reality we are deemed devoid of a single human right, even that of speaking, thinking, and meeting to talk over our needs, and of taking measures to better our condition. Any one of us who should dare lift his voice in defence of the working class is thrown into prison or banished. The possession of a kindly heart, of a sensitive soul, is punished in us as a crime. Fellow-feeling for a forlorn, maltreated human being who is bereft of his rights is consequently a heinous crime. O Tsar, is this in accordance with God's commandments, in virtue of which you are now reigning? Is life under such laws worth living? Would it not be better for all of us working people in Russia to die, leaving capitalists and officials to live and enjoy existence?" },
    { p: "Such is the future which confronts us, Sire, and therefore we are gathered together before your palace walls. Here we await the last available means of rescue. Refuse not to help your people out of the gulf of rightlessness, misery, and ignorance. Give them a chance of accomplishing their destiny. Deliver them from the intolerable oppression of the bureaucracy. Demolish the wall between yourself and the people, and let them govern the country in conjunction with yourself. You have been sent to lead the people to happiness; but happiness is snatched from us by the officials, who leave us only sorrow and humiliation. Consider our demands attentively and without anger. They have been uttered not for evil, but for good; for our good, Sire, and yours. It is not insolence that speaks in us, but the consciousness of the general necessity of escaping from the present intolerable state of things. Russia is too vast, her wants too manifold, to admit of bureaucrats alone governing her. It is absolutely necessary that the people should assist, because only they know their own hardships." },
    { p: "Refuse not to succour your people; give orders without delay to representatives of all classes in the land to meet together. Let capitalists and workmen be present; let officials, priests, physicians, and teachers all come and choose their own delegates. Let all be free to elect whom they will, and for this purpose let the elections to the Constituent Assembly be organized on the principle of universal suffrage. This is our principal request, on which everything else depends. It is the best and only plaster for our open wounds, without which they will ever remain open and hurry us on to death. There is no one panacea for all our ills; many are needed, and we now proceed to enumerate them, speaking plainly and candidly to you, Sire, as to a father. The following measures are indispensable." },
    { p: "In the first section are those which are directed against the ignorance and disfranchisement of the Russian people. They include — (1) Freedom and inviolability of the person, liberty of speech, of the press, of association, of conscience in matters of religion, and separation of Church and State. (2) General and obligatory education by the State. (3) The responsibility of Ministers to the nation, and guarantees for the legality of administrative methods. (4) Equality of all persons, without exception, before the law. (5) The immediate recall of all who have suffered for their convictions." },
    { p: "In the second section are measures against the poverty of the nation. (1) The repeal of indirect taxation, and the substitution of a direct progressive income-tax. (2) Repeal of the land redemption tax. Cheap credit, and a gradual transfer of the land to the people." },
    { p: "The third section comprises measures against the crushing of labour by capital. (1) Protection of labour by the law. (2) Freedom of working men's associations for co-operative and professional purposes. (3) An eight-hours working day and the limitation of overtime. (4) The freedom of the struggle between labour and capital. (5) The participation of representatives of the working classes in the elaboration of a bill dealing with the State insurance of workmen. (6) A normal working wage." },
    { p: "Those, Sire, constitute our principal needs, which we come to lay before you. Give orders and swear that they shall be fulfilled, and you will render Russia happy and glorious, and will impress your name on our hearts and on the hearts of our children, and our children's children for all time. But if you withhold the word, if you are not responsive to our petition, we will die here on this square before your palace, for we have nowhere else to go to and no reason to repair elsewhere. For us there are but two roads, one leading to liberty and happiness, the other to the tomb. Point, Sire, to either of them; we will take it, even though it lead to death. Should our lives serve as a holocaust of agonizing Russia, we will not grudge these sacrifices; we gladly offer them up." },
    { p: "Signed by George Gapon and about 135,000 workmen." }
  ]
},
{
  id: "tolstoyhindu",
  title: "A Letter to a Hindu",
  author: "Leo Tolstoy",
  year: 1908, place: "Russia and India",
  kind: "Letter",
  stories: ["saltmarch"],
  heroStory: "saltmarch",
  teaser: "'A commercial company enslaved a nation comprising two hundred millions.' The aged Tolstoy tells an Indian revolutionary that violence will never free India — and the young Gandhi prints his letter.",
  intro: `<p>In 1908 Tarak Nath Das, an Indian revolutionary living in exile in North America, wrote to the Russian novelist Leo Tolstoy asking for his support for India's struggle against British rule. Tolstoy, then eighty and a famous advocate of Christian non-violence, replied with a long letter arguing that Indians should not take up arms.</p>
<p>A copy reached Mohandas Gandhi, then a lawyer leading a campaign of civil disobedience by Indians in South Africa. Gandhi wrote to Tolstoy, asked permission to publish the letter, and printed it with his own introduction in 1909. The two corresponded until Tolstoy's death in 1910.</p>`,
  reading: "Tolstoy's argument is uncomfortable, and meant to be. He says that the British have not enslaved India so much as Indians have enslaved themselves, by accepting violence as the basis of social order — fighting for rajahs, against each other, and now against the British. A few thousand men could not hold two hundred million otherwise. Many Indian nationalists rejected that view, then and since, as ignoring the reality of colonial force. But his central claim — that mass refusal to cooperate could end an empire — became the core of Gandhi's strategy.",
  after: `<p>Gandhi returned to India in 1915 and over the next decades led mass campaigns of non-cooperation and civil disobedience, of which the Salt March of 1930 was the most famous. He named his community in South Africa 'Tolstoy Farm'. India became independent in 1947 — through mass non-violent protest, but also through war, negotiation and partition, in which hundreds of thousands died.</p>`,
  abridged: true,
  edition: "Leo Tolstoy, A Letter to a Hindu (1908), English translation published with an introduction by M. K. Gandhi (1909), translator not named, as transcribed on Wikisource",
  src: ["Wikisource: A Letter to a Hindu", "https://en.wikisource.org/wiki/A_Letter_to_a_Hindu"],
  fixes: "",
  body: [
    { gap: 1 },
    { p: "You say that the English have enslaved your people and hold them in subjection because the latter have not resisted resolutely enough and have not met force by force. But the case is just the opposite. If the English have enslaved the people of India it is just because the latter recognized, and still recognize, force as the fundamental principle of the social order. In accord with that principle they submitted to their little rajahs, and on their behalf struggled against one another, fought the Europeans, the English, and are now trying to fight with them again." },
    { p: "A commercial company enslaved a nation comprising two hundred millions. Tell this to a man free from superstition and he will fail to grasp what these words mean. What does it mean that thirty thousand men, not athletes but rather weak and ordinary people, have subdued two hundred million vigorous, clever, capable, and freedom-loving people? Do not the figures make it clear that it is not the English who have enslaved the Indians, but the Indians who have enslaved themselves?" },
    { gap: 1 },
    { p: "If the people of India are enslaved by violence it is only because they themselves live and have lived by violence, and do not recognize the eternal law of love inherent in humanity." }
  ]
},
{
  id: "hindswaraj",
  title: "Hind Swaraj: on passive resistance",
  author: "Mohandas K. Gandhi",
  year: 1909, place: "South Africa and India",
  kind: "Book",
  stories: ["saltmarch"],
  heroStory: "saltmarch",
  teaser: "'Passive resistance is a method of securing rights by personal suffering.' Gandhi sets out the idea behind the Salt March, twenty years before it.",
  intro: `<p>In November 1909, sailing back to South Africa from London, Gandhi wrote a short book in Gujarati in ten days. Called Hind Swaraj — 'Indian Home Rule' — it was written as a dialogue between a 'Reader', an impatient young nationalist who believes in force, and an 'Editor', Gandhi himself. The British authorities in India banned the Gujarati edition, and Gandhi published his own English translation in 1910.</p>
<p>The book attacks much more than British rule: it condemns modern civilisation itself — railways, lawyers, doctors and machinery. But its chapter on passive resistance sets out the method that would make Gandhi famous.</p>`,
  reading: "Gandhi's definition is simple: if a law is unjust, refuse to obey it and accept the penalty. That last part is what matters to him — the resister suffers, not the opponent, so if the resister turns out to be wrong, only he pays for the mistake. Notice how he turns the charge of disloyalty around: true law-abiding people, he argues, are those who refuse unjust laws and take the consequences. Gandhi's own word for this was satyagraha, 'truth-force'; in this English version he uses 'passive resistance' and 'soul-force'.",
  after: `<p>Gandhi used these methods in South Africa until 1914 and in India from 1917, culminating in the Salt March of 1930, when he broke the salt law on the beach at Dandi and tens of thousands followed him to prison. His ideas, and Hind Swaraj in particular, have been argued over ever since — admired as a guide to non-violent resistance, and criticised for its rejection of modern medicine and industry and for its views on caste and gender.</p>`,
  abridged: true,
  edition: "M. K. Gandhi, Indian Home Rule (Hind Swaraj), chapter XVII, 5th edition (Madras: Ganesh, 1922), as transcribed on Wikisource",
  src: ["Wikisource: Indian Home Rule (5th edition), Passive Resistance", "https://en.wikisource.org/wiki/Indian_Home_Rule_(5th_edition)/Passive_Resistance"],
  fixes: "‘rack disloyalty’ corrected to ‘rank disloyalty’.",
  body: [
    { h: "Chapter XVII. Passive Resistance" },
    { sp: "Reader", p: "According to what you say, it is plain that instances of the kind of passive resistance are not to be found in history. It is necessary to understand this passive resistance more fully. It will be better, therefore, if you enlarge upon it." },
    { sp: "Editor", p: "Passive resistance is a method of securing rights by personal suffering; it is the reverse of resistance by arms. When I refuse to do a thing that is repugnant to my conscience, I use soul-force. For instance, the government of the day has passed a law which is applicable to me: I do not like it, if, by using violence, I force the government to repeal the law. I am employing what may be termed body-force. If I do not obey the law and accept the penalty for its breach, I use soul-force. It involves sacrifice of self. Everybody admits that sacrifice of self is infinitely superior to sacrifice of others. Moreover, if this kind of force is used in a cause that is unjust only the person using it suffers. He does not make others suffer for his mistakes. Men have before now done many things which were subsequently found to have been wrong. No man can claim to be absolutely in the right, or that a particular thing is wrong, because he thinks so, but it is wrong for him so long as that is his deliberate judgment. It is, therefore, meet that he should not do that which he knows to be wrong, and suffer the consequence whatever it may be. This is the key to the use of soul-force." },
    { sp: "Reader", p: "You would then disregard laws—this is rank disloyalty. We have always been considered a law-abiding nation. You seem to be going even beyond the extremists. They say that we must obey the laws that have been passed, but that, if the laws be bad, we must drive out the law-givers even by force." },
    { sp: "Editor", p: "Whether I go beyond them or whether I do not, is a matter of no consequence to either of us. We simply want to find out what is right, and to act accordingly. The real meaning of the statement that we are a law-abiding nation is that we are passive resisters. When we do not like certain laws, we do not break the heads of law-givers, but we suffer and do not submit to the laws. That we should obey laws whether good or bad is a new-fangled notion. There was no such thing in former days. The people disregarded those laws they did not like, and suffered the penalties for their breach. … If man will only realise that it is unmanly to obey laws that are unjust, no man's tyranny will enslave him. This is the key to self-rule or home-rule." }
  ]
}
]);
