let btn = document.getElementById("btn");
let quote = document.getElementById("quote");
let quoteAuthor = document.getElementById("quoteAuthor");

btn.addEventListener("click", generateQuote);

function generateQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = `"${data.quote}"`;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch((err) => (quote.textContent = err));
}
