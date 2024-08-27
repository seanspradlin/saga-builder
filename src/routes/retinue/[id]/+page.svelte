<script lang="ts">
	import retinueStore from '$lib/stores/retinue';
	import { page } from '$app/stores';
	import { getCharacterInfo } from '$lib/character-build';

	const retinue = retinueStore($page.params.id);
</script>

{#if !$retinue}
	<p>Loading...</p>
{:else}
	<h1 class="text-2xl">{$retinue.name}</h1>
	{#if Object.keys($retinue.members).length === 0}
		<p class="my-8">This retinue has no members yet.</p>
	{:else}
		<div class="overflow-x-auto my-8">
			<table class="table table-zebra">
				<thead>
					<tr>
						<th>Name</th>
						<th>Roles</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each Object.values($retinue.members).map( (m) => getCharacterInfo(m.id, m.roles, m.abilities) ) as member (member.character.id)}
						<tr>
							<td>{member.character.name}</td>
							<td>
								<div class="flex flex-row gap-1 flex-wrap">
									{#each member.roles.sort((a, b) => {
										return a.role.role > b.role.role ? 1 : -1;
									}) as role (role.role.id)}
										<div
											class="badge badge-outline {role.unlocked ? 'badge-success' : 'badge-error'}"
										>
											{role.role.role}
										</div>
									{/each}
								</div>
							</td>
							<td>
								<div class="flex flex-row gap-2">
									<a
										href="/retinue/{$page.params.id}/character/{member.character.id}"
										class="btn btn-outline btn-sm">Edit</a
									>
									<button type="button" class="btn btn-sm btn-error">Delete</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
	<a href="/retinue/{$page.params.id}/character/new" class="btn btn-outline">Add a Member</a>
{/if}
