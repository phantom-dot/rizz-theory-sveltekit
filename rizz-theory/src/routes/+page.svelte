<script>
    import "../app.css"
    import Slider from "../components/slider/slider.svelte";
    export let data;
    console.log(data);
    let products = data.data;
    const API_URL= "http://127.0.0.1:1337";
</script>
<Slider/>
<div class="main-div-outer">
<div class="Latest_product-text">Latest products</div>
<div class="main-div flex flex-wrap justify-center ">
{#each products as item (item.id)}
    <div class="product-div cursor-pointer ">
        {#if item.attributes.product_image && item.attributes.product_image.data.length > 0}
            {#each item.attributes.product_image.data as image}
                <img src={API_URL}{image.attributes.url} alt={item.attributes.product_name} />
            {/each}
        {/if}
        <i class="product_name">{item.attributes.product_name}</i>
        <div class="product_price">PRICE: <b> RS {item.attributes.product_price}</b></div>
    </div>
{/each}
</div>
</div>
<button class="bg-amber-400 btn"> VIEW ALL </button>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    /*.main-div{*/
    /*    margin: 20px auto;*/
    /*    width: 80%;*/
    /*}*/
    .btn{
        background-color: #222222;
        color:white;
        padding: 10px;
        width: 100px;
        font-family: 'Sen', sans-serif;
        display: block;
        margin: 20px auto;
        border-radius: 10px;
    }
    .main-div{
        margin-top: 20px;
    }
    .product_name{
        font-family: 'Sen', sans-serif;
    }
    .Latest_product-text{
        font-family: 'Sen', sans-serif;
        font-size: 20px;
        text-align: center;
        text-decoration: underline #B2B2B2;
        text-underline-offset:7px;
        text-decoration-thickness: 2px;
    }
    .product-div{
        border: 1px solid #B2B2B2;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        min-width: 200px;
        max-width: 300px;
    }
    .product-div:hover{
        /*achive glass effect on hover*/
        box-shadow: 8px 8px 16px 8px rgba(0,0,0,0.2);
        transition: .2s;


    }
    .product-div img{
        width: 100%;
    }

    .main-div-outer{
        margin-top: 40px;
    }

</style>