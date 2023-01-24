const sketchBoard = document.querySelector('.sketch-board');
const sketchBoardHeight = getComputedStyle(sketchBoard).height;
const sketchBoardWidth = getComputedStyle(sketchBoard).width;

let nbrCells = 16 ;

for (let row = 1; row <= nbrCells; row++) {
  const rowDiv = document.createElement('div');
  
  for (let columns = 1; columns <= nbrCells; columns++) {
    
    const colDiv = document.createElement('div');
    colDiv.style.border = '1px solid black';
    colDiv.style.height = `${parseFloat(sketchBoardHeight) / nbrCells}px`;
    colDiv.style.width = `${parseFloat(sketchBoardWidth) / nbrCells}px `;
    rowDiv.style.height = colDiv.style.height;
    rowDiv.appendChild(colDiv)

    sketchBoard.appendChild(rowDiv)
  }
}