<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Menu from './Menu.svelte';

	let menuState = {
		first: false,
		second: false,
		third: false
	};
	let setDisable = false;

	$: console.log(menuState);

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

<header class="flex justify-between items-center pt-10 z-20 w-11/12 md:w-3/4 mx-auto">
	<h1 class="font-semibold text-xl">
		<a href="/"> HAMBRG. </a>
	</h1>
	<button
		disabled={setDisable}
		class="text-lg overflow-hidden"
		on:click={() => {
			setDisable = true;
			setTimeout(() => {
				setDisable = false;
			}, 1000);

			if (menuState.first === false) {
				menuState.first = true; // wich mean its open
			} else if (menuState.second === false) {
				console.log('oui ici');

				menuState.second = true; // wich mean its closed
				setTimeout(() => {
					menuState.third = !menuState.third;
					menuState.first = false;
					menuState.second = false;
				}, 900);
			}
		}}
		>{#each 'Menu' as letter}
			<span class="inline-block opacity-0 -translate-y-4">
				{letter}
			</span>
		{/each}
	</button>
</header>

{#key menuState.third}
	<Menu {menuState} />
{/key}
