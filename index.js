
  const sketchBoard = document.querySelector('.sketch-board');
  const sketchBoardHeight = getComputedStyle(sketchBoard).height;
  const sketchBoardWidth = getComputedStyle(sketchBoard).width;
  
  let defaultNbrOfCell = 16 ;

function drawGridWithCustomNbrOfCells(){
  let customNbrOfCells = parseInt(prompt("Enter the number of squares: "));
  while(customNbrOfCells > 100 || !customNbrOfCells){
    customNbrOfCells = parseInt(prompt("Enter a valid number [between 1 - 100]: "))
  }

  sketchBoard.innerHTML = '';
  drawGrid(customNbrOfCells)
} 



function drawGrid(nbrOfCells){
// draw the nbrOfCells x nbrOfCells Grid

  for (let row = 1; row <= nbrOfCells; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.id = `${row}`;
    rowDiv.className = 'row';
    for (let col = 1; col <= nbrOfCells; col++) {
      
      const colDiv = document.createElement('div');
      colDiv.id = `${col}`
      colDiv.className = 'cell';
      colDiv.style.height = `${parseFloat(sketchBoardHeight) / nbrOfCells}px`;
      colDiv.style.width = `${parseFloat(sketchBoardWidth) / nbrOfCells}px`;
      rowDiv.style.height = colDiv.style.height;
      rowDiv.appendChild(colDiv)

    }
    sketchBoard.appendChild(rowDiv)
  }
  
  addHoverEffectToAllCells();
}

function addHoverEffectToAllCells(){
// add mouseover event on every cell

document.querySelectorAll('.cell').forEach((cell) =>{
  cell.addEventListener('mouseover', () => cell.style.backgroundColor = 'black')
})

}

document.querySelector('.btn-nbr-squares').addEventListener('click', drawGridWithCustomNbrOfCells)

drawGrid(defaultNbrOfCell);