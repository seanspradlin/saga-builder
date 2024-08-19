<script lang="ts">
	import { CharacterBuild } from '$lib/character-build';
	import { local } from '$lib/stores/local';
	import { goto } from '$app/navigation';
	import { characterRoles } from '$lib/data/roles';

	let builds: CharacterBuild[];
	let characterNames = Array.from(new Set(characterRoles.map((role) => role.character).sort()));
	$: characterNames = characterNames.filter(
		(name) => !builds.map((b) => b.character).includes(name)
	);
	let character: string = '';
	local.subscribe((store) => {
		builds = store.builds;
	});

	function handleSubmit() {
		console.log(character);
		local.update((store) => {
			store.builds = [...store.builds, new CharacterBuild(character)];
			return store;
		});
		goto('/');
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="character">Character</label>
	<select bind:value={character} name="character" id="character" class="select w-full max-w-xs">
		<option disabled selected>Select a Character</option>
		{#each characterNames as character}
			<option>{character}</option>
		{/each}
	</select>
	<button type="submit" class="btn">Submit</button>
</form>
