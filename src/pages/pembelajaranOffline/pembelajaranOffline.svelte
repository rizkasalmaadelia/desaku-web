<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import NavbarWhite from "../../components/navbarWhite";
	import Footer from "../../components/footer"
	import Filter from "../../components/filter"
	import CardPembelajaranOffline from "../../components/cardPembelajaranOffline"
    import * as dataPembelajaranOffline from "../../data/dataPembelajaranOffline";

</script>

<NavbarWhite/>
<div class="container top-50">
    <hr class="title">
    <div class="row flex warp">
        <h3 class="top-10 flex flex-10">Filter</h3>
    </div>
	<Filter/>

    <hr class="title top-30">
    <div class="row flex warp">
        <h3 class="top-0 flex flex-10">Agenda Terdekat</h3>
    </div>
	{#each dataPembelajaranOffline.default[0].favoritePembelajaranOffline as datas}
        <CardPembelajaranOffline 
            pembelajaranImage={datas.pembelajaranImage}
            pembelajaranDate={datas.pembelajaranDate}
            pembelajaranDesa={datas.pembelajaranDesa}
            pembelajaranKab={datas.pembelajaranKab}
            pembelajaranPrice={datas.pembelajaranPrice}
            pembelajaranName={datas.pembelajaranName}
            pembelajaranDesc={datas.pembelajaranDesc}
        />    
    {/each}
</div>

<Footer/>
