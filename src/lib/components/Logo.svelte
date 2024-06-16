<script>
	import imgLogo from '$lib/assets/logo.svg';

	let clazz = '';
	export { clazz as class };
</script>

<div class="flex flex-row items-center {clazz}">
	<img src={imgLogo} alt="logo" class="w-[3em] p-1" />
	<p class="">
		<span class="font-gluten text-[1.1667em]">R</span><span class="font-gluten text-[1em]"
			>ainbow</span
		><span class="font-roboto-slab font-light text-[1em]">Byte</span>
	</p>
</div>
