
                            //                Medium Mode

// Medium Mode Properties
    
// Question counter selector

questionCounter=document.getElementById("question-counter")

// Question Number selector

questionNumber=document.getElementById("ques-no")

// Progress percentage selector
progressPercentage=document.getElementById("progress-percentage")

// progress fill selector
progressFill=document.getElementById("progress-fill")

// timer display selector
timerDisplay=document.getElementById("timer-display")


// question full body section
questionSection=document.getElementById("question-section")

// time-out-msg
timeOutMsg=document.getElementById("time-out-msg")



// Next Question Button
nextGameButton = document.getElementById("next-game-btn")

// Previous Question Button
previousGameButton = document.getElementById("previous-game-btn")



const mediumModeQuestions = [

    {
        question : "who are you?",
        answer : [
            {text : "anum",  correct :true},
            {text : "saad",  correct :false},
            {text : "owaies",  correct :false},
            {text : "saud",  correct :false}
        ]
    },

    {
        question : "who is your brother?",
        answer : [
            {text : "anum",  correct :false},
            {text : "abrar",  correct :false},
            {text : "owaies",  correct :true},
            {text : "saud",  correct :false}
        ]

    },

    {
        question : "which brother is saudi return?",
        answer : [
            {text : "anum",  correct :false},
            {text : "saad",  correct :true},
            {text : "owaies",  correct :false},
            {text : "kaif",  correct :false}
        ]
    }
]

// Medium Mode Question Tag
let mediumQuestionText=document.getElementById("medium-question-text")

// Medium Mode Options Tag
let options=document.getElementsByClassName("options-Medium-Mode")

// Medium Mode Question Number Tag
let mediumModeQuestionNumber=document.getElementById("medium-mode-question-number")

// Medium Mode Score Tag
let scoreMediumMode=document.getElementById("score-medium-mode")

// Question Counter Tag
let questionCounterMediumMode=document.getElementById("question-counter-medium-mode")

// Progress Percentage Tag
let progressPercentageMediumMode=document.getElementById("progress-percentage-medium-mode")

// Progress Fill Tag
let progressFillMediumMode = document.getElementById("progress-fill-medium-mode")

//  currentQuestion
let currentQuestion = 0

//  score
let score = 0

// start-game-medium-btn
let startGameMediumBtn=document.getElementById("start-game-medium-btn")




// Showing the Question function

let showQuestion = ()=>{
    console.log(currentQuestion);
    
    if(currentQuestion<=2){
    score = 0

    mediumQuestionText.innerText=mediumModeQuestions[currentQuestion].question
    mediumModeQuestionNumber.innerText=`Question ${currentQuestion+1}`
    questionCounterMediumMode.innerText=`Question ${currentQuestion+1} of ${mediumModeQuestions.length}`
    let percentage=Math.floor(((currentQuestion+1)/(mediumModeQuestions.length))*100)
    progressPercentageMediumMode.innerText=percentage+"% Complete"
    progressFillMediumMode.style="width:"+percentage+"%"


    for(let i=0;i<4;i++){
        options[i].innerHTML=mediumModeQuestions[currentQuestion].answer[i].text
        // console.log(options[i]);
        
    }
}
    
}
startGameMediumBtn.addEventListener("click",showQuestion)

// Next Game Medium Button

let nextGameMediumBtn = document.getElementById("next-game-medium-btn")

// Previous Game Medium Btn
let previousGameMediumBtn=document.getElementById("previous-game-medium-btn")

// Next Game Medium Button Function

let next = ()=>{
    if(currentQuestion>=1){
        nextGameMediumBtn.style="display:none"
        startGameMediumBtn.style="display:none"
    }

    mediumModeQuestionNumber.innerText=`Question ${currentQuestion+1}` 
    previousGameMediumBtn.style="display:block"

    currentQuestion++
    console.log(currentQuestion);
    showQuestion()
    
}

// Previous Game Medium Btn
let previous = ()=>{
    if(currentQuestion<=1){
        previousGameMediumBtn.style="display:none"
        startGameMediumBtn.style="display:none"
    }

    mediumModeQuestionNumber.innerText=`Question ${currentQuestion}`
    nextGameMediumBtn.style="display:block"
    
    currentQuestion--
    console.log(currentQuestion);
    showQuestion()
}