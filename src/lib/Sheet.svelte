<script>
	import Destination from './Destination.svelte'
	import Atena from './Atena'

	export let sheetData = {}

	const sender = new Atena(sheetData.sender || {})
	const destinations = []
	sheetData.atenas.forEach((d) => {
		destinations.push(new Atena(d || {}))
	})
</script>

<div class="flexbox">
	{#each destinations as d}
		<Destination to={d} {sender}></Destination>
	{/each}
</div>

<style>
	.flexbox {
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: space-between;
	}
</style>
