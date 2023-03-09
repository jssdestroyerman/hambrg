<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Menu from './Menu.svelte';

	let open = false;

	onMount(() => {
		gsap.from('header', {
			y: -200,
			duration: 0.7
		});

		gsap.from('header > nav', {
			y: -200,
			delay: 0.3
		});

		gsap.to('button > span', {
			opacity: 1,
			stagger: 0.1,
			delay: 0.3,
			y: 0
		});
	});
</script>

<header class="flex justify-between items-center pt-10 z-20">
	<h1 class="font-semibold text-xl">
		<a href="/"> HAMBRG. </a>
	</h1>
	<button class="text-lg overflow-hidden" on:click={() => (open = !open)}
		>{#each 'Menu' as letter}
			<span class="inline-block opacity-0 -translate-y-4">
				{letter}
			</span>
		{/each}
	</button>
</header>

{#if open}
	<Menu />
{/if}
