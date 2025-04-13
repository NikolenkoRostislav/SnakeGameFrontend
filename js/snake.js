import {gridData, CellType} from './grid.js';

class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const Direction = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
};

let snake = [new Snake(4, 2), new Snake(4, 3), new Snake(4, 4)];
let direction = Direction.RIGHT;

gridData[4][8] = CellType.FOOD; // this is for testing only I'll move the food spawn logic to a different script logic 

function renderSnake() {
    snake.forEach(segment => {
        if(segment === snake[snake.length - 1]){
            gridData[segment.x][segment.y] = CellType.HEAD;
        }else{
            gridData[segment.x][segment.y] = CellType.SNAKE;
        }
    });
}

function checkCollision() {
    let collided = gridData[snake[snake.length - 1].x][snake[snake.length - 1].y];
    if(collided === CellType.WALL || collided === CellType.SNAKE){
        alert("Game Over");
        location.reload();
    } else if(collided !== CellType.FOOD){
        gridData[snake[0].x][snake[0].y] = CellType.FLOOR;
        snake.shift();
    } 
}

export function moveSnake(){
    
    switch(direction){
        case Direction.UP:
            snake.push(new Snake(snake[snake.length - 1].x + 1, snake[snake.length - 1].y));
            break;
        case Direction.DOWN:
            snake.push(new Snake(snake[snake.length - 1].x - 1, snake[snake.length - 1].y));
            break;
        case Direction.RIGHT:
            snake.push(new Snake(snake[snake.length - 1].x , snake[snake.length - 1].y + 1));
            break;
        case Direction.LEFT:
            snake.push(new Snake(snake[snake.length - 1].x , snake[snake.length - 1].y - 1));
            break;
    }
    
    checkCollision();
    renderSnake();
}