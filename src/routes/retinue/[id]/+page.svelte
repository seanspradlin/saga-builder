<script lang="ts">
	import retinueStore from '$lib/stores/retinue';
	import { page } from '$app/stores';
	import { getCharacterInfo } from '$lib/character-build';
	import CharacterDetails from './CharacterDetails.svelte';

	const retinue = retinueStore($page.params.id);
</script>

{#if !$retinue}
	<p>Loading...</p>
{:else}
	<h2 class="text-2xl">{$retinue.name}</h2>
	{#if Object.keys($retinue.members).length === 0}
		<p class="my-8">This retinue has no members yet.</p>
	{:else}
		<div class="flex flex-col gap-16">
			{#each Object.values($retinue.members).map( (m) => getCharacterInfo(m.id, m.roles, m.abilities) ) as character (character.id)}
				<CharacterDetails {character} />
			{/each}
		</div>
	{/if}
	<a href="/retinue/{$page.params.id}/character/new" class="btn btn-outline">Add a Member</a>
{/if}
