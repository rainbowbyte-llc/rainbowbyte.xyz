<script>
	// @ts-ignore
	import Logo from '$lib/components/Logo.svelte';
</script>

<main class="flex justify-center items-center h-screen">
	<Logo class="text-white text-4xl md:text-6xl lg:text-8xl" />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.900);
	}
</style>
