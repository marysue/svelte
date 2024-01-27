<!-- This promises the compiler that whenever you
     are going to update your component you will
     pass in a new array, not an updated version
     of the same array so it doesn't have to compare
     version of the same array for changes  -->
<svelte:options immutable={true} />

<script>
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';
	export let todos = [];

	let inputText = '';
	// Example of binding a component's readonly
	// var for use outside of the component
	export const readonly = 'read only';

	// Example of exporting a function from this
	// component into a parent component to use.
	export function clearInput() {
		inputText = '';
	}

	export function focusInput() {
		// because we added bind:this={input}
		// now we can call input.focus();
		input.focus();

		// now outside TodoList we can call
		// this focus on a button to focus on
		// the input element.
	}

	let input;
	// For our custom events
	const dispatch = createEventDispatcher();

	function handleAddTodo() {
		const isNotCancelled = dispatch(
			'addtodo',
			{
				title: inputText
			},
			{ cancelable: false }
		);
		if (isNotCancelled) {
			// Removing this to demo calling
			// clearInput from parent component.
			// inputText = '';
			console.log('Hello');
		}
	}
	function handleRemoveTodo(id) {
		dispatch('removetodo', { id });
	}

	function handleToggleTodo(id, value) {
		dispatch('toggletodo', { id, value });
	}
</script>

<div class="todo-list-wrapper">
	<ul>
		{#each todos as { id, title, completed }, index (id)}
			<!-- Can only use @const w/in #<> blocks -->
			<!-- {@const number = index + 1} -->
			<li>
				<label>
					<input
						type="checkbox"
						on:input={(event) => {
							event.currentTarget.checked = completed;
							handleToggleTodo(id, !completed);
						}}
						checked={completed}
					/>
					{title}
				</label>
				<button on:click={() => handleRemoveTodo(id)}>Remove</button>
			</li>
		{/each}
	</ul>
	<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
		<!-- Svelte's way of binding - short version  -->
		<!-- Also binding this variable to our input -->
		<input bind:this={input} bind:value={inputText} />
		<Button disabled={!inputText} type="submit">Add</Button>
	</form>
</div>
