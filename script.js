// Function to start the game and show the first room
function startGame() {
    document.getElementById("room-content").style.display = "block";
    loadRoom(1); // Start with Room 1
}

// Function to load the content for each room based on the room number
function loadRoom(roomNumber) {
    const roomContent = document.getElementById("room-content");

    if (roomNumber === 1) {
        roomContent.innerHTML = `
            <h2>Room 1: Bottom-Up Approach</h2>
            <p>To enter the center, select the programs or features that reflect the Bottom-Up Approach:</p>
            <div>
                <label><input type="checkbox" id="option1"> Physical exercise programs for seniors</label><br>
                <label><input type="checkbox" id="option2"> Government policy on senior subsidies</label><br>
                <label><input type="checkbox" id="option3"> Community-led art workshops</label><br>
                <label><input type="checkbox" id="option4"> National guidelines for senior care</label><br>
            </div>
            <button onclick="validateRoom1()">Submit Answer</button>
        `;
    }
}

// Function to validate Room 1's answer
function validateRoom1() {
    // Get the selected answers
    const option1 = document.getElementById("option1").checked;
    const option2 = document.getElementById("option2").checked;
    const option3 = document.getElementById("option3").checked;
    const option4 = document.getElementById("option4").checked;

    // Check if the selected options match the correct answer
    if (option1 && option3 && !option2 && !option4) {
        alert("Correct! You've found the right entry path.");
        loadRoom(2); // Move to Room 2
    } else {
        alert("Incorrect selection. Try again.");
    }
}
