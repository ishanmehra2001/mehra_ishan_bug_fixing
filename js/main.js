
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece = document.querySelectorAll('.puzzle-board');
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	


function changeBGImage() {
	
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); 
}







function handleDrop(e) { 
    e.preventDefault();
    console.log('dropped something on me');
    
    // Check if the drop zone already contains a puzzle piece
    if (this.children.length === 0) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Drop zone already contains a puzzle piece');
        // Append the dragged piece back to the puzzle-pieces container
        document.querySelector('.puzzle-pieces').appendChild(draggedPiece);
    }
}

// 
// 
// function handleDrop(e) { 
//     e.preventDefault();
//     console.log('dropped something on me');
    
//     // Check if the drop zone already contains a puzzle piece
//     if (this.children.length === 0) {
//         this.appendChild(draggedPiece);
//     } else {
//         // Move the existing puzzle piece back to the original container
//         const originalContainer = document.querySelector('.puzzle-pieces');
//         originalContainer.appendChild(this.children[0]);
        
//         // Place the new puzzle piece in the drop zone
//         this.appendChild(draggedPiece);
//     }
// }


//updated2
// function handleDrop(e) { 
//     e.preventDefault();
//     console.log('dropped something on me');
    
//     // Check if the drop zone already contains a puzzle piece
//     if (this.children.length === 0) {
//         this.appendChild(draggedPiece);
//     } else {
//         console.log('Drop zone already contains a puzzle piece');
//     }
// }


//updated
// function handleDrop(e) { 
// 	e.preventDefault();
// 	console.log('dropped something on me');
	
// 	this.appendChild(draggedPiece);
// }



function resetGame() {
    // Remove all puzzle pieces from drop zones and append them back to puzzle-pieces container
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            document.querySelector('.puzzle-pieces').appendChild(zone.firstChild);
        }
    });
}


function changeBGImage() {
    let bgImagePath = `url(images/backGround${this.id}.jpg)`;
    puzzleBoard.style.backgroundImage = bgImagePath;
    
	puzzlePieces.forEach((piece, index) => {
		if (index === 0) {
		  piece.src = `images/topLeft${this.id}.jpg`;
		} else if (index === 1) {
		  piece.src = `images/topRight${this.id}.jpg`;
		} else if (index === 2) {
		  piece.src = `images/bottomLeft${this.id}.jpg`;
		} else if (index === 3) {
		  piece.src = `images/bottomRight${this.id}.jpg`;
		}
	  });


	  resetGame();

   
 }

 // Update puzzle piece images accordingly
    // puzzlePieces.forEach((piece, index) => {
    //     piece.src = `images/${piece.alt}${this.id}.jpg`;
    // });
	
    theButtons.forEach(button => button.addEventListener("click", changeBGImage));

 // add the drag event handling to the puzzle pieces
   puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

 // add the dragover AND the drop event handling to the drop zones
    dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

 // add the drop event handling
     dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));