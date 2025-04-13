const grid = document.getElementById("grid");
export const gridSize = 12;
export const gridData = [];
export const CellType = {
    WALL: 'wall',
    FLOOR: 'floor',
    SNAKE: 'snake',
    FOOD: 'food'
};

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

export function renderGrid() {
    grid.innerHTML = '';
    gridData.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            switch (cell) {
                case CellType.WALL:
                    div.className = "wall";
                    break;
                case CellType.SNAKE:
                    div.className = "snake";
                    break;
                case CellType.HEAD:
                    div.className = "head";
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
