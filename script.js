// Etch-a-Sketch Project



// Add container to DOM
const container = document.querySelector('#board');

// Result text
const result = document.querySelector('h2');

// Buttons
const changeGridSizeBtn = document.querySelector('.change-grid-btn');
const clearBtn = document.querySelector('.clear-btn');

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

// Event listener on all container (checks if its a cell)
container.addEventListener('mouseover', (e) => {
    // Paint random color for every cell
    if (e.target.classList.contains('cell')) {
        // Generate a random color
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    }
});

// Button actions
// Clear Button
clearBtn.addEventListener('click', () => {
    // Get all cells
    const allCells = document.querySelectorAll('.cell');
    // Change background color of the cells to default
    for (const cell of allCells) {
        cell.style.backgroundColor = '';
        result.textContent = `Canvas was cleared`;
    }
});

// Change Grid Size Button
changeGridSizeBtn.addEventListener('click', () => {
    // Input window
    const input = Number(prompt('Enter a number of squares you want on each side (1 - 100)'));

    // Create new grid with given input number
    if (input < 1 || input > 100 || isNaN(input)) {
        alert('Enter a valid number from 1 - 100.');
    } else {
        container.innerHTML = '';
        let n = input;

        for (let i = 0; i < n; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < n; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }

            container.appendChild(row);
        }

        // Display text result of changing grid size
        result.textContent = `You have changed the grid to ${n}x${n} pixels`;
    }
});