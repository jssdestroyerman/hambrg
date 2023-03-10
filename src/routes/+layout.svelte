<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="app flex justify-center flex-col items-center h-[100vh]">
	<Header />
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap');

	.app {
		font-family: 'Poppins';
	}
</style>
