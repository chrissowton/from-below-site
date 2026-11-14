/* Media registry. Every file is hosted on Wikimedia Commons and loaded via Special:FilePath.
   Fields: f = Commons file name, cap = caption, by = creator as credited on Commons,
   lic = licence as stated on Commons, lu = licence URL (empty for public domain). */
window.MEDIA = {
  // Haiti
  haitiFire:   { f: "Fire in Saint-Domingo 1791, German copper engraving.jpg", cap: "A German engraving of the burning of plantations in Saint-Domingue, 1791.", by: "Unknown artist", lic: "Public domain" },
  toussaint:   { f: "Toussaint Louverture - Girardin.jpg", cap: "Toussaint Louverture, portrait by the comte de Girardin.", by: "Alexandre-François-Louis, comte de Girardin", lic: "Public domain" },
  dessalines:  { f: "Jean Jacques Dessalines.jpg", cap: "Jean-Jacques Dessalines, by Louis Rigaud (1878).", by: "Louis Rigaud", lic: "Public domain" },
  belley:      { f: "Anne-Louis Girodet De Roucy-Trioson - Portrait of J. B. Belley, Deputy for Saint-Domingue - WGA09508.jpg", cap: "Jean-Baptiste Belley, born in Africa and formerly enslaved, elected deputy for Saint-Domingue to the French National Convention. Painted by Girodet, 1797.", by: "Anne-Louis Girodet", lic: "Public domain" },
  ravine:      { f: "Prise de la Ravine-à-Couleuvres (23 février 1802), par Karl Girardet, gravé par Jean-Jacques Outhwaite.jpg", cap: "The Battle of Ravine-à-Couleuvres, 23 February 1802, during Napoleon's attempt to reconquer the colony. Nineteenth-century engraving.", by: "Karl Girardet / Jean-Jacques Outhwaite", lic: "Public domain" },
  // Peterloo
  peterlooCarlile: { f: "Peterloo Massacre.png", cap: "Print published by the radical Richard Carlile, October 1819, dedicated to Henry Hunt and 'the female Reformers of Manchester'.", by: "Richard Carlile", lic: "Public domain" },
  peterlooCruik:   { f: "The Massacre of Peterloo.jpg", cap: "George Cruikshank's satirical print of the Yeomanry's charge on St Peter's Field, 1819.", by: "George Cruikshank", lic: "Public domain" },
  peterlooPoster:  { f: "Peterloo poster.jpg", cap: "A poster issued by the magistrates the day after the massacre.", by: "Circle of William Hulton", lic: "Public domain" },
  hunt:        { f: "Henry Hunt.jpg", cap: "Henry Hunt, c. 1810, watercolour by Adam Buck.", by: "Adam Buck", lic: "Public domain" },
  bamford:     { f: "Samuel Bamford.png", cap: "Samuel Bamford, weaver, poet and radical.", by: "Unknown", lic: "Public domain" },
  peterlooMem: { f: "Peterloo Memorial (geograph 6240951).jpg", cap: "Jeremy Deller's Peterloo Memorial in Manchester, unveiled in 2019.", by: "Gerald England", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  // Tolpuddle
  tolMemorial: { f: "Tolpuddle memorial.jpg", cap: "The memorial shelter in Tolpuddle, erected in 1934 on the centenary of the trial.", by: "John Goodall", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  tolDay:      { f: "Tolpuddle martyrs day 2005.jpg", cap: "Trade unionists processing through Tolpuddle at the annual festival, 2005.", by: "Dave Headey", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  hammett:     { f: "Grave of James Hammett, Tolpuddle 2016.jpg", cap: "The grave of James Hammett in Tolpuddle churchyard, after the festival wreath-laying, 2016.", by: "Rwendland", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  // Matchwomen
  matchStrikers: { f: "Matchgirl strikers.PNG", cap: "Matchwomen on strike against Bryant & May, London, 1888.", by: "Unknown photographer", lic: "Public domain" },
  matchCommittee:{ f: "Annie Besant and the Matchgirls Strike Committee.PNG", cap: "Herbert Burrows, Annie Besant and members of the Matchmakers' Union strike committee, 1888.", by: "Unknown photographer", lic: "Public domain" },
  chapmanGroup:  { f: "Sarah Chapman Matchgirls.jpg", cap: "Sarah Chapman (1862–1945) with other members of the strike committee.", by: "Unknown / Wellcome Collection", lic: "Public domain" },
  chapman:     { f: "Sarah chapman portrait.jpg", cap: "Sarah Chapman, c. 1900.", by: "Unknown photographer", lic: "Public domain" },
  theLink:     { f: "The Link 23 June 1888.JPG", cap: "The Link, 23 June 1888 — the issue that carried 'White Slavery in London'.", by: "Annie Besant (publisher)", lic: "Public domain" },
  besant:      { f: "Annie Besant - portrait.jpg", cap: "Annie Besant.", by: "London Stereoscopic Company", lic: "Public domain" },
  bryantMay:   { f: "Bryant & May's.jpg", cap: "Bryant & May's Fairfield Works, Bow, from an 1897 illustrated guide.", by: "Church Congress guide, 1897", lic: "Public domain" },
  // New Zealand
  sheppard:    { f: "Mrs. K. W. Sheppard (cropped).jpg", cap: "Kate Sheppard, c. 1901.", by: "H. H. Clifford", lic: "Public domain" },
  mangakahia:  { f: "MeriMangakahia1890s.jpg", cap: "Meri Te Tai Mangakāhia, c. 1890.", by: "F. W. Mason, Napier", lic: "Public domain" },
  daldy:       { f: "Amey Daldy (cropped).jpg", cap: "Amey Daldy, Auckland suffragist.", by: "Horace J. Weeks", lic: "Public domain" },
  morison:     { f: "Harriet Russell Morison.jpg", cap: "Harriet Morison, Dunedin trade unionist and suffragist.", by: "New Zealand Department of Labour", lic: "Public domain" },
  nzPetition:  { f: "The 1893 Women's Suffrage Petition (16734429368) (cropped).jpg", cap: "The 1893 Women's Suffrage Petition, held by Archives New Zealand.", by: "Archives New Zealand", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  // Lawrence
  lawrenceMilitia: { f: "1912 Lawrence Textile Strike 1.jpg", cap: "Massachusetts militiamen with fixed bayonets surround a parade of strikers, 1912.", by: "Unknown photographer", lic: "Public domain" },
  lawrenceKids:{ f: "Lawrence-kids-1912.jpg", cap: "Children of Lawrence strikers sent to stay with supporters in New York, 1912.", by: "Bain News Service", lic: "Public domain" },
  lawrenceCartoon: { f: "Lawrence Strike Cartoon.jpg", cap: "Art Young's cartoon of police attacking mothers and children at the Lawrence railway station, March 1912.", by: "Art Young", lic: "Public domain" },
  flynn:       { f: "Flynn, Elizabeth Gurley Edit.jpg", cap: "Elizabeth Gurley Flynn (later photograph).", by: "Unknown photographer", lic: "Public domain" },
  giovannitti: { f: "Giovannitti-Arturo-1912.jpg", cap: "Arturo Giovannitti, 1912.", by: "Bain News Service", lic: "Public domain" },
  ettorTrial:  { f: "Caruso Ettor Giovannitti capture.jpg", cap: "Joseph Caruso, Joseph Ettor and Arturo Giovannitti, the three men tried after the strike.", by: "Unknown photographer", lic: "Public domain" },
  // Aba
  abaSculpture:{ f: "End of Aba women riot.jpg", cap: "A sculpture commemorating the 1929 Women's War, Aba.", by: "Harriwillz", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  abaGrave:    { f: "The Mock Grave of the 1929 Women Riot.jpg", cap: "Memorial plaque for the women killed in 1929.", by: "Dappa Solomon", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  // Salt March
  dandi:       { f: "Gandhi at Dandi, 5 April 1930.jpg", cap: "Gandhi on the shore at Dandi at the end of the march, April 1930. Behind him is his son Manilal and Mithuben Petit.", by: "Unknown photographer", lic: "Public domain" },
  marcheSel:   { f: "Marche sel.jpg", cap: "Gandhi and marchers during the Salt March, March 1930.", by: "Unknown photographer", lic: "Public domain" },
  naiduMarch:  { f: "Mahatma & Sarojini Naidu 1930.JPG", cap: "Gandhi, Mithuben Petit and Sarojini Naidu during the Salt Satyagraha, 1930.", by: "Unknown photographer", lic: "Public domain" },
  vedaranyam:  { f: "Vedaranyam salt march, April 1930.jpg", cap: "C. Rajagopalachari leads the Vedaranyam salt march in the south, April 1930.", by: "Unknown photographer", lic: "Public domain" },
  naidu:       { f: "Sarojini Naidu in 1928.jpg", cap: "Sarojini Naidu, 1928.", by: "Bibliothèque nationale de France", lic: "Public domain" },
  kamaladevi:  { f: "Kamaladevi Chattopadhyay.png", cap: "Kamaladevi Chattopadhyay.", by: "Unknown photographer", lic: "Public domain" },
  // Cable Street
  cableMural:  { f: "Shadwell , Cable Street mural - geograph.org.uk - 7739289.jpg", cap: "The Cable Street mural on the side of St George's Town Hall, Shadwell.", by: "Jim Osley", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  cableMural2: { f: "Cable Street Mural - geograph.org.uk - 5282833.jpg", cap: "Detail of the Cable Street mural.", by: "Jon Hardy", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  cablePlaque: { f: "Battle of Cable Street Plaque (Tower Hamlets Environment Trust).jpg", cap: "Commemorative plaque at Dock Street, erected 2008.", by: "Spudgun67", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  // Selma
  selmaAttack: { f: "Bloody Sunday-Alabama police attack.jpeg", cap: "Alabama troopers attack marchers at the Edmund Pettus Bridge, 7 March 1965 (FBI photograph).", by: "Federal Bureau of Investigation", lic: "Public domain" },
  selmaWait:   { f: "Bloody Sunday-officers await demonstrators.jpeg", cap: "Alabama officers wait for the marchers at the foot of the bridge, 7 March 1965.", by: "U.S. Department of Justice", lic: "Public domain" },
  selmaMarch:  { f: "Abernathy Children on front line leading the SELMA TO MONTGOMERY MARCH for the RIGHT TO VOTE.JPG", cap: "The front line of the Selma to Montgomery march, March 1965.", by: "Abernathy family", lic: "Public domain" },
  lewis:       { f: "John Lewis-2006 (cropped).jpg", cap: "John Lewis as a member of Congress, 2006.", by: "U.S. House of Representatives", lic: "Public domain" },
  boynton:     { f: "Ameila Boynton Robinson 2.JPG", cap: "Amelia Boynton Robinson in 2015.", by: "Ianbailey1983", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  hosea:       { f: "Hosea Williams 1971 by UPI.jpg", cap: "Hosea Williams, 1971.", by: "United Press International", lic: "Public domain" },
  // Wave Hill
  whitlamSoil: { f: "Prime Minister Gough Whitlam pours soil into the hand of traditional land owner Vincent Lingiari 1975 Mervyn Bishop.jpg", cap: "Prime Minister Gough Whitlam pours soil into the hand of Vincent Lingiari at Daguragu, 16 August 1975. Photograph by Mervyn Bishop.", by: "Mervyn Bishop", lic: "Public domain" },
  rangiari:    { f: "Mick-Rangiari-1971.jpg", cap: "Gurindji leader Mick Rangiari, 1971.", by: "State Library of New South Wales / SEARCH Foundation", lic: "No known copyright restrictions", lu: "https://www.flickr.com/commons/usage/" },
  hardy:       { f: "Frank-Hardy-1965 (cropped).jpg", cap: "Frank Hardy, 1965.", by: "Tribune (Australian newspaper)", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  // Stonewall
  stonewallInn:{ f: "Stonewall Inn 5 pride weekend 2016.jpg", cap: "The Stonewall Inn on Christopher Street, Pride weekend 2016.", by: "Rhododendrites", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  storme:      { f: "Stormé DeLarverie (1958) - colorized (cropped).jpg", cap: "Stormé DeLarverie, 1958 (colourised). New York Public Library, Schomburg Center.", by: "Schomburg Center for Research in Black Culture, NYPL", lic: "CC BY 4.0", lu: "https://creativecommons.org/licenses/by/4.0" },
  glf:         { f: "Demonstration, with Gay Liberation Front Banner, 1971 (7374381322).jpg", cap: "Gay Liberation Front members demonstrating in Trafalgar Square, London, 1971.", by: "LSE Library", lic: "No known copyright restrictions", lu: "https://www.flickr.com/commons/usage/" },
  mattachine:  { f: "New York Mattachine Society Newsletter - Front Cover August 1969.jpg", cap: "The New York Mattachine Society newsletter, August 1969, reporting the riots.", by: "Price Dickinson / Mattachine Society", lic: "Public domain" },
  // Chipko
  chipko2004:  { f: "Chipko 2004.jpg", cap: "Surviving members of the original Reni group at the 30th anniversary of the action, 2004.", by: "Ceti (English Wikipedia)", lic: "CC BY-SA 3.0", lu: "https://creativecommons.org/licenses/by-sa/3.0" },
  bhatt:       { f: "Chandi prasad bhatt 1.jpg", cap: "Chandi Prasad Bhatt.", by: "Tikeswar1111", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  bahuguna:    { f: "Sunderlal Bahuguna at New Tehri cropped.jpg", cap: "Sunderlal Bahuguna, 2010.", by: "Raghubir Singh", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  // Soweto
  pieterson:   { f: "Mbuyisa Makhubu carries Hector Pieterson at Soweto Uprising.jpg", cap: "Mbuyisa Makhubo carries the dying Hector Pieterson, with his sister Antoinette alongside, 16 June 1976. Photograph by Sam Nzima.", by: "Sam Nzima", lic: "Public domain (as stated on Wikimedia Commons)" },
  sowetoSigns: { f: "Student signs at Soweto uprising.jpg", cap: "Students' placards during the uprising, June 1976.", by: "Unknown photographer", lic: "Public domain" },
  sowetoPolice:{ f: "South African police aim at protestors in Soweto uprising.jpg", cap: "South African police take aim at protesters, 16 June 1976.", by: "Unknown photographer", lic: "Public domain" },
  sowetoMemorial:{ f: "HectorPietersonMemorial1030632.JPG", cap: "The Hector Pieterson Memorial in Orlando West, Soweto.", by: "Ina96", lic: "CC BY-SA 3.0", lu: "https://creativecommons.org/licenses/by-sa/3.0" },
  // Plaza de Mayo
  madrePolicia:{ f: "Madre plaza policia.jpg", cap: "A senior police officer seizes one of the Mothers during a protest in the Plaza de Mayo, 5 October 1982.", by: "Marcelo Ranea", lic: "Public domain" },
  marcha1982:  { f: "2ª Marcha de la Resistencia 9 y 10 diciembre 1982.jpg", cap: "The second March of Resistance in the Plaza de Mayo, December 1982.", by: "Archivo Hasenberg-Quaretti", lic: "CC BY-SA 3.0", lu: "https://creativecommons.org/licenses/by-sa/3.0" },
  villaflor:   { f: "Azucena Villaflor de De Vincenti.jpg", cap: "Azucena Villaflor, founder of the Mothers.", by: "Unknown photographer", lic: "Public domain" },
  madres2006:  { f: "Madres-Fundadora-Oct2006.JPG", cap: "Mothers of the Plaza de Mayo (Founding Line), October 2006.", by: "Roblespepe", lic: "CC BY-SA 4.0", lu: "https://creativecommons.org/licenses/by-sa/4.0" },
  bonafini:    { f: "Hebe de Bonafini - octubre 2022 (cropped).jpg", cap: "Hebe de Bonafini, 2022.", by: "Ministerio de Cultura de la Nación", lic: "CC BY-SA 2.0", lu: "https://creativecommons.org/licenses/by-sa/2.0" },
  // Videos
  vSalt:       { f: "Salt March.ogv", video: true, cap: "Newsreel footage of the Salt March, Gujarat, 1930.", by: "Unknown", lic: "Public domain" },
  vVRA:        { f: "Remarks on the Signing of the Voting Rights Act (August 6, 1965) Lyndon Baines Johnson.ogv", video: true, cap: "President Johnson's remarks on signing the Voting Rights Act, 6 August 1965.", by: "Miller Center of Public Affairs", lic: "Public domain" },
  vGayProud:   { f: "Gay and Proud (1970).webm", video: true, cap: "Gay and Proud (1970), Lilli Vincenz's short documentary of the first Christopher Street Liberation Day march, held on the first anniversary of Stonewall.", by: "Lilli Vincenz", lic: "Public domain" }
};
