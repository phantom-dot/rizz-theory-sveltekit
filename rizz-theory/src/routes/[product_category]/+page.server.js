import axios from "axios";
import {env} from "$env/dynamic/private";
/** @type {import('./$types').PageServerLoad} */


export const load = async ({ fetch, params }) => {
    const API_URL = env.API_URL;
    const API_KEY = env.API_KEY;
    console.log(params);

    const fetchProduct = async (product_category) => {
        try {
            const res = await fetch(
                `${API_URL}/api/${product_category}/?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data=await res.json();
            return data.data;

        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    };

    return{
        product: await fetchProduct(params.product_category)
    }

};
