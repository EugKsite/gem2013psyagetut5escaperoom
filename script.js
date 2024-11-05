<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
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
    <script>
        let currentRoom = 1;

        function startGame() {
            loadRoom(currentRoom);
        }

        function loadRoom(roomNumber) {
            const roomContent = document.getElementById("room-content");

            // Clear existing content
            roomContent.innerHTML = "";

            if (roomNumber === 1) {
                // Room 1: Bottom-Up and Top-Down Sorting Activity
                roomContent.innerHTML = `
                    <h2>Room 1: Bottom-Up and Top-Down Approach</h2>
                    <img src="https://via.placeholder.com/400" alt="Room 1 Image" />
                    <p>Sort the following activities into 'Bottom-Up' and 'Top-Down' approaches:</p>
                    <div>
                        <div class="activity" draggable="true">Participating in community events</div>
                        <div class="activity" draggable="true">Government health policies</div>
                        <div class="activity" draggable="true">Individual health assessments</div>
                        <div class="activity" draggable="true">National aging strategy</div>
                        <div class="activity" draggable="true">Peer support groups</div>
                        <div class="activity" draggable="true">Training programs for caregivers</div>
                        <div class="activity" draggable="true">Research studies on aging</div>
                        <div class="activity" draggable="true">Senior citizen advocacy initiatives</div>
                    </div>
                    <h3>Drop Zone:</h3>
                    <div class="drop-zone" id="bottom-up" ondrop="drop(event, 'bottom-up')" ondragover="allowDrop(event)">Bottom-Up</div>
                    <div class="drop-zone" id="top-down" ondrop="drop(event, 'top-down')" ondragover="allowDrop(event)">Top-Down</div>
                    <button onclick="validateRoom1()">Submit Answers</button>
                `;
                addDragAndDropListeners();
            } else if (roomNumber === 2) {
                // Room 2: Top-Down Approach with Larger Input Box
                roomContent.innerHTML = `
                    <h2>Room 2: Top-Down Approach</h2>
                    <img src="https://via.placeholder.com/400" alt="Room 2 Image" />
                    <p>Enter a government initiative related to senior support in Singapore from the following site: <a href="https://supportgowhere.life.gov.sg/categories/seniors" target="_blank">Seniors Support</a></p>
                    <textarea id="inputRoom2" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom2()">Submit Answer</button>
                `;
            } else if (roomNumber === 3) {
                // Room 3: Integrated Approach with More Dropdown Options
                roomContent.innerHTML = `
                    <h2>Room 3: Integrated Approach</h2>
                    <img src="https://via.placeholder.com/400" alt="Room 3 Image" />
                    <p>Select the most appropriate response for each category:</p>
                    <div>
                        <label for="integrated1">Health Services:</label>
                        <select id="integrated1">
                            <option value="">--Select--</option>
                            <option value="Home care services">Home care services</option>
                            <option value="Community health screenings">Community health screenings</option>
                            <option value="Telehealth consultations">Telehealth consultations</option>
                            <option value="Rehabilitation programs">Rehabilitation programs</option>
                            <option value="Nursing home care">Nursing home care</option>
                        </select>
                    </div>
                    <div>
                        <label for="integrated2">Social Support:</label>
                        <select id="integrated2">
                            <option value="">--Select--</option>
                            <option value="Support groups">Support groups</option>
                            <option value="Volunteer programs">Volunteer programs</option>
                            <option value="Family care initiatives">Family care initiatives</option>
                            <option value="Community centers">Community centers</option>
                            <option value="Public outreach programs">Public outreach programs</option>
                        </select>
                    </div>
                    <div>
                        <label for="integrated3">Wellness Programs:</label>
                        <select id="integrated3">
                            <option value="">--Select--</option>
                            <option value="Exercise classes">Exercise classes</option>
                            <option value="Nutrition workshops">Nutrition workshops</option>
                            <option value="Mental health seminars">Mental health seminars</option>
                            <option value="Art therapy sessions">Art therapy sessions</option>
                            <option value="Meditation retreats">Meditation retreats</option>
                        </select>
                    </div>
                    <button onclick="validateRoom3()">Submit Answer</button>
                `;
            } else if (roomNumber === 4) {
                // Room 4: Multiple Discrepancy Theory with More Input Options
                roomContent.innerHTML = `
                    <h2>Room 4: Multiple Discrepancy Theory</h2>
                    <img src="https://via.placeholder.com/400" alt="Room 4 Image" />
                    <p>Consider the following scenario:</p>
                    <p>Ms. Tan, an 80-year-old woman, lives alone and is feeling isolated. She used to enjoy attending community events but has stopped going. Recently, her family has been very busy and unable to visit her. Reflect on how her life satisfaction may be impacted by various discrepancies.</p>
                    
                    <p>Describe at least 3 discrepancies that may affect Ms. Tan's life satisfaction:</p>
                    <textarea id="inputRoom4" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom4()">Submit Answer</button>
                `;
            } else if (roomNumber === 5) {
                // Room 5: Social Comparison Theory with More Input Options
                roomContent.innerHTML = `
                    <h2>Room 5: Social Comparison Theory</h2>
                    <img src="https://via.placeholder.com/400" alt="Room 5 Image" />
                    <p>Mr. Lim is a 75-year-old retiree who often compares his life to that of his friends. He feels he is not doing as well as they are. As a result, he sometimes feels inadequate and unhappy.</p>
                    
                    <p>What are the potential effects of social comparison on Mr. Lim's well-being? Please provide a detailed response:</p>
                    <textarea id="inputRoom5" rows="4" cols="50" placeholder="Type your answer here..."></textarea>
                    <button onclick="validateRoom5()">Submit Answer</button>
                `;
            }
        }

        // Drag and Drop Logic for Room 1
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

        function addDragAndDropListeners() {
            const activities = document.querySelectorAll(".activity");
            activities.forEach(activity => {
                activity.addEventListener("dragstart", drag);
            });
        }

        // Room 1 Validation
        function validateRoom1() {
            const bottomUpActivities = document.getElementById("bottom-up").children;
            const topDownActivities = document.getElementById("top-down").children;

            const correctBottomUp = ["Participating in community events", "Individual health assessments", "Peer support groups", "Research studies on aging"];
            const correctTopDown = ["Government health policies", "National aging strategy", "Training programs for caregivers", "Senior citizen advocacy initiatives"];

            let bottomUpCorrect = true;
            let topDownCorrect = true;

            for (let activity of bottomUpActivities) {
                if (!correctBottomUp.includes(activity.innerText)) {
                    bottomUpCorrect = false;
                    break;
                }
            }

            for (let activity of topDownActivities) {
                if (!correctTopDown.includes(activity.innerText)) {
                    topDownCorrect = false;
                    break;
                }
            }

            if (bottomUpCorrect && topDownCorrect) {
                alert("Congratulations! You've sorted the activities correctly. Entering Room 2.");
                loadRoom(2);
            } else {
                alert("Great effort! Remember to think about which activities belong to each approach. Try again!");
            }
        }

        // Room 2 Validation
        function validateRoom2() {
            const answer = document.getElementById("inputRoom2").value.toLowerCase();
            const validAnswers = [
                "senior friendly transport services",
                "community mental health services",
                "active aging programs",
                "elderly day care services",
                "digital literacy programs for seniors"
                // Add more valid answers as needed based on the website content
            ];

            if (validAnswers.some(validAnswer => answer.includes(validAnswer))) {
                alert("Congratulations! You've identified a relevant government initiative. Entering Room 3.");
                loadRoom(3);
            } else {
                alert("You're on the right track! Check the website for initiatives and try again.");
            }
        }

        // Room 3 Validation
        function validateRoom3() {
            const selected1 = document.getElementById("integrated1").value;
            const selected2 = document.getElementById("integrated2").value;
            const selected3 = document.getElementById("integrated3").value;

            const correctAnswers = {
                integrated1: "Home care services",
                integrated2: "Support groups",
                integrated3: "Exercise classes"
            };

            if (selected1 === correctAnswers.integrated1 &&
                selected2 === correctAnswers.integrated2 &&
                selected3 === correctAnswers.integrated3) {
                alert("Congratulations! You've made the correct selections. Entering Room 4.");
                loadRoom(4);
            } else {
                alert("You're on the right track! Review your selections and try again.");
            }
        }

        // Room 4 Validation
        function validateRoom4() {
            const answer = document.getElementById("inputRoom4").value;
            // Check for at least 3 discrepancies mentioned
            const discrepancies = answer.split(/\n+/).filter(Boolean);
            if (discrepancies.length >= 3) {
                alert("Congratulations! You've identified relevant discrepancies. Entering Room 5.");
                loadRoom(5);
            } else {
                alert("Nice try! Make sure to mention at least 3 discrepancies affecting Ms. Tan's satisfaction.");
            }
        }

        // Room 5 Validation
        function validateRoom5() {
            const answer = document.getElementById("inputRoom5").value.toLowerCase();
            if (answer.length > 0) {
                alert("Congratulations! You've explored the effects of social comparison. Well done!");
                // Optionally: load a completion screen or message
            } else {
                alert("Don't forget to share your thoughts! Try again.");
            }
        }

        window.onload = startGame;
    </script>
</head>
<body>
    <div class="container">
        <h1>Escape Room: Gerontology Concepts</h1>
        <div id="room-content"></div>
    </div>
</body>
</html>
