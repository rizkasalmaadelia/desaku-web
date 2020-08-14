<script>
    import { Router, Route, Link } from "svelte-routing";
	import { onMount } from "svelte";
    export let logo = "https://res.cloudinary.com/sarjanalidi/image/upload/v1595839759/virtual-tour/logo_al7gqv.png";
	let data = [
		{
			"id": 1,
			"password": "LabbaikVT"
		}
	]

	let query = "";
	let message = "";
	let isLogin;
	let isSuccess;

    const doPost = () => {
		data.map(values => {
			if(values.password === query) {
				window.location.href = "/video";
				isLogin = true;
				isSuccess = true;
				window.localStorage.setItem('isLogin', true)
			} else {
				window.location.href = "#";
				message = "Maaf Password Salah"
				isSuccess = false;
			}
		})
	}

	let key;
	let keyCode;

	const doEnter = (event) => {
		document.onkeypress = function (event) {
			if(event.keyCode == '13') {
				doPost()
			}
		}
	}
</script>

<main>
	<div class="login__box">
		<img src={logo} alt="logo labbaik">
		<h3 class="mt-20">Silahkan masukan password untuk dapat mengakses video</h3>

		<input class="mt-50" type="password" placeholder="masukan password" bind:value={query} on:keydown={e => doEnter()}>
		<br>
		<button on:click={e => doPost()} class="mt-20">Masuk</button>
		{#if isSuccess === false}
		<div class="alert mt-50">
			<p>{message}</p>		
		</div>
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login__box {
		margin-top: 5%;
		background: white;
		width: 25%;
		height: 400px;
		text-align: center;
		padding: 40px;
	}

	@media all and (max-width:1198px) {
		.login__box {
			padding: 20px;
			height: 100vh;
		}
	}
	@media all and (max-width:575px) {
		.login__box {
			margin: 0;
			width: 100%;
			height: 100vh;
		}
	}
</style>