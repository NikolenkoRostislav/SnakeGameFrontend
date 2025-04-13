const grid = document.getElementById("grid");
export const gridSize = 12;
export const gridData = [];
export const CellType = {
    WALL: 'wall',
    FLOOR: 'floor',
    SNAKE: 'snake',
    HEAD: 'head',
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
            div.className = cell;
            grid.appendChild(div);
        });
    });
}
