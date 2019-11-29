export const exercise_7 = (arr1: number[], arr2: number[]): number[] => {
    if(arr1 === null || arr2 === null) return null;
    if(arr1.length === 0 || arr2.length === 0) return null;

    arr2.forEach(num => arr1.push(num));

    sort(arr1, 0);

    return arr1;
}

const sort = (arr: number[], index: number) => {
    if(index >= arr.length -1) {
        return;
    } else {
        for(let i = 0; i < arr.length; i ++) {
            if(arr[i] > arr[i + 1]) {
                const temp: number = arr[i];
    
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

            
        }

        const newIndex = index + 1;
        sort(arr, newIndex);
    }
}