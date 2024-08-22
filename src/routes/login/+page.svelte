<script lang="ts">
	import { goto } from '$app/navigation';
	let email: string;
	let password: string;
	let errorMessage: string;

	import { signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { FirebaseError } from 'firebase/app';
	import Google from './Google.svelte';

	async function login() {
		if (email && password) {
			try {
				await signInWithEmailAndPassword(auth, email, password);
				goto('/');
			} catch (error) {
				if (error instanceof FirebaseError) {
					switch (error.code) {
						case AuthErrorCodes.INVALID_EMAIL:
							errorMessage = 'Invalid email';
							break;
						case AuthErrorCodes.USER_DELETED:
							errorMessage = 'Incorrect password';
							break;
						case AuthErrorCodes.INVALID_PASSWORD:
							errorMessage = 'Incorrect password';
							break;
					}
					console.log(error.code);
				}
			}
		}
	}
</script>

<Google />
<form on:submit|preventDefault={login}>
	<div class="form-control w-full max-w-md">
		<label class="label label-text" for="email">Email</label>
		<input
			class="input input-bordered"
			placeholder="lunch.eater@Example.com"
			type="text"
			bind:value={email}
			id="email"
		/>
	</div>
	<div class="form-control w-full max-w-md">
		<label class="label label-text" for="password">Password</label>
		<input class="input input-bordered" type="password" id="password" bind:value={password} />
	</div>
	<button type="submit" class="btn btn-primary my-4">Login</button>
	{#if errorMessage}
		{errorMessage}
	{/if}
</form>
