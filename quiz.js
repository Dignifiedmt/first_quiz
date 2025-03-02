// script.js

let currentQuestionIndex = 0;
let score = 0;
let userName = "";

const questions = [
    {
        question: "What percentage of casualties die due to lack of access to first aid according to WHO?",
        options: [60, 40, 70, 50],
        correctAnswer: 60,
    },
    {
        question: "What is the name of the organization responsible for first aid in Nigeria?",
        options: ["Red Cross", "FEMA", "WHO", "UNICEF"],
        correctAnswer: "Red Cross",
    },
    {
        question: "What is CPR?",
        options: ["Cranial Pressure Relief", "Cardiopulmonary Resuscitation", "Central Pulmonary Rescue", "Cardio Pressure Regimen"],
        correctAnswer: "Cardiopulmonary Resuscitation",
    },
    {
        question: "What is the recovery position?",
        options: ["Positioning on their back", "Positioning on their side", "Positioning on their stomach", "Positioning upright"],
        correctAnswer: "Positioning on their side",
    },
    {
        question: "What is the primary purpose of first aid?",
        options: ["Provide professional treatment", "Diagnose injury", "Stabilize until help arrives", "Provide medication"],
        correctAnswer: "Stabilize until help arrives",
    },
    {
        question: "Why is the recovery position important?",
        options: ["It helps to keep the airway open", "It prevents choking", "It reduces the risk of aspiration", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What should you do if you suspect a person is choking?",
        options: ["Call for help", "Perform the Heimlich maneuver", "Give them water", "Slap them on the back"],
        correctAnswer: "Perform the Heimlich maneuver"
    },
    {
        question: "Which of the following is a sign of a stroke?",
        options: ["Sudden weakness on one side", "Speech difficulty", "Sudden confusion", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "How do you maintain an open airway in an unconscious person?",
        options: ["By tilting their head back and lifting the chin", "By placing a towel under their head", "By patting their back", "By positioning their head to the side"],
        correctAnswer: "By tilting their head back and lifting the chin"
    },
    {
        question: "When should you perform CPR?",
        options: ["If the person is not breathing", "If the person has chest pain", "If the person is unconscious", "All of the above"],
        correctAnswer: "If the person is not breathing"
    },
    /*{
        question: "What is the first step in treating a burn?",
        options: ["Apply cold water", "Cover with a bandage", "Apply ice", "Place under a cold towel"],
        correctAnswer: "Apply cold water"
    },
    {
        question: "What should you do if a person is having an asthma attack?",
        options: ["Give them their inhaler", "Encourage them to breathe slowly", "Call for help", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the best way to stop a nosebleed?",
        options: ["Pinch the nostrils and lean forward", "Lie down and tilt the head back", "Place ice on the forehead", "Massage the nose"],
        correctAnswer: "Pinch the nostrils and lean forward"
    },
    {
        question: "How should you treat a sprained ankle?",
        options: ["Apply heat", "Apply ice and elevate the ankle", "Massage the ankle", "Walk on the ankle to stretch it"],
        correctAnswer: "Apply ice and elevate the ankle"
    },
    {
        question: "How do you deal with a heat stroke victim?",
        options: ["Give them ice", "Cool them down with water and shade", "Let them drink alcohol", "None of the above"],
        correctAnswer: "Cool them down with water and shade"
    },
    {
        question: "What is the first thing you should do in the event of an electrical burn?",
        options: ["Call for help", "Remove the person from the electrical source", "Apply cold water", "Move the person to a safe place"],
        correctAnswer: "Remove the person from the electrical source"
    },
    {
        question: "What is anaphylaxis?",
        options: ["A type of burn", "An allergic reaction", "A heart attack", "A type of stroke"],
        correctAnswer: "An allergic reaction"
    },
    {
        question: "How do you treat an insect sting?",
        options: ["Apply ice", "Use a painkiller", "Remove the stinger and apply ice", "Massage the area"],
        correctAnswer: "Remove the stinger and apply ice"
    },
    {
        question: "What should you do if a person is bleeding heavily?",
        options: ["Apply direct pressure to the wound", "Clean the wound first", "Elevate the injured limb", "None of the above"],
        correctAnswer: "Apply direct pressure to the wound"
    },
    {
        question: "How can you tell if someone is having a heart attack?",
        options: ["Chest pain", "Shortness of breath", "Sweating", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the first thing to do when someone is drowning?",
        options: ["Call for help", "Throw them a rope", "Pull them out of the water immediately", "Perform chest compressions"],
        correctAnswer: "Call for help"
    },
    {
        question: "What should you do when someone is in shock?",
        options: ["Raise their legs", "Give them something to drink", "Cover them with a blanket", "All of the above"],
        correctAnswer: "Raise their legs"
    },
    {
        question: "What is the first step in treating a head injury?",
        options: ["Apply ice", "Stop any bleeding", "Ensure the person remains still", "Give the person painkillers"],
        correctAnswer: "Ensure the person remains still"
    },
    {
        question: "How do you treat a broken bone?",
        options: ["Apply a splint", "Move the limb", "Apply heat", "Give pain medication"],
        correctAnswer: "Apply a splint"
    },
    {
        question: "What is the best way to help someone who is having a seizure?",
        options: ["Place something in their mouth", "Hold them down", "Clear the area and keep them safe", "Give them water"],
        correctAnswer: "Clear the area and keep them safe"
    },
    {
        question: "How should you treat a chemical burn?",
        options: ["Flush with water", "Apply ice", "Cover with a bandage", "Leave it alone"],
        correctAnswer: "Flush with water"
    },
    {
        question: "What should you do if a person is unconscious but breathing?",
        options: ["Call for help and monitor them", "Try to wake them up", "Give them something to drink", "Perform CPR"],
        correctAnswer: "Call for help and monitor them"
    },
    {
        question: "When should you stop performing CPR?",
        options: ["When the person starts breathing", "When help arrives", "When you are too tired to continue", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the primary purpose of first aid?",
        options: ["To provide professional medical treatment", "To stabilize the person until help arrives", "To diagnose the injury", "To provide medication"],
        correctAnswer: "To stabilize the person until help arrives"
    },
    {
        question: "How do you treat a burn from a hot object?",
        options: ["Apply cold water", "Apply ice", "Place a bandage on it", "Cover with ointment"],
        correctAnswer: "Apply cold water"
    },*/
];

function startQuiz() {
    userName = document.getElementById("name").value;
    if (!userName) {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    document.getElementById("user-name").textContent = userName;
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option); // Attach click event with option
        optionsContainer.appendChild(button);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    // Disable all options after an answer is selected
    const options = document.querySelectorAll(".option");
    options.forEach((button) => (button.disabled = true));

    document.getElementById("next-button").style.display = "inline-block"; // Show the next button
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-screen").style.display = "none";
        document.getElementById("results-screen").style.display = "block";
        displayResults();
    }
}

function displayResults() {
    const percentage = (score / questions.length) * 100;

    // Display correct answers
    const correctAnswersList = questions
        .map(
            (q, index) =>
                `<li>Q${index + 1}: ${q.question} <br> Correct Answer: <strong>${q.correctAnswer}</strong></li>`
        )
        .join("");

    document.getElementById("correct-answers").innerHTML = correctAnswersList;
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
    document.getElementById("percentage").textContent = `Your score: ${percentage.toFixed(2)}%`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("results-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("name").value = "";
}