export const exercise_12 = (str: string, lineWidth: number): string => {
    
    const lines: string[] = splitLines(str, lineWidth);

    const justified = lines.map((line, index) => {
        if(index < lines.length - 1) {
            let spaceLength: number = 1;
            let position: number = 0;
    
            while(true) {
                let currentSpacer: string = genSpacer(spaceLength);
    
                if(line.length < lineWidth) {
                    let spaceToIncreaseIndex = line.indexOf(currentSpacer, position);
    
                    if(spaceToIncreaseIndex > 0) {
                        line = `${line.substr(0, spaceToIncreaseIndex)}${genSpacer(spaceLength + 1)}${line.substr(spaceToIncreaseIndex + spaceLength, line.length)}`
                        position = spaceToIncreaseIndex + spaceLength + 1;
                    } else {
                        spaceLength ++;
                    }
                } else {
                    break;
                }
            }
        }

        return line;
    });

    return justified.join('\n');
}

const genSpacer = (length: number): string => {
    let spacer = '';

    for(let i = 0; i < length; i++) {
        spacer += ' ';
    }

    return spacer;
}


const splitLines = (str: string, lineWidth: number): string[] => {
    const lines: string[] = [];

    const words: string[] = str.split(' ');

    let lineTemp: string = words.splice(0, 1)[0];;

    while(true) {
        const word: string = words.splice(0, 1)[0];

        if(`${lineTemp} ${word}`.length <= lineWidth) {
            lineTemp = `${lineTemp} ${word}`;
        } else {
            lines.push(lineTemp);
            lineTemp = word;
        }

        if(words.length === 0) {
            lines.push(lineTemp);
            break;
        }
    }

    return lines;
}