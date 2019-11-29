import { exercise_1 } from './exercise_1/index';
import { exercise_1_2 } from './exercise_1/second';
import { exercise_2 } from './exercise_2';
import { exercise_3 } from './exercise_3';
import { exercise_4 } from './exercise_4';
import { exercise_6 } from './exercise_6';
import { exercise_7 } from './exercise_7';
import { exercise_8 } from './exercise_8';
import { exercise_9 } from './exercise_9';
import { exercise_14 } from './exercise_14';
import { exercise_11 } from './exercise_11';
import { exercise_12 } from './exercise_12';
import { exercise_12_1 } from './exercise_12/second';
import { exercise_15 } from './exercise_15';

/***  FIRST ITERATION  ***/

// Exercise 1: 16:37 | 2 points
console.log(`exercise 1: ${exercise_1("aaaabbdxy")}`);

// Exercise 2: 11:10  | 2 points
console.log(`exercise 2: ${exercise_2("carlos lucero")}`);

// Exercise 3: 12:28  | 3 points
console.log(`exercise 3: ${exercise_3("When I was 18, I was in 1st year, and had 25 classmates")}`);

// Exercise 4: 15:00  | 3 points
console.log(`exercise 4: ${exercise_4("The quick brown fox jumps over the lazy dog 12345 :) * zzzZZZAAAaaa")}`);

// Exercise 6: 22:52  | 3 points
console.log(`exercise 6: ${exercise_6(
    [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ]
)}`);

// Exercise 7: 17:03  | 3 points
console.log(`exercise 7: ${exercise_7([8, 3, 2, 1], [3, 2, 9])}`);

// Exercise 8: 8:22  | 3 points
console.log(`exercise 8: ${exercise_8(['Juan', 'Pedro'], ['Perez', 'Lara'])}`);

// Exercise 9: 10:26  | 3 points
console.log(`exercise 9: ${exercise_9("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper", "")}`);

// Exercise 11: 29:00  | 3 points
console.log(`exercise 11: ${exercise_11(-10)}`);

// Exercise 12: 38:00  | 3 points
console.log(`exercise 12: ${exercise_12('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 50)}`);

// Exercise 14: 19:03  | 3 points
console.log(`exercise 14: ${exercise_14(200, 399)}`);

// Exercise 15: 41:48  | 3 points
console.log(`exercise 15:\n${exercise_15(
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 3, 3, 3, 3, 3, 0, 0],
        [0, 1, 0, 3, 0, 0, 0, 0, 0],
        [0, 3, 0, 3, 0, 0, 0, 0, 0],
        [0, 3, 3, 3, 3, 3, 3, 3, 3],
        [0, 3, 0, 0, 0, 0, 3, 0, 3],
        [0, 3, 0, 0, 0, 3, 3, 3, 3],
    ], 
    
    3)
}`);

console.log(`exercise 15:\n${exercise_15(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ], 
    20)
}`);

console.log(`exercise 15:\n${exercise_15(
    [
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1]
    ], 
    1)
}`);

console.log(`exercise 15:\n${exercise_15(
    [
        [0, 3, 3, 0, 0],
        [0, 0, 0, 0, 3],
        [0, 0, 0, 0, 3]
    ], 
    1)
}`);

console.log(`exercise 15:\n${exercise_15(
    [
        [1, 3, 0, 0, 0],
        [0, 0, 0, 0, 3],
        [0, 0, 0, 1, 1]
    ], 
    1)
}`);

console.log(`exercise 15:\n${exercise_15(
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
        [0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0],
        [0, 0, 1, 3, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 3, 3],
        [0, 2, 0, 0, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0],
        [0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0]
    ], 
    10)
}`);


// /***  SECOND ITERATION  ***/

// Exercise 1: 12:31 | 2 points
console.log(`exercise 1_1: ${exercise_1_2('aaaabbdxy')}`);

// Exercise 12: 25:00  | 3 points
console.log(`exercise 12: ${exercise_12_1('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 50)}`);
console.log(`exercise 12: ${exercise_12_1('Lorem ipsum dolor sit amet fdjsaifdaisfdafasdfsafsdfsafsadfsafsadfas', 50)}`);