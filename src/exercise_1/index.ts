export const exercise_1 = (str: string): string | null => {
    let compressed: string = '';

    if(str === null) return null;
    if(str.length === 0) return str;

    compressed = compressString(str);

    return compressed;
}

const compressString = (str: string): string => {
    let result: string = '';

    let char: string = '';
    let count: number = 0;

    while(true) {
        let _char = str.slice(0, 1);
        str = str.slice(1, str.length);
        
        if(char === _char || char.length === 0) {
            char = _char;
            count ++;
        } else {
            if (count > 0) result += `${char}${count > 1 ? count : ''}`;

            char = _char;
            count = 1;
        }

        if (str.length === 0) {
            result += `${char}${count > 1 ? count : ''}`;
            break;
        }
    }

    return result;
}