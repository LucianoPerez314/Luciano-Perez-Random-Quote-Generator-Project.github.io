// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
//Data.
const colors = ["#ADD8E6", "#90EE90", "#FFFFE0", "#FFB6C1", "#E6E6FA"];
const quotes = [
{ quote: "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.", author: "Friedrich Nietzsche" },
{ quote: "Of what use is a philosopher who doesn't hurt anyone's feelings?", author: "Diogenes" },
{ quote: "The only true wisdom is in knowing you nothing.", author: "Socrates" },
{ quote: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
{ quote: "The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.", author: "Fyodor Dostoevsky" },
{ quote: "It is not titles that honor men, but men that honor titles.", author: "Niccolò Machiavelli" }];


function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
}

function animateChanges(color, quoteAndAuthor) {
  $("body").animate({ backgroundColor: color, color: color }, 1000);
  $("#tweet-quote").animate({ backgroundColor: color }, 1000);
  $("#new-quote").animate({ backgroundColor: color }, 1000);
  $("#text").animate({ opacity: 0 }, 500, () => {
    $("#text").animate({ opacity: 1 }, 1000);
    $("#text").text(`"${quoteAndAuthor.quote}"`);
  });
  $("#author").animate({ opacity: 0 }, 500, () => {
    $("#author").animate({ opacity: 1 }, 1000);
    $("#author").text(`-${quoteAndAuthor.author}`);
  });
  $("#tweet-quote").attr("href", `twitter.com/intent/tweet`);
}

const onNewQuote = () => {
  //Get quote info and colors.
  const currentQuoteAndAuthor = getRandom(quotes);
  const currentColor = getRandom(colors);
  //Change the colors and quote of designated elements.
  animateChanges(currentColor, currentQuoteAndAuthor);
};

$(document).ready(function () {
  onNewQuote();
  $("#new-quote").on("click", onNewQuote);
});
