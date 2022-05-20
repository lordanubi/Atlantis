import getMagicRatio from '../Functions/getMagicRatio'
const logoWidth = 1607.6, logoHeight = getMagicRatio(logoWidth)
function Atom() {
    return `m${logoWidth} ${logoHeight}h-347.6l-456.2 -627.8l-135.6 186.5l320.6 441.3h-347.6l-146.8 -202l-146.8 202h-347.6l803.8 -${logoHeight}l803.8 ${logoHeight}zm-331.9 -30.9h271.1l-743 -1022.8l-743.1 1022.8h271.1l162.6 -223.7l162.6 223.7h271.1l-298.1 -410.4l173.8 -239.2l471.9 649.6z`
}
export default Atom
//questo forse può anche essere un componente .svelte inserito come attributo quando viene utilizzato