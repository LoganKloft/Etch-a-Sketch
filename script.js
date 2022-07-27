const container = document.querySelector('.container');
let penColor = 'black';

// Create 16 rows and add 16 squares to each
function CreateGrid(container) {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', ChangeColorHandler);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function ChangeColorHandler() {
    this.style.backgroundColor = 'black';
}

CreateGrid(container);