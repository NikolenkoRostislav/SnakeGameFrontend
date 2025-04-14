import {getDirection} from './controls.js';
import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

const intro = document.getElementById("intro");

renderGrid();
document.addEventListener("keydown", startGame);


function startGame() {
    document.removeEventListener("keydown", startGame);
    intro.remove();
    setInterval(() => {moveSnake(getDirection()); renderGrid();}, 300);
}

