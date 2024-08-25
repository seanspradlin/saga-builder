<script lang="ts">
	import RoleSelection from './RoleSelection.svelte';
	import AbilitiesTable from './AbilitiesTable.svelte';
	import retinueStore from '$lib/stores/retinue';
	import { page } from '$app/stores';
	import { getCharacterInfo, type CharacterInfo } from '$lib/character-build';
	import { updateMember } from '$lib/firestore';

	const retinue = retinueStore($page.params.id);
	let member: CharacterInfo;
	let selectedRoles: string[];
	let learnedAbilities: string[];
	$: {
		if ($retinue) {
			member = getCharacterInfo(
				$retinue.members[$page.params.characterId].id,
				$retinue.members[$page.params.characterId].roles,
				$retinue.members[$page.params.characterId].abilities
			);
			if (!selectedRoles) {
				selectedRoles = $retinue.members[$page.params.characterId].roles || [];
			}
			if (!learnedAbilities) {
				learnedAbilities = $retinue.members[$page.params.characterId].abilities || [];
			}
		}
	}

	async function handleSubmit() {
		await updateMember($page.params.id, {
			characterId: $page.params.characterId,
			roles: selectedRoles,
			abilities: learnedAbilities
		});
	}
</script>

{#if !$retinue}
	<p>Loading...</p>
{:else}
	<form on:submit={handleSubmit}>
		<div class="flex flex-row justify-between items-center">
			<h1 class="text-2xl">{member.character.name}</h1>
			<div class="flex flex-row gap-1 items-center">
				<a href="/retinue/{$page.params.id}" class="btn btn-outline btn-sm">Back</a>
				<button type="submit" class="btn btn-outline btn-sm">Save</button>
			</div>
		</div>
		<AbilitiesTable {selectedRoles} bind:learnedAbilities />
		<RoleSelection bind:selectedRoles />
	</form>
{/if}
