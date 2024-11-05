// Function to start the game and show the first room
function startGame() {
    document.getElementById("room-content").style.display = "block";
    loadRoom(1); // Start with Room 1
}

// Function to load the content for each room based on the room number
function loadRoom(roomNumber) {
    const roomContent = document.getElementById("room-content");

    if (roomNumber === 1) {
        // Room 1: Bottom-Up Approach
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
    } else if (roomNumber === 2) {
        // Room 2: Top-Down Approach
        roomContent.innerHTML = `
            <h2>Room 2: Top-Down Approach</h2>
            <p>Identify the top-down policies implemented at the national level for seniors' well-being.</p>
            <input type="text" id="room2Answer" placeholder="Enter your answer">
            <button onclick="validateRoom2()">Submit Answer</button>
            <p>Hint: Think about government-led initiatives in Singapore, like grants and schemes for elder care.</p>
        `;
    } else if (roomNumber === 3) {
        // Room 3: Integrated Approach
        roomContent.innerHTML = `
            <h2>Room 3: Integrated Approach</h2>
            <p>Match these two lists to show how public, private, and community efforts come together:</p>
            <div>
                <select id="publicChoice">
                    <option value="">Select Public Initiative</option>
                    <option value="Grants for elder-friendly facilities">Grants for elder-friendly facilities</option>
                </select>
                <select id="privateChoice">
                    <option value="">Select Private Initiative</option>
                    <option value="Company-sponsored wellness programs">Company-sponsored wellness programs</option>
                </select>
                <select id="communityChoice">
                    <option value="">Select Community Initiative</option>
                    <option value="Volunteers supporting social activities">Volunteers supporting social activities</option>
                </select>
            </div>
            <button onclick="validateRoom3()">Submit Answer</button>
        `;
    } else if (roomNumber === 4) {
        // Room 4: Multiple Discrepancy Theory
        roomContent.innerHTML = `
            <h2>Room 4: Multiple Discrepancy Theory</h2>
            <p>Identify which needs are satisfied or unsatisfied for an individual to enhance life satisfaction:</p>
            <input type="text" id="room4Answer" placeholder="Enter needs (e.g., physical, social, psychological)">
            <button onclick="validateRoom4()">Submit Answer</button>
            <p>Hint: Think about how comparing different areas of life satisfaction (like health, relationships) applies here.</p>
        `;
    } else if (roomNumber === 5) {
        // Room 5: Social Comparison Theory
        roomContent.innerHTML = `
            <h2>Room 5: Social Comparison Theory</h2>
            <p>Enter a reason why social comparison might affect a senior’s well-being. Consider how comparing with others can impact emotions.</p>
            <input type="text" id="room5Answer" placeholder="Enter your answer">
            <button onclick="validateRoom5()">Submit Answer</button>
            <p>Hint: Think about how seeing others’ success or struggles might affect a person’s view on aging.</p>
        `;
    }
}

// Room 1 Validation
function validateRoom1() {
    const option1 = document.getElementById("option1").checked;
    const option2 = document.getElementById("option2").checked;
    const option3 = document.getElementById("option3").checked;
    const option4 = document.getElementById("option4").checked;

    if (option1 && option3 && !option2 && !option4) {
        alert("Correct! Proceeding to Room 2.");
        loadRoom(2);
    } else {
        alert("Incorrect selection. Try again.");
    }
}

// Room 2 Validation
function validateRoom2() {
    const answer = document.getElementById("room2Answer").value.toLowerCase();
    if (answer.includes("policy") || answer.includes("initiative")) {
        alert("Correct! Proceeding to Room 3.");
        loadRoom(3);
    } else {
        alert("Incorrect. Think about government-led policies for elder care.");
    }
}

// Room 3 Validation
function validateRoom3() {
    const publicChoice = document.getElementById("publicChoice").value;
    const privateChoice = document.getElementById("privateChoice").value;
    const communityChoice = document.getElementById("communityChoice").value;

    if (publicChoice && privateChoice && communityChoice) {
        alert("Correct! Moving to Room 4.");
        loadRoom(4);
    } else {
        alert("Please select an initiative from each category.");
    }
}

// Room 4 Validation
function validateRoom4() {
    const answer = document.getElementById("room4Answer").value.toLowerCase();
    if (answer.includes("physical") || answer.includes("social") || answer.includes("psychological")) {
        alert("Correct! Entering Room 5.");
        loadRoom(5);
    } else {
        alert("Incorrect. Think about different types of needs for life satisfaction.");
    }
}

// Room 5 Validation
function validateRoom5() {
    const answer = document.getElementById("room5Answer").value.toLowerCase();
    if (answer.includes("comparison") || answer.includes("self-esteem") || answer.includes("well-being")) {
        alert("Congratulations! You've completed the escape room and saved the seniors!");
        document.getElementById("room-content").innerHTML = "<h2>Congratulations!</h2><p>You have successfully navigated all rooms and rescued everyone!</p>";
    } else {
        alert("Incorrect. Think about the impact of comparing oneself to others.");
    }
}
