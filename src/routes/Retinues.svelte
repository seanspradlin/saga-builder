<script lang="ts">
	import { user } from '$lib/stores/auth';
	import { firestore } from '$lib/firestore';
	import { collection, query, getDocs, where } from 'firebase/firestore';

	interface Retinue {
		id: string;
		name: string;
	}
	let retinues: Retinue[] = [];

	$: {
		if ($user) {
			const q = query(collection(firestore, 'retinues'));
			getDocs(q).then((querySnapshot) => {
				retinues = querySnapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }));
			});
		}
	}
</script>

{#if retinues.length}
	<ul>
		{#each retinues as retinue (retinue.id)}
			<li><a href="/retinue/{retinue.id}">{retinue.name}</a></li>
		{/each}
	</ul>
{:else}
	<p>No retinues found.</p>
{/if}
