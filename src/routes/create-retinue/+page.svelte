<script lang="ts">
	import { goto } from '$app/navigation';
	import { createNewRetinue } from '$lib/firestore';
	let name = '';
	async function handleSubmit() {
		const id = await createNewRetinue(name);
		goto(`/retinue/${id}`);
	}
</script>

<h1 class="text-xl font-bold">Create a New Retinue</h1>
<form on:submit|preventDefault={handleSubmit} class="max-w-screen-sm flex flex-col gap-4">
	<label class="input input-bordered flex items-center gap-2" for="name"
		>Name
		<input
			type="text"
			placeholder="Firebringer Beaters"
			class="grow"
			bind:value={name}
			id="name"
			required
		/>
	</label>
	<button type="submit" class="btn">Create Retinue</button>
</form>
