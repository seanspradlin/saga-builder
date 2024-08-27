<script lang="ts">
	export let role: string;
	export let unlocked = false;
</script>

<div class="badge badge-outline {unlocked ? 'badge-success' : 'badge-error'}">
	{role}
</div>
