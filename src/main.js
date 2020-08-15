// main.js
import App from './App.svelte';
// import dataToko from '../../data/toko'

const app = new App({
    target: document.body,
    hydrate: true,
    isLogin: false,
    // dataToko: dataToko
});

export default app;