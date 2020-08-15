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

<div class="background-detail-online">
    <h3 class="center">Pelatihan Online Membuat Anyaman Tas</h3>
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
            <p class="text__desc">Pemerintah Desa Pekuncen bekerjasama dengan dinas tenaga kerja membuat 
            sebuah workshop "Pelatihan Online Membuat Anyaman Tas",
            Acara ini ditujukan untuk masyarakat yang ingin belajar lebih dalam tentang dunia industri kerajinan, dan harapanya
            pelatihan ini bisa membuat masyarakat menjadi mempunya skill. Dari skill inilah masyarakat bisa meningkatkan ekonomi diri sendiri maupun keluarga. 
            Dengan harga pelatihan yang sangat terjangkau, kamu sudah bisa mempunyai kemampuan yang mumpuni
            </p>            
            <br>
            <h4 class="text__subtitle">Harga Pelatihan</h4>
            <p>Rp. 70.000</p>

            <br><br>
            <h4 class="text__subtitle">Disusun oleh</h4>
            <p>Team Kerajinan Desa Pekuncen</p>

            <br><br>
            <div class="center">
                <a href="/pembelajaran/online/detail/video">
                    <button class="btn-program top-40"><p class="color-white">Daftar Pelatihan</p></button>                            
                </a>
            </div>
        </TabPanel>
        
        <TabPanel>
            <div class="card-silabus">
                <p>1. Pengenalan Tentang Anyaman Tas</p>
            </div>
            <div class="card-silabus">
                <p>2. Mencari Bahan</p>
            </div>
            <div class="card-silabus">
                <p>3. Membuat Pondasi Anyaman</p>
            </div>
            <div class="card-silabus">
                <p>4. Mulai Menganyam</p>
            </div>
            <div class="card-silabus">
                <p>5. Finishing</p>
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