const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: [
            { text: "A) Jupiter", correct: false },
            { text: "B) Mars", correct: true },
            { text: "C) Venus", correct: false },
            { text: "D) Saturn", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            { text: "A) Berlin", correct: false },
            { text: "B) Madrid", correct: false },
            { text: "C) Paris", correct: true },
            { text: "D) Rome", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answer: [
            { text: "A) Java", correct: false },
            { text: "B) C", correct: false },
            { text: "C) Python", correct: false },
            { text: "D) JavaScript", correct: true }
        ]
    },
    {
        question: "Which data structure uses FIFO (First In First Out)?",
        answer: [
            { text: "A) Stack", correct: false },
            { text: "B) Queue", correct: true },
            { text: "C) Tree", correct: false },
            { text: "D) Graph", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const buttons = document.getElementById("btn-box");
const nextBtn = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuiz();
}

function showQuiz(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        buttons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectedAns);
    });
}

function resetState(){
    nextBtn.style.display = "none";

    while(buttons.firstChild){
        buttons.removeChild(buttons.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You Score ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuiz();
    }
    else{
       showScore();
    }

}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else{
         startQuiz();

    }
})


function selectedAns(e){
    const selected = e.target;
    const isCorrect = selected.dataset.correct === "true";

    if(isCorrect){
        selected.classList.add("correct");
        score++;
    } 
    else{
        selected.classList.add("incorrect");
    }

    Array.from(buttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

startQuiz();