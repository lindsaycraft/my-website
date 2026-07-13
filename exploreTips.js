/* JavaScript for Adventure Suggestions */
const suggestions = [
    "Go to Grounded for a coffee! ☕",
    "Head to Wingen for a pizza and pastry! 🍕",
    "Hop on Instagram and find a local event! 📱",
    "Go for a tasting at JMC winery 🍷",
    "Browse for books at Towne Center Books ✨",
    "Order a martini at Simply Fondue"
];

document.getElementById('suggestButton').addEventListener('click', () => {
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    document.getElementById('suggestion').innerHTML = randomSuggestion;
});