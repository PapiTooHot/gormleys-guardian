// Array of quotes
const quotes = [
  `"The universe is a pretty big place. If it's just us, it seems like an awful waste of space." - Carl Sagan`,
  `"If it’s just us… seems like an awful waste of space." - Ellie Arroway (Contact)`,
  `"Two possibilities exist: either we are alone in the universe, or we are not. Both are equally terrifying." - Arthur C. Clarke`,
  `"If aliens visit us, the outcome would be much as when Columbus landed in America, which didn’t turn out well for the Native Americans." - Stephen Hawking`,
  `"There's a starman waiting in the sky, he'd like to come and meet us, but he thinks he'd blow our minds." - David Bowie`,
  `"It would be inexcusably egocentric to suggest that we are alone in the cosmos." - Neil deGrasse Tyson`,
  `"There are probably more advanced civilizations on other planets in our galaxy, perhaps billions of years ahead of us." - Michio Kaku`,
  `"Ridicule is not a part of the scientific method and people should not be taught that it is." - Dr. J. Allen Hynek`,
  `"The truth is out there." - Fox Mulder (The X-Files)`,
  `"If we consider the possibility of extraterrestrial contact, we must also entertain the possibility that we are not the pinnacle of creation." - Erich von Däniken`,
  `"I’m not saying it was aliens, but it was aliens." - Giorgio A. Tsoukalos`,
  `"Not only is the universe stranger than we imagine, it is stranger than we can imagine." - Arthur Eddington`,
  `"There’s no reason to assume that the aliens would be anything like us, or that they would even be interested in us." - Seth Shostak`,
  `"If we are alone in the universe, it sure seems like an awful lot of wasted space." - Ed Harris (Apollo 13)`,
  `"For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring." - Carl Sagan`,
  `"The prospect of being visited by advanced extraterrestrials may be the single most profound and dangerous event in human history." - Michio Kaku`,
  `"I believe alien life is quite common in the universe, although intelligent life is less so. Some say it has yet to appear on planet Earth." - Stephen Hawking`,
  `"Beware the silence of the skies; it may hold secrets not meant for man to uncover." - Anonymous`,
  `"Advanced civilizations may not share our values or morals, and their technology could render us insignificant in an instant." - Carl Sagan`,
  `"Any civilization capable of interstellar travel could view us the same way we view bacteria: interesting, but ultimately expendable." - Neil deGrasse Tyson`,
  `"We’re looking for signs of intelligent life, but we should be cautious about broadcasting our own presence." - Stephen Hawking`,
  `"Sometimes, I fear that our eagerness to contact extraterrestrials may bring a reckoning we’re not prepared for." - Seth Shostak`,
  `"It’s naïve to assume that an alien species capable of reaching us would come in peace." - Michio Kaku`,
  `"The absence of evidence is not evidence of absence; it may simply mean they’re watching and waiting." - Carl Sagan`,
  `"We must tread carefully. Any contact with extraterrestrial intelligence could irrevocably alter or end our civilization." - Anonymous`
];

// Function to pick a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Populate the quote on page load
window.onload = function () {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = getRandomQuote();
};
