<script lang="ts">
	export let role: string;
	export let unlocked = false;
</script>

<div class="badge {unlocked ? 'badge-primary' : ''}">
	{role}
</div>
