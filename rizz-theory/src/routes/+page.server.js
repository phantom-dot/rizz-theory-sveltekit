// Import the fetch function from SvelteKit's server module
import axios from "axios";
import {env} from "$env/dynamic/private";
/** @type {import('./$types').PageServerLoad} */


export async function load({ fetch }) {
    const API_KEY = env.API_KEY
    const API_URL = env.API_URL

    // Define the headers with the API key
    const headers = {
        Authorization: `bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    };

    try {
        // Make the API request using Axios
        const response =  await axios.get(`${API_URL}/api/mobile-accessories?populate=*`, {
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

