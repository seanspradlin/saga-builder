<script lang="ts">
	import RoleGroup from './RoleGroup.svelte';
	import { learnableRoles, Role } from '$lib/data/roles';
	const roles = learnableRoles.map((e) => new Role(e.id));
	export let selectedRoles: string[];
</script>

<fieldset class="flex flex-col gap-4">
	<legend class="text-lg">Desired Roles</legend>
	<RoleGroup roles={roles.filter((r) => r.type === 'attack')} bind:selectedRoles>
		Attack Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'resistance')} bind:selectedRoles>
		Resistance Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'positioning')} bind:selectedRoles>
		Positioning Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'accuracy')} bind:selectedRoles>
		Accuracy Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'bpBoosting')} bind:selectedRoles>
		BP Boosting Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'shield')} bind:selectedRoles>
		Shield Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'targeting')} bind:selectedRoles>
		Targeting Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'ailmentResistance')} bind:selectedRoles>
		Ailment Resistance Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'delay')} bind:selectedRoles
		>Delay Roles</RoleGroup
	>
	<RoleGroup roles={roles.filter((r) => r.type === 'statusBoosting')} bind:selectedRoles>
		Status Boosting Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'attributeBoosting')} bind:selectedRoles>
		Attribute Boosting Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'benison')} bind:selectedRoles>
		Benison Roles
	</RoleGroup>
	<RoleGroup roles={roles.filter((r) => r.type === 'misc')} bind:selectedRoles>Misc Roles</RoleGroup
	>
</fieldset>
