const grid = document.getElementById("grid");
const gridSize = 8;
const CellType = {
    WALL: 'wall',
    FLOOR: 'floor',
    SNAKE: 'snake',
    FOOD: 'food'
};

const gridData = [];
for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
        if( i === 0 || i === gridSize - 1 || j === 0 || j === gridSize - 1) {
            row.push(CellType.WALL);
        }else{
            row.push(CellType.FLOOR);
        }
    }
    gridData.push(row);
}

function renderGrid() {
    grid.innerHTML = '';
    gridData.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            switch (cell) {
                case CellType.WALL:
                    div.className = "wall";
                    break;
                case CellType.SNAKE:
                    div.className = "wall";
                    break;
                case CellType.FOOD:
                    div.classList.add("food");
                    break;
                default:
                    div.classList.add("floor");
            }
            grid.appendChild(div);
        });
    });
}

setInterval(renderGrid, 100);
