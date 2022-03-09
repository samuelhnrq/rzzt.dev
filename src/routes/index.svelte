<script lang="ts">
	import Lazy from '../components/lazy.svelte';
</script>

<div id="root" class="flex items-center justify-center flex-col min-h-95vh">
	<h1>Welcome to SvelteKit</h1>
	<div class="bg-gray-700 rounded-xl">
		<span class="m-3 text-gray-200">I'm a card</span>
	</div>
	<p>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
	</p>
</div>

<Lazy load={import('../components/test.svelte')} />
