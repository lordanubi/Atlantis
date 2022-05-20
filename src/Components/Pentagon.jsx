import Init from "../../../Atlantide/SvgRender/Init"
import Layout from "../../../Atlantide/SvgRender/Layout"
import { PathMerge } from "../../../Atlantide/SvgRender/SimpleTools/PathMerge"
import Transform from "../../../Atlantide/SvgRender/SimpleTools/Transform"
import Atom from "../../Atom/Atom"

function Pentagon({x,y,rotate,rotateFrom,size,mirrorHor,mirrorVer})  {
  return    <PathMerge mirrorHor={mirrorHor} mirrorVer={mirrorVer} size={1} rotate={rotate} rotateFrom={rotateFrom} x={500 + (x || 0)} y={y}>
              <Atom size={0.8} />
              <Atom size={0.8} mirrorHor rotateFrom='top' rotate={72} />
              <Atom size={0.8} rotateFrom='top' rotate={-72} />
              <Atom size={0.8} mirrorHor rotateFrom='top'  rotate={216} />
              <Atom size={0.8} rotateFrom='top' rotate={-216} />
            </PathMerge>
}
Pentagon.useShadow = true
Pentagon.height = 2473.4677734375
Pentagon.width = 2600.751953125
export default Init(Pentagon)