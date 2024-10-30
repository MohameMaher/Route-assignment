document.getElementById("quoteButton").addEventListener("click", function() {
    const quotes = [
        {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            author: "Ralph Waldo Emerson"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Steve Jobs"
        },
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Warren Buffett"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "George Orwell"
        }
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

     document.getElementById("quoteDisplay").innerText = `"${randomQuote.quote}"`;
    document.getElementById("authorDisplay").innerText = `- ${randomQuote.author}`;
});
