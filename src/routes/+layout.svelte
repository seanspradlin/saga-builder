<script>
	import 'tailwindcss/tailwind.css';
</script>

<div class="min-h-screen bg-base-100 flex flex-col">
	<main class="container mx-auto h-full bg-base-200 text-base-content-200 p-8 flex-grow">
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
