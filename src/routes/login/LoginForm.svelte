<script lang="ts">
	import { goto } from '$app/navigation';
	import Fa from 'svelte-fa';
	import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
	import { signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
	import { auth } from '$lib/auth';
	import { FirebaseError } from 'firebase/app';

	let email: string;
	let password: string;
	let errorMessage: string;

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
				}
			}
		}
	}
</script>

<form on:submit|preventDefault={login} class="flex flex-col gap-6">
	<label class="form-control w-full bg-base text-base-content">
		<div class="label"><span class="label-text">Email</span></div>
		<div class="input input-bordered flex items-center gap-2">
			<Fa icon={faUser} />
			<input type="email" bind:value={email} class="grow" />
		</div>
	</label>
	<label class="form-control w-full bg-base text-base-content">
		<div class="label"><span class="label-text">Password</span></div>
		<div class="input input-bordered flex items-center gap-2">
			<Fa icon={faKey} />
			<input type="password" bind:value={password} class="grow" />
		</div>
	</label>
	<button type="submit" class="btn btn-primary btn-block mt-4">Login</button>
</form>
