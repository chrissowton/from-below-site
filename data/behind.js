/* Behind the history: a hub about how history is made — sources, memory, the official story, and our own method.
   All figures and quotations below are taken from stories on this site, which give their sources. */
window.BEHIND = {
  title: "Behind the history",
  teaser: "Every story depends on evidence, and evidence has its own history. Who made the record? Who kept it, destroyed it, or rewrote it? And how do we, making this site, decide what to say?",
  hero: "ringelblumCans",
  intro: "History from below is not only about telling different stories. It is about asking how we know what we know — and noticing when the people in power have tried to decide that for us. These four sections show how.",
  cards: [
    { route: "sources", title: "Sources and voices", text: "Hundreds of posters, petitions, photographs, pamphlets and quotations from the time, with questions to ask of each one.", hero: "ieCitizenArmy" },
    { route: "making", title: "Making history", text: "Archives kept in secret, testimony in court, records destroyed, monuments built and torn down, and the days we choose to remember.", hero: "ringelblumCans" },
    { route: "official", title: "The official story", text: "How governments, armies and empires have tried to shape the record — by counting the dead, naming their opponents, and erasing what they did.", hero: "reiterdenkmal" },
    { route: "method", title: "Our method", text: "How this site is made: where the facts and pictures come from, how we handle violence and dispute, and what we have not yet covered.", hero: "ieSackville1916" }
  ],

  official: {
    title: "The official story",
    teaser: "Those in power have always tried to tell the story of their opponents for them. Here are some of the ways they have done it — and how the record has been challenged.",
    intro: "None of this means that official accounts are always wrong, or that their opponents' figures are always right. Both sides in a conflict have reasons to shape the story. The point is to ask, of every figure and every word: who produced this, and why?",
    figures: [
      { id: "soweto", event: "Soweto, 1976", official: "23 dead on the first day (government's first figure)", other: "176 usually given; many sources suggest more" },
      { id: "setif", event: "Sétif and Guelma, 1945", official: "1,020 Algerians killed (French authorities' first estimate)", other: "3,000–30,000 (historians); 45,000 (Algerian government)" },
      { deep: "algeria", event: "Paris, 17 October 1961", official: "Denied for 37 years; 40 deaths acknowledged in 1998", other: "200–300 (some historians)" },
      { deep: "southafrica", event: "Sharpeville, 1960", official: "69 dead, 180 injured (police record)", other: "At least 91 dead and 238 wounded (more recent research)" },
      { id: "guadeloupe1967", event: "Pointe-à-Pitre, 1967", official: "7 dead (official toll at the time)", other: "At least 87 (admitted by France decades later)" },
      { id: "iquique", event: "Santa María School, Iquique, 1907", official: "140 or 195 (official figures)", other: "Over 2,000 (other estimates); historians agree the official figures were far too low" },
      { id: "andijan", event: "Andijan, 2005", official: "187 dead (government count)", other: "Several hundred; a former security officer claimed 1,500" },
      { id: "morocco1965", event: "Casablanca, 1965", official: "About a dozen deaths (authorities)", other: "More than 1,000 (foreign press and the UNFP opposition party)" },
      { id: "myanmar8888", event: "Burma, 1988", official: "Around 350 (authorities)", other: "Thousands attributed to the military" },
      { id: "maumau", event: "Kenya, 1952–60", official: "More than 11,000 Mau Mau fighters killed (official figures)", other: "Many historians believe African deaths were far higher" },
      { deep: "vietnam", event: "Sơn Mỹ (My Lai), 1968", official: "US Army press release: 128 'enemy' killed", other: "347–504 unarmed villagers, almost all women, children and old men" },
      { id: "gdeimizik", event: "Gdeim Izik, 2010", official: "11 security forces and 2 civilians dead (Moroccan authorities)", other: "36 Sahrawis killed (Polisario Front) — itself a party to the conflict" }
    ],
    language: [
      { title: "Bandits and savages", text: "Rebels against empires and kingdoms have often been described as criminals or as less than human — a way of denying that they had a cause.",
        items: [
          { id: "yellowturban", said: "Official histories written by scholars loyal to the emperor presented the Yellow Turbans as bandits and heretics." },
          { id: "santhal", said: "The British press presented the Santals as savages; the Santals saw themselves as fighting for justice and self-rule." },
          { id: "cuba1912", said: "The Cuban government and press portrayed Afro-Cuban rebels as savages threatening 'civilisation'." },
          { id: "cacos", said: "US officials called the Cacos bandits; Haitians saw patriots resisting occupation." },
          { id: "germancoast", said: "Planters and officials called the enslaved rebels 'brigands'; the rebels were fighting for their freedom." }
        ] },
      { title: "Outside agitators", text: "Blaming 'agitators' or foreign influence suggests that ordinary people had no real grievances of their own.",
        items: [
          { id: "winnipeg", said: "Employers, newspapers and the government claimed the general strike was a Bolshevik revolution led by 'alien' agitators." },
          { id: "durban1973", said: "The government blamed agitators; the police said they found no evidence of any organisation behind the strikes." },
          { id: "egypt1919", said: "British officials blamed agitators, Bolshevik influence or religious fanaticism, and underestimated popular feeling." },
          { id: "copperbelt1935", said: "The authorities blamed agitators and religious fanatics; historians have stressed the workers' real grievances over tax and wages." },
          { id: "lome1933", said: "The French blamed agitators among educated men; the women's own role was played down." }
        ] },
      { title: "Hooligans and criminals", text: "Calling protesters hooligans or criminals turns a political act into a matter for the police.",
        items: [
          { id: "chichibu1884", said: "The government dismissed the rebels as hooligans; they called themselves a revolutionary army." },
          { id: "jeltoqsan", said: "Soviet authorities described the protesters as drunken hooligans, drug addicts and nationalists." },
          { id: "novocherkassk", said: "The authorities blamed 'hooligans', 'criminal elements' and 'provocateurs', and claimed troops acted in self-defence." },
          { id: "planofcampaign1886", said: "The government declared a rent strike 'an unlawful and criminal conspiracy'." }
        ] },
      { title: "Terrorists", text: "The word 'terrorist' is sometimes used of real violence against civilians — and sometimes of any opposition at all.",
        items: [
          { id: "palestine1936", said: "Britain described the revolt as 'disturbances' and the rebels as bandits and terrorists." },
          { id: "cameroon", said: "The French authorities, and later Cameroon's government, presented the UPC as communist terrorists and bandits." },
          { id: "otpor", said: "Serbia's government called a student movement a terrorist group serving foreign powers." },
          { id: "tunisia", said: "The Ben Ali government blamed the unrest on 'terrorists' and foreign media." }
        ] },
      { title: "Changing the name", text: "Sometimes the official name for an event changes over time — and the changes tell their own story.",
        items: [
          { id: "tiananmen", said: "China's government first called the protests a 'counter-revolutionary rebellion', then 'turmoil', and now 'the political turmoil between the spring and summer of 1989'." },
          { id: "leipzig1989", said: "The East German government called the protesters enemies of the state; the protesters insisted that they were the people." }
        ] }
    ],
    erasing: [
      { deep: "namibia", note: "Britain recorded the Herero and Nama genocide in a 'Blue Book' in 1918 — then recalled and destroyed copies in 1926, as relations with Germany improved." },
      { deep: "southafrica", note: "After Steve Biko died in police custody in 1977, the police minister at first implied he had died of a hunger strike." },
      { deep: "algeria", note: "The death of the FLN leader Larbi Ben M'hidi in French custody in 1957 was presented as suicide. Only in 2024 did France's president acknowledge that he had been killed by French soldiers." },
      { deep: "algeria", note: "Torture in Algeria was censored in France; Henri Alleg's account of his own torture, La Question (1958), was banned." },
      { deep: "southafrica", note: "After Sophiatown's black residents were forcibly removed in 1955, the area was rebuilt as a white suburb named Triomf — 'Triumph'." },
      { id: "cuba1912", note: "The massacre of 1912 was largely erased from Cuban history for decades." },
      { deep: "namibia", note: "Windhoek's colonial monument listed the German dead of 1904–08 by name and number — and left out the far greater number of African dead." },
      { id: "luddites", note: "A London print of 1812 showed 'The Leader of the Luddites' as London's buyers imagined him — not as the Luddites saw themselves." }
    ],
    questions: [
      "Why might a government publish a low figure for the number of people its forces killed?",
      "Why might its opponents publish a high one?",
      "What does it change to call someone a 'bandit', an 'agitator' or a 'terrorist'?",
      "Can you find an example in the news today of a label used to describe protesters? Who uses it, and why?"
    ]
  },

  method: {
    title: "Our method",
    teaser: "How this site is made — and the choices behind it.",
    sections: [
      { title: "Where the facts come from", html: "<p>Every story is written from published sources, which are listed and numbered at the end of the story; the small numbers in the text show which source supports each statement. Most of our sources are Wikipedia articles, which in turn cite books and research — follow the links to go further. We do not invent quotations, and we only quote briefly.</p>" },
      { title: "Where the pictures come from", html: "<p>All images come from Wikimedia Commons, with the photographer or artist and the licence given under each one. Many historical photographs were taken by the authorities or by outsiders, not by the people in them; where it matters, we say so.</p>" },
      { title: "Violence and dispute", html: "<p>Many of these stories involve killing. We give death tolls as ranges and say who produced each figure, because many are disputed. We include violence by every side — by states and armies, and by movements from below — and each story has a section called 'What do others say?' setting out the main disagreements.</p>" },
      { title: "Recent events", html: "<p>For events of the last few years, the facts may still be changing. These stories carry an 'ongoing situation' box with the date we last checked, and are reviewed regularly. Every story shows when it was last checked.</p>" },
      { title: "What is missing", html: "<p>No collection like this is complete. Some parts of the world, some periods and some kinds of struggle are better covered than others. Our coverage page shows the gaps honestly, and we are working to fill them.</p>" },
      { title: "We make history too", html: "<p>Choosing which stories to tell, which pictures to show and which words to use is itself a way of making history. We try to make those choices openly — and we welcome corrections.</p>" }
    ]
  }
};
