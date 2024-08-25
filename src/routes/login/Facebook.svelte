<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFacebook } from '@fortawesome/free-brands-svg-icons';
	import { loginWithFacebook } from '$lib/auth';
	import { goto } from '$app/navigation';
	async function login() {
		await loginWithFacebook();
		goto('/');
	}
</script>

<button type="button" on:click={login}>
	<Fa icon={faFacebook} size="2x" />
</button>
