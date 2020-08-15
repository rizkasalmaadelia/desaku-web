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

<div class="background-detail">
    <h3 class="center">Pelatihan Membuat Kerajinan Lidi Expert</h3>
</div>

<div class="container-detail">
    <div class="top-20"></div>
    <Tabs>
        <TabList>
            <Tab>Deskripsi</Tab>
            <Tab>Silabus</Tab>
            <Tab>FAQ</Tab>
        </TabList>
        
        <TabPanel>
            <p class="text__desc">Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tangg Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tanggPemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tanggPemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tanggPemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tangg</p>
            
            <br>
            <h4 class="text__subtitle">Kapan Acara dilaksanakan ?</h4>
            <p>27 Januari 2020</p>

            <br><br>
            <h4 class="text__subtitle">Harga Pelatihan</h4>
            <p>Rp. 70.000</p>

            <br><br>
            <h4 class="text__subtitle">Disusun oleh</h4>
            <p>Team Kerajinan Desa Kedungwringin</p>

            <br><br>
            <div class="center">
                <button class="btn-program top-40"><p class="color-white">Daftar Pelatihan</p></button>            
            </div>
        </TabPanel>
        
        <TabPanel>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Kerajinan Lidi</p>
            </div>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Kerajinan Lidi</p>
            </div>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Kerajinan Lidi</p>
            </div>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Kerajinan Lidi</p>
            </div>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Kerajinan Lidi</p>
            </div>
        </TabPanel>
        
        <TabPanel>
            <div class="card-silabus">
                <p>Belum ada pertanyaan terkait pelatihan ini</p>
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