<script lang="ts">
	import RoleSelection from './RoleSelection.svelte';
	import AbilitiesTable from './AbilitiesTable.svelte';
	import { page } from '$app/stores';
	import { getCharacterInfo } from './getCharacterInfo';

	let abilities: string[] = [];
	let roles: string[] = [];
	let name: string = '';

	let loading = true;
	getCharacterInfo($page.params.id, $page.params.characterId, (data) => {
		loading = false;
		abilities = data.abilities;
		roles = data.roles;
		name = data.name;
	});
	$: console.log(roles);
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	<div class="flex flex-row justify-between items-center mb-4">
		<h2 class="text-2xl font-bold">{name}</h2>
		<a href="/retinue/{$page.params.id}" class="btn btn-outline btn-sm">Back</a>
	</div>
	<hr />
	<div class="flex flex-col-reverse lg:flex-row w-full">
		<RoleSelection bind:selectedRoles={roles} />
		<div class="divider divider-vertical lg:divider-horizontal" />
		<AbilitiesTable />
	</div>
{/if}
