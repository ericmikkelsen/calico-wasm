export function cleanHex(hex:string): string {
    // ⬇️strip out the pound sign if it's there
    let color = hex.charAt(0) === '#' ? hex.substr(1) : hex

    // ⬇️convert this to 6 digits if it's 3
    if( color.length === 3 ){
        // It'd be super nice to do this with reduce or map or something
        // ⬇️but alas assemblyscript doesn't support it
        // 🔗https://docs.assemblyscript.org/basics/limitations
        // split the characters up
        color = ''
        const characters = color.split('')
        for (let i = 0; i < characters.length; i++) {
            const character = characters[i]
            color += character + character
        }
    }

    return color
}