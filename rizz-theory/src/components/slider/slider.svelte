<script>
    let currentImage = 0;
    import Icon from '@iconify/svelte';
    import img1 from "$lib/images/denim-new-launch-desk_4e5a8cd9-2a2c-4283-b304-af3506fdfdf3.webp"
    import img2 from "$lib/images/playboy.webp"
    import img3 from "$lib/images/caps-desktop-banner-op.webp"
    let images = [
        {
            description: "shirts",
            filePath: img1
        },
        {
            description: "jeans",
            filePath: img2,
        },{
            description: "caps",
            filePath: img3,
        },
    ];

    function nextImage() {
        if (currentImage === images.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        console.log(currentImage);
    }

    function previousImage() {
        if (currentImage === 0) {
            currentImage = images.length - 1;
        } else {
            currentImage--;
        }
        console.log(currentImage);
    }
</script>

<style>

    .carousel{
        position: relative;
        width: 100%;
        transition: ease-in-out 2s;
    }
    button{
        background: white;
        border-radius: 300px;
        border: 3px solid black;
        transition: ease-in-out 2s;
    }

    #btl:hover {
        cursor: pointer;
        zoom: 120%;
    }
    #btr:hover {
        cursor: pointer;
        zoom: 120%;
    }
    .bbox{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding: 20px;
    }

</style>
<div  class="carousel">
    <div class="flex bbox justify-between">
        <button id="btl" on:click={previousImage}><Icon icon="pixelarticons:arrow-left" width="40"/></button>
        <button id="btr" on:click={nextImage}><Icon icon="pixelarticons:arrow-right" width="40"/></button>
    </div>

    <img  src={images[currentImage].filePath} alt={images[currentImage].description} />

</div>