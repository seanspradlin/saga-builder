<script lang="ts">
	import { learnableRoles } from '$lib/data/roles';
	export let selectedRoles: string[];
</script>

<fieldset>
	<legend class="text-lg">Desired Roles</legend>
	<div class="lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 xl:gap-8 lg:justify-between">
		<div class="card w-full shadow xl:row-span-3">
			<div class="card-body">
				<h2 class="card-title">Attack Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'attack') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow xl:row-span-3">
			<div class="card-body">
				<h2 class="card-title">Resistance Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'resistance') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Positioning Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'positioning') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Accuracy Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'accuracy') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">BP Boosting Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'bpBoosting') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Shield Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'shield') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow xl:row-span-2">
			<div class="card-body">
				<h2 class="card-title">Targeting Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'targeting') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow xl:row-span-2">
			<div class="card-body">
				<h2 class="card-title">Ailment Resistance Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'ailmentResistance') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Delay Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'delay') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Status Boosting Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'statusBoosting') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow xl:row-span-2">
			<div class="card-body">
				<h2 class="card-title">Attribute Boosting Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'attributeBoosting') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow xl:row-span-2">
			<div class="card-body">
				<h2 class="card-title">Benison Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'benison') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>

		<div class="card w-full shadow">
			<div class="card-body">
				<h2 class="card-title">Misc Roles</h2>
				{#each learnableRoles.filter((r) => r.type === 'misc') as role}
					<label class="grid gap-x-2 grid-cols-[min-content_auto]">
						<input type="checkbox" value={role.id} bind:group={selectedRoles} />
						<p class="font-bold">{role.role}</p>
						<p class="col-start-2">{role.description}</p>
					</label>
				{/each}
			</div>
		</div>
	</div>
</fieldset>
