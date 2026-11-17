/* "In their own words" — batch 22. Quotations as given in Wikipedia. */
window.EXTRAS = window.EXTRAS || {};
(function (X) { Object.entries(X).forEach(([id, v]) => { window.EXTRAS[id] = Object.assign(window.EXTRAS[id] || {}, { voices: ((window.EXTRAS[id] || {}).voices || []).concat(v) }); }); })({

cameroon2016: [
  { q: "Cameroon is one and indivisible! It shall so remain.", who: "President Paul Biya, in his New Year message, responding to the protests", when: "31 December 2016", src: ["Wikipedia, '2016–2017 Cameroonian protests'", "https://en.wikipedia.org/wiki/2016%E2%80%932017_Cameroonian_protests"] },
  { q: "We want freedom", who: "Chanted by young protesters in Buea", when: "22 September 2017", src: ["Wikipedia, '2016–2017 Cameroonian protests'", "https://en.wikipedia.org/wiki/2016%E2%80%932017_Cameroonian_protests"] }
],
haiti2018: [
  { q: "Kot kòb PetwoKaribe a? (Where did the PetroCaribe money go?)", who: "Gilbert Mirambeau Jr., on a cardboard sign in a photograph posted online", when: "August 2018", src: ["Wikipedia, 'Haitian crisis'", "https://en.wikipedia.org/wiki/Haitian_crisis"] },
  { q: "The country's problems aren't solely political. The country's problems are social, economic and political.", who: "President Jovenel Moïse, calling for dialogue", when: "2019", src: ["Wikipedia, 'Haitian crisis'", "https://en.wikipedia.org/wiki/Haitian_crisis"] },
  { q: "If Jovenel Moïse does not want to step down from power, we are going to name an interim president in the coming days.", who: "Jean-Charles Moïse, opposition leader", when: "February 2019", src: ["Wikipedia, 'Haitian crisis'", "https://en.wikipedia.org/wiki/Haitian_crisis"] }
],
guatemala2015: [
  { q: "Mano dura, cabeza y corazón (A firm hand, head and heart)", who: "Otto Pérez Molina's campaign slogan", when: "2007", src: ["Wikipedia, 'Otto Pérez Molina'", "https://en.wikipedia.org/wiki/Otto_P%C3%A9rez_Molina"] }
],
dominican2020: [
  { q: "grave disturbance to the [country's] institutional and democratic order", who: "Opposition statement, as members of Congress walked out before the president's address", when: "27 February 2020", src: ["Wikipedia, '2020 Dominican Republic protests'", "https://en.wikipedia.org/wiki/2020_Dominican_Republic_protests"] },
  { q: "shows that there is an irreversible trend and that from now on we have a president-elect", who: "Gonzalo Castillo, the governing party's candidate, conceding defeat", when: "July 2020", src: ["Wikipedia, '2020 Dominican Republic general election'", "https://en.wikipedia.org/wiki/2020_Dominican_Republic_general_election"] }
],
sierraleone2022: [
  { q: "Bio must go", who: "Chanted by protesters in Freetown", when: "10 August 2022", src: ["Wikipedia, '2022 Sierra Leone protests'", "https://en.wikipedia.org/wiki/2022_Sierra_Leone_protests"] },
  { q: "This was not a protest against the high cost of living occasioned by the ongoing global economic crisis.", who: "President Julius Maada Bio, in an address to the nation", when: "August 2022", src: ["Wikipedia, '2022 Sierra Leone protests'", "https://en.wikipedia.org/wiki/2022_Sierra_Leone_protests"] }
]

});
