document.addEventListener("keydown", changeDirection);

export const Direction = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
};

let direction = Direction.RIGHT;
let currentDirection = direction; // Use current direction to avoid snake going back on itself

function changeDirection(e) {
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    if (e.keyCode === LEFT && currentDirection != Direction.RIGHT) { direction = Direction.LEFT; }
    if (e.keyCode === RIGHT && currentDirection != Direction.LEFT) { direction = Direction.RIGHT; }
    if (e.keyCode === UP && currentDirection != Direction.DOWN) { direction = Direction.UP; }
    if (e.keyCode === DOWN && currentDirection != Direction.UP) { direction = Direction.DOWN; }
}

export function getDirection() {
    currentDirection = direction;
    return direction;
}