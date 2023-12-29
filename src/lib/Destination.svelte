<script>
	export let to = {}
	export let sender = {}
</script>

<section class="sheet">
	<p class="郵便番号">{to.postcode.replaceAll('-', '')}</p>
	<p class="住所">{@html to.getNormAddress()}</p>
	<div class="宛名">
		{#each to.names as name}
			<p>{@html name.replaceAll('_', ' ')}　様</p>
		{/each}
	</div>
	<div class="差出人住所氏名">
		<p class="差出人住所">{@html sender.getNormAddress()}</p>
		<p class="差出人">
			{#each sender.names as name}
				<div>{@html name.replaceAll('_', ' ')}</div>
			{/each}
		</p>
	</div>
	<p class="差出人郵便番号">{sender.postcode.replaceAll('-', '')}</p>
</section>
