import {isTwilight} from "./isTwilight";

export function twilightColors(short:boolean = false):Array<string> {
    const colors:Array<string> = []
    const exponent = short ? 3 : 6
    const total = Math.pow(16, exponent);

    for (let i = total; i-- ;) {
        let currentColor = i.toString(16).padStart(exponent,'0');
        if( isTwilight(currentColor) ){
            colors.push(currentColor)
        }
    }
    return colors
}
