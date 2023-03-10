<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Menu from './Menu.svelte';
	import { menuState } from '../../store';

	let setDisable = false;

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

	function resetState(duration: number) {
		$menuState.second = true; // wich mean its closed
		setTimeout(() => {
			$menuState.third = !$menuState.third;
			$menuState.first = false;
			$menuState.second = false;
		}, duration);
	}
</script>

<header class="flex justify-between items-center pt-10 z-20 w-11/12 md:w-3/4 mx-auto">
	<h1 class="font-semibold text-xl">
		<a href="/" on:click={() => resetState(900)}> HAMBRG. </a>
	</h1>
	<button
		disabled={setDisable}
		class="text-lg overflow-hidden"
		on:click={() => {
			// Disable button after click
			setDisable = true;
			setTimeout(() => {
				setDisable = false;
			}, 1000);

			// Manage menu state
			if ($menuState.first === false) {
				$menuState.first = true; // wich mean its open
			} else if ($menuState.second === false) {
				resetState(900);
			}
		}}
		>{#each 'Menu' as letter}
			<span class="inline-block opacity-0 -translate-y-4">
				{letter}
			</span>
		{/each}
	</button>
</header>

{#key $menuState.third}
	<Menu />
{/key}
