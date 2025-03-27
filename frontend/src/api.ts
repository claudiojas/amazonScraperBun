const API_URL = "http://localhost:8080/api/scrape"; // Change to your backend URL

export async function fetchProducts(keyword: string) {
    try {
        // Send a GET request to the API, encoding the search keyword in the URL
        const response = await fetch(`${API_URL}?keyword=${encodeURIComponent(keyword)}`);
        
        // If the response is not OK (status code not in the 200 range), throw an error
        if (!response.ok) throw new Error("Error fetching products.");
        
        // Parse and return the JSON response from the API
        return await response.json();
    } catch (error) {
        // Log any errors that occur during the fetch request
        console.error("Request error:", error);
        
        // Return null in case of an error
        return null;
    }
}
