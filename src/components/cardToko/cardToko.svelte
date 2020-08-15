<script>
    export let productImage, productName, productPrice, starCount
</script>

<div class="card-toko">
    <a href="/toko/detail">
        <img class="flex-12 flex-md-12" src={productImage} alt="toko">
    </a>
    <div class="textOnCard-toko">
        <h6>{productName}</h6>
        <hr class="hr-card">
        <div class="bottom-card">
            <span class="harga" >Rp. {productPrice}</span>

            <div class="star">
                <span><img src="https://res.cloudinary.com/sarjanalidi/image/upload/v1597418686/desaku/icon/star_zba1cn.svg" alt="star" srcset=""></span>
                <span>{starCount}</span>
            </div>
        </div>
    </div>
</div>