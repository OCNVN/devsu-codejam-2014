export const exercise_1_2 = (str: string): string | null => {
    let compressed = '';
    if(str === null) return null;
    if(str.length === 0) return null;

    const groups: string[][] = group(str);

    compressed = groups.map(group => `${group[0]}${group.length > 1 ? group.length : ''}`).join('');

    return compressed
}

const group = (str: string): string[][] => {
    const groups: string[][] = [];

    let characters: string[] = str.split('');

    let tempGroup: string[] = [];
    while(true) {
        let _char: string = characters.splice(0, 1)[0];

        if(tempGroup.length === 0 || tempGroup[0] === _char) tempGroup.push(_char);
        else if(tempGroup[0] != _char) {
            groups.push(tempGroup);
            tempGroup = [_char];
        }

        if(characters.length === 0) break;
    }

    groups.push(tempGroup);

    return groups;
}