<script lang="ts">
	import { local } from '$lib/stores/local';

	let message: string;
	local.subscribe((val) => {
		message = val.message;
	});
</script>

<h1 class="text-2xl">SaGa Scarlet Grace Role Calculator</h1>
<p>
	Create a retinue of characters and find what techs need to be learned to fill the roles you want.
</p>
<p>{message}</p>
