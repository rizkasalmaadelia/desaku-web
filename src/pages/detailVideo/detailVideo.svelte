<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import NavbarWhite from "../../components/navbarWhite";
	import Footer from "../../components/footer"
	import CardToko from "../../components/cardToko";
	import * as dataHome from "../../data/dataHome";
</script>

    <NavbarWhite/>
    <div class="top-50">
        <div class="container">
            <p class="row flex">
                
                <a href="/pembelajaran/online/detail">
                    <p style="color: black">Tas Kulit Bambu / </p>
                </a>
                Detail
            </p>
            <br><br>
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Tas Kulit Bambu</h3>
            </div>

            <div class="row flex warp top-30">
            <iframe 
            title="video"
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/PENkxs8aJeY" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen>
            </iframe>            
            </div>
        </div>
    </div>
    <div class="top-50">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Video Selanjutnya</h3>
            </div>

            <div class="flex top-30">
                <img class="reponsive-img right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467661/desaku/image/pembelajaran/detail/detail-2_ifw2qc.png" alt="detail pembelajaran">
            <img class="reponsive-img none right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467664/desaku/image/pembelajaran/detail/detail-3_h1wc0c.png" alt="detail pembelajaran">
            <img class="reponsive-img none right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467667/desaku/image/pembelajaran/detail/detail-4_cnhzvi.png" alt="detail pembelajaran">
            </div>
        </div>
    </div>
    

<Footer/>


<style>

</style>