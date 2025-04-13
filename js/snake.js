import {gridData, CellType} from './grid.js';

gridData[4][4] = CellType.SNAKE;
gridData[4][5] = CellType.SNAKE;
gridData[4][6] = CellType.HEAD;
export function moveSnake(){
    console.log("Moving snake"); //I'll add this later
}