<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';
	import { loginWithGoogle } from '$lib/auth';
	import { goto } from '$app/navigation';
	async function login() {
		await loginWithGoogle();
		goto('/');
	}
</script>

<button type="button" on:click={login}>
	<Fa icon={faGoogle} size="2x" />
</button>
