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
];
