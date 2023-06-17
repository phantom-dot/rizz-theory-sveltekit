<script>
    import Icon from '@iconify/svelte';
    import {page} from "$app/stores";
    const id=$page.params.product_id;
    const product_category=$page.params.product_category;
    export let data;
    console.log(data)
    const API_URL = "http://localhost:1337";
    import {cart_items,addtocart} from "../../cart/cart.js"

</script>

<div class="flex justify-evenly flex-wrap">
    <div class="product_image ">
        {#each data.product.data.attributes.product_image.data as image}
            <img src={API_URL}{image.attributes.url}>
        {/each}
    </div>

    <div class="product_info ">
        <div class="product_name mb-2 lg:text-5xl md:text-3xl">{data.product.data.attributes.product_name}</div>
        <div class="product_price mb-2 lg:text-3xl md:text-3xl"><b>₹ {data.product.data.attributes.product_price}</b></div>
        <button on:click={addtocart(data.product.data.id,data.product.data.attributes.product_name,data.product.data.attributes.product_price)} class="add-to-cart-btn bg-black mb-2">ADD TO CART <Icon icon="material-symbols:shopping-cart-outline-rounded" class="inline" width="25" /></button>
    </div>

</div>


<style>

    .product_info{
        margin: auto 0;
    }

    .product_name{
        font-family: 'Sen', sans-serif;
        /*font-size: 30px;*/
    }
    .product_price{
        font-family: 'Sen', sans-serif;
        /*font-size: 20px;*/
    }
    .add-to-cart-btn{
        border: 1px solid black;
        font-family: 'Sen', sans-serif;
        color: #D5D5D5;
        width: 100%;
        height: 40px;
        border-radius: 10px;

    }


</style>

