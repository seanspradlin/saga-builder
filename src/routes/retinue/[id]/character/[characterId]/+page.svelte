<script lang="ts">
	import RoleSelection from '../RoleSelection.svelte';
	import AbilitiesTable from '../AbilitiesTable.svelte';
	import memberStore from '$lib/stores/member';
	import { page } from '$app/stores';
	import { updateMember } from '$lib/firestore';

	const member = memberStore($page.params.id, $page.params.characterId);
	member.subscribe((value) => {
		if (value) {
			selectedRoles = [...value.learnableRoleIds];
			learnedAbilities = [...value.learnedAbilityIds];
		}
	});

	let selectedRoles: string[] = [];
	let learnedAbilities: string[] = [];

	async function handleSubmit() {
		const props = {
			characterId: $page.params.characterId,
			roles: selectedRoles,
			abilities: learnedAbilities
		};
		await updateMember($page.params.id, props);
	}
</script>

{#if !$member}
	<p>Loading...</p>
{:else}
	<form on:submit={handleSubmit} class="flex flex-col gap-4">
		<div class="flex flex-row justify-between items-center">
			<h2 class="text-2xl font-bold">{$member.name}</h2>
			<div class="flex flex-row gap-1 items-center">
				<a href="/retinue/{$page.params.id}" class="btn btn-outline btn-sm">Back</a>
				<button type="submit" class="btn btn-outline btn-sm">Save</button>
			</div>
		</div>
		<hr />
		<div class="flex flex-col-reverse lg:flex-row w-full">
			<RoleSelection bind:selectedRoles />
			<div class="divider divider-vertical lg:divider-horizontal" />
			<AbilitiesTable />
		</div>
	</form>
{/if}
