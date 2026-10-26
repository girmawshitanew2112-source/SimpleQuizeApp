const questions = [
    

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "How many sides does a hexagon have?",
        answers: [
            { text: "Five", correct: false },
            { text: "Six", correct: true },
            { text: "Seven", correct: false },
            { text: "Eight", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Fe", correct: false },
            { text: "Go", correct: false }
        ]
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "South America", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false },
            { text: "Tokyo", correct: true }
        ]
    },
    {
        question: "How many minutes are in one hour?",
        answers: [
            { text: "30", correct: false },
            { text: "45", correct: false },
            { text: "60", correct: true },
            { text: "100", correct: false }
        ]
    },
    {
        question: "Which organ pumps blood around the human body?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Brain", correct: false },
            { text: "Heart", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "Which language is primarily used to style web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "SQL", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which HTML element creates a hyperlink?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<a>", correct: true },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
        answers: [
            { text: "const", correct: false },
            { text: "let", correct: true },
            { text: "static", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "Which JavaScript method creates a new array containing elements that pass a test?",
        answers: [
            { text: "map()", correct: false },
            { text: "forEach()", correct: false },
            { text: "filter()", correct: true },
            { text: "reduce()", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies the destination of a hyperlink?",
        answers: [
            { text: "src", correct: false },
            { text: "href", correct: true },
            { text: "alt", correct: false },
            { text: "target", correct: false }
        ]
    },
    {
        question: "Which JavaScript method converts a JSON string into a JavaScript value?",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.read()", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "Hyper Transfer Markup Link", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Digestion", correct: false },
            { text: "Fermentation", correct: false }
        ]
    },
    {
        question: "Which data type represents true or false in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: true },
            { text: "Object", correct: false }
        ]
    },
    {
        question: "What is the result of 9 * 7?",
        answers: [
            { text: "56", correct: false },
            { text: "63", correct: true },
            { text: "72", correct: false },
            { text: "67", correct: false }
        ]
    },
    {
        question:"What is the highest mountain in the world?",
        answers:[
            {text:"Ras degen",correct:false},
            {text:"Alpes",correct:false},
            {text:"Kilimangaro",correct:false},
            {text:"Everest",correct:true}
        ]
    },
    {
        question:"What is the largest continent in the world?",
        answers:[
            {text:"Afria",correct:false},
            {text:"America",correct:false},
            {text:"Asia",correct:true},
            {text:"Europe",correct:false}
        ]
    },
    {
        question:"What is the largest Ocean in the world?",
        answers:[
           
            {text:"Pacific",correct:true},
            {text:"Atlantic",correct:false},
            {text:"Indea",correct:false},
            {text:"Arcitic",correct:false}
        ]
    },
    {
        question:"What is currently show the highest GDP growth country in the world?",
        answers:[
           
            {text:"China",correct:false},
            {text:"Indea",correct:false},
            {text:"Africa",correct:false},
            {text:"America",correct:true}
        ]
    },
    
    {
        question:"What is the longest river in the world?",
        answers:[
            {text:"Missipi",correct:false},
            {text:"Amazon",correct:false},
            {text:"Nile",correct:true},
            {text:"Tekeze",correct:false}
        ]
    }
  
        
  
        
];
let questionElement = document.getElementById("question");
let answerBtn = document.querySelector(".answer-btn");
let nextbtn = document.querySelector(".next");
let progressText = document.getElementById("progress-text");
let progressBar = document.getElementById("progress-bar");
let restartBtn = document.getElementById("restart-button");




let currentIndex = 0;
let score = 0;


function startQuize(){
    currentIndex = 0;
    score = 0;
    showQuestion();
    
}
function showQuestion(){
    
    let currentQuestinNo = currentIndex + 1;
    progressText.innerHTML = `Question number ${currentQuestinNo} of ${questions.length}`;
    let width = ((currentIndex + 1)/questions.length)*100;
    progressBar.style.width = width+"%";
    answerBtn.innerHTML = "";
    nextbtn.style.display ="none";
    restartBtn.style.display = "none";
   
    let currentQuestion = questions[currentIndex];
   
    questionElement.innerHTML = currentQuestinNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.answerData = answer;
        button.addEventListener("click",() =>{
            if (answer.correct){
               button.style.backgroundColor ="green";
                score++;
                
        }else{
              button.style.backgroundColor ="red";   
        }
        answerBtn.querySelectorAll("button").forEach(btn =>{
            if (btn.answerData.correct){
                 btn.style.backgroundColor ="green";
            }
            btn.disabled = true;
        })
        nextbtn.disabled = false;
        nextbtn.style.display = "inline-block";

        })
        answerBtn.appendChild(button);
        
    
    })
    
    

}
nextbtn.addEventListener("click", () => {
    currentIndex++;
    let result = (score/questions.length)*100;
   
    if (currentIndex < questions.length) {
     showQuestion();
    
    }else if(score === questions.length ){
        
        questionElement.innerHTML = `<h2>CONGRATULATION!!!</h2>
        <h3>${result}% correct!</h3>
        You scored ${score} out of ${questions.length}`;
        answerBtn.innerHTML ="";
        progressText.innerHTML = "";
        nextbtn.style.display ="none";
        
        restartBtn.style.display = "inline-block";
 } else if (score === questions.length -1 ) {
       
        questionElement.innerHTML = `<h2>GREAT ATTEMPT!!!</h2>
        <h3>${result}% correct!! </h3>
        You got ${score} out of ${questions.length}`; 
            
        answerBtn.innerHTML ="";
        progressText.innerHTML = "";
        nextbtn.style.display ="none";
        
        restartBtn.style.display = "inline-block";
  } else if (score === questions.length -2 ) {
        
        questionElement.innerHTML = `<h2>GOOD ATTEMPT!!!</h2>
        <h3>${result}% correct!! </h3>
        You got ${score} out of ${questions.length}`; 
            
        answerBtn.innerHTML ="";
        progressText.innerHTML = "";
        nextbtn.style.display ="none";
        
        restartBtn.style.display = "inline-block";
 }else if (score <= 1){
     
        questionElement.innerHTML = `<h2>BAD RESULT!!</h2>
        <h3>${result}% correct!! </h3>
        You got ${score} out of ${questions.length}`; 

        answerBtn.innerHTML ="";
        progressText.innerHTML = "";
        nextbtn.style.display ="none";
        
        restartBtn.style.display = "inline-block";
 }else{
    questionElement.innerHTML = `<h2>GOOD!!</h2>
        <h3>${result}% correct!! </h3>
        You got ${score} out of ${questions.length}`; 

        answerBtn.innerHTML ="";
        progressText.innerHTML = "";
        nextbtn.style.display ="none";
        
        restartBtn.style.display = "inline-block";
 }
    
});

  restartBtn.addEventListener("click",() => {
        startQuize();
    });
 startQuize();