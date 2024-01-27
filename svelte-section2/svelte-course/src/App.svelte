<!-- App.svelt -->
<script>
	import Counter from './lib/Counter.svelte';
	const maxCount = 10;

	let props = {
		initialCount: 3,
		maxCount
	};
</script>

<!-- Demonstrates spreading props and passing in an
     unexpected prop of x not declared in your export
     declarations
-->
<Counter {...props} x="2" />

<style>
</style>
