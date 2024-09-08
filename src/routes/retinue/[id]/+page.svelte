<script lang="ts">
	import retinueStore from '$lib/stores/retinue';
	import { page } from '$app/stores';
	import membersStore from '$lib/stores/members';

	const retinue = retinueStore($page.params.id);
	const members = membersStore($page.params.id);
</script>

{#if !$retinue}
	<p>Loading...</p>
{:else}
	<h2 class="text-2xl">{$retinue.name}</h2>
	{#if Object.keys(members).length === 0}
		<p class="my-8">This retinue has no members yet.</p>
	{:else}
		<div class="flex flex-col gap-16">
			{#each $members as member (member.id)}
				<a href="/retinue/{$page.params.id}/character/{member.id}" class="font-bold text-xl"
					>{member.name}</a
				>
			{/each}
		</div>
	{/if}
	<a href="/retinue/{$page.params.id}/character/new" class="btn btn-outline">Add a Member</a>
{/if}
