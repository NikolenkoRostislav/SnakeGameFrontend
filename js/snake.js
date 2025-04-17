import {gridData, CellType} from './grid.js';
import {Direction} from './controls.js';
import {spawnFood} from './food.js';
import {addPoints, getPoints} from './points.js';

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let snake = [new SnakePart(gridData.length / 2 - 1, gridData.length / 2 - 3), 
             new SnakePart(gridData.length / 2 - 1, gridData.length / 2 - 2), 
             new SnakePart(gridData.length / 2 - 1, gridData.length / 2 - 1)];

function checkCollision() {
    let collided = gridData[snake[snake.length - 1].x][snake[snake.length - 1].y];
    if(collided === CellType.WALL || collided === CellType.SNAKE){
        alert("Game Over, you got " + getPoints() + " points!");
        location.reload();
    } else if(collided !== CellType.FOOD){
        gridData[snake[0].x][snake[0].y] = CellType.FLOOR;
        snake.shift();
    } else {
        spawnFood();
        addPoints();
    }
}

function renderSnake() {
    snake.forEach(segment => {
        if(segment === snake[snake.length - 1]){
            gridData[segment.x][segment.y] = CellType.HEAD;
        }else if (segment === snake[0]){
            gridData[segment.x][segment.y] = CellType.TAIL;
        }else{
            gridData[segment.x][segment.y] = CellType.SNAKE;
        }
    });
}

export function moveSnake(direction){
    switch(direction){
        case Direction.UP:
            snake.push(new SnakePart(snake[snake.length - 1].x - 1, snake[snake.length - 1].y));
            break;
        case Direction.DOWN:
            snake.push(new SnakePart(snake[snake.length - 1].x + 1, snake[snake.length - 1].y));
            break;
        case Direction.RIGHT:
            snake.push(new SnakePart(snake[snake.length - 1].x , snake[snake.length - 1].y + 1));
            break;
        case Direction.LEFT:
            snake.push(new SnakePart(snake[snake.length - 1].x , snake[snake.length - 1].y - 1));
            break;
    }
    
    checkCollision();
    renderSnake();
}