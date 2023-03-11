<script lang="ts">
	import { gsap } from 'gsap';
	import { menuState } from '../../store';

	let menu1: any;
	let menu2: any;

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

		gsap.to('.stylePromise', {
			opacity: 1,
			delay: 0.5,
			duration: 2
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
		class="h-full w-[100%] bg-[#cd2d22] -translate-y-72 rotate-6 flex justify-center items-center flex-col"
		bind:this={menu2}
	>
		<div class="w-[calc(91.666667%_-_100px)] md:w-[calc(75%_-_100px)] relative top-40">
			<div class="text-gray-100 flex justify-between items-center">
				<ul class="font-bold text-9xl">
					<li>
						<a href="/opportunities" on:click={menuNavigation}>Opportunities</a>
					</li>
					<li><a href="/solutions" on:click={menuNavigation}>Solutions</a></li>
					<li><a href="/contact" on:click={menuNavigation}>Contact us</a></li>
				</ul>
				<div class="w-[350px] stylePromise opacity-0">
					<p class="font-bold pb-4 text-xl">Our Promise</p>
					<p>
						The passage experienced a surge in popularity during the 1960s when Letraset used it on
						their dry-transfer sheets, and again during the 90s as desktop publishers bundled the
						text with their software.
					</p>
				</div>
			</div>
			<div class="flex justify-between items-center w-[800px] text-gray-100 mt-40 styleLocations">
				<span class="text-xl styleLocations">Locations:</span>
				<span class="styleSpan">Dallas</span>
				<span class="styleSpan">Austin</span>
				<span class="styleSpan">New York</span>
				<span class="styleSpan">San Francisco</span>
				<span class="styleSpan">Beijing</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	ul > li {
		line-height: 160px;
		overflow: hidden;
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
	}
	a {
		@apply inline-block hover:text-black skew-x-6;
		display: inline-block;
		transform: translateY(100%) rotate(5deg);
	}
	.styleSpan {
		@apply cursor-pointer px-2 py-2 overflow-hidden rounded-md;
	}
	.styleSpan::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		border-radius: 50%;
		transform: scale(0);
		transition-duration: 0.5s;
		z-index: -10;
	}

	.styleSpan:hover::before {
		transform: scale(2);
	}
	.styleLocations {
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
	}
	.stylePromise {
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
	}
</style>
