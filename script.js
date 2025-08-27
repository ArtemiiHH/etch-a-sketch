// Etch-a-Sketch Project



// Add container to DOM
const container = document.querySelector('#container');

// Loop to create 16x16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }

    container.appendChild(row);
};