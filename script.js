<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gerontology Escape Room</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f8ff;
            color: #333;
            padding: 20px;
        }
        h1, h2 {
            color: #2f4f4f;
        }
        .room-container {
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #45a049;
        }
        .result {
            margin-top: 10px;
            font-size: 18px;
            color: #d9534f;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Gerontology Escape Room</h1>
    <p>Click the button below to start your journey through the five rooms.</p>
    <button onclick="startGame()">Start</button>
    
    <div id="room-content" class="room-container"></div>

    <script>
        let currentRoom = 1;

        function startGame() {
            loadRoom(currentRoom);
        }

        function loadRoom(roomNumber) {
            const roomContent = document.getElementById("room-content");
            roomContent.innerHTML = "";  // Clears previous content

            // Load content based on the room number
            if (roomNumber === 1) {
                roomContent.innerHTML = `
                    <h2>Room 1: Bottom-Up and Top-Down Approach</h2>
                    <p>Sort the following activities into "Bottom-Up" and "Top-Down" approaches:</p>
                    <ul>
                        <li>Gathering health data from older adults.</li>
                        <li>Designing cognitive assessments based on theoretical models.</li>
                        <li>Organizing a group discussion to understand aging experiences.</li>
                        <li>Creating strategies based on scientific literature.</li>
                    </ul>
                    <button onclick="validateRoom1()">Submit</button>
                    <div class="result" id="room1-result"></div>
                `;
            } else if (roomNumber === 2) {
                roomContent.innerHTML = `
                    <h2>Room 2: Coping with Cognitive Aging</h2>
                    <p>Which of the following is a sign of cognitive decline?</p>
                    <ul>
                        <li>Forgetfulness that disrupts daily activities.</li>
                        <li>Occasional forgetfulness when stressed.</li>
                        <li>Memory loss linked to a specific event.</li>
                    </ul>
                    <button onclick="validateRoom2()">Submit</button>
                    <div class="result" id="room2-result"></div>
                `;
            } else if (roomNumber === 3) {
                roomContent.innerHTML = `
                    <h2>Room 3: Psychological Aging</h2>
                    <p>Choose the correct statement about psychological aging:</p>
                    <ul>
                        <li>Aging has no impact on mental health.</li>
                        <li>Older adults can experience depression due to life changes.</li>
                        <li>Cognitive abilities never change as we age.</li>
                    </ul>
                    <button onclick="validateRoom3()">Submit</button>
                    <div class="result" id="room3-result"></div>
                `;
            } else if (roomNumber === 4) {
                roomContent.innerHTML = `
                    <h2>Room 4: Quality of Life in Older Adults</h2>
                    <p>Which factors most contribute to an older adult’s quality of life?</p>
                    <ul>
                        <li>Social engagement, health, financial stability.</li>
                        <li>Access to healthcare and sufficient sleep.</li>
                        <li>Having multiple hobbies and interests.</li>
                    </ul>
                    <button onclick="validateRoom4()">Submit</button>
                    <div class="result" id="room4-result"></div>
                `;
            } else if (roomNumber === 5) {
                roomContent.innerHTML = `
                    <h2>Room 5: Geragogy Applications</h2>
                    <p>Which of the following is an effective geragogical technique?</p>
                    <ul>
                        <li>Using multimedia tools to engage older learners.</li>
                        <li>Assuming older adults don’t need active participation.</li>
                        <li>Lecturing in a traditional, non-interactive manner.</li>
                    </ul>
                    <button onclick="validateRoom5()">Submit</button>
                    <div class="result" id="room5-result"></div>
                `;
            }
        }

        function validateRoom1() {
            const result = document.getElementById("room1-result");
            result.innerHTML = "Correct! Moving to Room 2.";
            currentRoom = 2;
            loadRoom(currentRoom);
        }

        function validateRoom2() {
            const result = document.getElementById("room2-result");
            result.innerHTML = "Correct! Moving to Room 3.";
            currentRoom = 3;
            loadRoom(currentRoom);
        }

        function validateRoom3() {
            const result = document.getElementById("room3-result");
            result.innerHTML = "Correct! Moving to Room 4.";
            currentRoom = 4;
            loadRoom(currentRoom);
        }

        function validateRoom4() {
            const result = document.getElementById("room4-result");
            result.innerHTML = "Correct! Moving to Room 5.";
            currentRoom = 5;
            loadRoom(currentRoom);
        }

        function validateRoom5() {
            const result = document.getElementById("room5-result");
            result.innerHTML = "Congratulations! You've completed the Escape Room.";
        }
    </script>
</body>
</html>
