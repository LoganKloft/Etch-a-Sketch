const container = document.querySelector('.container');
const gridSizeBtn = document.querySelector('.grid-size-btn');

let penColor = 'black';
let gridSize = 16;

gridSizeBtn.addEventListener('click', changeGridSize);

function changeGridSize() {
    let size = +prompt("Enter a desired grid size");
    if (!size) return;
    if (size < 1) return;
    if (size > 100) return;

    gridSize = size;

    ClearGrid(container);
    CreateGrid(container);
}

function CreateGrid(container) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', ChangeColorHandler);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function ClearGrid(container) {
    container.innerHTML = '';
}

function ChangeColorHandler() {
    this.style.backgroundColor = penColor;
}

CreateGrid(container);