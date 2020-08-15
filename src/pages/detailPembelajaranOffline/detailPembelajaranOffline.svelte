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
    <h3 class="center">Pelatihan Offline Membuat Kerajinan Lidi Expert</h3>
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
            <p class="text__desc">Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat 
            sebuah workshop "Pelatihan Membuat Keajinan Lidi Expert"yang diadakan tanggal 21 Agustus 2020.
            Acara ini ditujukan untuk masyarakat yang ingin belajar lebih dalam tentang dunia perlidian, dan harapanya
            pelatihan ini bisa membuat masyarakat menjadi mempunya skill. Dari skill inilah masyarakat bisa meningkatkan ekonomi keluarga sendiri
            </p>
            
            <br>
            <h4 class="text__subtitle">Kapan Acara dilaksanakan ?</h4>
            <p>21 Agustus 2020</p>

            <br><br>
            <h4 class="text__subtitle">Harga Pelatihan</h4>
            <p>Rp. 80.000</p>

            <br><br>
            <h4 class="text__subtitle">Alamat</h4>
            <p>Desa Kedungwringin, Kecamatan Jatilawang, Kabupaten Banyumas</p>

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
                <p>2. Belajar Mencari Lidi Yang Bagus</p>
            </div>
            <div class="card-silabus">
                <p>3. Membuat Anyaman Dasar Bawah</p>
            </div>
            <div class="card-silabus">
                <p>4. Membuat Anyaman Samping</p>
            </div>
            <div class="card-silabus">
                <p>5. Membuat Anyaman Bawah Lidi</p>
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