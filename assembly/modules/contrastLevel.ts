import {relativeLuminance} from './relativeLuminance';
/**
 * The 2 colors to compare
 * @param hexColor1 
 * @param hexColor2
 * @returns float that represents color contrast 
 */

export function contrastLevel ( hexColor1:string = 'fff', hexColor2:string = '000'):number{

	const l1 = relativeLuminance( hexColor1 );
	const l2 = relativeLuminance( hexColor2 );

	const light:number = (l1 > l2 ? l1 : l2) + .05;
	const dark:number = (l1 < l2 ? l1 : l2 ) + .05;

	const contrast = light / dark;
	return contrast;
}
