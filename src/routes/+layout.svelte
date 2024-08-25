<script>
	import 'tailwindcss/tailwind.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="min-h-screen bg-base text-base flex flex-col">
	<Header />
	<main class="container mx-auto h-full p-8 flex-grow">
		<slot />
	</main>
	<footer class="footer footer-center bg-neutral text-neutral-content p-4">
		<div class="flex flex-row gap-8">
			<a href="https://github.com/seanspradlin/saga-builder">Contribute</a>
			<a href="/sources">Sources</a>
			<a href="/contact">Contact</a>
			<a href="/license">License</a>
		</div>
	</footer>
</div>
