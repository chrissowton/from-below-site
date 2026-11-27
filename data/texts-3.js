/* The Library, third shelf: the ancient world, and three more from the nineteenth century. Same rules as data/texts.js. */
window.TEXTS = (window.TEXTS || []).concat([
{
  id: "gracchusland",
  title: "Tiberius Gracchus speaks for the landless",
  author: "Plutarch",
  year: -133, when: "133 BCE (written c. 100 CE)", place: "Rome",
  kind: "Ancient history",
  stories: ["gracchi"],
  heroStory: "gracchi",
  teaser: "'The savage beasts in Italy have their particular dens… but the men who bear arms… enjoy nothing more in it but the air and light.' A tribune's case for giving land to Rome's poor.",
  intro: `<p>In 133 BCE Tiberius Gracchus, a young tribune of the people, proposed a law to break up the great estates that wealthy Romans had built on public land, and to share it out among poor citizens. Many of them were former soldiers who had lost their farms while away at war, replaced by gangs of enslaved workers.</p>
<p>The Greek writer Plutarch told his story more than two centuries later, in his paired Lives of famous Greeks and Romans. Plutarch admired Tiberius, and this passage, with its version of his most famous speech, is one reason the Gracchi became heroes to later reformers.</p>`,
  reading: "Plutarch was not there, and ancient historians often composed speeches for their characters. The words are best read as what Tiberius was remembered as saying, not a transcript. Notice the two sides Plutarch draws: a law he calls moderate — the rich were even to be paid to give up land they held illegally — and 'the moneyed men' who accused Tiberius of wanting to overthrow the government. Notice too the detail that the poor themselves wrote on walls and monuments, urging him on.",
  after: `<p>The law passed, but Tiberius's enemies accused him of seeking to make himself king. Later in 133 BCE senators and their followers clubbed him and about 300 of his supporters to death. Ten years later his brother Gaius took up the cause and was killed too. Their names were borrowed by reformers and revolutionaries for centuries — in the French Revolution, 'Gracchus' Babeuf named himself after them.</p>`,
  abridged: true,
  edition: "Plutarch's Lives, the 'Dryden' translation revised by Arthur Hugh Clough (1859), Life of Tiberius Gracchus, as transcribed on Wikisource",
  src: ["Wikisource: Plutarch's Lives (Clough), Life of Tiberius Gracchus", "https://en.wikisource.org/wiki/Plutarch%27s_Lives_(Clough)/Life_of_Tiberius_Gracchus"],
  fixes: "",
  body: [
    { p: "… he then first conceived the course of policy which in the sequel proved so fatal to his family. Though it is also most certain that the people themselves chiefly excited his zeal and determination in the prosecution of it, by setting up writings upon the porches, walls, and monuments, calling upon him to reinstate the poor citizens in their former possessions." },
    { gap: 1 },
    { p: "Never did any law appear more moderate and gentle, especially being enacted against such great oppression and avarice. For they who ought to have been severely punished for transgressing the former laws, and should at least have lost all their titles to such lands which they had unjustly usurped, were notwithstanding to receive a price for quitting their unlawful claims, and giving up their lands to those fit owners who stood in need of help. But though this reformation was managed with so much tenderness, that, all the former transactions being passed over, the people were only thankful to prevent abuses of the like nature for the future, yet, on the other hand, the moneyed men, and those of great estates were exasperated, through their covetous feelings against the law itself, and against the law giver, through anger and party spirit. They therefore endeavored to seduce the people, declaring that Tiberius was designing a general redivision of lands, to overthrow the government, and put all things into confusion." },
    { p: "But they had no success. For Tiberius, maintaining an honorable and just cause, and possessed of eloquence sufficient to have made a less creditable action appear plausible, was no safe or easy antagonist, when, with the people crowding around the hustings, he took his place, and spoke in behalf of the poor." },
    { p: "\"The savage beasts,\" said he, \"in Italy, have their particular dens, they have their places of repose and refuge; but the men who bear arms, and expose their lives for the safety of their country, enjoy in the meantime nothing more in it but the air and light; and having no houses or settlements of their own, are constrained to wander from place to place with their wives and children.\" He told them that the commanders were guilty of a ridiculous error, when, at the head of their armies, they exhorted the common soldiers to fight for their sepulchres and altars; when not any amongst so many Romans is possessed of either altar or monument, neither have they any houses of their own, or hearths of their ancestors to defend. They fought indeed, and were slain, but it was to maintain the luxury and the wealth of other men. They were styled the masters of the world, but in the meantime had not one foot of ground which they could call their own." }
  ]
},
{
  id: "spartacusplutarch",
  title: "The war of Spartacus",
  author: "Plutarch",
  year: -73, when: "73–71 BCE (written c. 100 CE)", place: "Italy",
  kind: "Ancient history",
  stories: ["spartacus"],
  heroStory: "spartacus",
  teaser: "How seventy-eight gladiators escaped with kitchen knives and spits — and how their leader died — told by the Roman world's most popular biographer.",
  intro: `<p>Nothing written by Spartacus or his followers survives. Everything we know about the great slave revolt of 73–71 BCE comes from Roman and Greek writers, most of them writing long afterwards. The fullest early account is Plutarch's, in his Life of Crassus — the Roman general who finally defeated the rebels.</p>
<p>Plutarch was writing about Crassus, not Spartacus, and his sympathies lie with Rome. Yet his portrait of the rebel leader is admiring, and it has shaped every retelling since.</p>`,
  reading: "Look at how Plutarch explains the revolt: the gladiators were confined 'not for any fault by them committed, but simply through the cruelty of their master'. And look at how he praises Spartacus — brave, intelligent, gentle, and 'more of a Grecian' than his countrymen. To a Greek writer, that was the highest compliment, and it says as much about Plutarch's values as about Spartacus. He also blames the rebels' defeat on their refusal to obey their own leaders.",
  after: `<p>Crassus defeated the rebels in southern Italy in 71 BCE. Another ancient writer, Appian, records that 6,000 captives were crucified along the road from Capua to Rome; Plutarch does not mention it. Spartacus became a symbol for later movements: Toussaint Louverture was hailed as a 'black Spartacus', Marx called him a 'genuine representative of the ancient proletariat', and German revolutionaries of 1918–19 called themselves the Spartacus League.</p>`,
  abridged: true,
  edition: "Plutarch's Lives, the 'Dryden' translation revised by Arthur Hugh Clough (1859), Life of Crassus, as transcribed on Wikisource",
  src: ["Wikisource: Plutarch's Lives (Clough), Life of Crassus", "https://en.wikisource.org/wiki/Plutarch%27s_Lives_(Clough)/Life_of_Crassus"],
  fixes: "Two scanning errors corrected: ‘Eome’ to ‘Rome’ and ‘prastor’ to ‘prætor’.",
  body: [
    { p: "The insurrection of the gladiators and the devastation of Italy, commonly called the war of Spartacus, began upon this occasion. One Lentulus Batiates trained up a great many gladiators in Capua, most of them Gauls and Thracians, who, not for any fault by them committed, but simply through the cruelty of their master, were kept in confinement for this object of fighting one with another. Two hundred of these formed a plan to escape, but their plot being discovered, those of them who became aware of it in time to anticipate their master, being seventy-eight, got out of a cook's shop chopping-knives and spits, and made their way through the city, and lighting by the way on several wagons that were carrying gladiator's arms to another city, they seized upon them and armed themselves." },
    { p: "And seizing upon a defensible place, they chose three captains, of whom Spartacus was chief, a Thracian of one of the nomad tribes, and a man not only of high spirit and valiant, but in understanding, also, and in gentleness, superior to his condition, and more of a Grecian than the people of his country usually are. When he first came to be sold at Rome, they say a snake coiled itself upon his face as he lay asleep, and his wife, who at this latter time also accompanied him in his flight, his country-woman, a kind of prophetess, and one of those possessed with the bacchanal frenzy, declared that it was a sign portending great and formidable power to him with no happy event." },
    { p: "First, then, routing those that came out of Capua against them, and thus procuring a quantity of proper soldiers' arms, they gladly threw away their own as barbarous and dishonorable. Afterwards Clodius, the prætor, took the command against them with a body of three thousand men from Rome, and besieged them within a mountain, accessible only by one narrow and difficult passage, which Clodius kept guarded, encompassed on all other sides with steep and slippery precipices. Upon the top, however, grew a great many wild vines, and cutting down as many of their boughs as they had need of, they twisted them into strong ladders long enough to reach from thence to the bottom, by which, without any danger, they got down all but one, who stayed there to throw them down their arms, and after this succeeded in saving himself. The Romans were ignorant of all this, and, therefore, coming upon them in the rear, they assaulted them unawares and took their camp. Several, also, of the shepherds and herdsmen that were there, stout and nimble fellows, revolted over to them …" },
    { gap: 1 },
    { p: "This success, however, ruined Spartacus, because it encouraged the slaves, who now disdained any longer to avoid fighting, or to obey their officers, but as they were upon their march, they came to them with their swords in their hand, and compelled them to lead them back again through Lucania, against the Romans, the very thing which Crassus was eager for. …" },
    { p: "Spartacus, seeing there was no avoiding it, set all his army in array, and when his horse was brought him, he drew out his sword and killed him, saying, if he got the day, he should have a great many better horses of the enemies, and if he lost it, he should have no need of this. And so making directly towards Crassus himself, through the midst of arms and wounds, he missed him, but slew two centurions that fell upon him together. At last being deserted by those that were about him, he himself stood his ground, and, surrounded by the enemy, bravely defending himself, was cut in pieces." }
  ]
},
{
  id: "boudicatacitus",
  title: "Boudica's revolt",
  author: "Tacitus",
  year: 60, when: "60 or 61 CE (written c. 115 CE)", place: "Britain",
  kind: "Ancient history",
  stories: ["boudica"],
  heroStory: "boudica",
  teaser: "'Not as a woman descended from noble ancestry, but as one of the people… avenging lost freedom.' The Roman historian's account of why the Iceni rose, and the speech he gives their queen.",
  intro: `<p>Almost everything known about Boudica comes from two Roman writers, Tacitus and Cassius Dio. Tacitus had a family connection to the story: his father-in-law, Agricola, served in Britain at the time of the revolt, under the governor Suetonius Paulinus.</p>
<p>Writing in his Annals some fifty years later, Tacitus is unusually frank about Roman wrongdoing. He describes the seizure of the Iceni kingdom, the flogging of Boudica and the rape of her daughters, and the arrogance of the Roman settlers at Camulodunum (Colchester) — before describing the revolt's own violence and its crushing defeat.</p>`,
  reading: "Tacitus gives Boudica a speech, and he gives the Roman general one too. Neither is a record of words spoken; they are Tacitus's way of showing what each side was fighting for. He makes Boudica say she fights 'as one of the people', not as a queen — a Roman's idea of a rebel against tyranny. His numbers need care: 70,000 killed in the three towns and 80,000 Britons in the final battle, against 400 Romans, are figures no one could have counted, and he himself says 'some indeed say'.",
  after: `<p>After the defeat, Tacitus says, Boudica poisoned herself, and the rebel tribes were ravaged and starved. Her story was almost forgotten until Tacitus's work was rediscovered in the Renaissance. Victorian Britain turned her into a national heroine — the statue beside Westminster Bridge dates from 1902 — an odd fate for a woman who fought an empire, celebrated by the capital of another.</p>`,
  abridged: true,
  edition: "Tacitus, Annals, book 14, chapters 31 and 35, translation based on A. J. Church and W. J. Brodribb (1876), as transcribed on Wikisource",
  src: ["Wikisource: The Annals (Tacitus), Book 14", "https://en.wikisource.org/wiki/The_Annals_(Tacitus)/Book_14"],
  fixes: "",
  body: [
    { p: "Prasutagus, king of the Iceni, famed for his long prosperity, had made the emperor his heir along with his two daughters, under the impression that this token of submission would put his kingdom and his house out of the reach of wrong. But the reverse was the result, so much so that his kingdom was plundered by centurions, his house by slaves, as if they were the spoils of war. First, his wife Boudica was scourged, and his daughters outraged. All the chief men of the Iceni, as if Rome had received the whole country as a gift, were stript of their ancestral possessions, and the king's relatives were made slaves. Roused by these insults and the dread of worse, reduced as they now were into the condition of a province, they flew to arms and stirred to revolt the Trinobantes and others who, not yet cowed by slavery, had agreed in secret conspiracy to reclaim their freedom." },
    { p: "It was against the veterans that they had the most intense hatred for. For these new settlers in the colony of Camulodunum drove people out of their houses, ejected them from their farms, called them captives and slaves, and the lawlessness of the veterans was encouraged by the soldiers, who lived a similar life and hoped for similar licence. A temple also erected to the Divine Claudius was ever before their eyes, a citadel, as it seemed, of perpetual tyranny." },
    { gap: 1 },
    { p: "Boudicea, with her daughters before her in a chariot, went up to tribe after tribe, protesting that it was indeed usual for Britons to fight under the leadership of women. \"But now,\" she said, \"it is not as a woman descended from noble ancestry, but as one of the people that I am avenging lost freedom, my scourged body, the outraged chastity of my daughters. Roman lust has gone so far that not our very persons, nor even age or virginity, are left unpolluted. But heaven is on the side of a righteous vengeance; a legion which dared to fight has perished; the rest are hiding themselves in their camp, or are thinking anxiously of flight. They will not sustain even the din and the shout of so many thousands, much less our charge and our blows. If you weigh well the strength of the armies, and the causes of the war, you will see that in this battle you must conquer or die. This is a woman's resolve; as for men, they may live and be slaves.\"" }
  ]
},
{
  id: "agrarianjustice",
  title: "Agrarian Justice",
  author: "Thomas Paine",
  year: 1797, place: "France and Britain",
  kind: "Pamphlet",
  stories: ["diggers", "kett"],
  heroStory: "diggers",
  teaser: "'It is wrong to say that God made Rich and Poor.' The author of Rights of Man proposes that everyone be paid for the loss of their share of the earth.",
  intro: `<p>Thomas Paine was the most widely read radical of the age of revolutions. His Common Sense helped persuade Americans to declare independence in 1776, and his Rights of Man defended the French Revolution and was banned in Britain. Living in Paris in the winter of 1795–96, he wrote this short pamphlet, and published it in 1797.</p>
<p>Its argument starts where the Diggers started: the earth was once the common property of everyone. But Paine accepts private ownership of land, because farming made the earth far more productive. His answer is not to take the land back but to make landowners pay a 'ground-rent' to the community, through a tax on inheritances.</p>`,
  reading: "Paine insists, more than once, that he is pleading for 'a right and not a charity'. That is the heart of it: the payments are compensation for something taken, owed to everyone, rich or poor. He even works out the figures — fifteen pounds at twenty-one, ten pounds a year from fifty — using the Prime Minister's own estimate of the nation's wealth. The passages left out here are mostly those calculations.",
  after: `<p>Nothing came of the plan at the time. But Agrarian Justice is now often cited as one of the first proposals for state old-age pensions and for what is today called a universal basic income or 'baby bond'. Paine himself died in poverty in New York in 1809; only a handful of people came to his funeral.</p>`,
  abridged: true,
  edition: "Thomas Paine, Agrarian Justice (1797), as transcribed on Wikisource from a facsimile of the original",
  src: ["Wikisource: Agrarian Justice", "https://en.wikisource.org/wiki/Agrarian_Justice"],
  fixes: "‘wrechtedness’ corrected to ‘wretchedness’.",
  body: [
    { p: "It is wrong to say that God made Rich and Poor; he made only Male and Female; and he gave them the earth for their inheritance." },
    { gap: 1 },
    { p: "It is a position not to be controverted, that the earth, in its natural uncultivated state, was, and ever would have continued to be, the common property of the human race. In that state every man would have been born to property. He would have been a joint life-proprietor with the rest in the property of the soil, and in all its natural productions, vegetable and animal." },
    { gap: 1 },
    { p: "There could be no such thing as landed property originally. Man did not make the earth, and, though he had a natural right to occupy it, he had no right to locate as his property in perpetuity any part of it: neither did the Creator of the earth open a land-office, from whence the first title-deeds should issue. From whence then arose the idea of landed property? I answer as before, that when cultivation began, the idea of landed property began with it, from the impossibility of separating the improvement made by cultivation from the earth itself, upon which that improvement was made. The value of the improvement so far exceeded the value of the natural earth, at that time, as to absorb it; till, in the end, the common right of all became cofounded into the cultivated right of the individual. But they are, nevertheless, distinct species of rights, and will continue to be so as long as the earth endures." },
    { gap: 1 },
    { p: "In advocating the case of the persons thus dispossessed, it is a right and not a charity that I am pleading for. But it is that kind of right, which, being neglected at first, could not be brought forward afterwards, till heaven had opened the way by a revolution in the system of government. Let us then do honour to revolutions by justice, and give currency to their principles by blessings." },
    { p: "Having thus, in a few words, opened the merits of the case, I proceed to the plan I have to propose, which is," },
    { p: "To create a National Fund, out of which there shall be paid to every person, when arrived at the age of twenty-one years, the sum of Fifteen Pounds sterling, as a compensation in part, for the loss of his or her natural inheritance, by the introduction of the system of landed property." },
    { p: "The sum of Ten Pounds per annum, during life, to every person now living, of the age of fifty years, and to all others as they shall arrive at that age." },
    { gap: 1 },
    { p: "It is proposed that the payments, as already stated, be made to every person, rich or poor. It is best to make it so, to prevent invidious distinctions. It is also right it should be so, because it is in lieu of the natural inheritance, which, as a right, belongs to every man, over and above the property he may have created or inherited from those who did. Such persons as do not choose to receive it, can throw it into the common fund." },
    { gap: 1 },
    { p: "The contrast of affluence and wretchedness continually meeting and offending the eye, is like dead and living bodies chained together. Though I care as little about riches as any man, I am a friend to riches because they are capable of good. I care not how affluent some may be, provided that none be miserable in consequence of it." },
    { gap: 1 },
    { p: "An army of principles will penetrate where an army of soldiers cannot—It will succeed where diplomatic management would fail—It is neither the Rhine, the Channel, nor the Ocean, that can arrest its progress—It will march on the horizon of the world, and it will conquer." }
  ]
},
{
  id: "sojourner",
  title: "Sojourner Truth at Akron",
  author: "Sojourner Truth, as reported by Marius Robinson",
  year: 1851, place: "United States",
  kind: "Speech",
  stories: ["senecafalls"],
  heroStory: "senecafalls",
  teaser: "'I have plowed and reaped and husked and chopped and mowed, and can any man do more than that?' The formerly enslaved preacher speaks at a women's rights convention — in the version printed at the time.",
  intro: `<p>Sojourner Truth was born into slavery in New York around 1797, with the name Isabella. She escaped with her infant daughter in 1826, a year before slavery ended in the state, and later went to court to win back her son, who had been illegally sold into slavery in Alabama. In 1843 she took the name Sojourner Truth and became a travelling preacher and campaigner against slavery and for women's rights.</p>
<p>In May 1851 she spoke at a women's rights convention in Akron, Ohio, one of the many that followed Seneca Falls. Her friend Marius Robinson, who was at the convention, printed this report of her speech in his anti-slavery newspaper a few weeks later.</p>`,
  reading: "This is not the famous version. In 1863, twelve years later, the convention's chair, Frances Gage, published a very different account, written in a heavy invented Southern dialect — Truth grew up speaking Dutch in New York — and built around a refrain, 'And ain't I a woman?', that does not appear in Robinson's report. Gage's version became one of the best-known speeches in American history. Robinson's is closer to what Truth actually said, and it is just as forceful: her own strength and labour as the proof of equality, and a man caught 'between a hawk and a buzzard'.",
  after: `<p>Sojourner Truth went on speaking against slavery and for women's rights for the rest of her life. During the Civil War she helped recruit Black soldiers for the Union army and met President Lincoln. She campaigned for land grants for freed people in the West, and died in Michigan in 1883.</p>`,
  abridged: false,
  edition: "Report by Marius Robinson, Anti-Slavery Bugle (Salem, Ohio), 21 June 1851, as transcribed on Wikisource",
  src: ["Wikisource: Sojourner Truth, Women's Rights Convention speech (1851)", "https://en.wikisource.org/wiki/Sojourner_Truth%27s_Women%27s_Rights_Convention_Speech_(1851)"],
  fixes: "",
  body: [
    { p: "May I say a few words? [Receiving an affirmative answer, she proceeded:]" },
    { p: "I want to say a few words about this matter. I am a woman’s rights. I have as much muscle as any man, and can do as much work as any man. I have plowed and reaped and husked and chopped and mowed, and can any man do more than that? I have heard much about the sexes being equal; I can carry as much as any man, and can eat as much too, if I can get it. I am as strong as any man that is now." },
    { p: "As for intellect, all I can say is, if women have a pint and man a quart — why can’t she have her little pint full?" },
    { p: "You need not be afraid to give us our rights for fear we will take too much, — for we can't take more than our pint’ll hold. The poor men seem to be all in confusion, and don't know what to do. Why children, if you have woman’s rights, give it to her and you will feel better. You will have your own rights, and they won't be so much trouble." },
    { p: "I can't read, but I can hear. I have heard the bible and have learned that Eve caused man to sin. Well if woman upset the world, do give her a chance to set it right side up again. The Lady has spoken about Jesus, how he never spurned woman from him, and she was right. When Lazarus died, Mary and Martha came to him with faith and love and besought him to raise their brother. And Jesus wept — and Lazarus came forth." },
    { p: "And how came Jesus into the world? Through God who created him and woman who bore him. Man, where is your part?" },
    { p: "But the women are coming up blessed be God and a few of the men are coming up with them. But man is in a tight place, the poor slave is on him, woman is coming on him, and he is surely between a hawk and a buzzard." }
  ]
},
{
  id: "symonds",
  title: "A Problem in Modern Ethics: on Karl Heinrich Ulrichs",
  author: "John Addington Symonds",
  year: 1891, place: "England",
  kind: "Essay",
  stories: ["ulrichs1867", "whk"],
  heroStory: "ulrichs1867",
  teaser: "A Victorian scholar, writing in secret, introduces English readers to the German lawyer who argued that love between men was natural and should not be a crime.",
  intro: `<p>John Addington Symonds was a respected English writer on Renaissance Italy and ancient Greece — and a married man who loved men, at a time when sex between men was punishable by imprisonment in Britain. In 1891 he had A Problem in Modern Ethics privately printed in just fifty copies, to circulate among doctors, lawyers and friends; a second edition of a hundred copies followed in 1896.</p>
<p>The essay surveys what was then written about homosexuality — most of it hostile. Its longest chapter introduces the German jurist Karl Heinrich Ulrichs, who in 1867 had stood up at a congress of German lawyers to call for an end to laws against love between men.</p>`,
  reading: "Symonds writes in the language of 1890s medicine — 'inversion', 'abnormal' — because that was the only respectable vocabulary available, and because he was addressing doctors and lawyers. Read past the terms to the argument he summarises: that such feelings are inborn and healthy, cannot be cured, and that people who have them are 'guilty of nothing which deserves reprobation and punishment'. Ulrichs's claim that each person is born with natural rights that law should protect is the language of human rights, applied to a group almost no one else would defend.",
  after: `<p>Symonds died in 1893. His collaboration with Havelock Ellis on the book Sexual Inversion was published in 1897, but his name was removed from later editions after his literary executor objected. In Germany, Magnus Hirschfeld founded the Scientific-Humanitarian Committee the same year, drawing on Ulrichs's arguments. Sex between men was decriminalised in England and Wales only in 1967.</p>`,
  abridged: true,
  edition: "John Addington Symonds, A Problem in Modern Ethics (1896 edition), chapter VII, as transcribed on Wikisource",
  src: ["Wikisource: A Problem in Modern Ethics, chapter VII", "https://en.wikisource.org/wiki/A_Problem_in_Modern_Ethics/Chapter_VII"],
  fixes: "",
  body: [
    { h: "VII. Literature—Polemical." },
    { p: "It can hardly be said that inverted sexuality received a serious and sympathetic treatment until a German jurist, named Karl Heinrich Ulrichs, began his long warfare against what he considered to be prejudice and ignorance upon a topic of the greatest moment to himself. A native of Hanover, and writing at first under the assumed name of Numa Numantius, he kept pouring out a series of polemical, analytical, theoretical, and apologetical pamphlets between the years 1864 and 1870. …" },
    { p: "The object of Ulrichs in these miscellaneous writings is twofold. He seeks to establish a theory of sexual inversion upon the basis of natural science, proving that abnormal instincts are inborn and healthy in a considerable percentage of human beings; that they do not owe their origin to bad habits of any kind, to hereditary disease, or to wilful depravity; that they are incapable in the majority of cases of being extirpated or converted into normal channels; and that the men subject to them are neither physically, intellectually, nor morally inferior to normally constituted individuals. Having demonstrated these points to his own satisfaction, and supported his views with a large induction of instances and a respectable show of erudition, he proceeds to argue that the present state of the law in many states of Europe is flagrantly unjust to a class of innocent persons, who may indeed be regarded as unfortunate and inconvenient, but who are guilty of nothing which deserves reprobation and punishment." },
    { p: "In this second and polemical branch of his exposition, Ulrichs assumes, for his juristic starting-point, that each human being is born with natural rights which legislation ought not to infringe but protect. He does not attempt to confute the utilitarian theory of jurisprudence, which regards laws as regulations made by the majority in the supposed interests of society. Yet a large amount of his reasoning is designed to invalidate utilitarian arguments in favour of repression, by showing that no social evil ensues in those countries which have placed abnormal sexuality upon the same footing as the normal, and that the toleration of inverted passion threatens no danger to the well-being of nations." }
  ]
}
]);
