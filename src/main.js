// main.js
import App from './App.svelte';

const app = new App({
    target: document.body,
    hydrate: true,
    isLogin: false
});

export default app;