<script>
	export let baseUrlVideo = "https://www.youtube.com/embed/Tt8vmNbmVbU?autoplay=1";
	let checkLogin = window.localStorage.getItem('isLogin')
</script>

{#if checkLogin == "true"}
	<iframe 
		title="labbaik video live"
		width="560" 
		height="315" 
		src={baseUrlVideo}
		frameborder="0" 
		allow="accelerometer; 
		autoplay; 
		encrypted-media; 
		gyroscope; 
		picture-in-picture" 
	allowfullscreen>
	</iframe>
{:else}
	<script>
		window.location.href = "/";	
	</script>
{/if}
