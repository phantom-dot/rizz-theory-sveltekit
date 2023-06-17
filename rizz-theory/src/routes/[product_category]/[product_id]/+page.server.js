import {env} from "$env/dynamic/private";
import {resolvePackageData} from "vite";

export const load = async ({ fetch, params }) => {
    const API_URL = env.API_URL;
    const API_KEY = env.API_KEY;
    console.log(params);

    const fetchProduct = async (product_id, product_category) => {
        try {
            const res = await fetch(
                `${API_URL}/api/${product_category}/${product_id}?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data=await res.json();
            return data;

        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    };

    return{
        product: await fetchProduct(params.product_id,params.product_category)
    }

};
