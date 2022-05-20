<script type="module">
var svgToTinyDataUri = require('mini-svg-data-uri')
require('svelte/register')
const Grid = require('./../Components/Grid.svelte').default
const { html } = Grid.render({horizontalAtoms: 1, verticalAtoms: 1})
const dataURI = svgToTinyDataUri(html)
</script>
<image href={dataURI} />

