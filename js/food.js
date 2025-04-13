import {gridData, gridSize, CellType} from './grid.js';

export function spawnFood() {
    let x = 0;
    let y = 0;
    while (gridData[x][y] !== CellType.FLOOR){
        x = Math.floor(Math.random() * gridSize);
        y = Math.floor(Math.random() * gridSize);
    }
    gridData[x][y] = CellType.FOOD;
}

spawnFood();
