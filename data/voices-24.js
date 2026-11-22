/* "In their own words" — batch 25. Quotations as given in Wikipedia. */
window.EXTRAS = window.EXTRAS || {};
(function (X) { Object.entries(X).forEach(([id, v]) => { window.EXTRAS[id] = Object.assign(window.EXTRAS[id] || {}, { voices: ((window.EXTRAS[id] || {}).voices || []).concat(v) }); }); })({

lowell1836: [
  { q: "One of the girls stood on a pump and gave vent to the feelings of her companions in a neat speech, declaring that it was their duty to resist all attempts at cutting down the wages.", who: "Harriet Hanson Robinson, an eleven-year-old mill worker during the turn-out, in her memoirs", when: "published 1898", src: ["Wikipedia, 'Lowell mill girls'", "https://en.wikipedia.org/wiki/Lowell_mill_girls"] },
  { q: "We who work in the factory know the sober reality to be quite another thing altogether.", who: "A mill worker answering rosy accounts of Lowell, in the Voice of Industry", when: "1840s", src: ["Wikipedia, 'Lowell mill girls'", "https://en.wikipedia.org/wiki/Lowell_mill_girls"] }
],
mcgill1969: [
  { q: "McGill aux Québécois! … McGill aux travailleurs!", who: "Slogans on the marchers' signs (McGill to Quebecers! McGill to the workers!)", when: "28 March 1969", src: ["Wikipedia, 'Operation McGill français'", "https://en.wikipedia.org/wiki/Operation_McGill_fran%C3%A7ais"] }
],
chichibu1884: [
  { q: "Year One of Freedom and Self-Government", who: "The date the rebel leaders put on their decrees", when: "November 1884", src: ["Wikipedia, 'Chichibu incident'", "https://en.wikipedia.org/wiki/Chichibu_incident"] }
],
planofcampaign1886: [
  { q: "An unlawful and criminal conspiracy.", who: "Lord Salisbury's government, declaring the Plan illegal", when: "December 1886", src: ["Wikipedia, 'Plan of Campaign'", "https://en.wikipedia.org/wiki/Plan_of_Campaign"] }
],
alfs1845: [
  { q: "Rather a myth than a reality.", who: "John Perceval, on how little support the Society had", when: "1862", src: ["Wikipedia, 'Alleged Lunatics' Friend Society'", "https://en.wikipedia.org/wiki/Alleged_Lunatics%27_Friend_Society"] }
]
});
