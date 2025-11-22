// ELEMENT SELECTION

import { quizQuestions } from "./questionArray.js";

const quizContainer = document.getElementById("quiz-container")

const questionNumber = document.getElementById("current-question");
const displayScore = document.getElementById("score");

const timer = document.getElementById("timer");

const progressBar = document.getElementById("progress");
const questionText = document.querySelector("#question-text");

const optionsContainer = document.getElementById("options-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const resultContainer = document.getElementById("results-container");

const finalScore = document.getElementById("final-score");
const correctAnswers = document.getElementById("correct-answers");
const wrongAnswers = document.getElementById("wrong-answers");

const resultMessage = document.getElementById("results-message");

const timetaken = document.getElementById("time-taken");

const restartBtn = document.getElementById("restart-btn");

const celebrate = document.getElementById("celebrate");

let currentQuestion = 0;
let userAnswers = Array.from({ length: quizQuestions.length }, () => ({
  select: null,
  isAnswer: false,
}));
let score = 0;
let timeInterval;
let timeLeft = 30;
let startTime;

function displayOptions(obj) {
  optionsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  obj.options.forEach((option, index) => {
    const element = document.createElement("div");
    element.classList.add("option");
    element.setAttribute("data-index", index);
    element.innerHTML = `<div class=option-letter>${String.fromCharCode(
      65 + index
    )}</div>
                            <div class = not>${option}</div>    
        `;

    fragment.append(element);
  });
  optionsContainer.append(fragment);


}

// UPDATE UI AFTER SELECTED OPTION
function updateUI(selectedOption) {
  questionNumber.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;
  optionsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  quizQuestions[currentQuestion].options.forEach((option, index) => {
    const element = document.createElement("div");
    element.classList.add("option");
    element.setAttribute("data-index", index);
    element.innerHTML = `<div class=option-letter>${String.fromCharCode(
      65 + index
    )}</div>
                            <div class = not>${option}</div>    
        `;

    fragment.append(element);
  });
  
  optionsContainer.append(fragment);
  

  
  const correct = quizQuestions[currentQuestion].correct == selectedOption;
  console.log(userAnswers)
  if (correct && userAnswers[currentQuestion].isAnswer == false) {
 
    score += 1;
    displayScore.innerText = score;
  }
  

  if (!correct ) {
    const el = document.querySelector(`[data-index="${selectedOption}"]`);
    el.classList.add("incorrect");
    
  }

  const el = document.querySelector(
    `[data-index="${quizQuestions[currentQuestion].correct}"]`
  );

  el.classList.add("correct");

  if(userAnswers[currentQuestion].isAnswer){
    nextBtn.disabled = false
  }else{
    nextBtn.disabled = true
  }
}

// ADD EVENT LISTNER TO OPTIONSCONTAINER TO MAINUPLATE IT
optionsContainer.addEventListener("click", (e) => {
  userAnswers[currentQuestion].select = Number(e.target.dataset.index);

  
  let selectedOption = Number(e.target.dataset.index);

  

  if (!userAnswers[currentQuestion].isAnswer) {
    updateUI(selectedOption);

 
  }
  userAnswers[currentQuestion].isAnswer = true;
  if(userAnswers[currentQuestion].isAnswer){
    nextBtn.disabled = false
  }else{
    nextBtn.disabled = true
  }
  

});

function loadQuestion() {
  // Current QUESTION
  const question = quizQuestions[currentQuestion];

  questionText.textContent = question.question;
  questionNumber.textContent = `${currentQuestion + 1}/${quizQuestions.length}`;

  //UPDATE SCORE
  displayScore.textContent = score;

  // UPDATE progressBar
  const width = ((currentQuestion) / quizQuestions.length) * 100;
  progressBar.style.width = `${width}%`;

  //  DISPLAY OPTIONS
  displayOptions(question);

  // NEXT BUTTON TEXT MAINUPLATION
  nextBtn.innerHTML =
    currentQuestion === quizQuestions.length - 1
      ? 'Finish <i class="fas fa-flag-checkered"></i>'
      : 'Next <i class="fas fa-arrow-right"></i>';

      if(userAnswers[currentQuestion].isAnswer){
        nextBtn.disabled = false
      }else{
        nextBtn.disabled = true
      }
}

function initQuiz(){
     startTime = new Date()
    loadQuestion();
    startTimer()
}

initQuiz()

// NEXT BUTTON FUNCTIONALITY
nextBtn.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizQuestions.length) {
    if (userAnswers[currentQuestion].isAnswer) {
      updateUI(userAnswers[currentQuestion].select);
    } else {
      loadQuestion();
    }
  }else{
    progressBar.style.width = `100%`;
    finishQuiz()
  }
  prevBtn.disabled = false;
});

// PREVIOUS BUTTON FUNCTIONALITY
prevBtn.addEventListener("click", () => {
  currentQuestion -= 1;
  if (currentQuestion >= 0) {
    if (userAnswers[currentQuestion].isAnswer) {
      updateUI(userAnswers[currentQuestion].select);
    } else {
      loadQuestion();
    }
  }
  if (currentQuestion <= 0) {
    prevBtn.disabled = true;
  }
});

// TIMER FUNCTION

function startTimer(){
    
    timeLeft = 30;
    timer.textContent = timeLeft;
    timeInterval = setInterval(()=>{
        timeLeft = timeLeft-1
        timer.innerText = timeLeft
        if(timeLeft<=0){
            clearInterval(timeInterval)
            finishQuiz()
        }
    },1000)

   
}

// FUNCTION FOR FINISH QUIZ
function finishQuiz(){
let endTime = new Date()

let totalTime  =  Math.floor((endTime - startTime) / 1000)

timetaken.innerText = totalTime

const totalScore = Math.round((score / quizQuestions.length) * 100);

finalScore.innerText = `${totalScore}%`

correctAnswers.innerText = score

timetaken.innerText = totalTime+'s'

wrongAnswers.textContent = quizQuestions.length - score

if (totalScore >= 90) {
    resultMessage.textContent = "Outstanding! You're a true quiz master!";
    createConfetti();
} else if (totalScore >= 70) {
    resultMessage.textContent = "Great job! You have impressive knowledge!";
    createConfetti();
} else if (totalScore >= 50) {
    resultMessage.textContent = "Good effort! Keep learning and try again!";
    createConfetti();
} else {
    resultMessage.textContent = "Nice try! Practice makes perfect!";
   
}

    // Show results
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

}

// RESATRT GAME
function restartGame(){
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    userAnswers = Array.from({ length: quizQuestions.length }, () => ({
        select: null,
        isAnswer: false,
      }));
      clearInterval(timeInterval)
      currentQuestion = 0
      score = 0
      timeLeft = 20    
    initQuiz()
}

restartBtn.addEventListener("click", restartGame)

// CELEBARTION PAPPER FALL
function createConfetti(){

celebrate.style.display = "block"



const colorArray = ['#4361ee', '#3a0ca3', '#4cc9f0', '#f72585', '#4ade80']

for(let i=0; i<150;i++){
    const confetti = document.createElement("div")
    confetti.classList.add("confetti")
    confetti.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)]
    confetti.style.left = `${Math.random()*100}vw`
    confetti.style.animation = `confettiFall ${Math.random()*3+2}s linear forwards`
    confetti.style.animationDelay = Math.random() * 2 + 's';

    celebrate.append(confetti)

}


}


