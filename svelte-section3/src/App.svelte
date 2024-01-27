<!-- App.svelt -->
<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
	import FaRegThumbsUp from 'svelte-icons/fa/FaRegThumbsUp.svelte';
</script>

<Button let:x on:click={(event) => alert('Button clicked')} size="small" shadow disabled={false}>
	<div style:width="20px" slot="leftContent" let:isLeftHovered>
		{#if isLeftHovered}
			<FaRegThumbsUp />
		{:else}
			<FaAngellist />
		{/if}
	</div>
	Button Text {x}
</Button>

<style>
</style>
