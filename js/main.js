// variables
let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;

// Change background image
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    // Reset puzzle pieces when changing background image
    resetPuzzlePieces();
}

// Start dragging
function handleStartDrag() {
    console.log('started dragging this piece:', this);
    draggedPiece = this;
}

// Drag over
function handleDragOver(e) {
    e.preventDefault();
    console.log('dragged over me');
}

// Drop
function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
    // Check if the drop zone already has a puzzle piece
    if (this.children.length === 0) {
        this.appendChild(draggedPiece);
    }
}

// Reset puzzle pieces
function resetPuzzlePieces() {
    // Reparent all pieces to the drag zone
    puzzlePieces.forEach(piece => {
        document.querySelector(".puzzle-pieces").appendChild(piece);
    });
}

// Reset button click event
document.getElementById("resetBut").addEventListener("click", function () {
    // Reset background image
    puzzleBoard.style.backgroundImage = '';
    // Reset puzzle pieces
    resetPuzzlePieces();
});



// Drag back to drag zone
puzzleBoard.addEventListener("dragstart", function (e) {
    // Check if the target is a puzzle piece
    if (e.target.classList.contains("puzzle-image")) {
        // Reparent the puzzle piece to the drag zone
        document.querySelector(".puzzle-pieces").appendChild(e.target);
    }
});



// Event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));