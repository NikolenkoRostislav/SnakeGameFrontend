import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

setInterval(() => {renderGrid(); moveSnake();}, 100);
