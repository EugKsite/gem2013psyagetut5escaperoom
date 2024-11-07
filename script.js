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
    <p>Click the button below to start your journey through Room 1.</p>
    <button onclick="startGame()">Start</button>
    
    <div id="room-content" class="room-container"></div>

    <script>
        function startGame() {
            loadRoom();
        }

        function loadRoom() {
            const roomContent = document.getElementById("room-content");
            roomContent.innerHTML = `
                <h2>Room 1: Bottom-Up and Top-Down Approach</h2>
                <p>Sort the following activities into "Bottom-Up" and "Top-Down" approaches:</p>
                <ul>
                    <li>Gathering health data from older adults.</li>
                    <li>Designing cognitive assessments based on theoretical models.</li>
                    <li>Organizing a group discussion to understand aging experiences.</li>
                    <li>Creating strategies based on scientific literature.</li>
                </ul>
                <button onclick="validateRoom()">Submit</button>
                <div class="result" id="room-result"></div>
            `;
        }

        function validateRoom() {
            const result = document.getElementById("room-result");
            result.innerHTML = "Correct! You've completed Room 1.";
        }
    </script>
</body>
</html>
