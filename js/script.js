"use strict";

const quotesListe = [
  {
    author: "Eminem",
    quote: "I'm stupid, I'm ugly, I'm dumb, I smell. Did I mention I'm stupid?",
  },
  {
    author: "Betty White",
    quote:
      "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
  },
  {
    author: "Mark Twain",
    quote:
      "Clothes make the man. Naked people have little or no influence in society.",
  },
  {
    author: "Rita Rudner",
    quote:
      "I love being married. It’s so great to find that one special person you want to annoy for the rest of your life.",
  },
  {
    author: "Phyllis Diller",
    quote:
      "I want my children to have all the things I couldn’t afford. Then I want to move in with them.",
  },
];

function getRandomQuote() {
  if (quotesListe.length === 0) {
    const errorMsg = "No quotes available!!!!";
    document.getElementById("quotes").innerHTML = `<p>${errorMsg}</p>`;
  } else {
    const randomIndex = Math.floor(Math.random() * quotesListe.length);
    return quotesListe[randomIndex];
  }
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  let quoteDetails = "";
  quoteDetails += `
    <p>"${randomQuote.quote}"</p>
    <h4>${randomQuote.author}</h4>
  `;
  document.getElementById("quotes").innerHTML = quoteDetails;
}

const displayQuoteBtn = document.getElementById("displayQuoteBtn");
displayQuoteBtn.addEventListener("click", displayRandomQuote);
