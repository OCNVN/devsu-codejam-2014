export const exercise_11 = (num: number): string[][] => {
    if(num < 0 || num > 99) {
        return [
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['*', ' ', ' ', ' ', '*', ' ', '*'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['*', ' ', ' ', ' ', '*', '*', ' '],
            ['*', '*', '*', ' ', '*', ' ', '*']
        ]
    }
    
    const decenas = Math.floor(num / 10) >= 1 ? Math.floor(num / 10) : 0;
    const unidades = num - (decenas * 10);

    const digitos: string[][][] = [];

    digitos.push(zero);
    digitos.push(one);
    digitos.push(two);
    digitos.push(three);
    digitos.push(four);
    digitos.push(five);
    digitos.push(six);
    digitos.push(seven);
    digitos.push(eight);
    digitos.push(nine);
    
    const result: string [][] = Object.assign([], digitos[decenas]);
    
    const unidadMatrix: string[][] = digitos[unidades];
        
    unidadMatrix.forEach((unidadRow, index) => {
        result[index].push(' ');
        result[index] = result[index].concat(unidadRow);
    })

    return result;
}



const one: string[][] = [
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
]

const two: string[][] = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', '*', '*'],
]

const three: string[][] = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
]

const four: string[][] = [
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
]

const five: string[][] = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
]

const six: string[][] = [
    ['*', '*', '*'],
    ['*', ' ', ' '],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
]

const seven: string[][] = [
    ['*', '*', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
    [' ', ' ', '*'],
]

const eight: string[][] = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
]

const nine: string[][] = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
    [' ', ' ', '*'],
    ['*', '*', '*'],
]

const zero: string[][] = [
    ['*', '*', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', ' ', '*'],
    ['*', '*', '*'],
]