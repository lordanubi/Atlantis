<script>
	import Grid from './Components/Grid.svelte'
	import Atom from './Components/Atom'
	import Print from './SvgRender/Print.svelte'
	export let appWidth = 80, appHeight= 20
	let autoWidth, autoHeight
	function autoViewBox(svg) {
		let box = svg.getBBox()
		autoWidth = box.width
		autoHeight = box.height
	} 
</script>
<svg use:autoViewBox width="100%" height="100%" viewBox="0 0 {autoWidth || 0} {autoHeight || 0}" xlmns="http://www.w3.org/2000/svg">
	<Print />
	<!-- <Grid of={[Atom()]} horizontalAtoms={appWidth} verticalAtoms={appHeight} /> -->
</svg>