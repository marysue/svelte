<!-- App.svelt -->
<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { onDestroy } from 'svelte';
	// bind var to a svelte component
	let todoList;
	let showList = true;

	let todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo 2',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 3',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 4',
			completed: false
		}
	];

	onDestroy(() => {
		console.log(`Destroyed.`);
	});

	function handleAddTodo(event) {
		event.preventDefault();
		console.log(event.detail.title);
		setTimeout(() => {
			// todos array is mutated, so when passed
			// to the child component it has the new
			// values

			// this is a reactive call, using the = sign
			// to update the component as well
			todos = [
				...todos,
				{
					id: uuid(),
					title: event.detail.title,
					completed: false
				}
			];
			// here is your reactive call to change
			// todos and have it remap
			// todos = todos;

			// Calling an external function from a
			// parent component:
			todoList.clearInput();
		}, 3000);
	}

	function handleRemoveTodo(event) {
		todos = todos.filter((t) => t.id !== event.detail.id);
	}

	function handleToggleTodo(event) {
		todos = todos.map((t) => {
			if (t.id === event.detail.id) {
				return { ...t, completed: event.detail.value };
			}
			return { ...t };
		});
	}
</script>

<!-- Display the readonly variable from the TodoList Component -->
{todoList && todoList.readonly}
<!-- Binding a variable to a component -->
<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide List
</label>
{#if showList}
	<TodoList
		{todos}
		bind:this={todoList}
		on:addtodo={handleAddTodo}
		on:removetodo={handleRemoveTodo}
		on:toggletodo={handleToggleTodo}
	/>
	<button
		on:click={() => {
			todoList.focusInput();
		}}
		>Focus input
	</button>
{/if}

<style>
</style>
