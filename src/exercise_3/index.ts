export const exercise_3 = (str: string): number => {
    let sum: number = 0;

    const numbers: number[] = findNumbers(str);

    return numbers.reduce((prev, curr) => prev + curr);

}

const findNumbers = (str: string): number[] => {
    const numbers: number[] = [];

    let currentNumber: string = '0';

    while(true) {
        let character = str.slice(0, 1);
        str = str.slice(1, str.length);

        if(currentNumber.length === 0 || character === '0' || character === '1' || character === '2' || character === '3' || character === '4' || character === '5' || character === '6' || character === '7' || character === '8' || character === '9') {
            currentNumber += character;
        } else if(character !== '0' && character !== '1' && character !== '2' && character !== '3' && character !== '4' && character !== '5' && character !== '6' && character !== '7' && character !== '8' && character !== '9') {
            if(currentNumber !== '0') numbers.push(Number(currentNumber));
            currentNumber = '0';
        }

        if(str.length === 0) {
            numbers.push(Number(currentNumber));
            break;
        }
    }

    return numbers;
}