export const exercise_2 = (str: string): string | null => {
    if(str === null) return null;
    if(str.length === 0) return str;

    const words = splitString(str);
    let result: string = '';


    for(let j = words.length - 1; j >= 0; j--) {
        const word = words[j];
        result = `${result} ${word[0].toUpperCase()}${word.length > 1 ? word.slice(1, word.length) : ''}`;
    }

    return result;
}

const splitString = (str: string): string[] => {
    let words: string[] = [];
    let word: string = '';

    while(true) {
        let character = str.slice(0, 1);
        str = str.slice(1, str.length);

        if(character === ' ') {
            words.push(word);
            word = '';
        } else {
            word += character;
        }

        if(str.length === 0) break;
    }

    if(word.length > 0) {
        words.push(word);
    }

    return words;
}