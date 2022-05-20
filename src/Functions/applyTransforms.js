function applyTransforms(path,{ x = 0, y= 0, size = 1, rotate = false, rotateFrom='center', mirrorHor= false, mirrorVer = false}) {
    let originalSize = path.getBBox()
    //Path mirroring
    if (mirrorHor && mirrorVer)
        path.points = path.flipX().flipY()
    else 
        path.points = mirrorHor ? path.flipY() : mirrorVer ? path.flipX() : path
    //Path transform
    if (x || y)
        path.points = path.transform({translate: [x, y]})
    if (size)
        path.points = path.transform({scale: size})
    if (rotate) {
        rotateFrom = rotateFrom === 'top' ? [path.origin[0],originalSize.y] : rotateFrom
        path.points = path.transform({rotate: rotate, origin: rotateFrom})
    }
    return path.points.optimize()
}
export default applyTransforms