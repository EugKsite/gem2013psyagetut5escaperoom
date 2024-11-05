function startGame() {
    document.getElementById("room-content").style.display = "block";
    loadRoom(1);
}

function loadRoom(roomNumber) {
    const roomContent = document.getElementById("room-content");
    
    // Example setup for Room 1 (Bottom-Up Approach)
    if (roomNumber === 1) {
        roomContent.innerHTML = `
            <h2>Room 1: Bottom-Up Approach</h2>
            <p>Find the entry point by arranging the clues correctly.</p>
            <!-- Puzzle content goes here -->
            <button onclick="validateRoom1()">Submit Answer</button>
        `;
    }
}

function validateRoom1() {
    // Validation logic for Room 1
    alert("Room 1 answer submitted! Proceed to the next room.");
    loadRoom(2);  // This will load the next room
}
