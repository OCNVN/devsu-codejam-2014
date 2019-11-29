export const exercise_6 = (square: number[][]): boolean => {
    if(square.length != square[0].length) return false;
    
    return isSquare(square);
}

const isSquare = (square: number[][]): boolean => {
    let isSquare = true;

    let sum = -1;
    const rowSums: number[] = square.map(row => row.reduce((prev, curr) => prev + curr));

    


    for(let column = 0; column < square[0].length; column++) {
        let sum: number = 0;

        for(let row = 0; row < square.length; row++) {
            sum += square[row][column];
        }

        rowSums.push(sum);
    }


    // Diagonal
    let diagonalSums: number = 0;
    let diagonalSums2: number = 0;

    for(let column = 0; column < square[0].length; column++) {
        diagonalSums += square[column][column];
        diagonalSums2 += square[square[0].length - 1 - column][column];
    }

    rowSums.push(diagonalSums);
    rowSums.push(diagonalSums2);


    rowSums.forEach(_sum => {
        if(sum === -1) {
            sum = _sum
        } else if(sum !== _sum) {
            isSquare = false;
        }
    })

    return isSquare;
    
}