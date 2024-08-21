<script lang="ts">
	import { getAbilities, type AbilityData } from '$lib/character-build';
	export let selectedRoles: string[] = [];

	let abilities: AbilityData[] = [];
	export let learnedAbilities: string[];
	$: abilities = getAbilities(selectedRoles, learnedAbilities);
</script>

<div class="overflow-x-auto my-8">
	<h2 class="text-lg">Required Abilities</h2>
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
			{#each abilities
				.filter((a) => a.required)
				.sort((a, b) => {
					if (a.ability.type > b.ability.type) {
						return 1;
					}
					if (a.ability.type < b.ability.type) {
						return -1;
					}
					return a.ability.name > b.ability.name ? 1 : -1;
				}) as ability (ability.ability.id)}
				<tr>
					<td><input type="checkbox" value={ability.ability.id} bind:group={learnedAbilities} /></td
					>
					<td>{ability.ability.type}</td>
					<td>{ability.ability.name}</td>
					<td>{ability.ability.type !== 'incantation' && ability.ability.description}</td>
					<td>{ability.ability.target}</td>
					<td>{ability.ability.attributes.join(', ')}</td>
					<td>{ability.ability.type !== 'incantation' && ability.ability.ranged ? 'Yes' : 'No'}</td>
					<td
						>{ability.ability.type !== 'incantation' && ability.ability.conditionals.join(', ')}</td
					>
					<td>{ability.ability.effect}</td>
					<td>{ability.ability.skill.join(', ')}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
