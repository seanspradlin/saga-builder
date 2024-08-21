<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { addMemberToRetinue } from '$lib/firestore';
	import { characters } from '$lib/data/characters';
	import { learnableRoles } from '$lib/data/roles';
	import { getAbilities, type AbilityData } from '$lib/character-build';

	async function handleSubmit() {
		await addMemberToRetinue($page.params.id, {
			characterId: character,
			roles: selectedRoles,
			abilities: []
		});
		goto(`/retinue/${$page.params.id}`);
	}
	let character = '';
	let selectedRoles: string[] = [];
	let abilities: AbilityData[] = [];
	$: abilities = getAbilities(selectedRoles);
</script>

<h1 class="text-xl font-bold">Add member to retinue</h1>
<div class="flex w-full flex-col border-opacity-50">
	<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
		<label for="character" class="form-control max-w-sm">
			<div class="label">
				<span class="label-text">Character</span>
			</div>
			<select bind:value={character} name="character" id="character" class="select select-bordered">
				<option disabled selected>Select a Character</option>
				{#each characters as characterOption (characterOption.id)}
					<option value={characterOption.id}>{characterOption.name}</option>
				{/each}
			</select>
		</label>
		<fieldset>
			<legend class="label-text">Desired Roles</legend>
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
		<button type="submit" class="btn max-w-sm">Save</button>
	</form>
	{#if abilities.length}
		<div class="divider">REQUIRED ABILITIES</div>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
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
							<td>{ability.ability.type}</td>
							<td>{ability.ability.name}</td>
							<td>{ability.ability.type !== 'incantation' && ability.ability.description}</td>
							<td>{ability.ability.target}</td>
							<td>{ability.ability.attributes.join(', ')}</td>
							<td
								>{ability.ability.type !== 'incantation' && ability.ability.ranged
									? 'Yes'
									: 'No'}</td
							>
							<td
								>{ability.ability.type !== 'incantation' &&
									ability.ability.conditionals.join(', ')}</td
							>
							<td>{ability.ability.effect}</td>
							<td>{ability.ability.skill.join(', ')}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
