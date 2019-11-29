export const exercise_9 = (firstString: string, secondString: string): string => {
    const substrings: string[] = [];


    for(let i = 0; i < firstString.length; i ++) {
        for(let j = 0; j < firstString.length; j ++) {
            let includes: boolean = false;

            secondString.split('').forEach(character => {
                if(firstString.substr(i, j).includes(character)) {
                    includes = true;
                }
            })

            if(!includes) {
                substrings.push(firstString.substr(i, j));
            }
        }
    }


    let result: string = '';

    substrings.forEach(substring => {
        if(substring.length > result.length) result = substring;
    })

    return result;
}