// ARRAY OF OBJECT 
const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
  ];


// SELECT ALL ELEMENT
const quote = document.getElementById("quote")
const author = document.getElementById("authoe")
const button = document.querySelector("button")

// Function for Genrating quote
function genrateQuote(){

    const quoteIndex = Math.floor(Math.random()*20)

    const Quote = quotes[quoteIndex].text
    const Author = quotes[quoteIndex].author
    
    quote.textContent = Quote
    author.textContent = Author


}

// LISTEN FOR BUTTON CLICK
button.addEventListener("click",genrateQuote)