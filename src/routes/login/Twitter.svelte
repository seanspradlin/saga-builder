<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { loginWithTwitter } from '$lib/auth';
	import { goto } from '$app/navigation';
	async function login() {
		await loginWithTwitter();
		goto('/');
	}
</script>

<button type="button" on:click={login}>
	<Fa icon={faTwitter} size="2x" />
</button>
