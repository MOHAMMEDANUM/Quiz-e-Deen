                            //                hard Mode


// Hard Mode Properties
    
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




// 

const hardModeQuestions = [

    {
        question : "who are you?",
        answer : [
            {text : "anum",  correct :true},
            {text : "saad",  notcorrect :false},
            {text : "owaies", notcorrect :false},
            {text : "saud",  notcorrect :false}
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
    },

    {
        question : "what?",
        answer : [
            {text : "anum",  correct :false},
            {text : "saad",  correct :true},
            {text : "owaies",  correct :false},
            {text : "kaif",  correct :false}
        ]
    }
]



// hard Mode Question Tag
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