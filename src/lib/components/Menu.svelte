<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let open: any;

	onMount(() => {
		gsap.to('.styleMenu1', {
			y: 0,
			rotate: 0,
			duration: 0.7
		});

		gsap.to('.styleMenu2', {
			y: 0,
			rotate: 0,
			delay: 0.05,
			duration: 0.9
		});
	});
</script>

<div
	class="absolute top-0 left-[-50px] right-[-50px] bottom-0 bg-[#191919] z-10 -translate-y-[100%] rotate-12 styleMenu1 overflow-hidden"
>
	<div
		class="absolute top-[-50px] bottom-0 right-[-100px] left-0 bg-[#cd2d22] flex justify-center items-center -translate-y-20 rotate-12 styleMenu2"
	>
		<div class="w-[calc(91.666667%_-_50px)] md:w-[calc(75%_-_50px)]">
			<div class="text-gray-100 flex justify-between items-center">
				<ul class="font-bold text-7xl">
					<li><a href="/opportunities">Opportunities</a></li>
					<li><a href="/solutions">Solutions</a></li>
					<li><a href="/contact">Contact us</a></li>
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
			<div class="flex justify-between items-center w-[600px] text-gray-100 mt-10">
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

<style>
	ul > li {
		line-height: 110px;
	}
</style>
