/* Threads: chains of stories linked by influence or direct connection.
   Each step has a story id and "link": how it connects to the step before. Footnotes [n] refer to the thread's sources. */
window.THREADS = [
{
  id: "nonviolence",
  title: "Non-violence travels: from the Salt March to Tahrir Square",
  teaser: "How Gandhi's methods reached the American South, and how a Serbian student movement later trained activists from Georgia to Egypt.",
  steps: [
    { id: "saltmarch", link: "" },
    { id: "selma", link: "Martin Luther King Jr. studied Gandhi's methods and visited India in 1959; the civil rights movement adapted Gandhian non-violence to the American South.[1]" },
    { id: "otpor", link: "Serbia's student movement Otpor drew on the theory of non-violent action, especially the writings of Gene Sharp, to bring down Slobodan Milošević in 2000.[2]" },
    { id: "rose2003", link: "Georgia's youth movement Kmara (“Enough!”), a Georgian counterpart of Otpor, was active throughout the Rose Revolution of 2003.[3]" },
    { id: "tahrir2011", link: "Before 2011, Egyptian opposition groups studied Gene Sharp's work and worked with leaders of Otpor.[4]" }
  ],
  sources: [
    ["Wikipedia, 'Martin Luther King Jr.', on Gandhi's influence and King's visit to India.", "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."],
    ["Wikipedia, 'Otpor!', on its methods and influence.", "https://en.wikipedia.org/wiki/Otpor!"],
    ["Wikipedia, 'Rose Revolution', on Kmara as a Georgian counterpart of Otpor.", "https://en.wikipedia.org/wiki/Rose_Revolution"],
    ["Wikipedia, '2011 Egyptian revolution', on Otpor and Gene Sharp.", "https://en.wikipedia.org/wiki/2011_Egyptian_revolution"]
  ]
},
{
  id: "abolition",
  title: "Haiti and the long fight to end slavery",
  teaser: "The enslaved of Saint-Domingue proved that slavery could be overthrown. Over the next sixty years, risings across the Caribbean pushed empires to abolish it.",
  steps: [
    { id: "haiti", link: "" },
    { id: "bolivar", link: "In 1816, after Simón Bolívar promised to abolish slavery in Spanish America, Haiti's president Alexandre Pétion gave him military support.[1]" },
    { id: "bussa", link: "In the same year, enslaved people in Barbados rose in the largest revolt in the island's history.[2]" },
    { id: "baptistwar", link: "In 1831–32, the Baptist War in Jamaica — the largest slave rising in the British Caribbean — helped push Britain to abolish slavery in 1833.[3]" },
    { id: "martinique1848", link: "In 1848, France decreed abolition — but in Martinique, the enslaved rose and freed themselves before the decree arrived.[4]" }
  ],
  sources: [
    ["Wikipedia, 'Simón Bolívar', on Pétion's support in 1816.", "https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar"],
    ["Wikipedia, 'Bussa's rebellion'.", "https://en.wikipedia.org/wiki/Bussa%27s_rebellion"],
    ["Wikipedia, 'Baptist War', on the rising and its role in abolition.", "https://en.wikipedia.org/wiki/Baptist_War"],
    ["Wikipédia (French), 'Abolition de l'esclavage en Martinique'.", "https://fr.wikipedia.org/wiki/Abolition_de_l%27esclavage_en_Martinique"]
  ]
},
{
  id: "pride",
  title: "From the first gay rights group to Pride around the world",
  teaser: "A Berlin committee of 1897, a riot at a New York bar in 1969, and the marches that followed on every continent.",
  steps: [
    { id: "whk", link: "" },
    { id: "stonewall", link: "Seventy years later, in New York, the Stonewall uprising of 1969 sparked a new, more radical gay liberation movement; a year later came the first Pride marches in the United States.[1]" },
    { id: "mardigras78", link: "Sydney's first Mardi Gras in 1978 was held as part of an international day of solidarity marking the anniversary of Stonewall.[2]" },
    { id: "lgsm", link: "In 1984–85, Lesbians and Gays Support the Miners built an alliance between gay activists and striking British miners.[3]" },
    { id: "jozipride", link: "In 1990, activists in Johannesburg held Africa's first Pride march.[4]" },
    { id: "section377", link: "In 2018, after decades of campaigning, India's Supreme Court struck down the colonial-era law against gay sex.[5]" }
  ],
  sources: [
    ["Wikipedia, 'Stonewall riots', on their impact and the first Pride marches.", "https://en.wikipedia.org/wiki/Stonewall_riots"],
    ["Wikipedia, 'Sydney Gay and Lesbian Mardi Gras', on its origins in 1978.", "https://en.wikipedia.org/wiki/Sydney_Gay_and_Lesbian_Mardi_Gras"],
    ["Wikipedia, 'Lesbians and Gays Support the Miners'.", "https://en.wikipedia.org/wiki/Lesbians_and_Gays_Support_the_Miners"],
    ["Wikipedia, 'Johannesburg Pride'.", "https://en.wikipedia.org/wiki/Johannesburg_Pride"],
    ["Wikipedia, 'Navtej Singh Johar v. Union of India'.", "https://en.wikipedia.org/wiki/Navtej_Singh_Johar_v._Union_of_India"]
  ]
},
{
  id: "baltic",
  title: "The Baltic road to independence",
  teaser: "Song festivals, a human chain and barricades: how Estonia, Latvia and Lithuania left the Soviet Union largely without violence.",
  steps: [
    { id: "estonia1988", link: "" },
    { id: "balticway", link: "On 23 August 1989, about two million people from all three Baltic states joined hands across their countries.[1]" },
    { id: "vilnius1991", link: "In January 1991, Soviet troops attacked the television tower in Vilnius; unarmed Lithuanians defended their parliament.[2]" },
    { id: "riga1991", link: "Days later, Latvians built barricades in Riga to protect their own government.[3]" }
  ],
  sources: [
    ["Wikipedia, 'Baltic Way'.", "https://en.wikipedia.org/wiki/Baltic_Way"],
    ["Wikipedia, 'January Events (Lithuania)'.", "https://en.wikipedia.org/wiki/January_Events_(Lithuania)"],
    ["Wikipedia, 'The Barricades'.", "https://en.wikipedia.org/wiki/The_Barricades"]
  ]
},
{
  id: "arabspring",
  title: "The Arab Spring and its second wave",
  teaser: "From Tunisia in 2010 to Sudan and Lebanon in 2019: how one revolt inspired the next.",
  steps: [
    { id: "tunisia", link: "" },
    { id: "tahrir2011", link: "Egyptians took to the streets eleven days after Tunisia's president fled.[1]" },
    { id: "yemen2011", link: "Yemenis set up their own protest camp, 'Change Square', in Sanaa.[2]" },
    { id: "bahrain2011", link: "In Bahrain, protesters camped at the Pearl Roundabout, until Gulf troops crushed the movement.[2]" },
    { id: "sudan2019", link: "In 2019, a 'second wave' began: Sudanese protesters overthrew Omar al-Bashir.[2]" },
    { id: "lebanon2019", link: "Months later, Lebanese of all sects rose against their political class.[2]" }
  ],
  sources: [
    ["Wikipedia, '2011 Egyptian revolution'.", "https://en.wikipedia.org/wiki/2011_Egyptian_revolution"],
    ["Wikipedia, 'Arab Spring', on its spread and the protests of 2018–19.", "https://en.wikipedia.org/wiki/Arab_Spring"]
  ]
},
{
  id: "chartism",
  title: "From Peterloo to the ballot box",
  teaser: "How the British working-class campaign for the vote ran from a massacre in Manchester to the Australian goldfields.",
  steps: [
    { id: "peterloo", link: "" },
    { id: "newport", link: "Twenty years after Peterloo, the Chartists' petition for the vote was rejected, and miners marched on Newport.[1]" },
    { id: "kennington1848", link: "In 1848, the Chartists' third petition was taken from Kennington Common to Parliament.[1]" },
    { id: "eureka", link: "In 1854, the Ballarat Reform League in Australia, chaired by the Chartist John Humffray, demanded the vote and other Chartist reforms before the Eureka Stockade.[2]" },
    { id: "nzvote", link: "In 1893, New Zealand became the first self-governing country to give all women the vote.[3]" }
  ],
  sources: [
    ["Wikipedia, 'Chartism'.", "https://en.wikipedia.org/wiki/Chartism"],
    ["Wikipedia, 'Eureka Rebellion', on the Ballarat Reform League and its demands.", "https://en.wikipedia.org/wiki/Eureka_Rebellion"],
    ["Wikipedia, 'Women's suffrage in New Zealand'.", "https://en.wikipedia.org/wiki/Women%27s_suffrage_in_New_Zealand"]
  ]
}
,{
  id: "mothers",
  title: "Mothers of the disappeared: from Buenos Aires to Istanbul and Havana",
  teaser: "How the silent marches of Argentina's mothers inspired women demanding the truth about their missing children and husbands in El Salvador, Turkey and Cuba.",
  steps: [
    { id: "plazademayo", link: "" },
    { id: "comadres", link: "In El Salvador, CoMadres drew direct inspiration from the Mothers of the Plaza de Mayo. Like them, its members used their grief as mothers to build a political movement.[1]" },
    { id: "saturdaymothers", link: "In Turkey, relatives of people who disappeared in state custody were reportedly influenced by the Mothers of the Plaza de Mayo. They held their first sit-in in Istanbul on 27 May 1995.[2]" },
    { id: "ladiesinwhite", link: "In Cuba, the white clothing worn by the wives and mothers of jailed dissidents is reminiscent of the Mothers of the Plaza de Mayo.[3]" }
  ],
  sources: [
    ["Wikipedia, 'Mothers of the Plaza de Mayo', on the movement's influence in Central America, including CoMadres.", "https://en.wikipedia.org/wiki/Mothers_of_the_Plaza_de_Mayo"],
    ["Wikipedia, 'Saturday Mothers', on the influence of the Mothers of the Plaza de Mayo and the first sit-in.", "https://en.wikipedia.org/wiki/Saturday_Mothers"],
    ["Wikipedia, 'Ladies in White', on their white clothing.", "https://en.wikipedia.org/wiki/Ladies_in_White"]
  ]
}
,{
  id: "satyagraha",
  title: "Satyagraha: Gandhi's method in other hands",
  teaser: "Gandhi called his method of non-violent resistance satyagraha — 'truth force'. Others took it up: Pashtun 'Red Shirts' on the North-West Frontier, Tamil politicians in Sri Lanka and French sheep farmers.",
  steps: [
    { id: "saltmarch", link: "" },
    { id: "qissakhwani", link: "On the North-West Frontier, Abdul Ghaffar Khan — a close friend of Gandhi, known as 'the Frontier Gandhi' — led the non-violent Khudai Khidmatgar movement.[2] In April 1930, weeks after the Salt March, his arrest brought crowds onto the streets of Peshawar, and troops opened fire.[3]" },
    { id: "galleface", link: "In 1956, Sri Lanka's Tamil Federal Party chose a satyagraha — a peaceful sit-in — to oppose the Sinhala Only language law.[4]" },
    { id: "larzac", link: "In France, the pacifist Lanza del Vasto, who had joined Gandhi's movement in India in the 1930s, fasted for fifteen days in 1972 in support of the Larzac farmers.[5] Ten years of non-violent resistance followed, and the army's plan was cancelled.[6]" }
  ],
  sources: [
    ["Wikipedia, 'Satyagraha', on the meaning of the term and its influence.", "https://en.wikipedia.org/wiki/Satyagraha"],
    ["Wikipedia, 'Abdul Ghaffar Khan', on his friendship with Gandhi and the Khudai Khidmatgar.", "https://en.wikipedia.org/wiki/Abdul_Ghaffar_Khan"],
    ["Wikipedia, 'Qissa Khwani massacre', on the events of 23 April 1930.", "https://en.wikipedia.org/wiki/Qissa_Khwani_massacre"],
    ["Wikipedia, '1956 anti-Tamil pogrom', on the Federal Party's satyagraha.", "https://en.wikipedia.org/wiki/1956_anti-Tamil_pogrom"],
    ["Wikipedia, 'Lanza del Vasto', on his time with Gandhi and his fast for Larzac.", "https://en.wikipedia.org/wiki/Lanza_del_Vasto"],
    ["Wikipedia, 'Larzac', on the ten years of non-violent resistance.", "https://en.wikipedia.org/wiki/Larzac"]
  ]
}
,{
  id: "civilrights",
  title: "Civil rights travels: from Selma to Jerusalem and Bombay",
  teaser: "How the African American freedom struggle inspired Aboriginal Australians, Irish speakers in Connemara, Mizrahi Jews in Jerusalem and Dalit poets in Bombay.",
  steps: [
    { id: "selma", link: "" },
    { id: "freedomride", link: "In Australia, Charles Perkins and a busload of students toured country towns exposing segregation. They were partly inspired by the Freedom Riders of the US civil rights movement.[1]" },
    { id: "gaeltacht", link: "In Ireland, the Gaeltacht Civil Rights Movement took inspiration from the Northern Ireland civil rights movement and the American civil rights movement.[2]" },
    { id: "blackpanthers", link: "In Jerusalem, young Jews from Moroccan families were influenced by the American Black Panther Party and took its name, to protest discrimination against Mizrahi Jews.[3]" },
    { id: "dalitpanthers", link: "In India, Dalit writers in Bombay founded the Dalit Panthers, largely inspired by the Black Panther Party.[4]" }
  ],
  sources: [
    ["Wikipedia, 'Freedom Ride (Australia)', on its inspiration.", "https://en.wikipedia.org/wiki/Freedom_Ride_(Australia)"],
    ["Wikipedia, 'Gluaiseacht Chearta Sibhialta na Gaeltachta', on its inspiration.", "https://en.wikipedia.org/wiki/Gluaiseacht_Chearta_Sibhialta_na_Gaeltachta"],
    ["Wikipedia, 'Israeli Black Panthers', on the movement's name and origins.", "https://en.wikipedia.org/wiki/Israeli_Black_Panthers"],
    ["Wikipedia, 'Dalit Panthers', on the influence of the Black Panther Party.", "https://en.wikipedia.org/wiki/Dalit_Panthers"]
  ]
}
,{
  id: "carnation",
  title: "From the colonies to Lisbon: how Africa's wars ended Portugal's dictatorship",
  teaser: "Massacres in Guinea, Mozambique and Angola turned protest into war. Thirteen years later, the war brought down the dictatorship in Lisbon itself.",
  steps: [
    { id: "pidjiguiti", link: "" },
    { id: "mueda", link: "In Mozambique, less than a year later, Portuguese soldiers fired on farmers who had gathered peacefully at Mueda. As in Bissau, the killings convinced many that peaceful protest could not end colonial rule." },
    { id: "cassanje", link: "In Angola, the cotton farmers' revolt was answered with air raids, and within weeks the war of independence had begun. Wars followed in all three colonies from 1961 to 1974.[1]" },
    { id: "carnation", link: "The colonial wars consumed up to 40 per cent of Portugal's budget. By December 1973, several officers had concluded that the war was unsustainable and could only be ended politically, and they began to plan a coup.[1] After the revolution, Guinea-Bissau, Mozambique and Angola became independent in 1974–75.[1]" }
  ],
  sources: [
    ["Wikipedia, 'Carnation Revolution', on the colonial wars, the officers' decision and decolonisation.", "https://en.wikipedia.org/wiki/Carnation_Revolution"]
  ]
}
];
