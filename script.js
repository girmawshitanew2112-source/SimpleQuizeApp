const questions = [
    {
        question:"What is the largest animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Lion", correct:false}
            
        ]
    },
    {
        question:"What is the largest country in the world?",
        answers:[
            {text: "Ethiopia", correct:false},
            {text: "Netherland", correct:false},
            {text: "Russia", correct:true},
            {text: "America", correct:false}
            
        ]
    },
    {
        question:"What is the largest contenent in the world?",
        answers:[
            {text: "Africa", correct:false},
            {text: "North America", correct:false},
            {text: "Asia", correct:true},
            {text: "Antarctica", correct:false}
            
        ]
    },
    {
        question:"What is the longest river in the world?",
        answers:[
            {text: "Nile", correct:false},
            {text: "Amazon", correct:true},
            {text: "Missisipi", correct:false},
            {text: "Tekeze", correct:false}
            
        ]
    },
    {
        question:"What is the highest mountain in the world?",
        answers:[
            {text: "Ras Degen", correct:false},
            {text: "Everest", correct:true},
            {text: "Kilimangaro", correct:false},
            {text: "Alpes", correct:false}
            
        ]
    }
];

let questionElement = document.querySelector(".question");
let answerBtn = document.querySelector(".answer-btn");
let nextBtn = document.querySelector(".next");

let currentQuestionIndex = 0;
let score =0;

function resetState() {
    answerBtn.innerHTML = "";
}

function showQuestions() {
    resetState();

    if (currentQuestionIndex >= questions.length) {
        questionElement.textContent =
            `Quiz finished! Your score is ${score} out of ${questions.length}.`;

        nextBtn.style.display = "none";
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent =
        `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    nextBtn.disabled = true;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.answerData = answer;

        button.addEventListener("click", function () {
            if (answer.correct) {
                button.style.backgroundColor = "green";
                score++;
            } else {
                button.style.backgroundColor = "red";
            }

            answerBtn.querySelectorAll("button").forEach(btn => {
                if (btn.answerData.correct) {
                    btn.style.backgroundColor = "green";
                }

                btn.disabled = true;
            });

            nextBtn.disabled = false;
        });

        answerBtn.appendChild(button);
    });
}

nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        showQuestions();
    }
});

function startQuize() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    showQuestions();
}

startQuize();
