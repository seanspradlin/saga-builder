<script lang="ts">
	import memberStore from '$lib/stores/member';
	import { page } from '$app/stores';

	const member = memberStore($page.params.id, $page.params.characterId);
</script>

{#if !$member}
	<p>Loading...</p>
{:else}
	<div class="overflow-x-auto my-8">
		<h2 class="text-lg">Required Abilities</h2>
		{#if !$member.requiredAbilities.length}
			<p>Select a role to see abilities necessary to learn.</p>
		{:else}
			<table class="table">
				<thead>
					<tr>
						<th>Learned</th>
						<th>Type</th>
						<th>Ability</th>
						<th>Description</th>
						<th>Target</th>
						<th>Attributes</th>
						<th>Ranged</th>
						<th>Conditionals</th>
						<th>Effect</th>
						<th>Skills</th>
					</tr>
				</thead>
				<tbody>
					{#each $member.requiredAbilities as ability (ability.id)}
						<tr>
							<td
								><input
									type="checkbox"
									value={ability.id}
									bind:group={$member.learnedAbilityIds}
								/></td
							>
							<td>{ability.type}</td>
							<td>{ability.name}</td>
							<td>{ability.description}</td>
							<td>{ability.target}</td>
							<td>{ability.attributes.join(', ')}</td>
							<td>{ability.ranged ? 'Yes' : 'No'}</td>
							<td>{ability.conditionals.join(', ')}</td>
							<td>{ability.effect}</td>
							<td>{ability.skills.join(', ')}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
{/if}
