<script>
	import Header from '../lib/components/Header.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('main > div', {
			opacity: 1,
			delay: 0.5,
			duration: 0.7,
			y: 0
		});
	});
</script>

<main class=" grow flex items-center w-3/4">
	<div class="text-lg opacity-0 translate-y-6 w-3/4">
		The <strong>HAMBRG</strong>, is a creative, engineer driven, global agency working on advancing
		the software, advertising and design communities to new heights
	</div>
</main>

<style lang="postcss">
	/* colors $red: #cd2d22; $black: #191919; */
</style>
