<!-- Counter.svelt -->
<script>
	export let initialCount = 0;
	export let maxCount = undefined;

	console.log(`$$props = `, $$props, `\n$$restProps = `, $$restProps);

	let count = initialCount;

	function increment() {
		if (count === maxCount) return;
		count += 1;
	}
</script>

<button on:click={increment}>Clicks {count}</button>
<h1>You have clicked {count} times</h1>

<style>
	button {
		padding: 15px 20px;
		background: blue;
		color: white;
	}
</style>
