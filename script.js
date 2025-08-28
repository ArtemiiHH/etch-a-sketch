// Etch-a-Sketch Project



// Add container to DOM
const container = document.querySelector('#board');

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
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if (e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = `#${randomColor}`;
    }
});

// Button actions
// Clear Button
clearBtn.addEventListener('click', () => {
    const allCells = document.querySelectorAll('.cell');
    for (const cell of allCells) {
        cell.style.backgroundColor = '';
    }
});

// Change Grid Size Button
changeGridSizeBtn.addEventListener('click', () => {
    const input = Number(prompt('Enter a number of squares you want on each side (1 - 100)'));

    if (input < 1 || input > 100 || isNaN(input)) {
        alert('Enter a valid number from 1 - 100.');
    } else if (input >= 1 || input <= 100) {
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
    }
});