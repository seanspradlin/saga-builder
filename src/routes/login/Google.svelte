<script lang="ts">
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { goto } from '$app/navigation';
	const provider = new GoogleAuthProvider();
	async function login() {
		return signInWithPopup(auth, provider)
			.then(() => {
				goto('/');
			})
			.catch(console.error);
	}
</script>

<button type="button" on:click={login} class="btn">Login with Google</button>
