<script>
	import Sheet from './lib/Sheet.svelte'

	const filename = import.meta.env.VITE_DATA_FILE || 'atena.sample.json'

	async function getData(f) {
		let dataPromise = await fetch(f)
		return await dataPromise.json()
	}
</script>

{#await getData(filename)}
	<p>Loading...</p>
{:then data}
	<Sheet sheetData={data}></Sheet>
{/await}
