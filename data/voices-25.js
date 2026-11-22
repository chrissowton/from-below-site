/* "In their own words" — batch 26 (Herero and Nama). Quotations as given in Wikipedia. */
window.EXTRAS = window.EXTRAS || {};
(function (X) { Object.entries(X).forEach(([id, v]) => { window.EXTRAS[id] = Object.assign(window.EXTRAS[id] || {}, { voices: ((window.EXTRAS[id] || {}).voices || []).concat(v) }); }); })({

herero: [
  { q: "What are we being protected against? From what danger or difficulty, or suffering can one chief be protected by another?", who: "Hendrik Witbooi, refusing a German 'protection treaty'", when: "early 1890s", src: ["Wikipedia, 'Hornkranz massacre'", "https://en.wikipedia.org/wiki/Hornkranz_massacre"] },
  { q: "Let us die fighting!", who: "Samuel Maharero, in a letter to Hendrik Witbooi seeking an alliance", when: "about 1904", src: ["Wikipedia, 'Samuel Maharero'", "https://en.wikipedia.org/wiki/Samuel_Maharero"] },
  { q: "It is enough. The children should now have rest.", who: "Hendrik Witbooi, his dying request", when: "29 October 1905", src: ["Wikipedia, 'Hendrik Witbooi (Namaqua chief)'", "https://en.wikipedia.org/wiki/Hendrik_Witbooi_(Namaqua_chief)"] }
]
});
