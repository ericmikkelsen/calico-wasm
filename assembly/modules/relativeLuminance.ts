import { hexToRGB } from "./formatColor";

export function relativeLuminance ( hexColor:string ):number{
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	const RGB = hexToRGB( hexColor );

	const sRGB:Array<number> = []
	for (let index = 0; index < RGB.length; index++) {
		const color = RGB[index] / 255;
		const channel = color <= .03928 ? color / 12.92 : Math.pow( ( ( color + .055 ) / 1.055 ), 2.4 );
		sRGB.push(channel)
	}
	return .2126 * sRGB[0] + .7152 * sRGB[1] + .0722 * sRGB[2]; 
}
