/* JavaScript for Adventure Suggestions */
const suggestions = [
    "#1 Go to Grounded for a coffee! ☕",
    "#2 Head to Wingen for wood-fired pizza! 🍕",
    "#3 Hop on Instagram and find a local event! 📱",
    "#4 Do a chocolate and wine pairing at a Livermore winery! 🍷",
    "#5 Stroll First Street and window shop under the lights! ✨",
    "#6 Golden hour never misses out here...<br><img src='images/goldenhour.jpg' alt='Golden hour over Tri-Valley hills' width='300'>"
];

document.getElementById('suggestButton').addEventListener('click', () => {
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    document.getElementById('suggestion').innerHTML = randomSuggestion;
});