import SVGPathCommander from 'svg-path-commander'

function getSSRSize(points) {
  return SVGPathCommander.getPathBBox(points)
}
export default getSSRSize