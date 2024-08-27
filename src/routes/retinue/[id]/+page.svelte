<script lang="ts">
	import retinueStore from '$lib/stores/retinue';
	import { page } from '$app/stores';
	import { getCharacterInfo } from '$lib/character-build';
	import RoleBadge from './RoleBadge.svelte';
	import AbilityChart from './AbilityChart.svelte';

	let selectedMember: string;
	const retinue = retinueStore($page.params.id);
</script>

{#if !$retinue}
	<p>Loading...</p>
{:else}
	<h2 class="text-2xl">{$retinue.name}</h2>
	{#if Object.keys($retinue.members).length === 0}
		<p class="my-8">This retinue has no members yet.</p>
	{:else}
		<div class="overflow-x-auto my-8">
			{#each Object.values($retinue.members).map( (m) => getCharacterInfo(m.id, m.roles, m.abilities) ) as member (member.character.id)}
				<div class="">
					<div class="text-xl font-medium">
						<div class="flex flex-row flex-wrap gap-1 items-center">
							{member.character.name}
							{#each member.roles.sort((a, b) => {
								return a.role.role > b.role.role ? 1 : -1;
							}) as role (role.role.id)}
								<RoleBadge role={role.role.role} unlocked={role.unlocked} />
							{/each}
						</div>
					</div>
					<table class="table overflow-x-auto table-zebra">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th>Glimmered Chart</th>
							</tr>
						</thead>
						<tbody>
							{#each member.remainingAbilities as ab (ab.id)}
								<tr>
									<td>{ab.name}</td>
									<td class="capitalize">{ab.type}</td>
									<td class="p-0">
										{#if ab.type !== 'incantation'}
											<AbilityChart abilityId={ab.id} />
										{/if}
									</td>
								</tr>{/each}
						</tbody>
					</table>
					<div class="flex flex-row gap-1 items-center">
						<a
							href="/retinue/{$page.params.id}/character/{member.character.id}"
							class="btn btn-outline btn-sm">Edit</a
						>
						<button type="button" class="btn btn-sm btn-error">Delete</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
	<a href="/retinue/{$page.params.id}/character/new" class="btn btn-outline">Add a Member</a>
{/if}
