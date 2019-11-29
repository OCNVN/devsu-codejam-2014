export const exercise_8 = (firstNames: string[], lastNames: string[]): string[] => {
    const firstNamesCombined: string[] = combinaFirstNames(firstNames);
    const lastNamesCombined: string[] = combinaLastNames(lastNames);


    const result: string[] = [];

    firstNamesCombined.forEach(firstNames => {
        lastNamesCombined.forEach(lastNames => {
            result.push(`${firstNames} ${lastNames}`);
        })
    })

    return result;
}

const combinaFirstNames = (firstNames: string[]) => {
    const result: string[] = [];

    firstNames.forEach(first => {
        firstNames.forEach(second => {
            if(first !== second) result.push(`${first} ${second}`);
        })
    })

    return result;
}

const combinaLastNames = (lastNames: string[]) => {
    const result: string[] = [];

    lastNames.forEach(first => {
        lastNames.forEach(second => {
            result.push(`${first} ${second}`);
        })
    })

    return result;
}

