<script lang="ts">
	import { abilities } from '$lib/data/abilities';
	import { glimmers } from '$lib/data/glimmers';
	export let abilityId: string;
	let glimmer;
	$: glimmer = glimmers[abilityId];
</script>

{#if glimmer}
	<table class="table table-xs w-full">
		{#each Object.keys(glimmer) as key (key)}
			{#if key !== 'type' && glimmer[key].length}
				<tr>
					<td class="capitalize font-bold">{key}</td>
					<td>
						{glimmer[key]
							.map((id) => {
								const a = abilities[id];
								if (!a) {
									console.error('No ability found for ', id);
									return '';
								}
								return a.name;
							})
							.join(', ')}
					</td>
				</tr>
			{/if}
		{/each}
	</table>
{/if}
