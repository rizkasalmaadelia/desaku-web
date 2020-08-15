<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/beranda";
  import DetailPembelajaranOnline from "./pages/detailPembelajaranOnline";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router url="{url}">
 <nav>
    <!-- <Link to="/">Home</Link>
    <Link to="video">About</Link> -->
  </nav>
  <div>
    <Route path="pembelajaran/online/detail" component="{DetailPembelajaranOnline}" /> 
    <!--for now the router just support case sensitive,
        one workaround colud be add two time the route
        Example.
       <Route path="About" component="{About}" /> 
    -->
    <Route path="/"><Home /></Route>
  </div>
</Router>