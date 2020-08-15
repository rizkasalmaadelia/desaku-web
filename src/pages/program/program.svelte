<script>
    import { Router, Route, Link } from "svelte-routing";
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import { onMount } from "svelte";
    
	import NavbarWhite from "../../components/navbarWhite";
	import Footer from "../../components/footer"
    import CardToko from "../../components/cardToko";
    
	import * as dataHome from "../../data/dataHome";
</script>

<NavbarWhite/>

<div class="background-detail-program">
    <div class="container">
        <div class="flex warp align-center center row">
            <p class="top-50">#SatuDesaSatuProduk</p>
        </div>
        <div class="flex warp align-center row">
            <h1>Desaku, Menuju Masyarakat Desa Mandiri Ekonomi</h1>
        </div>
        <a href="?">
            <button class="top-50 btn-program black-bg">Gabung Sekarang</button>
        </a>
    </div>
</div>

<div class="bg-colored">
    <br><br><br>
    <div class="container">
        <div class="row flex">
            <div class="flex-6">
                <img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597496348/desaku/image/program-1_rarxgl.png" alt="program">        
            </div>
            <div class="flex-6 program-centered">
                <h3 class="program-title">Mayoritas Desa Berkembang</h3>
                <p class="top-10 program-desc">Pada tahun 2019 Indonesia memiliki jumlah desa sebanyak 74.954, tetapi 55.369 masih tergolong desa berkembang, bahkan sebanyak 14.461 masih jadi desa tertinggal, dan hanya 5.606 desa mandiri</p>
            </div>
        </div>

        <br><br><br>
        <div class="row flex top-80">
            <div class="flex-6 program-centered">
                <h3 class="program-title">Potensi Desa</h3>
                <p class="top-10 program-desc">Dari 74 ribu desa di Indonesia, berapa banyak produk desa yang kita tahu ?, hanya segelintir produk yang bisa di pasarkan ke luar kota. Potensi desa inilah yang harus digali terus untuk menuju desa mandiri ekonomi</p>
            </div>
            <div class="flex-6">
                <img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597497394/desaku/image/program-2_vtajxu.png" alt="program">        
            </div>
        </div>

        <br><br><br>
        <div class="row flex top-80">
            <div class="flex-6">
                <img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597496348/desaku/image/program-1_rarxgl.png" alt="program">        
            </div>
            <div class="flex-6 program-centered">
                <h3 class="program-title">Ekonomi Kreatif Industri 4.0</h3>
                <p class="top-10 program-desc">Di era dimana semua sudah saling terkoneksi, desa juga harus turut serta berkontribusi, dengan cara memasarkan produk mereka ke kancah internasional #desagointernational</p>
            </div>
        </div>

        <br><br><br>
        <div class="center">
            <h3 class="program-title">#SatuDesaSatuProduk</h3>
            <div class="satu__desc top-10">
                <p class="program-desc">Dengan program #SatuDesaSatuProduk kami yakin, jika satu desa mempunyai satu produk, maka bukan mimpi lagi seluruh desa di Indonesia akan mandiri ekonomi, dan Indonesia akan semakin maju</p>
                <p class="program-desc">#desagointernational</p>
            </div>
            <a href="?">
                <button class="top-50 btn-program black-bg">Gabung Sekarang</button>
            </a>
        </div>
    </div>
</div>
<div style="margin-top: -100px"></div>
<Footer/>

<style>
    .black-bg {
        background: #29291e !important;
        color: white;
        border: 1px solid #29291e;
    }

    .black-bg:hover {
        background: black !important;
    }

    .center {
        text-align: center;
        color: white;
    }
    .bg-colored {
        background: #FFF3E4;
        width: 100%;
        height: 2000px;
    }
    .program-desc {
        font-size: 1.5em;
        line-height: 30px;
    }
    .program-title {
        font-size: 2.4em;
    }
    .program-centered {
        margin-top: 120px;
    }
    .satu__desc {
        padding-left: 220px;
        padding-right: 220px;
    }
</style>