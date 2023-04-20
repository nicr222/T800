$(document).ready(function () {
    showQuote();
});

// An array holding all of the possible header quotes.
var possibleQuotes = [
    "There's no sense in going out of your way to get somebody to like you. -Ash",
    "We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what's the same -Meowth",
    "When you have lemons, you make lemonade; and when you have rice, you make rice balls. -Brock",
    "I see now that the circumstances of one's birth are irrelevan; it is what you do with the gift of life that determines who you are. -Mewtwo",
    "Getting wrapped up in worries is bad for your body and spirit. That's when you must short out your logic circuits and reboot your heart. -Elesa",
    "It's more important to master the cards you're holding than to complain abou the ones your opponent was dealt. - Grimsley",
    "Me give up? No way! - Ash",
    "So, this is my power... but what is my purpose? -Mewtwo",
    "Do you always need a reason to help somebody -Ash",
    "I'm totally unprepared to deal with life's realities. -Meowth"
];

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;

    
}