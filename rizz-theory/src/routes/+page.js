// Import the fetch function from SvelteKit's server module
import axios from "axios";

export async function load({ fetch }) {
    const API_KEY = "4f8d53e3b4231bc2cb3832ab14c19daac4177c956907324fdb8aa6f108e2f072a025f3d9d9d920bb5484a6a96be89a4f79be37bb41ca1e9253463495b5edc91db69e3aa616c4ac2e47fdeedd0c58a3b72d671e7f1d2fe0538ea5fefc9c4caee651f8c43fba32f724ebc27619af49a93bfac397b0d94c9459c4ccbaf8b422d0d6"; // Replace with your actual API key

    // Define the headers with the API key
    const headers = {
        Authorization: `bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    };

    try {
        // Make the API request using Axios
        const response =  await axios.get("http://127.0.0.1:1337/api/mobile-accessories?populate=*", {
            headers,
        });
        return response.data;
    } catch (error) {
        // If an error occurs, handle it accordingly
        console.error('Failed to fetch data from Strapi API:', error.message);
        return {
            error: new Error(`Failed to fetch data from Strapi API: ${error.message}`),
        };
    }
}

