<!-- App.svelt -->
<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { onDestroy, onMount, tick } from 'svelte';
	// bind var to a svelte component
	let todoList;
	let showList = true;

	let todos = null;

	onMount(() => {
		loadTodos();
		console.log(todos);
	});

	onDestroy(() => {
		console.log(`Destroyed.`);
	});

	onMount(() => {
		loadTodos();
	});

	function loadTodos() {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(async (response) => {
			if (response.ok) {
				todos = await response.json();
			} else {
				throw new Error('An error has occurred.');
			}
		});
	}

	async function handleAddTodo(event) {
		event.preventDefault();
		console.log(event.detail.title);
		setTimeout(async () => {
			console.log(document.querySelectorAll('.todo-list ul li'));
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
			await tick();
			console.log(document.querySelectorAll('.todo-list ul li'));
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
	<div style:max-width="400px">
		<TodoList
			{todos}
			bind:this={todoList}
			on:addtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
		/>
	</div>
	<button
		on:click={() => {
			todoList.focusInput();
		}}
		>Focus input
	</button>
{/if}

<style>
</style>
