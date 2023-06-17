<script>
import {cart_items} from "./cart.js";
let data
cart_items.subscribe($data=>{data=$data})
</script>
<div class="flex flex-col">
    <div class="item">
        {#each data as item}
            <div class="p-4 text-2xl">{item.name}<b> <br> RS: {item.price}</b></div>
        {/each}
    </div>
    <button class="btn">checkout</button>
</div>

<style>
    .item{
        margin: auto;
    }
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
</style>
