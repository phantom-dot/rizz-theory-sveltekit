<script>
    import logo from '../lib/images/logo2.png';
    import Icon from '@iconify/svelte';

</script>
    <nav class="main-nav ">

        <div class='outer-nav flex flex-row items-center justify-around m-2'>

            <div class='logo lg:w-1/12 sm:w-1/6'>
               <a href="/"> <img src={logo} alt="logo" /></a>
            </div>

            <div class='routes'>
                <ul class='nav-routes-link'>
                    <li  class="cursor-pointer"><a href="/">T-shirts</a></li>
                    <li  class="cursor-pointer"><a href="/">Hats & Caps</a></li>
                    <li  class="cursor-pointer"><a href="/">eyewear</a></li>
                    <li  class="cursor-pointer"><a href="/">apparel</a></li>
                    <li  class="cursor-pointer"><a href="/">mobile accessories</a></li>
                    <li  class="cursor-pointer"><a href="/">About us</a></li>
                </ul>
            </div>
            
            <div class=" ham-menu hidden">
                <Icon icon="mdi:hamburger-menu-back" width="30" />
            </div>

        </div>
        <div class="loginbar flex justify-around p-1">
            <div class=""><Icon icon="tabler:mail" class="inline" /> <a id="contact-mail-div">hello@rizztheo.com</a></div>
            <a class="shop-latest">Shop latest</a>
            <div> <Icon icon="material-symbols:person-2-outline" class="inline" width="25"/>
                <Icon icon="material-symbols:shopping-cart-outline-rounded" class="inline" width="25" /></div>

        </div>
    </nav>




<slot></slot>
<footer>
        <div class="icons-div">
            <div><Icon icon="logos:facebook" class="inline" height="20"/></div>
            <div><Icon icon="logos:twitter" height="20" class="inline"/></div>
            <div><Icon icon="logos:instagram-icon" height="20" class="inline"/></div>
            <div><Icon icon="logos:youtube-icon" height="20" class="inline"/></div>
        </div>
    <div>
        <p>© 2021 Rizztheory. All rights reserved.</p>
    </div>

</footer>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .logo img{
        width:100%;
    }
    .nav-routes-link{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }
    .nav-routes-link li{
        padding: 10px;
        border-right: 1px solid white;
        transition: font-size 0.3s ease-in-out;
    }


    @media (max-width:640px)  {
        .routes{
            display: none;
        }
        .ham-menu{
            display: block;
            margin-right: 5px;
        }
        .logo{
            width: 30.666667%;
        }
    }
    .loginbar{
        font-size: 16px;
        background: #F6F6F8;
    }
    .shop-latest{
        color: red;
    }
    .routes ul li:hover{
        background: black;
        color: #F6F6F8;
        font-size: 20px;
        transition: ease .3s;
        border-radius: 4px;

    }
    .main-nav{
        font-family: 'Sen', sans-serif;
    }

    footer{
        background: #F6F6F8;
        padding: 10px;
        font-family: 'Sen', sans-serif;
        text-align: center;
    }
    .icons-div div{
        padding: 10px;
    }
</style>