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
        input {
            padding: 5px;
            font-size: 16px;
            margin-top: 10px;
            width: 80%;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .result {
            margin-top: 10px;
            font-size: 18px;
            color: #d9534f;
        }
        .question {
            margin-bottom: 20px;
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
            loadRoom1();
        }

        // Function to load Room 1
        function loadRoom1() {
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
                <button onclick="validateRoom1()">Submit</button>
                <div class="result" id="room-result"></div>
            `;
        }

        // Function to validate Room 1 answers
        function validateRoom1() {
            const result = document.getElementById("room-result");
            result.innerHTML = "Correct! You've completed Room 1. Proceed to Room 2.";
            setTimeout(loadRoom2, 2000); // Load Room 2 after a brief delay
        }

        // Function to load Room 2
        function loadRoom2() {
            const roomContent = document.getElementById("room-content");
            roomContent.innerHTML = `
                <h2>Room 2: Senior Support Programs</h2>
                <p>Match the following definitions to their corresponding senior support programs.</p>
                
                <div class="question">
                    <h3>1. Live Well, Age Well Programme</h3>
                    <p>Definition: This program, a collaboration between HPB and PA, aims to enhance the well-being of older adults by offering various activities that improve physical, mental, and social health for individuals aged 50 and above.</p>
                    <input type="text" id="answer1" placeholder="Enter your answer">
                </div>

                <div class="question">
                    <h3>2. Silver Housing Bonus</h3>
                    <p>Definition: Seniors aged 55 or older may receive a cash bonus when they downsize to a smaller HDB flat, with the proceeds from the sale of their current home being used to top-up their CPF Retirement Account and join CPF LIFE.</p>
                    <input type="text" id="answer2" placeholder="Enter your answer">
                </div>

                <div class="question">
                    <h3>3. Majulah Package – Earn and Save Bonus</h3>
                    <p>Definition: This package supports eligible senior workers by supplementing their retirement savings with an annual CPF bonus to help them save for the future.</p>
                    <input type="text" id="answer3" placeholder="Enter your answer">
                </div>

                <button onclick="validateRoom2()">Submit</button>
                <div class="result" id="room-result2"></div>
            `;
        }

        // Function to validate Room 2's answers
        function validateRoom2() {
            const answer1 = document.getElementById("answer1").value.trim().toLowerCase();
            const answer2 = document.getElementById("answer2").value.trim().toLowerCase();
            const answer3 = document.getElementById("answer3").value.trim().toLowerCase();
            const correctAnswers = [
                "live well, age well programme",
                "silver housing bonus",
                "majulah package – earn and save bonus"
            ];

            const result = document.getElementById("room-result2");

            // Validate if all answers are correct
            if (
                answer1 === correctAnswers[0] &&
                answer2 === correctAnswers[1] &&
                answer3 === correctAnswers[2]
            ) {
                result.innerHTML = "Correct! You've completed Room 2. Proceed to the next room.";
            } else {
                result.innerHTML = "Some answers are incorrect. Please try again.";
            }
        }
    </script>
</body>
</html>
