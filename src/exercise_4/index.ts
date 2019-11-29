export const exercise_4 = (str: string): string => {
   
    return encrypt(str);
}

const encrypt = (str: string): string => {
    const characters: string[] = str.split('');
    const result: string[] = []

    characters.map((character, index) => {
        result.push(encryptCharacter(character, index));
    })

    return result.join('');
}

const encryptCharacter = (character: string, position: number): string => {
    let ascii = character.charCodeAt(0);

    const isEven = (position % 2) === 0 ? false : true;

    if(ascii >= 65 && ascii <= 90) {
        if(isEven) ascii--;
        if(!isEven) ascii++;

        if(ascii > 90) ascii = 65;
        if(ascii < 65) ascii = 90;
    }

    if(ascii >= 97 && ascii <= 122) {
        if(isEven) ascii--;
        if(!isEven) ascii++;

        if(ascii > 122) ascii = 97;
        if(ascii < 97) ascii = 122;
    }

    return String.fromCharCode(ascii);
}