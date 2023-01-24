const sketchBoard = document.querySelector('.sketch-board');
const sketchBoardHeight = getComputedStyle(sketchBoard).height;
const sketchBoardWidth = getComputedStyle(sketchBoard).width;

let nbrCells = 16 ;

for (let row = 1; row <= nbrCells; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.id = `${row}`;
  rowDiv.className = 'row';
  for (let col = 1; col <= nbrCells; col++) {
    
    const colDiv = document.createElement('div');
    colDiv.id = `${col}`
    colDiv.className = 'cell';
    colDiv.style.border = '1px solid black';
    colDiv.style.height = `${parseFloat(sketchBoardHeight) / nbrCells}px`;
    colDiv.style.width = `${parseFloat(sketchBoardWidth) / nbrCells}px`;
    rowDiv.style.height = colDiv.style.height;
    rowDiv.appendChild(colDiv)

  }
  sketchBoard.appendChild(rowDiv)
}

document.querySelectorAll('.cell').forEach((cell) =>{
  cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'black')
})