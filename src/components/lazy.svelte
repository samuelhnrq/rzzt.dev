<script lang="ts">
	import { onMount } from 'svelte';

	export let load: Promise<any>;
	let component: any;

	onMount(async () => {
		const module = await load;
		component = module.default;
	});
</script>

<svelte:component this={component} />
