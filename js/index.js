
function initializeBoard() {
    board = [];
} 

function renderBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = '';

            // Add event listener to drop a piece when clicked
            cellDiv.addEventListener('click', () => handleClick(col));

            rowDiv.appendChild(cellDiv);
        }
        boardDiv.appendChild(rowDiv);
    
// Start game button
document.getElementById("start-button").addEventListener('click', () => {
    initializeBoard();
    renderBoard();
});
