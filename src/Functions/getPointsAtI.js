import { periodBehaviour, quasiPeriodBehaviour } from './getPeriodic';

function getPointsAtI(path,i, flow) {
  let size = path.getBBox()
  let x = flow === 'horizontal' ? size.width/2*i : 0
  let y = flow === 'vertical' ? size.height*i : 0
  if (periodBehaviour(i)) path.flipY()
  if (quasiPeriodBehaviour(i) && flow==='horizontal') path.flipX()
  return path.transform({translate: [x, y]})
}
export default getPointsAtI















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