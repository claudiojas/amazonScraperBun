type Product = {
    title: string; // Product title
    rating: number; // Product rating (e.g., 4.5)
    reviews: number; // Number of reviews the product has
    image: string; // URL of the product image
};

export function renderResults(response: { results: Product[] }) {
    const resultsDiv = document.getElementById("results"); // Get the container element for displaying the results
    if (!resultsDiv) return; // If no results container exists, exit the function

    resultsDiv.innerHTML = ""; // Clear any existing results in the container

    // Check if the 'results' is a valid array and has products
    if (!response?.results || !Array.isArray(response.results) || response.results.length === 0) {
        resultsDiv.innerHTML = "<p>Nenhum produto encontrado.</p>"; // Display a message if no products are found
        return;
    }

    // Loop through each product in the results array and create HTML elements to display them
    response.results.forEach(({ title, rating, reviews, image }) => {
        // If a product doesn't have a title or image, skip it
        if (!title || !image) return;

        const productElement = document.createElement("div"); // Create a container for the product
        productElement.classList.add("product"); // Add a class for styling

        const titleElement = document.createElement("h3"); // Create an element for the product title
        titleElement.textContent = title; // Set the title text

        const ratingElement = document.createElement("p"); // Create an element for the product rating
        ratingElement.textContent = `⭐ ${rating} (${reviews} avaliações)`; // Set the rating text

        const imageElement = document.createElement("img"); // Create an image element for the product image
        imageElement.src = image; // Set the source of the image
        imageElement.alt = `Imagem do produto: ${title}`; // Set the alt text for accessibility
        imageElement.width = 150; // Set the image width

        // Append the title, rating, and image elements to the product container
        productElement.append(titleElement, ratingElement, imageElement);

        // Append the product container to the results container
        resultsDiv.appendChild(productElement);
    });
}
