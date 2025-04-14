import {getDirection} from './controls.js';
import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

setInterval(() => {moveSnake(getDirection()); renderGrid();}, 300);
