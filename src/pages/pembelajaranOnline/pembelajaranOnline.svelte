<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import NavbarWhite from "../../components/navbarWhite";
	import Footer from "../../components/footer"
	import Filter from "../../components/filter"
	import CardPembelajaran from "../../components/cardPembelajaran"
    import * as dataPembelajaranOnline from "../../data/dataPembelajaranOnline";

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
        <h3 class="top-0 flex flex-10">Pembelajaran Populer</h3>
    </div>
	<div class="row flex warp top-30">
     	{#each dataPembelajaranOnline.default[0].favoritePembelajaran as datas}
            <CardPembelajaran
                pembelajaranImage={datas.pembelajaranImage}
                pembelajaranName={datas.pembelajaranName}
                pembelajaranDesa={datas.pembelajaranName}
        	/>
        {/each}
    </div>
	<div class="row flex warp top-30">
     	{#each dataPembelajaranOnline.default[1].favoritePembelajaran as datas}
            <CardPembelajaran
                pembelajaranImage={datas.pembelajaranImage}
                pembelajaranName={datas.pembelajaranName}
                pembelajaranDesa={datas.pembelajaranName}
        	/>
        {/each}
    </div>
	<div class="row flex warp top-30">
     	{#each dataPembelajaranOnline.default[2].favoritePembelajaran as datas}
            <CardPembelajaran
                pembelajaranImage={datas.pembelajaranImage}
                pembelajaranName={datas.pembelajaranName}
                pembelajaranDesa={datas.pembelajaranName}
        	/>
        {/each}
    </div>
</div>

<Footer/>
