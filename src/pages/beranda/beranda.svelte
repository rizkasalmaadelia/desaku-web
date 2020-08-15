<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
    import Navbar from "../../components/navbar";
    import Footer from "../../components/footer";
    import CardToko from "../../components/cardToko";
    import CardPembelajaran from "../../components/cardPembelajaran";
    import CardPembelajaranOffline from "../../components/cardPembelajaranOffline";
    import * as dataHome from "../../data/dataHome";
</script>

<Navbar/>

<body>
    <div class="background">
        <div class="container">
            <div class="flex warp align-center row">
                <p class="top-90">#SatuDesaSatuProduk</p>
            </div>
            <div class="flex warp align-center row">
               <h1>Ayo Bersama Kita Wujudkan Ekonomi Kreatif Indonesia. Dimulai Dari Pengoptimalan Sumber Daya Desa Secara Maksimal</h1>
            </div>
            <hr class="">
        </div>
    </div>

    <div class="pembelajaran top-50">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Video Pembelajaran Keterampilan</h3>
                <a href="/pembelajaran/online">
                    <br>
                    <span class="flex right color-main">Lihat Selengkapnya</span>
                </a>
            </div>

            <div class="row float-left top-30">
                {#each dataHome.default[1].favoritePembelajaran as datas}
                    <CardPembelajaran
                        pembelajaranImage={datas.pembelajaranImage}
                        pembelajaranName={datas.pembelajaranName}
                        pembelajaranDesa={datas.pembelajaranName}
                    />
                {/each}
            </div>
        </div>
    </div>

    <div style="margin-top:450px !important;"></div>
	<!-- card pembelajaran -->

    <br><br>
    <div class="card-toko-onRes">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Toko Online</h3>
                <a href="/desaku/toko.php">
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

    <div class="kenapa-desaku top-80">
        <div class="container">
            <hr class="title top-80">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10 color-white title-kenapa">Kenapa Harus Desaku</h3>      
            </div>

            <div class="row flex warp flex-12 top-80 res-top">
                <div class="flex-4">
                    <img class="left-80 none" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418717/desaku/image/ilus-1_km7cib.png" alt="ilustrasi" srcset="">
                </div>
                <div class="flex-8 left-20">
                    <div class="description top-20">
                        <span class="circle"></span>
                        <h5 class="left-40 title-kenapa">Meningkatkan Pendapatan Desa</h5>
                        <p class="subtitle-kenapa top-10">Dengan Desaku Pemerintah Desa bisa menjual keterampilan khusus desa mereka di sini</p>
                    </div>

                    <div class="description top-20">
                        <span class="circle"></span>
                        <h5 class="left-40 title-kenapa">Mengenalkan Keterampilan Khusus Desa</h5>
                        <p class="subtitle-kenapa top-10">Desaku Akan Mempromosikan Keterampilan Desa Kepada Dunia Sehingga bisa dikenal mayarakat luas</p>
                    </div>
                    
                    <div class="description top-20">
                        <span class="circle"></span>
                        <h5 class="left-40 title-kenapa">Pemberdayaan Masyarakat Desa</h5>
                        <p class="subtitle-kenapa top-10">Dengan adanya desaku, masyarakat bisa belajar lebih tentang keterampilan yang ingin dipelajari secara online maupun offline</p>
                    </div>

                    <div class="description top-20">
                        <span class="circle"></span>
                        <h5 class="left-40 title-kenapa">Meningkatkan Ekonomi Masyarakat Desa</h5>
                        <p class="subtitle-kenapa top-10">Dengan Desaku, Masyarakat bisa melakukan kegiatan ekonomi secara online, praktis dan mudah</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="program">
        <div class="container">
            <div class="row flex warp top-80">
                <div class="flex-4 card-prog">
                    <img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418737/desaku/image/program_uqxheu.png" alt="">
                </div>  
                <div>
                    <h3 class="top-10 flex flex-10 color-black title-prog">Program #SatuDesaSatuProduk</h3>
                    <p class="top-20 desc-program">Program #SatuDesaSatuProduk adalah sebuah program dimana para penduduk lokal mengembangkan sebuah produk maupun jasa yang akan menjadi produk khas dan kebanggaan wilayah lokal mereka, sehingga memiliki nilai kompetitif baik di pasar nasional maupun global. Dengan program ini Indonesia akan maju dalam bidang ekonomi kreatif</p>
                    <button class="btn-program top-40"><p class="color-white">Daftarkan Desamu</p></button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="pelatihan top-80">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Pembelajaran Offline</h3>
                <a href="/pembelajaran/offline">
                    <br>
                    <span class="flex right color-main">Lihat Selengkapnya</span>
                </a>
            </div>

            {#each dataHome.default[2].favoritePembelajaranOffline as datas}
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
    </div>
	<!-- card pembelajaran offline -->

    <div class="testimoni top-80">
        <div class="container">
            <hr class="title">
            <div class="row flex warp">
                <h3 class="top-10 flex flex-10">Testimoni Kepala Desa</h3>
            </div>   

            <div class="row flex warp top-30 full-width">
                <div class="card-testi flex-4 flex-xs-9 flex-s-9">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418702/desaku/icon/petik_njp7lk.svg" alt="petik" srcset="">
                    <p class="text-testi">Awalnya Desa Blimbingan hanyalah sebatas Desa pada umumnya. Masyarakat disini hanya menjadi petani, tapi setelah saya mengenal Desaku, masyarakat disini mulai belajar kerajinan dari desa lain. Sekarang ekonomi desa kami meningkat cukup drastis masyarakt juga kece badei bro heheajaya keren sih ini aseli</p>
                    <hr class="full testi top-30">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418766/desaku/image/kades/kepala-desa_hnyozh.png" alt="kepala desa">
                    <div class="title-testimoni">
                        <span class="nama color-white">Timotius Muliawan</span><br>
                        <span class="color-main">Kepala Desa Kedungwringin</span>
                    </div>
                </div>

                <div class="card-testi flex-4 left-20 none">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418702/desaku/icon/petik_njp7lk.svg" alt="petik" srcset="">
                    <p class="text-testi">Awalnya Desa Blimbingan hanyalah sebatas Desa pada umumnya. Masyarakat disini hanya menjadi petani, tapi setelah saya mengenal Desaku, masyarakat disini mulai belajar kerajinan dari desa lain. Sekarang ekonomi desa kami meningkat cukup drastis masyarakt juga kece badei bro heheajaya keren sih ini aseli</p>
                    <hr class="full testi top-30">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418772/desaku/image/kades/kepala-desa-2_n192vh.png" alt="kepala desa">
                    <div class="title-testimoni">
                        <span class="nama color-white">Goeroeku</span><br>
                        <span class="color-main">Kepala Desa Gunungwetan</span>
                    </div>
                </div>

                <div class="card-testi flex-4 left-20 none">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418702/desaku/icon/petik_njp7lk.svg" alt="petik" srcset="">
                    <p class="text-testi">Awalnya Desa Blimbingan hanyalah sebatas Desa pada umumnya. Masyarakat disini hanya menjadi petani, tapi setelah saya mengenal Desaku, masyarakat disini mulai belajar kerajinan dari desa lain. Sekarang ekonomi desa kami meningkat cukup drastis masyarakt juga kece badei bro heheajaya keren sih ini aseli</p>
                    <hr class="full testi top-30">
                    <img class="petik" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418772/desaku/image/kades/kepala-desa-3_qctpey.png" alt="kepala desa">
                    <div class="title-testimoni">
                        <span class="nama color-white">Dwicky Danov Iswardanu</span><br>
                        <span class="color-main">Kepala Desa Pekuncen</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<Footer/>