<script lang="ts">
	import LoginForm from './LoginForm.svelte';
	import Fa from 'svelte-fa';
	import { faGoogle, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
	import Google from './Google.svelte';
	import Twitter from './Twitter.svelte';
	import Facebook from './Facebook.svelte';
</script>

<div class="hero">
	<div class="hero-content flex-col lg:flex-row-reverse lg:gap-16">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login</h1>
			<p class="py-6 text-lg">
				Creating an account allows you to access your saved builds and share them with members of
				the community.
			</p>
		</div>
		<div class="card card-bordered mx-auto bg-base-300 w-full max-w-screen-sm shadow-lg">
			<div class="card-body">
				<LoginForm />
				<div class="divider my-8">OR</div>
				<div class="flex flex-row gap-8 justify-center">
					<Google />
					<Twitter />
					<Facebook />
				</div>
				<div class="flex flex-col items-center mt-8">
					<a href="/register" class="underline font-bold">Register for an account</a>
				</div>
			</div>
		</div>
	</div>
</div>
