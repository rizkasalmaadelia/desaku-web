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
<div class="container-detail top-50">
    <hr class="title">
    <div class="row flex warp">
        <h3 class="top-10 flex flex-10">Isi Data Pengiriman</h3>
    </div>
    <div>
        <div class = "row top-30">
            <div class = "flex">
                <div class = "row right-60">
                    <h4>Nama penerima</h4>
                    <input type = "text" class="form" placeholder = "Ex : Rizka Salma">
                </div>
                <div class = "row right-50">
                    <h4>No. Hp</h4>
                    <input type = "text" class="form" placeholder = "Ex : 081212345678">
                </div>
            </div>
            <div class = "flex">
                <div class = "row right-60">
                    <h4>Kota</h4>
                    <input type = "text" class="form" placeholder = "Ex : Purwokerto">
                </div>
                <div class = "row right-50">
                    <h4>Kabupaten</h4>
                    <input type = "text" class="form" placeholder = "Ex : Banyumas">
                </div>
            </div>
            <div class = "flex">
                <div class = "row right-60">
                    <h4>Provinsi</h4>
                    <input type = "text" class="form" placeholder = "Ex : Jawa Tengah">
                </div>
                <div class = "row right-50">
                    <h4>Kode Pos</h4>
                    <input type = "text" class="form" placeholder = "Ex : 15363">
                </div>
            </div>
            <div class = "flex">
                <div class = "row right-60">
                    <h4>Alamat</h4>
                    <textarea class ="form-area" id="" cols="30" rows="10" placeholder = "Ex : Jl. Khayangan No 10B RT 04 / RW 03"></textarea>
                </div>
                <div class = "row right-50">
                    <h4>Nama Alamat</h4>
                    <input type = "text" class="form" placeholder = "Ex : Rumah">
                </div>
            </div>
            <div class = "flex " style = "margin-left : 200px;">
                <button class="btn-program top-40 right-20" style="background: white;"><p style="color: #996522;">kembali Ke keranjang</p></button>
                <button class="btn-program top-40"><p class="color-white">Lanjut Ke Pembayaran</p></button>
            </div>
        </div>
    </div>

	
</div>

<Footer/>