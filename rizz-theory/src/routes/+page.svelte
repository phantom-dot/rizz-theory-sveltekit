<script>
    import "../app.css"
    import Slider from "../components/slider/slider.svelte";
    export let data;
    console.log(data);
    const {resp}=data;
    let products = resp.data;
    let imageurl=products.map()
</script>
<Slider/>
{#each products as product}

    <div>
        <img src={imageurl}>
        <h1>{product.attributes.product_name}</h1>
        <p>{product.attributes.product_price}</p>
        <p>{product.attributes.product_id}</p>
        <p>{product.attributes.product_description}</p>
    </div>
{/each}
