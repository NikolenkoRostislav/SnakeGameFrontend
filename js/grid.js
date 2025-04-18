const grid = document.getElementById("grid");
export const gridSize = 12;
export const gridData = [];
export const CellType = {
    WALL: 'wall',
    FLOOR: 'floor',
    SNAKE: 'snake',
    HEAD: 'head',
    TAIL: 'tail',
    FOOD: 'food'
};

for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
        if (i === 0 || i === gridSize - 1 || j === 0 || j === gridSize - 1) {
            row.push(CellType.WALL);
        } else {
            row.push(CellType.FLOOR);
        }
    }
    gridData.push(row);
}

const faces = ['^_^', '*-*', '0.0', 'O_O', 'T_T', 'X_X', 'o_o', 'v_v'];
const randomFace = faces[Math.floor(Math.random() * faces.length)];

export function renderGrid() {
    grid.innerHTML = '';
    gridData.forEach((row) => {
        row.forEach((cell) => {
            const div = document.createElement("div");
            div.className = cell;
            grid.appendChild(div);
            if (cell === CellType.HEAD) {
                div.innerHTML = `<b style="color: black; font-size: 18px; 
                display: flex; justify-content: center; align-items: center;">${randomFace}</b>`;
            }
        });
    });
}
