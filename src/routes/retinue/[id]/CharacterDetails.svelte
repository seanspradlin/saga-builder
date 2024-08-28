<script lang="ts">
	import RoleBadge from './RoleBadge.svelte';
	import { page } from '$app/stores';
	import type { CharacterInfo } from '$lib/character-build';
	import Fa from 'svelte-fa';
	import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
	export let character: CharacterInfo;
</script>

<div class="grid grid-cols-4 gap-4">
	<div class="grid grid-cols-subgrid col-span-4 p-2 border-b-2">
		<div class="flex items-center gap-2 col-span-2">
			<a href="/retinue/{$page.params.id}/character/{character.id}" class="font-bold text-xl"
				>{character.name}</a
			>
			<button type="button"><Fa icon={faTrashCan} size="lg" /></button>
		</div>
		<div class="flex flex-row flex-wrap gap-1 items-center justify-self-end col-span-2 rounded">
			{#each character.roles as role (role.id)}
				<RoleBadge role={role.name} unlocked={role.unlocked} />
			{/each}
		</div>
	</div>

	<div class="font-bold">Ability</div>
	<div class="font-bold">Roles</div>
	<div class="font-bold col-span-2">Glimmer Chart</div>

	{#each character.remainingAbilities as ability (ability.id)}
		<div class="font-bold col-start-1">{ability.name}</div>
		<div>
			{ability.roles.map((e) => e.name).join(', ')}
		</div>
		{#if ability.glimmeredFrom.length}
			<div class="grid grid-cols-subgrid col-start-3 col-span-2 bg-base-300 rounded shadow-lg p-2">
				<div class="italic">Weapon Type</div>
				<div class="italic">Name</div>
				{#each ability.glimmeredFrom as chart}
					{#each chart.abilities as ablty (ablty.id)}
						<div class="capitalize">{chart.weaponType}</div>
						<div>{ablty.name}</div>
					{/each}
				{/each}
			</div>
		{/if}
	{/each}
</div>
