<script>
	export let todos = [];
</script>

<ul>
	{#each todos as todo, index}
		<!-- @const can only be used in a for, if, each, etc block -->
		{@const number = index + 1}
		<li>{number}. {todo.title}</li>
	{/each}
</ul>
