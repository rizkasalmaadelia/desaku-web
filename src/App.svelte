<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/beranda";
  import DetailPembelajaranOnline from "./pages/detailPembelajaranOnline";
  import DetailVideo from "./pages/detailVideo";
  import PembelajaranOnline from "./pages/pembelajaranOnline";  
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router url="{url}">
  <div>
    <Route path="pembelajaran/online/detail" component="{DetailPembelajaranOnline}" /> 
    <Route path="pembelajaran/online/detail/video" component="{DetailVideo}" /> 
    <Route path="pembelajaran/online" component="{PembelajaranOnline}" /> 
    <Route path="/"><Home /></Route>
  </div>
</Router>