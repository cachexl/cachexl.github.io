<script lang="ts">	
	import favicon from '$lib/assets/favicon.ico';

	import '@fontsource/poppins';
  	import '@fontsource/poppins/600.css';
  	import '@fontsource/poppins/400.css';

	import '$lib/styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
