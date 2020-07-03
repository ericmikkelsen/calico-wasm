import {twilightColors} from './twilightColors'
import {relativeLuminance} from '../modules/relativeLuminance'
import {contrastLevel} from '../modules/contrastLevel'

export function twilightRange():Float64Array {
    const colors = twilightColors();
    const colorsLength = colors.length;
    let light:f64 = 0;
    let dark:f64 = 1;
    for (let i = colorsLength; i--;) {
        const color = colors[i32(i)];
        const rl = relativeLuminance(color);
        if(rl > light){
            light = rl;
        }
        if(rl < dark){
            dark = rl
        }
    }
    const r = new Float64Array(2);
    r[0] = light;
    r[1] = dark;
    return r;
}