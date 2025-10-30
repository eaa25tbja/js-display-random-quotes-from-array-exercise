# Exercise: Display random quotes
### Task: How to fork a repository on GitHub.com
1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.
2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.
3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.
4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.

## JavaScript Task:
1. In this exercise, the HTML and CSS are provided to you as index.html and css/style.css.
Note: You should not modify the css/style.css file; focus only on the JavaScript functionality.
2. Link to the JavaScript file `js/script.js` from the provided HTML.
3. Ensure `"use strict"` is at the top of your script.
4. In the script.js file, create an `array` named `quotesListe` using a `const` that contains at least five different quotes as **objects**. Each object should have two properties:
   - `author`: The name of the person who said the quote (string)
   - `quote`: The actual quote text (string)
   
   Example structure:
```javascript
   {
     author: "Socrates",
     quote: "The only true wisdom is in knowing you know nothing."
   }
```

5. Define a `function` without parameters named `getRandomQuote()`.

6. Inside the `function getRandomQuote()` make an `if statement` that checks if the `quotesListe array's length` is equal to zero. If `true`, create a `const` variable named `errorMsg` with the text *'No quotes available!!!'* and display it in the HTML element with `id="quotes"` wrapped in a `<p>` tag using `innerHTML`.

7. Inside the `function getRandomQuote()` (after the if statement):
   Use `Math.random()` and `Math.floor()` to generate a random number multiplied with the `length` of the `quotesListe array` and store it in a variable named `randomIndex` using `const`.

8. Use the `return` method in JavaScript to get a quote object from the array at the randomIndex position. Here is an example:
```javascript
    return quotesListe[randomIndex];
```

9. Define a new `function` without parameters named `displayRandomQuote`.

10. Inside the `function displayRandomQuote()`:
    - Call the function `getRandomQuote()` and store its returned value in a variable named `randomQuote` using `const`
    - Create a variable `quoteDetails` using `let` and initialize it as an empty string
    - Use template literals to build the HTML structure containing the quote and author:
```javascript
    quoteDetails += `
        <p>${randomQuote.quote}</p>
        <h4>${randomQuote.author}</h4>
    `;
```

11. Inside the `function displayRandomQuote()` - find the HTML element with `id="quotes"` using `getElementById` and set its `innerHTML` to the value stored in `quoteDetails`.

12. Outside the `function displayRandomQuote()`:
    - Find the HTML element with `id="displayQuoteBtn"` and store it in a `const` variable named `displayQuoteBtn`
    - Add an `addEventListener` to this button that listens for a `click` event and calls the function `displayRandomQuote()`.
    
    Here is an example:
```javascript
    const displayQuoteBtn = document.getElementById("displayQuoteBtn");
    displayQuoteBtn.addEventListener("click", displayRandomQuote);
```
  
13. Open Go Live in your VS Code editor and check that the content has been updated. Click the button to display random quotes with their authors.