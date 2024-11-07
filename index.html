<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escape Room: Gerontology Concepts</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
        }
        .drop-zone {
            border: 2px dashed #ccc;
            padding: 20px;
            margin: 10px 0;
        }
        .activity {
            padding: 10px;
            margin: 5px;
            background-color: #e7e7e7;
            cursor: move;
        }
        .dropped-item {
            margin: 5px;
            padding: 5px;
            background-color: #d3ffd3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Escape Room: Gerontology Concepts</h1>
        <div id="room-content"></div>
    </div>

    <script>
        let currentRoom = 1;

        function startGame() {
            loadRoom(currentRoom);
        }

        function loadRoom(roomNumber) {
            const roomContent = document.getElementById("room-content");
            roomContent.innerHTML = "";  // Clear existing content

            if (roomNumber === 1) {
                roomContent.innerHTML = `
                    <h2>Room 1: Bottom-Up and Top-Down Approach</h2>
                    <p>Sort the following activities into 'Bottom-Up' and 'Top-Down' approaches:</p>
                    <div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Participating in community events</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Government health policies</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Individual health assessments</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">National aging strategy</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Peer support groups</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Training programs for caregivers</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Research studies on aging</div>
                        <div class="activity" draggable="true" ondragstart="drag(event)">Senior citizen advocacy initiatives</div>
                    </div>
                    <h3>Drop Zone:</h3>
                    <div class="drop-zone" id="bottom-up" ondrop="drop(event, 'bottom-up')" ondragover="allowDrop(event)">Bottom-Up</div>
                    <div class="drop-zone" id="top-down" ondrop="drop(event, 'top-down')" ondragover="allowDrop(event)">Top-Down</div>
                    <button onclick="validateRoom1()">Submit Answers</button>
                `;
            } else if (roomNumber === 2) {
                roomContent.innerHTML = `
                    <h2>Room 2: Top-Down Approach</h2>
                    <p>Enter a government initiative related to senior support in Singapore from the site: <a href="https://supportgowhere.life.gov.sg/categories/seniors" target="_blank">Seniors Support</a></p>
                    <textarea id="inputRoom2" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom2()">Submit Answer</button>
                `;
            } else if (roomNumber === 3) {
                roomContent.innerHTML = `
                    <h2>Room 3: Integrated Approach</h2>
                    <p>Select the most appropriate response for each category:</p>
                    <div>
                        <label>Health Services:</label>
                        <select id="integrated1">
                            <option value="">--Select--</option>
                            <option value="Home care services">Home care services</option>
                            <option value="Community health screenings">Community health screenings</option>
                            <option value="Telehealth consultations">Telehealth consultations</option>
                        </select>
                    </div>
                    <div>
                        <label>Social Support:</label>
                        <select id="integrated2">
                            <option value="">--Select--</option>
                            <option value="Support groups">Support groups</option>
                            <option value="Volunteer programs">Volunteer programs</option>
                            <option value="Family care initiatives">Family care initiatives</option>
                        </select>
                    </div>
                    <div>
                        <label>Wellness Programs:</label>
                        <select id="integrated3">
                            <option value="">--Select--</option>
                            <option value="Exercise classes">Exercise classes</option>
                            <option value="Nutrition workshops">Nutrition workshops</option>
                            <option value="Mental health seminars">Mental health seminars</option>
                        </select>
                    </div>
                    <button onclick="validateRoom3()">Submit Answer</button>
                `;
            } else if (roomNumber === 4) {
                roomContent.innerHTML = `
                    <h2>Room 4: Multiple Discrepancy Theory</h2>
                    <p>Describe at least 3 discrepancies that may affect Ms. Tan's life satisfaction:</p>
                    <textarea id="inputRoom4" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom4()">Submit Answer</button>
                `;
            } else if (roomNumber === 5) {
                roomContent.innerHTML = `
                    <h2>Room 5: Social Comparison Theory</h2>
                    <p>What are the potential effects of social comparison on Mr. Lim's well-being? Please provide a detailed response:</p>
                    <textarea id="inputRoom5" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom5()">Submit Answer</button>
                `;
            }
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.innerText);
        }

        function drop(event, target) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            const dropZone = document.getElementById(target);
            const item = document.createElement("div");
            item.className = "dropped-item";
            item.innerText = data;
            dropZone.appendChild(item);
        }

        function validateRoom1() {
            const bottomUpActivities = Array.from(document.getElementById("bottom-up").children).map(item => item.innerText);
            const topDownActivities = Array.from(document.getElementById("top-down").children).map(item => item.innerText);
            const correctBottomUp = ["Participating in community events", "Individual health assessments", "Peer support groups", "Research studies on aging"];
            const correctTopDown = ["Government health policies", "National aging strategy", "Training programs for caregivers", "Senior citizen advocacy initiatives"];
            
            if (bottomUpActivities.sort().toString() === correctBottomUp.sort().toString() &&
                topDownActivities.sort().toString() === correctTopDown.sort().toString()) {
                alert("Correct! Proceeding to Room 2.");
                loadRoom(2);
            } else {
                alert("Incorrect! Try again.");
            }
        }

        function validateRoom2() {
            const answer = document.getElementById("inputRoom2").value.toLowerCase();
            const validAnswers = ["senior friendly transport services", "community mental health services"];
            if (validAnswers.some(validAnswer => answer.includes(validAnswer))) {
                alert("Correct! Proceeding to Room 3.");
                loadRoom(3);
            } else {
                alert("Incorrect! Try again.");
            }
        }

        function validateRoom3() {
            if (document.getElementById("integrated1").value === "Home care services" &&
                document.getElementById("integrated2").value === "Support groups" &&
                document.getElementById("integrated3").value === "Exercise classes") {
                alert("Correct! Proceeding to Room 4.");
                loadRoom(4);
            } else {
                alert("Incorrect! Try again.");
            }
        }

        function validateRoom4() {
            const discrepancies = document.getElementById("inputRoom4").value.split(/\n+/).filter(Boolean);
            if (discrepancies.length >= 3) {
                alert("Correct! Proceeding to Room 5.");
                loadRoom(5);
            } else {
                alert("Please list at least 3 discrepancies.");
            }
        }

        function validateRoom5() {
            const answer = document.getElementById("inputRoom5").value;
            if (answer.trim().length > 0) {
                alert("Congratulations! You've completed the escape room!");
            } else {
                alert("Please provide a response.");
            }
        }

        startGame();
    </script>
</body>
</html>
