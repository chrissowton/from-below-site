/* Primary sources and first-hand voices — batch 1.
   primary: an image of a source from the time (media key), with what it is, who made it and questions to ask of it.
   voices: short words from people who were there, with where the words come from.
   Added to each story the same way as data/extras-1.js. */
window.EXTRAS = window.EXTRAS || {};
(function (X) { Object.entries(X).forEach(([id, v]) => { window.EXTRAS[id] = Object.assign(window.EXTRAS[id] || {}, v); }); })({

peterloo: {
  primary: { media: "peterlooPoster", kind: "Official notice", made: "Manchester magistrates, 17 August 1819",
    about: "Printed and posted by the magistrates the day after the massacre, this notice gives the authorities' account of what had happened and how people should now behave.",
    questions: ["What do the magistrates want readers to believe about the meeting?", "What is left out?", "Compare it with Richard Carlile's print, published two months later — why are they so different?"] },
  voices: [{ q: "Ye are many — they are few.", who: "Percy Bysshe Shelley", when: "'The Masque of Anarchy', written in 1819 after hearing of Peterloo", src: ["Wikipedia, 'The Masque of Anarchy'", "https://en.wikipedia.org/wiki/The_Masque_of_Anarchy"] }]
},
kennington1848: {
  primary: { media: "kennington1848", kind: "Photograph (daguerreotype)", made: "William Edward Kilburn, 10 April 1848",
    about: "One of the earliest photographs ever taken of a large crowd. Kilburn photographed the rally for the royal family; the picture lay forgotten in the Royal Collection until the 1980s.",
    questions: ["Why might the royal family have wanted a photograph of this meeting?", "What can a photograph tell us that a newspaper report cannot — and what can it not tell us?", "Does the crowd look threatening? Why might people at the time have disagreed?"] }
},
senecafalls: {
  primary: { media: "senecaSignatures", kind: "Signed declaration", made: "Signers of the Declaration of Sentiments, July 1848",
    about: "A page of signatures from the Declaration of Sentiments. One hundred people signed — sixty-eight women and thirty-two men — and some later withdrew their names after public ridicule.",
    questions: ["Why did the organisers want people to sign their names?", "Why might some signers later have removed their names?", "Who is not here — for example, Black women or working women?"] },
  voices: [{ q: "We hold these truths to be self-evident: that all men and women are created equal.", who: "The Declaration of Sentiments", when: "Seneca Falls, July 1848 — rewriting the US Declaration of Independence", src: ["Wikipedia, 'Declaration of Sentiments'", "https://en.wikipedia.org/wiki/Declaration_of_Sentiments"] }]
},
nzvote: {
  primary: { media: "nzPetition", kind: "Petition", made: "Women of New Zealand, 1893",
    about: "Part of the women's suffrage petition of 1893. Petitions presented that year carried nearly 32,000 signatures — almost a quarter of the adult European female population.",
    questions: ["Why was a petition such a powerful tool for people who could not vote?", "How would you collect 32,000 signatures in 1893, without phones or the internet?", "Whose names might be missing, and why?"] }
},
finland1906: {
  primary: { media: "finlandMPs1907", kind: "Photograph", made: "1907",
    about: "The nineteen women elected to Finland's parliament in 1907 — the first women members of a national parliament anywhere in the world.",
    questions: ["Why do you think this group photograph was taken?", "What does the photograph suggest about how these women wanted to be seen?", "What questions would you want to ask these women?"] }
},
selma: {
  primary: { media: "selmaAttack", kind: "Photograph", made: "FBI, 7 March 1965",
    about: "Alabama state troopers attack marchers at the Edmund Pettus Bridge on 'Bloody Sunday'. Pictures like this, shown on television and in newspapers, shocked much of the country.",
    questions: ["Why might the FBI have been taking photographs on that day?", "Why did images like this help the civil rights movement?", "What is happening outside the edges of the picture?"] }
},
versailles: {
  primary: { media: "aVersailles", kind: "Print", made: "France, 1789",
    about: "A print made at the time of the women's march to Versailles. Prints like this were sold cheaply and shaped how people across France imagined the event.",
    questions: ["How are the women shown — as heroes, as a mob, or as something else?", "Who might have bought a print like this?", "How could you check whether it shows what really happened?"] }
},
matchwomen: {
  primary: { media: "theLink", kind: "Newspaper", made: "The Link, 23 June 1888",
    about: "Annie Besant and Herbert Burrows published their article on the matchwomen's working conditions in Besant's halfpenny weekly, The Link. Bryant & May then tried to make the workers sign a statement denying it; they refused, and the strike followed.",
    questions: ["Why might a cheap newspaper have been important to the strike?", "Whose voices does an article like this include — the workers', or the writers'?", "Why did the company try to make the women contradict it?"] }
},
plazademayo: {
  primary: { media: "madrePolicia", kind: "Photograph", made: "Buenos Aires, during the dictatorship",
    about: "A senior police officer seizes one of the Mothers of the Plaza de Mayo during a protest. Photographs like this recorded the risks the Mothers took by protesting in public.",
    questions: ["What does this photograph show about the risks the Mothers took?", "Why might the photographer have taken it?", "How could photographs like this be used, then and later?"] }
},
saltmarch: {
  primary: { media: "dandi", kind: "Photograph", made: "Dandi, April 1930",
    about: "Gandhi on the shore at Dandi at the end of the march. The march was planned to be seen: journalists and photographers followed it, and pictures were published around the world.",
    questions: ["Why was it important to Gandhi that the march was photographed and reported?", "What does this picture want you to feel?", "Who else made the march possible but is not in the picture?"] },
  voices: [{ q: "With this, I am shaking the foundations of the British Empire.", who: "Mohandas K. Gandhi", when: "Dandi, 6 April 1930, holding up a lump of salty mud", src: ["Wikipedia, 'Salt March'", "https://en.wikipedia.org/wiki/Salt_March"] }]
},
haymarket: {
  primary: { media: "haymarketHarpers", kind: "Magazine engraving", made: "Harper's Weekly, 1886",
    about: "A drawing of the bomb exploding at Haymarket Square, published in a popular magazine. It is a drawing made from reports, not a photograph, and it helped shape hostile views of the anarchists.",
    questions: ["Is this a record of what happened, or an interpretation? How can you tell?", "How are the speaker, the crowd and the police shown?", "How might an image like this have affected the trial?"] }
},
lawrence: {
  primary: { media: "lawrenceCartoon", kind: "Cartoon", made: "Art Young, 1912",
    about: "A cartoon by the radical artist Art Young, showing police attacking mothers and children at the Lawrence railway station as strikers tried to send their children to safety.",
    questions: ["Whose side is the cartoonist on? How can you tell?", "Why use a cartoon rather than a photograph?", "How could you check what really happened at the station?"] }
},
winnipeg: {
  primary: { media: "antiStrikeBanner", kind: "Photograph of a banner", made: "Winnipeg, June 1919",
    about: "A banner carried by 'loyalist' war veterans who opposed the strike. It shows how opponents tried to present the strikers as foreign and disloyal.",
    questions: ["What does the banner claim about the strikers?", "Why might calling strikers 'aliens' have been effective in 1919?", "Why is it useful to study sources made by a movement's opponents?"] }
},
solidarity: {
  primary: { media: "gdanskSigning", kind: "Photograph", made: "Gdańsk, 31 August 1980",
    about: "Lech Wałęsa signs the Gdańsk Agreement. He used a large souvenir pen bearing the image of Pope John Paul II, and the moment was shown on television around the world.",
    questions: ["Why might Wałęsa have chosen a pen with the Pope's picture?", "Why was it important that this was filmed and photographed?", "What does the picture not show about how the agreement was won?"] }
},
diggers: {
  primary: { media: "trueLevellers", kind: "Pamphlet", made: "Gerrard Winstanley and others, 1649",
    about: "The title page of a 1649 pamphlet in which the Diggers explained why they had begun to dig and plant common land. Cheap pamphlets were the social media of the English Revolution.",
    questions: ["Who were the Diggers trying to persuade?", "Why might they print a pamphlet rather than simply act?", "How might a landowner have reacted to reading it?"] },
  voices: [{ q: "In the beginning of Time, the great Creator Reason, made the Earth to be a Common Treasury.", who: "Gerrard Winstanley", when: "The True Levellers Standard Advanced, 1649", src: ["Wikipedia, 'Gerrard Winstanley'", "https://en.wikipedia.org/wiki/Gerrard_Winstanley"] }]
},
chimurenga: {
  primary: { media: "nehandaKaguvi", kind: "Photograph", made: "Colonial police, 1897",
    about: "Mbuya Nehanda and Sekuru Kaguvi after their capture. The colonial police took and published this photograph to show their success in crushing the rising; both were later executed.",
    questions: ["Why did the colonial authorities want this photograph to be seen?", "How has the meaning of this photograph changed for Zimbabweans today?", "What can't a photograph like this tell us about Nehanda and Kaguvi?"] }
},
haiti: {
  primary: { media: "haitiFire", kind: "Engraving", made: "Germany, about 1791",
    about: "A German engraving of the burning of plantations in Saint-Domingue. The artist was far from the events, and drew on reports reaching Europe.",
    questions: ["How are the rebels shown, and why?", "Who in Europe might have bought or seen this picture?", "What would an enslaved person in Saint-Domingue have wanted to show instead?"] }
},
paris1848: {
  primary: { media: "paris1848decree", kind: "Public proclamation", made: "Provisional Government of the French Republic, 1848",
    about: "A printed proclamation of the new republic, pasted on walls for people to read. Proclamations like this announced the republic's decisions — including the end of slavery in the French colonies.",
    questions: ["Why did the new government put up printed notices in the streets?", "Who could read them, and how would others learn what they said?", "What does the language 'in the name of the French people' claim?"] }
},
pest1848: {
  primary: { media: "nemzetiDal", kind: "Printed poem", made: "Pest, 15 March 1848",
    about: "A copy of Sándor Petőfi's 'National Song'. On 15 March, students printed it, with the Twelve Points, without permission from the censor — the first acts of a free press in Hungary.",
    questions: ["Why was printing without the censor's permission such a powerful act?", "Why might a poem move people more than a list of demands?", "Who might have been left out of the 'nation' the poem speaks for?"] },
  voices: [{ q: "Talpra magyar, hí a haza! — Rise up, Hungarians, the homeland calls!", who: "Sándor Petőfi", when: "'National Song', recited in Pest on 15 March 1848", src: ["Wikipédia (Hungarian), 'Nemzeti dal'", "https://hu.wikipedia.org/wiki/Nemzeti_dal"] }]
},
berlin1848: {
  primary: { media: "berlin1848", kind: "Print", made: "Berlin, 1848",
    about: "A picture of the barricade fighting at Alexanderplatz on the night of 18 March. Images like this were made and sold soon after, and helped create the memory of the 'March Revolution'.",
    questions: ["Who are the heroes of this picture?", "What does the artist leave out about the people killed?", "Why might pictures like this have been popular in the months after March 1848?"] }
},
egypt1919: {
  primary: { media: "crossCrescent", kind: "Photograph", made: "Cairo, 1919",
    about: "Demonstrators carry a flag combining the crescent and the cross — a symbol of unity between Muslim and Christian Egyptians against British rule.",
    questions: ["Why was unity between Muslims and Christians important to the revolution?", "Why might the British have wanted to divide them?", "What does a symbol on a flag tell us that a speech might not?"] }
},
may4: {
  primary: { media: "may4Students", kind: "Photograph", made: "Beijing, 4 May 1919",
    about: "Students protest against the Treaty of Versailles, which handed former German rights in Shandong to Japan.",
    questions: ["Who are the protesters, and how can you tell?", "Why might students have led this protest?", "What would you need to know to understand the banners?"] }
},
may68: {
  primary: { media: "may68poster", kind: "Poster", made: "Atelier Populaire, Paris, 1968",
    about: "A poster made in the occupied School of Fine Arts. Posters were designed and printed collectively, without artists' names, and pasted up across Paris overnight.",
    questions: ["Why might the makers have chosen not to sign their posters?", "What makes a poster like this effective?", "Who was the poster trying to reach?"] }
},
prague1968: {
  primary: { media: "pragueInscription", kind: "Graffiti (photograph)", made: "Prague, August 1968",
    about: "An anti-Soviet slogan painted on a wall during the Warsaw Pact invasion. Slogans, posters and changed street signs were among the main weapons of non-violent resistance.",
    questions: ["Why did people paint slogans rather than fight?", "Who was the slogan meant for — Czechs and Slovaks, or the soldiers?", "Why might such slogans have been removed quickly after 1969?"] }
},
stonewall: {
  primary: { media: "mattachine", kind: "Newsletter", made: "Mattachine Society of New York, August 1969",
    about: "An older gay rights group's newsletter reporting the Stonewall riots. The Mattachine Society had preferred cautious, respectable campaigning — and was soon criticised as too traditional.",
    questions: ["How does the newsletter describe the riots — with approval, or with worry?", "Why might an older group see events differently from the young people at Stonewall?", "Why are newsletters like this important when mainstream newspapers were hostile?"] }
},
balticway: {
  primary: { media: "balticLatvia", kind: "Photograph", made: "Latvia, 23 August 1989",
    about: "The human chain on the road between Cēsis and Valmiera. Organisers used radio and even aircraft to make sure the chain was unbroken across three countries.",
    questions: ["Why was an unbroken chain such a strong symbol?", "Why choose 23 August — the anniversary of the Molotov–Ribbentrop Pact?", "What risks did people take by joining?"] }
},
tunisia: {
  primary: { media: "rcdOut", kind: "Photograph of a protest", made: "Tunis, January 2011",
    about: "Protesters demand that the old ruling party, the RCD, leave government — even after President Ben Ali had fled.",
    questions: ["Why was the removal of one man not enough for the protesters?", "What does the photograph show about who was protesting?", "How could you find out what happened to the RCD?"] },
  voices: [{ q: "Ash-shaʻb yurīd isqāṭ an-niẓām — the people want to bring down the regime.", who: "Protesters' chant", when: "Tunisia, then across the Arab world, 2011", src: ["Wikipedia, 'Arab Spring'", "https://en.wikipedia.org/wiki/Arab_Spring"] }]
},
eureka: {
  primary: { media: "eurekaFlag", kind: "Object: a flag", made: "Ballarat, 1854",
    about: "The flag the miners swore allegiance to at the stockade. After the battle, soldiers and police let people tear off pieces as souvenirs — which is why so much of it is missing.",
    questions: ["Why did the miners need a flag of their own?", "What does it tell us that people wanted pieces of it as souvenirs?", "Why do different groups in Australia today use this flag?"] }
},
newport: {
  primary: { media: "westgateAttack", kind: "Print", made: "1839",
    about: "A print made at the time of the Chartists' attack on the Westgate Hotel. The artist was not there; the picture reflects how the event was reported.",
    questions: ["Does the print make the Chartists look like heroes or criminals?", "Where might the artist have got information from?", "How does it compare with the Chartists' own accounts?"] }
},
leipzig1989: {
  primary: { media: "leipzig1989", kind: "Photograph", made: "Leipzig, 23 October 1989",
    about: "A Monday demonstration. The photograph is held by the German Federal Archives in a collection from East Germany's state news agency — so even the regime was recording the protests.",
    questions: ["Why might the East German state have photographed the demonstrations?", "How might the same picture be used differently by the state and by the protesters?", "What can you see that suggests the protest was peaceful?"] },
  voices: [{ q: "Wir sind das Volk! — We are the people!", who: "Demonstrators' chant", when: "Leipzig, autumn 1989", src: ["Wikipedia, 'Monday demonstrations in East Germany'", "https://en.wikipedia.org/wiki/Monday_demonstrations_in_East_Germany"] }]
}

});
