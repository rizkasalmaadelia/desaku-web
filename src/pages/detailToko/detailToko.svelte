<script>
    import { Router, Route, Link } from "svelte-routing";
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import { onMount } from "svelte";
    
	import NavbarWhite from "../../components/navbarWhiteToko";
	import Footer from "../../components/footer"
    import CardToko from "../../components/cardToko";
    
	import * as dataHome from "../../data/dataHome";
</script>

<NavbarWhite/>
<div class="container-detail">
    <div class="top-50"></div>
    <hr class="title">
    <div class="row flex warp">
        <h3 class="top-10 flex flex-10">Piring Lidi</h3>
    </div>
    <div class="top-30"></div>
    <div class="flex">
        <img class="right-20" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597482311/desaku/image/toko/detail/toko-img_tsvv3r.png" alt="detail toko">
        <img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597483439/desaku/image/toko/detail/image_7_mvlec4.png" alt="detail toko">
    </div>
    <div class="top-30"></div>    
    <Tabs>
        <TabList>
            <Tab>Deskripsi</Tab>
            <Tab>Review</Tab>
        </TabList>
        
        <TabPanel>
            <p class="text__desc">Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat 
            sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tanggal 21 Agustus 2020.
            Acara ini ditujukan untuk masyarakat yang ingin belajar lebih dalam tentang dunia perlidian, dan harapanya
            pelatihan ini bisa membuat masyarakat menjadi mempunya skill. Dari skill inilah masyarakat bisa meningkatkan ekonomi keluarga sendiri
            </p>
            
            <br>
            <h4 class="text__subtitle">Harga</h4>
            <p>Rp. 5.000</p>

            <br><br>
            <h4 class="text__subtitle">Jumlah</h4>
            <input 
                value="1" 
                type="number" 
                pattern="[0-9]*" 
                inputmode="numeric"
                max="12"
                min="0"
            />

            <br><br>
            <h4 class="text__subtitle">Ukuran</h4>
            <p>25cm x 25cm</p>

            <br><br>
            <h4 class="text__subtitle">Dibuat oleh</h4>
            <p>Team Kerajinan Desa Kedungwringin</p>

            <br><br>
            <div class="center">
                <button class="btn-program top-40 right-20" style="background: white;"><p style="color: #996522;">Masukan Keranjang</p></button>
                <a href="/order/pengiriman">
                    <button class="btn-program top-40"><p class="color-white">Beli Sekarang</p></button>
                </a>
            </div>
        </TabPanel>
        
        <TabPanel>
            <div class="card-silabus">
                <p>Belum ada review terkait barang ini</p>
            </div>
        </TabPanel>
    </Tabs>
</div>
<Footer/>

<style>
    .container-detail {
        margin-left: 250px;
        margin-right: 250px;
    }

    .center {
        text-align: center;
        color: white;
    }
    .text__desc {
        margin-top: 10px;
        text-align: justify;
    }
    .text__subtitle {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .card-silabus {
        width: 100%;
        height: 30px;
        padding: 20px;
        display: flex;
        align-items: center !important;
    }
    .card-silabus:hover {
        background: #D3A263;
    }
    .card-silabus p {
        color: #29291e;
    }
</style>