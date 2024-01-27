<!-- App.svelt -->
<script>
	import Counter from './lib/Counter.svelte';
	const maxCount = 10;

	let props = {
		initialCount: 3,
		maxCount
	};
</script>

<Counter {...props} x="2" />

<style>
</style>
