<script>
    export let pembelajaranImage, pembelajaranDate, pembelajaranDesa, pembelajaranKab, pembelajaranPrice, pembelajaranName, pembelajaranDesc
</script>

 <div class="flex top-40">
   <div class="flex-4 card-offline">
        <img src={pembelajaranImage} alt="">
    </div>
                    
    <div class="flex-3 text-offline-2">
        <h5 class="inline" style="color: #29291e !important">{pembelajaranDate}</h5>
        <p class="desa color-main top-10 inline">{pembelajaranDesa}</p>
        <p class="desa color-main inline">{pembelajaranKab}</p>
        <p class="desa color-red top-10 inline">Rp. {pembelajaranPrice}</p>
    </div>
                   
    <div class="flex-5 right text-offline">
        <h5 class="title-off" style="color: #29291e !important">{pembelajaranName}</h5>
        <p class="top-10">{pembelajaranDesc}</p>
        <p class="top-40 color-main"><a class="color-main" href="/pembelajaran/offline/detail">Lihat Selengkapnya</a></p>
    </div>
</div>
<hr class="full top-30">  