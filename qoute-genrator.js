// Get references to HTML elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Function to fetch a random quote from the Quotable API
async function getQuote() {
  try {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    // Extract the quote and author from the API response
    const quote = data.content;
    const author = data.author;

    // Display the quote and author in the HTML
    quoteElement.textContent = `"${quote}"`;
    authorElement.textContent = `- ${author}`;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error);
  }
}

// Event listener for the "Generate Quote" button
newQuoteButton.addEventListener("click", getQuote);

// Load an initial quote when the page loads
getQuote();
