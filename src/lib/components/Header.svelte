<script lang="ts">
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/auth';
	import { user, isLoading } from '$lib/stores/auth';

	const logout = async () => signOut(auth);
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a href="/" class="text-xl">SaGa Tools</a>
	</div>
	{#if $isLoading}
		<div class="navbar-end">
			<span class="loading loading-dots"></span>
		</div>
	{:else if $user && $user.isAnonymous}
		<div class="navbar-end">
			<div class="dropdown dropdown-bottom dropdown-end">
				<button tabindex="0" class="btn btn-ghost md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</button>
				<ul class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					<li>
						<a href="/login" class="btn btn-ghost">Login</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-end hidden md:flex">
			<a href="/login" class="btn btn-ghost">Login</a>
		</div>
	{:else}
		<div class="navbar-end">
			<button type="button" class="btn btn-ghost" on:click={logout}>Logout</button>
		</div>
	{/if}
</div>
