<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { addMemberToRetinue } from '$lib/firestore';
	import { characters } from '$lib/data/characters';
	import { getAbilities, type AbilityData } from '$lib/character-build';
	import AbilitiesTable from '../AbilitiesTable.svelte';
	import RoleSelection from '../RoleSelection.svelte';

	async function handleSubmit() {
		await addMemberToRetinue($page.params.id, {
			characterId: character,
			roles: selectedRoles,
			abilities: learnedAbilities
		});
		goto(`/retinue/${$page.params.id}`);
	}
	let character = '';
	let selectedRoles: string[] = [];
	let abilities: AbilityData[] = [];
	let learnedAbilities: string[] = [];
	$: abilities = getAbilities(selectedRoles);
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
		<AbilitiesTable {selectedRoles} bind:learnedAbilities />
		<RoleSelection bind:selectedRoles />
	</form>
</div>
