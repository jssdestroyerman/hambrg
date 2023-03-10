<script lang="ts">
	import { gsap } from 'gsap';
	import { menuState } from '../../store';

	console.log($menuState);

	let menu1: any;
	let menu2: any;
	let locations: any;

	function openMenu() {
		gsap.to(menu1, {
			y: 0,
			rotate: 0,
			duration: 0.7
		});

		gsap.to(menu2, {
			y: 0,
			rotate: 0,
			delay: 0.05,
			duration: 0.7
		});

		gsap.to('li > a', {
			stagger: 0.2,
			y: 0,
			delay: 0.5,
			rotate: 0
		});
		gsap.from('.styleLocations > span', {
			x: -20,
			delay: 0.5,
			stagger: 0.05
		});
	}

	function closeMenu() {
		gsap.to(menu1, {
			y: '-100%',
			duration: 0.9
		});

		gsap.to(menu2, {
			y: '-50%',
			duration: 0.9
		});
	}

	$: if ($menuState.first === true) {
		openMenu();
	}
	$: if ($menuState.second === true) {
		closeMenu();
	}

	function menuNavigation() {
		closeMenu();
		setTimeout(() => {
			$menuState.third = !$menuState.third;
			$menuState.first = false;
			$menuState.second = false;
		}, 900);
	}
</script>

<div
	class="absolute top-[-210px] left-[-100px] right-[-100px] bottom-0 bg-[#191919] z-10 translate-y-[-100%] rotate-12 overflow-hidden"
	bind:this={menu1}
>
	<div
		class="h-full w-[110%] bg-[#cd2d22] flex justify-center items-center -translate-y-72 rotate-6"
		bind:this={menu2}
	>
		<div class="w-[calc(91.666667%_-_100px)] md:w-[calc(75%_-_100px)]">
			<div class="text-gray-100 flex justify-between items-center">
				<ul class="font-bold text-7xl">
					<li>
						<a href="/opportunities" on:click={menuNavigation}>opportunities</a>
					</li>
					<li><a href="/solutions" on:click={menuNavigation}>Solutions</a></li>
					<li><a href="/contact" on:click={menuNavigation}>Contact us</a></li>
				</ul>
				<div class="w-[350px]">
					<p class="font-bold pb-4 text-xl">Our Promise</p>
					<p>
						The passage experienced a surge in popularity during the 1960s when Letraset used it on
						their dry-transfer sheets, and again during the 90s as desktop publishers bundled the
						text with their software.
					</p>
				</div>
			</div>
			<div class="flex justify-between items-center w-[600px] text-gray-100 mt-10 styleLocations">
				<span>Locations:</span>
				<span>Dallas</span>
				<span>Austin</span>
				<span>New York</span>
				<span>San Francisco</span>
				<span>Beijing</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	ul > li {
		line-height: 110px;
		overflow: hidden;
	}
	a {
		@apply hover:text-gray-300;
		display: inline-block;
		transform: translateY(100px) rotate(5deg);
	}
</style>
