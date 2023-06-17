<script>
    import {isAuthenticated} from "../../../utils/auth.js";
    import { goto } from '$app/navigation';
    import {get} from "svelte/store";
    import {userStore} from "./userdetails.js";
    let identifier='';
    let password='';
    let newvalue;
    isAuthenticated.subscribe(value=> newvalue=value)
    let data;
    async function handelogin(){
                    const response=await fetch("http://127.0.0.1:1337/api/auth/local",{method:'POST',headers: {
                            'Content-Type': 'application/json'
                }, body: JSON.stringify({
                identifier,
                password,
                }),
            }
        )
        data= await response.json();
                    console.log(data)
        if(response.ok){
            localStorage.setItem('jwt',data.jwt)
            isAuthenticated.update(value=>true);
            console.log(get(isAuthenticated))
            goto("/")

        }else {
            console.log("failed")
        }
        userStore.set(data.user.username)
        console.log(get(userStore))

    }
</script>
<div class="main-div">

    <div class="login-container">
        <div class="text-2xl login">Login into your account</div>
        <form on:submit={handelogin}>
            <input type="text" placeholder="Username or email" bind:value={identifier}>
            <input type="password" placeholder="Password" bind:value={password}>
            <a href="/" class="text-left text-blue-700 underline">Forgot password ?</a> <br>
            <button type="submit" >Login</button> <br>
            <a href="/account/register" class="text-left text-blue-700 underline">New Here? Register now.. !!</a>
        </form>

    </div>

</div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    *{
        font-family: 'Sen', sans-serif;
    }
    .main-div{
        margin: 100px auto;
        max-width: 500px;
    }
    .login-container {
        width: 100%;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);*/
        color: #1a1a1a;
    }

    .login{
        font-size: 28px;
        margin-bottom: 50px;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input[type="text"],
    input[type="password"] {
        padding: 10px;
        margin-bottom: 50px;
        border: none;
        border-radius: 3px;
        background-color: #f1f1f1;
        color: #1a1a1a;
        font-size: 20px;
        height: 60px;
    }

    button {
        padding: 10px;
        background-color: black;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: gray;
    }

</style>