import {direction} from './controls.js';
import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

setInterval(() => {moveSnake(direction); renderGrid();}, 300);
