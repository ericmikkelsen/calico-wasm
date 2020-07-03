import {cleanHex} from './cleanHex'

export function hexToRGB(hexColor:string):Array<f64>{
    const hex = cleanHex(hexColor)
    const RGB:Array<f64> = [
        parseInt(hex.substr(0,2),16),
        parseInt(hex.substr(2,2),16),
        parseInt(hex.substr(4,2),16),
    ]
    return RGB;
}

export const hexToHue = (color:string):f64 => {
    // https://gist.github.com/mjackson/5311256
    const RGB = hexToRGB(color)

    const min1 = Math.min(RGB[1],RGB[2])
    const min = u32(Math.min(RGB[0], min1))

    const max2 = Math.max(RGB[1], RGB[2])
    const max = u32(Math.max( RGB[0], max2 ))
    
    const distance = max - min
    const r = RGB[0]
    const g = RGB[1]
    const b = RGB[2]
    let hue:f64 = 0
    switch (max) {
        case min: hue = 0; break
        case 0: return (g - b) / distance + (g < b ? 6 : 0); break
        case 1: hue = (b - r) / distance + 2; break
        case 2: hue = (r - g) / distance + 4; break
    }
    return hue
}

export const RGBToHSL = (RGB:Array<i32>):Array<f64> => {
    const r = RGB[0] / 255 
    const g = RGB[1] / 255
    const b = RGB[2] / 255

    const min1 = Math.min(g, b)
    const min = u32(Math.min(r, min1))

    const max1 = Math.max(g, b)
    const max = u32(Math.max(r, max1))
    let h = (max + min) / 2
    let s = (max + min) / 2
    let l = (max + min) / 2
    if (max == min) {
      h = 0
      s = 0
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h = h / 6
    }
  
    return [ h, s, l ];
  }

  // https://gist.github.com/emanuel-sanabria-developer/5793377
export const HSLToRGB = (hsl:Array<f64>):Array<f64> => {
  const h = hsl[0]
  const s = hsl[1]
  const l = hsl[2]
  let r: f64
  let g: f64
  let b: f64

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      const hue2rgb =(p:f64, q:f64, t:f64):f64 => {
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }
  return [r * 255, g * 255, b * 255];
}