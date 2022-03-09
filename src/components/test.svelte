<script lang="ts">
	let name = '';
</script>

<p>Hello I'm {name}</p>

<label for="name-test">Name:</label>
<input
	id="name-test"
	type="text"
	class="transition border-solid border-2 border-transparent rounded-md border-slate-500 focus:outline-sky-500 py-1 px-2 mb-2"
	bind:value={name}
/>
