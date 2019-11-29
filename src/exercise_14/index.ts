export const exercise_14 = (x: number, y: number): string => {
    if(x < 0) {
        x = -x;
        y = -y;
    }
    
    const radius = Math.sqrt((x*x) + (y*y));

    let residuo: number = radius % 1;

    if(y === 0 || residuo === 0) return 'black';

    if(y > 0) {
        if((radius - residuo) % 2 === 0) return 'black';
        else return 'white'
    } else if(y < 0) {
        if((radius - residuo) % 2 === 0) return 'white';
        else return 'black'
    }

}