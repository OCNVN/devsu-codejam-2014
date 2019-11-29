export const exercise_15 = (initialState: number[][], targetgeneration: number): number[][] => {

    printState(cloneState(initialState));

    let newState: number[][] = initialState;

    for(let i = 0; i < targetgeneration; i++) {
        newState = tick(newState);

        printState(newState);
    }

    return initialState;
}

const tick = (initialState: number[][]): number[][] => {
    const newState: number[][] = [];

    initialState.forEach((row, rowIndex) => {
        const newRow: number[] = [];
        
        row.forEach((cellState, columnIndex) => {
            let newCellState: CellState;

            switch(cellState) {
                case CellState.EMPTY: {
                    newCellState = CellState.EMPTY;
                    break;
                }
                case CellState.TAIL: {
                    newCellState = CellState.CONDUCTOR;
                    break;
                }
                case CellState.HEAD : {
                    newCellState = CellState.TAIL;
                    break;
                }
                case CellState.CONDUCTOR: {
                    newCellState = conductorTransition(initialState, rowIndex, columnIndex);
                    break;
                }
            }

            newRow.push(newCellState);
        })

        newState.push(newRow);
    })

    return newState;
}

const conductorTransition = (state: number[][], rowIndex: number, columnIndex: number): CellState => {
    const nearCellStates: CellState[] = [];
    
    if((rowIndex - 1) >= 0 && (columnIndex - 1) >= 0) nearCellStates.push(state[rowIndex - 1][columnIndex - 1]);
    if((rowIndex - 1) >= 0 && (columnIndex) >= 0) nearCellStates.push(state[rowIndex - 1][columnIndex]);
    if((rowIndex - 1) >= 0 && (columnIndex + 1) <= (state[0].length - 1)) nearCellStates.push(state[rowIndex - 1][columnIndex + 1]);
    if((rowIndex) >= 0 && (columnIndex + 1) <= (state[0].length - 1)) nearCellStates.push(state[rowIndex][columnIndex + 1]);
    if((rowIndex + 1) <= (state.length - 1) && (columnIndex + 1) <= (state[0].length - 1)) nearCellStates.push(state[rowIndex + 1][columnIndex + 1]);
    if((rowIndex + 1) <= (state.length - 1) && (columnIndex) >= 0) nearCellStates.push(state[rowIndex + 1][columnIndex]);
    if((rowIndex + 1) <= (state.length - 1) && (columnIndex - 1) >= 0) nearCellStates.push(state[rowIndex + 1][columnIndex - 1]);
    if((rowIndex) >= 0 && (columnIndex - 1) >= 0) nearCellStates.push(state[rowIndex][columnIndex - 1]);

    let countHeads: number = 0;

    if(nearCellStates.length > 0) {
        nearCellStates.forEach(cellState => {
            if(cellState === CellState.HEAD) countHeads++;
        })
    }

    if (countHeads === 1 || countHeads === 2) return CellState.HEAD;
    return CellState.CONDUCTOR;
}

const enum CellState {
    EMPTY = 0,
    HEAD = 1,
    TAIL = 2,
    CONDUCTOR = 3
}

const printState = (state: number[][]) => {
    console.log('\n');

    state.forEach(row => {
        console.log(row.join(' '));
    })

    console.log('\n');
}

const cloneState = (state: number[][]): number[][] => {
    const cloned: number[][] = [];

    state.forEach(row => {
        cloned.push(Object.assign([], row));
    })

    return cloned;
}