document.addEventListener("keydown", changeDirection);

export const Direction = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
};

export let direction = Direction.RIGHT;

function changeDirection(e) {
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    if (e.keyCode === LEFT && direction != Direction.RIGHT) { direction = Direction.LEFT; }
    if (e.keyCode === RIGHT && direction != Direction.LEFT) { direction = Direction.RIGHT; }
    if (e.keyCode === UP && direction != Direction.DOWN) { direction = Direction.UP; }
    if (e.keyCode === DOWN && direction != Direction.UP) { direction = Direction.DOWN; }
}