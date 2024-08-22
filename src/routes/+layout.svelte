<script>
	import 'tailwindcss/tailwind.css';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="container mx-auto p-4">
	<Header />
	<slot />
</main>
