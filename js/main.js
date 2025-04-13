import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

setInterval(() => {moveSnake(); renderGrid();}, 300);
