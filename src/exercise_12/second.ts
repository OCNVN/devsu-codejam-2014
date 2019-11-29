export const exercise_12_1 = (str: string, lineWidth: number): string | number => {
    if(str === null) return -1;
    if(lineWidth <= 0) return -1;

    
    const lines: string[] = splitLines(str, lineWidth);

    const justified = lines.map((line, index) => {
        if(index === lines.length -1) return line;

        let spaceWidth: number = 1;
        let lookSpacerStartingAt: number = 0;

        while(true) {
            let currentSpacerIndex: number = line.indexOf(generateSpacer(spaceWidth), lookSpacerStartingAt);
            if(currentSpacerIndex === -1) {
                lookSpacerStartingAt = 0;
                spaceWidth++;
                continue;
            }

            if(line.length < lineWidth) {
                line = `${line.substr(0, currentSpacerIndex)}${generateSpacer(spaceWidth + 1)}${line.substr(currentSpacerIndex + spaceWidth, line.length)}`;
                lookSpacerStartingAt = currentSpacerIndex + spaceWidth + 1;
            } else {
                break;
            }
        }

        return line;
    })

    return justified.join('\n');
}

const generateSpacer = (width: number): string => {
    let result: string = '';

    for(let i = 0; i < width; i++) {
        result += ' ';
    }

    return result;
}

const splitLines = (str: string, lineWidth: number): string[] => {
    const lines: string[] = [];

    const words: string[] = str.split(' ');

    let tempLine: string = words.splice(0, 1)[0];

    while(true) {
        const word: string = words.splice(0, 1)[0];

        if(`${tempLine} ${word}`.length <= lineWidth) {
            tempLine = `${tempLine} ${word}`;
        } else {
            lines.push(tempLine);
            tempLine = word;
        }

        if(words.length === 0) {
            lines.push(tempLine);
            break;
        }
    }

    return lines;
}