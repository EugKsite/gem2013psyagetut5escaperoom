<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Escape Room: Gerontology Concepts</title>
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
            const bottomUpActivities = document.querySelectorAll("#bottom-up .dropped-item");
            const topDownActivities = document.querySelectorAll("#top-down .dropped-item");

            let bottomUpCorrect = 0;
            let topDownCorrect = 0;

            bottomUpActivities.forEach(activity => {
                if (activity.innerText === "Participating in community events" ||
                    activity.innerText === "Peer support groups" ||
                    activity.innerText === "Individual health assessments" ||
                    activity.innerText === "Training programs for caregivers") {
                    bottomUpCorrect++;
                }
            });

            topDownActivities.forEach(activity => {
                if (activity.innerText === "Government health policies" ||
                    activity.innerText === "National aging strategy" ||
                    activity.innerText === "Research studies on aging" ||
                    activity.innerText === "Senior citizen advocacy initiatives") {
                    topDownCorrect++;
                }
            });

            alert(`You got ${bottomUpCorrect} correct in Bottom-Up and ${topDownCorrect} correct in Top-Down!`);
            currentRoom++;
            loadRoom(currentRoom);
        }

        // Room 2 Validation
        function validateRoom2() {
            const input = document.getElementById("inputRoom2").value;
            alert(`Your answer: ${input}`);
            currentRoom++;
            loadRoom(currentRoom);
        }

        // Room 3 Validation
        function validateRoom3() {
            const integrated1 = document.getElementById("integrated1").value;
            const integrated2 = document.getElementById("integrated2").value;
            const integrated3 = document.getElementById("integrated3").value;
            alert(`Your answers: ${integrated1}, ${integrated2}, ${integrated3}`);
            currentRoom++;
            loadRoom(currentRoom);
        }

        // Room 4 Validation
        function validateRoom4() {
            const input = document.getElementById("inputRoom4").value;
            alert(`Your answer: ${input}`);
            currentRoom++;
            loadRoom(currentRoom);
        }

        // Room 5 Validation
        function validateRoom5() {
            const input = document.getElementById("inputRoom5").value;
            alert(`Your answer: ${input}`);
            alert("Congratulations! You've completed all rooms!");
        }

        window.onload = startGame;
    </script>
</head>
<body>
    <h1>Welcome to the Escape Room: Gerontology Concepts</h1>
    <div id="room-content"></div>
</body>
</html>
