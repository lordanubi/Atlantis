<script>
	import repeat from './../Functions/repeat';
  import Atom from './Atom'
	export let horizontalAtoms = 2, verticalAtoms = 5, of = Atom()
	let lines = repeat(of,horizontalAtoms, "horizontal")
	let paths = repeat(lines, verticalAtoms, "vertical")
</script>
{#each paths as path}
	<path d={path} />
{/each}