<script>
    export let pembelajaranImage, pembelajaranName, pembelajaranDesa
</script>

 <div class="card card-pembelajaran">
    <a href="pembelajaran/online/detail">
        <img class="" src={pembelajaranImage} alt="pembelajaran">
    </a>
    <div class="textOnCard">
        <h5>{pembelajaranName}</h5>
        <span><img class="top-10" src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418702/desaku/icon/home_icon_desa_ir3qth.svg" alt="home icon"></span>
        <span class="title-desa">{pembelajaranDesa}</span>
    </div>
</div>