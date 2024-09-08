<script lang="ts">
	import type { Role } from '$lib/data/roles';

	export let selectedRoles: string[];
	export let roles: Role[];
	let selected = 0;

	$: selected = selectedRoles ? roles.filter((role) => selectedRoles.includes(role.id)).length : 0;
</script>

<div class="collapse collapse-plus border-base-300 border bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title title-xl font-medium">
		<slot />
		{#if selected > 0}
			<div class="badge badge-primary">{selected}</div>
		{/if}
	</div>
	<div class="collapse-content">
		{#each roles as role (role.id)}
			<label class="grid gap-x-2 grid-cols-[min-content_auto]">
				<input type="checkbox" value={role.id} bind:group={selectedRoles} />
				<p class="font-bold">{role.name}</p>
				<p class="col-start-2">{role.description}</p>
			</label>
		{/each}
	</div>
</div>
