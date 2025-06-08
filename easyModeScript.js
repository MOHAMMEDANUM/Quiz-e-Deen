                    //          Easy Mode Page Start

//  Working on the Easy Mode Question, option and answer functionalities

// question selector

let questionText =  document.getElementById("easy-question-text")

// Options selectors
let optionLetterA = document.querySelector("#option-letter-A")
let optionLetterB = document.querySelector("#option-letter-B")
let optionLetterC = document.querySelector("#option-letter-C")
let optionLetterD = document.querySelector("#option-letter-D")
// console.log(optionLetterD);

// Question counter selector

let questionCounter=document.getElementById("question-counter")

// Question Number selector

let questionNumber=document.getElementById("ques-no")

// Progress percentage selector
let progressPercentage=document.getElementById("progress-percentage")

// progress fill selector
let progressFill=document.getElementById("progress-fill")

// timer display selector
let timerDisplay=document.getElementById("timer-display")


// question full body section
let questionSection=document.getElementById("question-section")

// time-out-msg
let timeOutMsg=document.getElementById("time-out-msg")



// Next Question Button
let nextGameButton = document.getElementById("next-game-btn")

// Previous Question Button
let previousGameButton = document.getElementById("previous-game-btn")


//  Question of easy mode

let easyModeQuestion = [

    {
        question : "What are the five pillars of Islam?",
        answers  : [
                    {text :"Shahada, Zakat, Hajj, Sawm, Salat",         correctOption : true},
                    {text :"Zakat, Sawm, Salat, Hajj, Shahada",         correctOption : false},
                    {text :"Salat, Sawm, Shahada, Zakat, Hajj",         correctOption : false},
                    {text :"Hajj, Sawm, Zakat, Shahada, Salat",         correctOption : false}
                   ]
    },
    {
        question : " Which of the following is the first pillar of Islam?",
        answers  : [
                    {text :"Zakat" , correctOption :false},
                    {text : "Hajj", correctOption :false},
                    {text : "Shahada" , correctOption : true},
                    {text :"Salat" , correctOption :false}
                   ]
    },
    {
        question : " What does the term Shahada refer to?",
        answers : [
                    {text :"Almsgiving" , correctOption :false},
                    {text :"Fasting" , correctOption :false},
                    {text :"Pilgrimage" , correctOption :false},
                    {text :"Declaration of Faith" , correctOption :true}
                  ]
    },
    {
        question : " Which of the following is a term for the obligatory prayers in Islam?",
        answers : [
                    {text :"Zakat" , correctOption :false},
                    {text :"Sawm" , correctOption :false},
                    {text :"Salat" , correctOption :true},
                    {text :"Hajj" , correctOption :false}
                  ]
    }
]

// Option Selecting function

    // timer display Inputing

    // let d=3;
    // let clock = ()=>{
    //     if(d>0){
    //     timerDisplay.innerHTML=--d
    //     }
    //     if(d==0){
    //         questionSection.style="display:none;"
    //         d=0
    //         timerDisplay.innerHTML=d
    //         timeOutMsg.style="display:flex;background-color:red;color:white"
    //         timeOutMsg.innerHTML="Time out"
    //         console.log("jahbkj");

    //     }
    // }
    // setInterval(clock,1000)


    
// easy Mode Question Tag
let hardQuestionText=document.getElementById("hard-question-text")

// hard Mode Options Tag
let options=document.getElementsByClassName("options-hard-Mode")

// hard Mode Question Number Tag
let hardModeQuestionNumber=document.getElementById("hard-mode-question-number")

// hard Mode Score Tag
let scorehardMode=document.getElementById("score-hard-mode")

// Question Counter Tag
let questionCounterhardMode=document.getElementById("question-counter-hard-mode")

// Progress Percentage Tag
let progressPercentagehardMode=document.getElementById("progress-percentage-hard-mode")

// Progress Fill Tag
let progressFillhardMode = document.getElementById("progress-fill-hard-mode")


// Option Selecting Tag
let optionSelecting=document.getElementById("option-Selecting")
// console.log(optionSelecting.lastElementChild.innerHTML);


//  currentQuestion
let currentQuestion = 0

//  score
let score = 0


















// Next button function

// Next Game easy Button

let nextGameeasyBtn = document.getElementById("next-game-easy-btn")

// Previous Game easy Btn
let previousGameeasyBtn=document.getElementById("previous-game-easy-btn")


// Next Game easy Button Function

let next = ()=>{
    if(currentQuestion>=1){
        nextGameeasyBtn.style="display:none"
        startGameeasyBtn.style="display:none"
    }

    easyModeQuestionNumber.innerText=`Question ${currentQuestion+1}` 
    previousGameeasyBtn.style="display:block"

    currentQuestion++
    console.log(currentQuestion);
    showQuestion()   
}