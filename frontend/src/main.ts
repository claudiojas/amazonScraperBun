import { fetchProducts } from "./api"; // Import the function to fetch products from the backend
import { renderResults } from "./ui"; // Import the function to render products in the UI

document.addEventListener("DOMContentLoaded", () => {
    // Wait for the DOM content to load before attaching event listeners

    const searchButton = document.getElementById("searchButton")!; // Get the search button element
    const keywordInput = document.getElementById("keyword") as HTMLInputElement; // Get the input field where user types the keyword

    // Add an event listener to the search button for the click event
    searchButton.addEventListener("click", async () => {
        const keyword = keywordInput.value.trim(); // Get the value from the input field and trim any extra spaces

        // If the input field is empty, alert the user to enter a keyword
        if (!keyword) return alert("Digite uma palavra-chave!");

        // Fetch products from the backend using the provided keyword
        const products = await fetchProducts(keyword);

        // Render the fetched products in the UI
        renderResults(products);
    });
});
