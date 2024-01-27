<!-- src/lib/Button.svelte -->
<script>
	export let size = 'small';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';

	let isLeftHovered;

	// will log all of the slots used in our component
	// console.log($$slots);
	console.log('restProps:  \n', $$restProps);
</script>

<!-- 
<button style="background-color: {bgColor} color: {textColor}" 
    class={size === 'large' ? 'size-lg' : 'size-sm'}>
        <slot>Default Button Text</slot>
</button> -->
<button
	on:click
	{...$$restProps}
	style:--buttonBgColor={bgColor}
	style:--buttonTextColor={textColor}
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	class:has-left={$$slots.leftContent}
	class:shadow
>
	{#if $$slots.leftContent}
		<div
			role="presentation"
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" {isLeftHovered} />
		</div>
	{/if}
	<slot x="FS">Fallback</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		border: none;
		background-color: #ff3e00; //var(--buttonBgColor);
		color: #fff; // var(--buttonTextColor);
		padding: 15px 20 px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba (255, 255, 255, 0.1) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(9, 8, 8, 0.3);
		}
		.left-content {
			margin-right: 10px;
		}
	}
</style>
