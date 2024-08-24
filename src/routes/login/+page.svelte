<script lang="ts">
	import LoginForm from './LoginForm.svelte';
	import Fa from 'svelte-fa';
	import {
		faGoogle,
		faFacebook,
		faInstagram,
		faTwitch,
		faXTwitter
	} from '@fortawesome/free-brands-svg-icons';
</script>

<div class="card card-bordered mx-auto my-14 bg-base-300 w-full max-w-screen-sm shadow-lg">
	<div class="card-body">
		<h1 class="card-title">Login</h1>
		<LoginForm />
		<div class="divider my-8">OR</div>
		<div class="flex flex-row gap-8 justify-center">
			<Fa icon={faGoogle} size="2x" />
			<Fa icon={faInstagram} size="2x" />
			<Fa icon={faTwitch} size="2x" />
		</div>
		<div class="flex flex-col items-center mt-8">
			<a href="/magic" class="underline font-bold">Login with magic link</a>
			<a href="/register" class="underline font-bold">Register for an account</a>
		</div>
	</div>
</div>
