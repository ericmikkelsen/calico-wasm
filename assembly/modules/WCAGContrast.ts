import {contrastLevel} from "./contrastLevel"

interface figureToGroundReturn {
    aa: boolean,
    aaLarge: boolean,
    aaa: boolean,
    aaaLarge: boolean,
    contrast: number,
} 

export function figureToGround ( figure:string = '767676', ground:string = '000'):figureToGroundReturn { 
    const contrast = contrastLevel( figure, ground );
    return {
        aa: contrast >= 4.5 ? true : false,
        aaLarge: contrast >= 3 ? true : false,
        aaa: contrast >= 7 ? true : false,
        aaaLarge: contrast >= 4.5 ? true : false,
        contrast: contrast,
    }
}