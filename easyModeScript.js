                    //          Easy Mode Page Start

//  Working on the Easy Mode Question, option and answer functionalities

// question selector

let questionText =  document.getElementById("easy-question-text")

// Options selectors
let options = document.getElementsByClassName("option-letter")

// Separate option selectors
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

let easyModeQuestions = [

    {
        question : "What are the five pillars of Islam?",
        answer  : [
                    {text :"Shahada, Zakat, Hajj, Sawm, Salat",         correctOption : true},
                    {text :"Zakat, Sawm, Salat, Hajj, Shahada",         correctOption : false},
                    {text :"Salat, Sawm, Shahada, Zakat, Hajj",         correctOption : false},
                    {text :"Hajj, Sawm, Zakat, Shahada, Salat",         correctOption : false}
                   ]
    },
    {
        question : " Which of the following is the first pillar of Islam?",
        answer  : [
                    {text :"Zakat" , correct :false},
                    {text : "Hajj", correct :false},
                    {text : "Shahada" , correct : true},
                    {text :"Salat" , correct :false}
                   ]
    },
    {
        question : " What does the term Shahada refer to?",
        answer : [
                    {text :"Almsgiving" , correct :false},
                    {text :"Fasting" , correct :false},
                    {text :"Pilgrimage" , correct :false},
                    {text :"Declaration of Faith" , correct :true}
                  ]
    },
    {
        question : " Which of the following is a term for the obligatory prayers in Islam?",
        answer : [
                    {text :"Zakat" , correct :false},
                    {text :"Sawm" , correct :false},
                    {text :"Salat" , correct :true},
                    {text :"Hajj" , correct :false}
                  ]
    }
]



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
let easyQuestionText=document.getElementById("easy-question-text")

// easy Mode Question Number Tag
let easyModeQuestionNumber=document.getElementById("easy-mode-question-number")

// easy Mode Score Tag
let scoreeasyMode=document.getElementById("score-easy-mode")

// Question Counter Tag
let questionCountereasyMode=document.getElementById("question-counter-easy-mode")

// Progress Percentage Tag
let progressPercentageeasyMode=document.getElementById("progress-percentage-easy-mode")

// Progress Fill Tag
let progressFilleasyMode = document.getElementById("progress-fill-easy-mode")

// Option Selecting Tag
let optionSelecting=document.getElementsByClassName("option-letter")
// console.log(optionSelecting.lastElementChild.innerHTML);



//  currentQuestion
let currentQuestion = 0

//  score
let score = 0

// start-game-hard-btn
let startGameeasyBtn=document.getElementById("start-game-easy-btn")

// Showing the Question function

let showQuestion = ()=>{
    console.log(currentQuestion);
    
    if(currentQuestion<=currentQuestion){
    score = 0

    easyQuestionText.innerText=easyModeQuestions[currentQuestion].question
    console.log(easyQuestionText.innerText);
    
    easyModeQuestionNumber.innerText=`Question ${currentQuestion+1}`
    console.log(easyModeQuestionNumber.innerText);

    questionCountereasyMode.innerText=`Question ${currentQuestion+1} of ${easyModeQuestions.length}`
    console.log(questionCountereasyMode.innerText);
    
    let percentage=Math.floor(((currentQuestion+1)/(easyModeQuestions.length))*100)
    progressPercentageeasyMode.innerText=percentage+"% Complete"
    console.log(progressPercentageeasyMode.innerText);

    progressFilleasyMode.style="width:"+percentage+"%"
    


    for(let i=0;i<4;i++){
        options[i].innerHTML=easyModeQuestions[currentQuestion].answer[i].text

        // console.log(easyModeQuestions[currentQuestion].answer[i].correct==true);
        
        // if(easyModeQuestions[currentQuestion].answer[i].correct===true){
        //     // console.log(easyModeQuestions[currentQuestion].answer[i].text);
        //     // console.log(clickedOptionE);
        //         if(clickedOptionE==easyModeQuestions[currentQuestion].answer[i].text){

        //         console.log("winner");
        //     }

        //     }
        
    }
}
    
}
startGameeasyBtn.addEventListener("click",showQuestion)


// // Option Selecting Function

// let clickedOptionE=""
// let optionClicking=(e)=>{
            
//             clickedOptionE=e.target.innerText
//             // console.log(clickedOptionE);
// }
// console.log(clickedOptionE);




// Next button function

// Next Game easy Button

let nextGameeasyBtn = document.getElementById("next-game-easy-btn")

// Previous Game easy Btn
let previousGameeasyBtn=document.getElementById("previous-game-easy-btn")


// Next Game easy Button Function
console.log(easyModeQuestions);

let next = ()=>{
    if(currentQuestion>=easyModeQuestions.length-2){
        nextGameeasyBtn.style="display:none"
        startGameeasyBtn.style="display:none"
    }

    easyModeQuestionNumber.innerText=`Question ${currentQuestion+1}` 
    previousGameeasyBtn.style="display:block"

    currentQuestion++
    console.log(currentQuestion);
    showQuestion()  
}

// Previous Game hard Btn
let previous = ()=>{
    if(currentQuestion<=1){
        previousGameeasyBtn.style="display:none"
        startGameeasyBtn.style="display:none"
    }

    easyModeQuestionNumber.innerText=`Question ${currentQuestion}`
    nextGameeasyBtn.style="display:block"
    
    currentQuestion--
    console.log(currentQuestion);
    showQuestion()
}