<script>
    import {isAuthenticated} from "../../../utils/auth.js";
    import {get} from "svelte/store";
    import {userStore} from "../login/userdetails.js";
    let newvalue;
    let username;
    isAuthenticated.subscribe(value=>newvalue=value)
    userStore.subscribe(value => username=value)
    console.log(get(isAuthenticated))
</script>
<div class="hero-text font-bold text-6xl text-center md-col-12">Welcome 😊 {username}</div>
<div class="email"> lohransahil@gmail.com</div>
<div class="links flex justify-evenly underline"><a href="/">Change password.</a>
    <a href="/">Change Username.</a>
    <a href="/">Change Email.</a>
    <a href="/">Cart</a>
    <a on:click={function (){isAuthenticated.update(value => false)}} href="/">logout</a>
</div>
<style>
    .hero-text{
        margin-top: 200px;
        margin-bottom: 100px;
    }
    .links{
        margin-bottom: 100px;
        color: blue;
    }

</style>