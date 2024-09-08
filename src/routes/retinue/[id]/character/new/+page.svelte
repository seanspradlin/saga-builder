<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { firestore } from '$lib/firestore';
	import { characters } from '$lib/data/characters';
	import RoleSelection from '../RoleSelection.svelte';
	import { doc, setDoc } from 'firebase/firestore';
	import { user } from '$lib/stores/auth';

	async function handleSubmit() {
		if ($user) {
			await setDoc(doc(firestore, 'retinues', $page.params.id, 'members', character), {
				roles: selectedRoles,
				abilities: [],
				owner: $user.uid
			});
			goto(`/retinue/${$page.params.id}`);
		}
	}
	let character = '';
	let selectedRoles: string[] = [];
</script>

<div class="flex w-full flex-col border-opacity-50">
	<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
		<div class="flex flex-row justify-between items-center">
			<h2 class="text-xl font-bold">Add member to retinue</h2>
			<div class="flex flex-row gap-1 items-center">
				<a href="/retinue/{$page.params.id}" class="btn btn-outline btn-sm">Back</a>
				<button type="submit" class="btn btn-outline btn-sm">Save</button>
			</div>
		</div>
		<hr />
		<label for="character" class="form-control max-w-sm">
			<div class="label">
				<span class="label-text">Character</span>
			</div>
			<select bind:value={character} name="character" id="character" class="select select-bordered">
				<option disabled selected>Select a Character</option>
				{#each characters as characterOption (characterOption.id)}
					<option value={characterOption.id}>{characterOption.name}</option>
				{/each}
			</select>
		</label>
		<RoleSelection bind:selectedRoles />
	</form>
</div>
