<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/beranda";
  import DetailPembelajaranOnline from "./pages/detailPembelajaranOnline";
  import DetailVideo from "./pages/detailVideo";
  import PembelajaranOnline from "./pages/pembelajaranOnline";
  import PembelajaranOnlineVideo from "./pages/listVideoOnline";
  import PembelajaranOffline from "./pages/pembelajaranOffline";
  import PembelajaranOfflineDetail from "./pages/detailPembelajaranOffline";
  import Toko from "./pages/toko";
  import DetailToko from "./pages/detailToko";
  import Pengiriman from "./pages/pengiriman";
  import Program from "./pages/program";
  
  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="pembelajaran/online/detail" component="{DetailPembelajaranOnline}" />
    <Route path="pembelajaran/online/detail/list" component="{PembelajaranOnlineVideo}" />
    <Route path="pembelajaran/online/detail/video" component="{DetailVideo}" />
    <Route path="pembelajaran/online" component="{PembelajaranOnline}" />
    <Route path="pembelajaran/offline" component="{PembelajaranOffline}" />
    <Route path="pembelajaran/offline/detail" component="{PembelajaranOfflineDetail}" />
    <Route path="toko" component="{Toko}" />
    <Route path="toko/detail" component="{DetailToko}" />
    <Route path="order/pengiriman" component="{Pengiriman}" />
    <Route path="program" component="{Program}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>