<script lang="ts">
	import { user } from '$lib/stores/auth';
	import { firestore } from '$lib/firestore';
	import { collection, query, getDocs, where } from 'firebase/firestore';

	interface Retinue {
		id: string;
		name: string;
	}
	let retinues: Retinue[] = [];
	let loading = true;
	$: {
		if ($user) {
			loading = false;
			const q = query(collection(firestore, 'retinues'), where('owner', '==', $user.uid));
			getDocs(q).then((querySnapshot) => {
				retinues = querySnapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }));
			});
		}
	}
</script>

<h2 class="text-xl font-bold">Your Retinues</h2>
{#if loading}
	<div>Loading... <span class="loading loading-dots loading-md" /></div>
{:else if retinues.length}
	<ul>
		{#each retinues as retinue (retinue.id)}
			<li><a href="/retinue/{retinue.id}">{retinue.name}</a></li>
		{/each}
	</ul>
{:else}
	<p>No retinues found.</p>
{/if}

<a href="/create-retinue" class="btn btn-ghost btn-outline my-4">Create New Retinue</a>
