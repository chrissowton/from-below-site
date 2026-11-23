/* Pathways: guided routes through stories, for students, teachers and anyone who wants a way in.
   Each step has a story id and "look": what to look out for while reading. */
window.PATHWAYS = [
{
  id: "vote",
  title: "How was the vote won?",
  teaser: "From soldiers' debates in a church to a march from Selma: who fought for the vote, and what did it cost them?",
  intro: "Today most adults in the world can vote. It was never simply given. Follow these stories to see who demanded it, how they campaigned and what they faced.",
  steps: [
    { id: "putney", look: "Who did the soldiers think should have a say in government — and who did they leave out?" },
    { id: "peterloo", look: "How did the authorities respond to a peaceful crowd?" },
    { id: "kennington1848", look: "Why did the government fear a petition so much?" },
    { id: "senecafalls", look: "Why was demanding the vote for women so controversial, even among the organisers?" },
    { id: "nzvote", look: "How did women in New Zealand win the vote first?" },
    { id: "finland1906", look: "How did a general strike lead to votes for women?" },
    { id: "selma", look: "Why did Black Americans still have to fight for the vote in 1965?" }
  ],
  closing: "Was the vote won mainly by petitions, by protest or by the fear of revolution?"
},
{
  id: "women",
  title: "Women who led the way",
  teaser: "Market women, match girls, mothers and peace-makers: women at the front of struggles for bread, pay, justice and peace.",
  intro: "Women have often been left out of history books, even when they led from the front. These stories put them at the centre.",
  steps: [
    { id: "versailles", look: "Why did the women of Paris march on the king?" },
    { id: "matchwomen", look: "What working conditions did the match girls face, and how did they win?" },
    { id: "aba", look: "How did Igbo women use traditional forms of protest against colonial rulers?" },
    { id: "abeokuta", look: "How did market women organise against unfair taxes?" },
    { id: "iceland", look: "What happened when nine out of ten women stopped work for a day?" },
    { id: "plazademayo", look: "How did mothers challenge a military dictatorship?" },
    { id: "liberia", look: "How did women help end a civil war?" }
  ],
  closing: "Why have women's roles in these struggles so often been forgotten?"
},
{
  id: "empire",
  title: "Ending empire in Africa",
  teaser: "From the first Chimurenga to independence in Ghana and Mozambique: how Africans resisted and ended colonial rule.",
  intro: "By 1914, almost all of Africa was ruled by European empires. Within fifty years, most of it was independent. Follow the resistance — peaceful and armed — that made this happen.",
  steps: [
    { id: "chimurenga", look: "How did the Ndebele and Shona resist British settlers?" },
    { id: "aba", look: "What did the Women's War show colonial rulers?" },
    { id: "accra1948", look: "Why did the shooting of veterans become a turning point?" },
    { id: "maumau", look: "How should we judge an armed struggle against colonial rule?" },
    { id: "ghana", look: "What was 'Positive Action', and how did it work?" },
    { id: "pidjiguiti", look: "Why did a massacre of dockworkers lead to armed struggle?" },
    { id: "mueda", look: "Why did peaceful protest give way to war in Mozambique?" }
  ],
  closing: "Was independence won more by peaceful protest or by armed struggle — and does the answer differ from place to place?"
},
{
  id: "nonviolence",
  title: "Does non-violence work?",
  teaser: "Marches, strikes, songs and keys — and the times when governments answered with guns. A pathway for debate.",
  intro: "Many movements chose non-violent resistance. Sometimes it brought down governments without a shot; sometimes it was met with massacre. Compare the stories and decide for yourself.",
  steps: [
    { id: "saltmarch", look: "What made the Salt March so effective?" },
    { id: "selma", look: "Why was the violence of the police so important to the outcome?" },
    { id: "peoplepower", look: "Why did soldiers refuse to fire on the crowds?" },
    { id: "leipzig1989", look: "Why did no one shoot on 9 October 1989?" },
    { id: "velvet1989", look: "What made this revolution 'velvet'?" },
    { id: "tiananmen", look: "Why did non-violence not succeed in Beijing?" },
    { id: "sudan2019", look: "What happens when the army survives the revolution?" }
  ],
  closing: "When does non-violent resistance succeed, and when does it fail?"
},
{
  id: "workers",
  title: "Workers organise",
  teaser: "Farm labourers, match girls, mill workers and shipyard electricians: how working people built unions — and what they risked.",
  intro: "Most of the rights workers have today — a shorter working day, safe conditions, the right to join a union — were won by workers themselves.",
  steps: [
    { id: "tolpuddle", look: "Why were six farm labourers transported to Australia?" },
    { id: "haymarket", look: "Why is 1 May celebrated as workers' day around the world?" },
    { id: "matchwomen", look: "How did unskilled women win a strike?" },
    { id: "lawrence", look: "How did workers who spoke many languages organise together?" },
    { id: "winnipeg", look: "What happens when a whole city goes on strike?" },
    { id: "solidarity", look: "How did a trade union challenge a communist government?" },
    { id: "grunwick", look: "Why did Asian women's strike win support from other workers?" }
  ],
  closing: "Which tactics worked best for workers — and why did employers and governments fear unions?"
},
{
  id: "land",
  title: "Land and the living world",
  teaser: "Diggers, tree-huggers, fishing villages and water protectors: people defending land, water and forests.",
  intro: "Struggles over land and the environment are as old as history. These stories show communities defending the places they depend on.",
  steps: [
    { id: "diggers", look: "Why did the Diggers believe the earth should be a 'common treasury'?" },
    { id: "minamata", look: "How did a fishing community expose industrial poisoning?" },
    { id: "chipko", look: "Why did village women hug the trees?" },
    { id: "ogoni", look: "What did the Ogoni people pay for opposing an oil company?" },
    { id: "greenbelt", look: "How did planting trees become a political act?" },
    { id: "standingrock", look: "Why did Indigenous people call themselves 'water protectors'?" }
  ],
  closing: "Who should decide how land and water are used — and who usually does?"
},
{
  id: "language",
  title: "Language and identity",
  teaser: "Secret classrooms, pirate radio and 'language nests': people who fought for the right to speak, learn and live in their own language.",
  intro: "Governments have often tried to make everyone speak one language. These stories follow people who refused to let their language die — and asked why language matters so much.",
  steps: [
    { id: "bengali", look: "Why did students risk their lives over which language would be official?" },
    { id: "antihindi", look: "Why did Tamil students see Hindi as a threat, and what did they win?" },
    { id: "ikastola", look: "How did parents and teachers keep Basque alive when it was banned?" },
    { id: "gaeltacht", look: "What did Irish speakers learn from the civil rights movement?" },
    { id: "diwan", look: "Why was opening a school a form of protest?" },
    { id: "punanaleo", look: "How can a language come back when only a few children speak it?" },
    { id: "tajik1989", look: "How was the fight for a language linked to the fight for democracy?" }
  ],
  closing: "Is the right to speak your own language a human right? What does a community lose when a language dies?"
},
{
  id: "disability",
  title: "Rights, not charity: disability activism",
  teaser: "Marches, sit-ins, chained wheelchairs and a campus shutdown: disabled people who demanded rights instead of pity.",
  intro: "For a long time, disabled people were treated as objects of charity rather than citizens with rights. These stories follow the people who changed that, often by putting their own bodies in the way.",
  steps: [
    { id: "blindmarch", look: "What did the blind marchers mean by 'rights not charity'?" },
    { id: "lph", look: "Why were disabled New Yorkers refused government jobs, and how did they respond?" },
    { id: "sec504", look: "Why did the sit-in last so long, and who helped the protesters?" },
    { id: "aoishiba", look: "Why did Aoi Shiba refuse to be pitied?" },
    { id: "deafpresident", look: "Why did it matter that the university's president should be deaf?" },
    { id: "dan", look: "Why did activists chain themselves to buses?" },
    { id: "bolivia2016", look: "What were the protesters asking for, and how did the government respond?" }
  ],
  closing: "Why do you think disability rights movements so often used direct action? What barriers remain today?"
},
{
  id: "slavery",
  title: "Resisting slavery",
  teaser: "Escape, free communities, uprisings and a revolution: how enslaved people fought for their own freedom.",
  intro: "Slavery was not ended only by laws passed in distant capitals. Enslaved people resisted in many ways — by running away, building free communities and rising up. These stories put them at the centre.",
  steps: [
    { id: "palmares", look: "How did people who escaped slavery build and defend a free society?" },
    { id: "tacky", look: "How did enslaved Africans organise a rising across Jamaica?" },
    { id: "saramaka", look: "How did the Saramaka force the Dutch to recognise their freedom?" },
    { id: "haiti", look: "Why is the Haitian Revolution unique in world history?" },
    { id: "germancoast", look: "How did the authorities respond, and why so harshly?" },
    { id: "bussa", look: "Why did the enslaved people of Barbados believe freedom was near?" },
    { id: "martinique1848", look: "Who really ended slavery in Martinique: the government in Paris, or the enslaved themselves?" }
  ],
  closing: "Why have the actions of enslaved people often been left out of the story of abolition?"
},
{
  id: "disappeared",
  title: "Mothers, memory and the disappeared",
  teaser: "Silent marches, embroidered patchworks and Saturday vigils: how families of the missing and the dead refused to forget.",
  intro: "Some governments have tried to make their opponents vanish without trace. Mothers, wives and daughters — and sometimes whole communities — turned grief into protest and memory into evidence.",
  steps: [
    { id: "plazademayo", look: "Why could the military not easily stop women walking in a circle?" },
    { id: "comadres", look: "What risks did the CoMadres face, and why did they keep going?" },
    { id: "arpilleras", look: "How could a patchwork be a form of protest — and a historical source?" },
    { id: "saturdaymothers", look: "Why do the Saturday Mothers hold photographs, and why do they keep returning?" },
    { id: "avega", look: "How did widows of the genocide help each other and seek justice?" },
    { id: "ladiesinwhite", look: "Why did the Ladies in White walk in silence and dress in white?" },
    { id: "kurapaty", look: "How did uncovering the past help start a democracy movement?" }
  ],
  closing: "Why is remembering the dead so often seen as a threat by governments? What is the difference between memory and history?"
},
{
  id: "early",
  title: "Rebels before the modern age",
  teaser: "A strike in ancient Egypt, a slave army in Italy, and peasant risings in China, France, England, Germany and Japan.",
  intro: "Protest did not begin with modern politics. These stories show ordinary people demanding food, fairness and freedom thousands of years ago — and how we know about them, often only through their enemies' records.",
  steps: [
    { id: "deirmedina", look: "What did the tomb-builders want, and how did they get it?" },
    { id: "spartacus", look: "Who wrote down the story of Spartacus, and how might that shape what we know?" },
    { id: "redeyebrows", look: "Why did natural disaster and failed reforms lead to rebellion?" },
    { id: "jacquerie", look: "How did chroniclers describe the rebels, and why?" },
    { id: "peasants", look: "What did the rebels of 1381 demand, and what happened to their leaders?" },
    { id: "germanpeasants", look: "How did printing and the Reformation help the peasants spread their demands?" },
    { id: "shimabara", look: "How did religion and taxes combine to cause the rebellion?" }
  ],
  closing: "What do these early rebellions have in common with protests today? What makes them hard to study?"
},
{
  id: "indigenous",
  title: "Indigenous peoples resist",
  teaser: "From a coordinated revolt in New Mexico to a court victory in the Amazon: Indigenous peoples defending their land, culture and self-government.",
  intro: "Across the Americas and Australia, Indigenous peoples have resisted conquest and dispossession for five centuries — by war, by strikes, by occupation and in the courts.",
  steps: [
    { id: "curalaba", look: "How did the Mapuche keep their independence for so long?" },
    { id: "pueblo", look: "How did the Pueblo towns coordinate a revolt across great distances?" },
    { id: "tupackatari", look: "What did Túpac Katari and Bartolina Sisa want, and how are they remembered?" },
    { id: "wavehill", look: "How did a strike over pay become a struggle for land?" },
    { id: "alcatraz", look: "What did the occupiers want, and how did federal policy change afterwards?" },
    { id: "oka", look: "Why was a golf course worth a 78-day standoff?" },
    { id: "sarayaku", look: "What did the Sarayaku win in court, and why does it matter for others?" }
  ],
  closing: "What different strategies did these peoples use? Which do you think worked best, and why?"
},
{
  id: "recent",
  title: "Protest in the 2020s",
  teaser: "From Minsk to Kathmandu: the protests of the last few years, and what they tell us about power, social media and young people.",
  intro: "These are recent events, and their outcomes are still unfolding. Read them as history in the making: ask what we know, how we know it, and what might change as more evidence emerges.",
  steps: [
    { id: "belarus2020", look: "Why did three women lead the challenge to Lukashenko?" },
    { id: "iran2022", look: "What did the slogan 'Woman, Life, Freedom' mean to the protesters?" },
    { id: "kenya2024", look: "How did young Kenyans use social media to understand and oppose a law?" },
    { id: "bangladesh2024", look: "How did a protest about job quotas turn into a movement to remove the government?" },
    { id: "serbia2024", look: "How did a disaster become a movement for accountability?" },
    { id: "georgia2024", look: "How has the protest movement kept going for so long?" },
    { id: "nepal2025", look: "Why did a social media ban provoke such anger?" }
  ],
  closing: "What do these movements have in common? Why is it harder to write the history of events that are still going on?"
}
];
