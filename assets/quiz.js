//code taken from https://code-boxx.com/simple-javascript-quiz/ and modified
/*
let quiz = [
      {
        quest : "What is the capital of Ethiopia?",
        opt : [
         "Mekele",
         "Aksum",
         "Addis Ababa",
        ],
        answ : 2 // correct answer is a third position, number 2 in index .
      },
      {
        quest : "What drink is Ethiopia famous for?",
        opt : [
          "tea",
          "coffee",
          "beer",
      
        ],
        answ : 1
      },
      {
        quest : "Which animal is endemic fo Ethiopia?",
        opt : [
          "lion",
          "tiger",
          "gelada monkey",
        ],
        answ : 2
      },
      {
        quest : "What is one of the official languages in Ethiopia?",
        opt : [
          "Amharic",
          "Wolof",
          "Twi",
        ],
        answ : 0
      },
      {
        quest : "In which part of Africa lies Ethiopia ?",
        opt : [
          "East Africa",
          "West Africa",
          "South Africa",
          
        ],
        answ : 0
      }
      ],
    
      // (A2) HTML ELEMENTS
     // htmlBox: null, // HTML quiz container
     // htmlQuestion: null, // HTML question wrapper
     // htmlAnswer: null, // HTML answers wrapper
    
      now:0, // current question
      score: 0, // current score
    
      // (B) INIT QUIZ HTML
      init: function(){

        // wrapper
        quiz.htmlBox = document.getElementById("ethioQuiz");
    
       // questions
        quiz.htmlQuestion = document.createElement("div");
        quiz.htmlQuestion.id = "quizQuestion";
        quiz.htmlBox.appendChild(quiz.htmlQuestion);
    
        // answers
        quiz.htmlAnswer = document.createElement("div");
        quiz.htmlAnswer.id = "quizAnswer";
        quiz.htmlBox.appendChild(quiz.htmlAnswer);
    
        // (B4) GO!
        quiz.draw();
      },
    
      // (C) DRAW QUESTION
       draw: function(){
        // (C1) QUESTION
        quiz.htmlQuestion.innerHTML = quiz.data[quiz.now].quest;
    
        // (C2) OPTIONS
        quiz.htmlAnswer.innerHTML = "";
        for (let i in quiz.data[quiz.now].opt) {
          let radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "quiz";
          radio.id = "quizo" + i;
          quiz.htmlAnswer.appendChild(radio);
          let label = document.createElement("label");
          label.innerHTML = quiz.data[quiz.now].opt[i];
          label.setAttribute("for", "quizo" + i);
          label.dataset.idx = i;
          label.addEventListener("click", quiz.select);
          quiz.htmlAnswer.appendChild(label);
        }
      },
      
      // (D) OPTION SELECTED
      select: function(){
        // (D1) DETACH ALL ONCLICK
        let all = quiz.htmlAnswer.getElementsByTagName("label");
        for (let label of all) {
          label.removeEventListener("click", quiz.select);
        }
    
        // (D2) CHECK IF CORRECT
        let correct = this.dataset.idx == quiz.data[quiz.now].answ;
        if (correct) { 
          quiz.score++; 
          this.classList.add("correct");
        } else {
          this.classList.add("wrong");
        }
      
        // (D3) NEXT QUESTION OR END GAME
        quiz.now++;
        setTimeout(function(){
          if (quiz.now < quiz.data.length) { quiz.draw(); } 
          else {
            quiz.htmlQuestion.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
            quiz.htmlAnswer.innerHTML = "";
          }
        }, 1000);
      }
    };
    window.addEventListener("load", quiz.init);
 } 
 */
//selected all elements from html
 let quiz = document.getElementById("ethioQuiz");
 let question = document.getElementById("question");
 let choiceA = document.getElementById("A");
 let choiceB = document.getElementById("B");
 let choiceC = document.getElementById("C");
 let score = document.getElementById("quizScore");
 let scoreNow = 0;

 let questions = [
    {   question : "What is the capital of Ethiopia?",
        choiceA: "Mekele",
        choiceB: "Aksum",
        choiceC: "Addis Ababa",
        correct: "C"
    },
      {
        question : "What drink is Ethiopia famous for?",
        choiceA: "tea",
        choiceB: "coffee",
        choiceC: "beer",
        correct:"B"
      },
      {
        question : "Which animal is endemic fo Ethiopia?",
        choiceA: "lion",
        choiceB: "tiger",
        choiceC:"gelada monkey",
        correct: "C"
      },
      {
        question : "What is one of the official languages in Ethiopia?",
        choiceA: "Amharic",
        choiceB: "Wolof",
        choiceC: "Twi",
        correct: "A"
      },
    {
        question : "In which part of Africa lies Ethiopia ?",
        choiceA: "East Africa",
        choiceB: "West Africa",
        choiceC: "South Africa",
        correct : "A"
      },
      { question : "How many months are there in Ethiopian calendar?",
        choiceA: "12",
        choiceB: "10",
        choiceC: "13",
        correct: "C"
    },

{   question : "What country almost managed to colonize Ethiopia?",
    choiceA: "France",
    choiceB: "Italy",
    choiceC: "United Kingdom",
    correct: "C"
},
{   question : "What is the name of Ethiopian bread?",
choiceA: "doughnut",
choiceB: "croissant",
choiceC: "injera",
correct: "C"
},
{   question : "What is the population of Ethiopia?",
choiceA: "50 million",
choiceB: "110 million",
choiceC: "75million",
correct: "B"
},
{   question : "What is the name of the popular Ethiopian dance?",
choiceA: "Eskesta",
choiceB: "Rumba",
choiceC: "Azonto",
correct: "A"
},
 ];

 let lastQuestion = questions.length - 1;
 let i = 0;

function renderQuestion(){
    let q = questions[i];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
};
renderQuestion();
quiz.style.display ="block";


function renderProgress(){
    for(qIndex = 0; qIndex <= lastQuestion; qIndex++){
        scoreNow++;
    }
}

function checkAnswer(answer){
if(questions[i].correct === answer){
 score++;
 answerIsCorrect();
}else{
    answerIsWrong();
}
}


questions.scoreNow++;
function scoreRender(){
  if (questions.scoreNow < questions.length) { quiz.draw(); } 
  else {
    questions.questioninnerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
    questions.answer.innerHTML = "";
  }
} 1000;
 


