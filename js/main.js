import {getDirection} from './controls.js';
import {getPoints, renderPointsCounter} from './points.js';
import {renderGrid} from './grid.js';
import {moveSnake} from './snake.js';

const intro = document.getElementById("intro");

renderGrid();
document.addEventListener("keydown", startGame);

function startGame() {
    let startDelay = 300;
    let delay = startDelay;
    document.removeEventListener("keydown", startGame);
    intro.remove();
    
    let gameLoop = setTimeout(function loop(){
        moveSnake(getDirection());
        renderGrid();
        renderPointsCounter();
        if (startDelay - getPoints() * 5 > 100) {
            delay = startDelay - getPoints() * 5;
        }
        gameLoop = setTimeout(loop, delay);
    }, delay);
}

