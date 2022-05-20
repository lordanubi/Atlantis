import SVGPathCommander from 'svg-path-commander' 
import getPointsAtI from './getPointsAtI'

function repeat(elements, times, flow) {
  let result = []
  for (let i = 0; i < times; i++) {
    Array.from(elements).forEach((singlePath) => {
      let path = new SVGPathCommander(singlePath)
      let points = getPointsAtI(path, i, flow)
      result.push(points.toString())
    })
  }
  return result
}
export default repeat















// function getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip) {

//   let scaleX = 1, scaleY = 1, x = 0, y = (childHeight + spacing) * i //default element props
//   if (Const.periodBehaviour(i)) { //EVENODD PERIODIC BEHAVIOUR
//     if (evenOddVerticalFlip) scaleY = -1; //FLIP VERTICAL
//     if (phase === "periodic") x -= distance / 2; //Move even atoms a bit to the left
//   }

//   if (Const.quasiPeriodBehaviour(i)) { //QUASIPERIODIC BEHAVIOUR
//     if (quasiPeriodicHorizontalFlip) scaleX = -1; //FLIP HORIZONTAL
//     if (phase === "quasiperiodic") x -= distance / 2;
//   }
//   return {x: x, y: y, mirrorHor: scaleX === -1, mirrorVer: scaleY === -1}
// }