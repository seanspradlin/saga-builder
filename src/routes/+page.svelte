<script lang="ts">
	import * as Roles from '$lib/db/roles';
	import { techs, type ExtendedTech } from '$lib/db/techs';
	import { incantations, type ExtendedIncantation } from '$lib/db/incantations';

	const characterNames = Array.from(
		new Set(Roles.characterRoles.map((role) => role.character).sort())
	);
	let character = '';
	let roles: Roles.Role[];
	let requiredTechs: string[] = [];
	let abilities: (ExtendedIncantation | ExtendedTech)[] = [];
	$: {
		roles = Roles.characterRoles.filter((role) => role.character === character);
	}
	$: {
		const newRequiredTechs = new Set();
		roles.forEach((role) => {
			if ((role as Roles.LearnableRole).requiredTechs) {
				const { requiredTechs } = role as Roles.LearnableRole;
				requiredTechs.forEach((tech) => newRequiredTechs.add(tech));
			}
		});
		requiredTechs = Array.from(newRequiredTechs) as string[];
	}
	$: {
		const newAbilities: typeof abilities = [];
		requiredTechs.forEach((tech) => {
			let t: ExtendedIncantation | ExtendedTech = techs[tech];
			if (!t) {
				t = incantations[tech];
			}
			if (!t) {
				console.error(`Tech ${tech} not found`);
				return;
			}
			newAbilities.push(t);
		});
		abilities = [...newAbilities];
	}

	function handleRoleToggle(role: Roles.Role) {
		if (roles.find((r) => r.id === role.id)) {
			roles = roles.filter((r) => r.id !== role.id);
		} else {
			roles = [...roles, role];
		}
	}
</script>

<h1 class="text-2xl">SaGa Scarlet Grace Role Calculator</h1>
<p>
	Create a retinue of characters and find what techs need to be learned to fill the roles you want.
</p>

<form>
	<label for="character">Character</label>
	<select bind:value={character} name="character" id="character" class="select w-full max-w-xs">
		<option disabled selected>Select a Character</option>
		{#each characterNames as character}
			<option>{character}</option>
		{/each}
	</select>
</form>

<div class="my-8">
	<h2 class="text-lg font-bold">Required Techs</h2>
	<ul>
		{#each abilities as ab (ab.id)}
			<li>{ab.name} - {ab.type}</li>
		{/each}
	</ul>
</div>

<div class="my-8">
	<h2 class="text-lg font-bold">{character}</h2>
	<div class="flex flex-col gap-4 max-w-screen-md">
		{#each roles as role (role.id)}
			<div class="card card-compact bg-neutral-100 drop-shadow">
				<div class="card-body">
					<div class="card-title">{role.role}</div>
					<p>
						{role.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="my-8">
	<h2 class="text-lg font-bold">Roles</h2>
	<div>
		<h3 class="font-bold">Attack Roles</h3>
		<div class="grid grid-cols-[max-content_auto] items-center gap-4">
			{#each Roles.attackRoles as role (role.id)}
				<div class="form-control">
					<label class="label cursor-pointer font-bold gap-2">
						<input
							type="checkbox"
							class="toggle"
							on:change={() => handleRoleToggle(role)}
							checked={!!roles.find((e) => e.id === role.id)}
						/>
						<span class="label-text">{role.role}</span>
					</label>
				</div>
				<p>{role.description}</p>
			{/each}
		</div>
	</div>
</div>
