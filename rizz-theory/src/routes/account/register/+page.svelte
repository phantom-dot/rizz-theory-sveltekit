<script>
let username='';
let password='';
let email='';
let locallyregisterd=false;
const API_KEY="4f8d53e3b4231bc2cb3832ab14c19daac4177c956907324fdb8aa6f108e2f072a025f3d9d9d920bb5484a6a96be89a4f79be37bb41ca1e9253463495b5edc91db69e3aa616c4ac2e47fdeedd0c58a3b72d671e7f1d2fe0538ea5fefc9c4caee651f8c43fba32f724ebc27619af49a93bfac397b0d94c9459c4ccbaf8b422d0d6"
async function handelsubmit(){
    const response=await fetch("http://127.0.0.1:1337/api/auth/local/register",{method:'POST',headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            username,
            email,
            password,
        }),
    }
    )
    if (response.ok) {
        console.log("success")
        locallyregisterd=true;
        // Registration successful, handle the desired behavior (e.g., redirect to a dashboard page).
    } else {
        console.log("failed")
    }
}


</script>
<div class="main-div">
    <div class="login-container">
        <div class="text-2xl login">Register now</div>
        <form on:submit={handelsubmit}>
            <input type="text" placeholder="Full name" bind:value={username}>
            <input type="email" placeholder="Email" bind:value={email}>
            <input type="Password" placeholder="Password" bind:value={password}>
            <button  type="submit">Register</button> <br>
            <a href="/account/login" class="text-left text-blue-700 underline">Already Registered? Login now</a> <br>
        </form>
        {#if locallyregisterd===true}
            <div>
                Registered Succesfully
            </div>
        {/if}

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
    input {
        padding: 10px;
        margin-bottom: 30px;
        border: none;
        border-radius: 3px;
        background-color: #f1f1f1;
        color: #1a1a1a;
        font-size: 20px;
        height: 50px;
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