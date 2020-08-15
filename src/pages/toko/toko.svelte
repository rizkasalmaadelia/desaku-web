<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import NavbarWhiteToko from "../../components/navbarWhiteToko";
	import Footer from "../../components/footer"
	import Filter from "../../components/filter"
	import CardToko from "../../components/cardToko"
    import * as dataToko from "../../data/dataToko";

</script>

<NavbarWhiteToko/>
<div class="container top-50">
    <hr class="title">
    <div class="row flex warp">
        <h3 class="top-10 flex flex-10">Filter</h3>
    </div>
	<Filter/>

    <hr class="title top-30">
    <div class="row flex warp">
        <h3 class="top-0 flex flex-10">Barang Populer</h3>
    </div>
	<div class="row flex warp top-30">
    	{#each dataToko.default[0].favoriteToko as datas}
            <CardToko 
                productName={datas.productName}
                productImage={datas.productImage}
                productPrice={datas.productPrice}
                starCount={datas.starCount}
            />
    	{/each}
    </div>
	<div class="row flex warp top-30">
    	{#each dataToko.default[1].favoriteToko as datas}
            <CardToko 
                productName={datas.productName}
                productImage={datas.productImage}
                productPrice={datas.productPrice}
                starCount={datas.starCount}
            />
    	{/each}
    </div>
	<div class="row flex warp top-30">
    	{#each dataToko.default[2].favoriteToko as datas}
            <CardToko 
                productName={datas.productName}
                productImage={datas.productImage}
                productPrice={datas.productPrice}
                starCount={datas.starCount}
            />
    	{/each}
    </div>
</div>

<Footer/>
