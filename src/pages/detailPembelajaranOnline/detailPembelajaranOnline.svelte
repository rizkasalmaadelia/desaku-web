<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import NavbarWhite from "../../components/navbarWhite";
	import Footer from "../../components/footer"
	import CardToko from "../../components/cardToko";
	import * as dataHome from "../../data/dataHome";
</script>

<NavbarWhite/>
 <div class="pembelajaran top-50 remove-padding">
    <div class="container">
        <hr class="title">
        <div class="row flex warp">
            <h3 class="top-10 flex flex-10">Tas Kulit Bambu</h3>
        </div>

        <div class="flex top-30">
            <img class="reponsive-img right-20" style="cursor: pointer" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418765/desaku/image/pembelajaran-2_igocmu.png" alt="detail pembelajaran" onclick="javascript:location.href='/pembelajaran/online/detail/video'">
            <img class="reponsive-img right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467661/desaku/image/pembelajaran/detail/detail-2_ifw2qc.png" alt="detail pembelajaran">
            <img class="reponsive-img none right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467664/desaku/image/pembelajaran/detail/detail-3_h1wc0c.png" alt="detail pembelajaran">
            <img class="reponsive-img none right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597467667/desaku/image/pembelajaran/detail/detail-4_cnhzvi.png" alt="detail pembelajaran">
            </div>
        </div>
    </div>
<div class="res-top" style="margin-top:150px !important;"></div>
    <br><br>
   <div class="card-toko-onRes">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Toko Online</h3>
                <a href="#">
				<br>
                    <span class="flex right color-main">Lihat Selengkapnya</span>
                </a>            
            </div>

            <div class="row flex warp top-30">
                {#each dataHome.default[0].favoriteToko as datas}
                    <CardToko 
                        productName={datas.productName}
                        productImage={datas.productImage}
                        productPrice={datas.productPrice}
                        starCount={datas.starCount}
                    />
                {/each}
            </div>
        </div>
</div>

<Footer/>


<style>

</style>