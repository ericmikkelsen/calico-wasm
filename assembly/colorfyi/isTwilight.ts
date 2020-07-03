import {contrastLevel} from '../modules/contrastLevel'
export function isTwilight(color:string = '#767676'):boolean{
    const contrastToWhite = contrastLevel( color, '#ffffff' )
    const contrastToBlack = contrastLevel( color, '#000000' )
    return contrastToBlack >= 4.5 && contrastToWhite >= 4.5
}