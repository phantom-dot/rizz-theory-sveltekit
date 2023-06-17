import {get, writable} from 'svelte/store';
import {compute_slots} from "svelte/internal";

//declare type cart item by using stores and writeable
export const cart_items= writable([])
export function addtocart(product_id,product_name,product_price){
    const cartitem={
        id:product_id,
        name:product_name,
        price:product_price
    }
    cart_items.update((items)=>[...items,cartitem]);
    console.log(get(cart_items))
}



