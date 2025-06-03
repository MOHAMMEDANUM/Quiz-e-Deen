// Quiz Website JavaScript Code



                    //          Home Page Start


// quiz start btn  declaration

let quizStartBtn = document.getElementById("start-game-btn");
// console.log(quizStartBtn);



//  quiz section difficulty levels cards

let easyMode = document.getElementsByClassName("difficulty-easy-card");
let mediumMode = document.getElementsByClassName("difficulty-medium-card");
let hardMode = document.getElementsByClassName("difficulty-hard-card");

let easyCount = 0;
let mediumCount = 0;
let hardCount = 0;


// quiz start function

let quizstart = ()  => {
    //  if easy mode is selected
    if(easyCount > 0){
        easyModeStart();
        window.location.href = "EasyMode.html";
    }

    //  if medium mode is selected
    else if(mediumCount > 0){
        mediumModeStart();
        window.location.href = "MediumMode.html";
    }

    //  if hard mode is selected
    else if(hardCount > 0){
        hardModeStart();
        window.location.href = "HardMode.html";
    }
    else {
        alert("Please select a difficulty level to start the quiz.");
    }
        
}


//  easy mode function

let easyModeStart = () => {

    easyMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";
    easyCount++;

    // hiding other modes
    mediumMode[0].style="display: none;";
    hardMode[0].style="display: none;";
}

//  medium mode function

let mediumModeStart = () => {
    mediumMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";
    mediumCount++;

    // hiding other modes
    easyMode[0].style="display: none;";
    hardMode[0].style="display: none;";
}

// hard mode function

let hardModeStart = () => {
    hardMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";
    hardCount++;


    // hiding other modes
    easyMode[0].style="display: none;";
    mediumMode[0].style="display: none;";
}

                    //          Home Page End



                    //          Easy Mode Page Start

//  Working on the Easy Mode Question, option and answer functionalities

// question selector

let questionText =  document.querySelector(".question-text")

// Options selectors
let optionLetterA = document.querySelector("#option-letter-A")
let optionLetterB = document.querySelector("#option-letter-B")
let optionLetterC = document.querySelector("#option-letter-C")
let optionLetterD = document.querySelector("#option-letter-D")

// 
let optionLetter=document.querySelector(".option-letter")

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


// Selecting option function

let optionDiv = document.getElementsByClassName("option")
let optionletterA =document.getElementById("option-letter-A")
// console.log(optionDiv);

// console.log(optionletterA.innerHTML);



//  Question of easy mode

let easyModeQuestion = [

    {
        question : "What are the five pillars of Islam?",
        options : ["Shahada, Zakat, Hajj, Sawm, Salat","Zakat, Sawm, Salat, Hajj, Shahada","Salat, Sawm, Shahada, Zakat, Hajj","Hajj, Sawm, Zakat, Shahada, Salat "],
        answer : "Shahada, Zakat, Hajj, Sawm, Salat"
    },

    {

        question : " Which of the following is the first pillar of Islam?",
        options : ["Shahada","Zakat","Hajj","Salat"],
        answer : "Shahada"

    },

    {

        question : " What does the term Shahada refer to?",
        options : ["Almsgiving","Fasting","Pilgrimage","Declaration of Faith"],
        answer : "Declaration of Faith"

    },

    {

        question : " Which of the following is a term for the obligatory prayers in Islam?",
        options : ["Zakat ","Sawm","Salat","Hajj"],
        answer : "Salat"

    },

    {

        question : " who?",
        options : ["Zakat ","Sawm","Salat","Hajj"],
        answer : "Salat"

    },

    {

        question : " how?",
        options : ["Zakat ","Sawm","Salat","Hajj"],
        answer : "Salat"

    }

]

// Answer declare

let correctOption = easyModeQuestion[0].answer
// console.log(correctOption);


// Question Inputing in easy mode

questionText.innerHTML= easyModeQuestion[0].question
// console.log(questionText.innerHTML);

// Question Options input

optionLetterA.innerHTML =easyModeQuestion[0].options[0]
optionLetterB.innerHTML =easyModeQuestion[0].options[1]
optionLetterC.innerHTML =easyModeQuestion[0].options[2]
optionLetterD.innerHTML =easyModeQuestion[0].options[3]

// Option Selecting function

let optionSelecting = (e)=>{

    let optionDesign = e.target.innerHTML
    // console.log(optionDesign,typeof(correctOption));

    // console.log(optionDiv[0]);// Answer Checking
    
    if(correctOption==optionDesign){
        optionDiv[0].style="background-color:limegreen;color:white"

        optionLetter.style="background-color:rgba(134, 205, 150, 0.63);color:white"
        
        console.log("Winner");
        return
    }
    else{
        optionDesign.style="background-color:red;color:white"
        optionLetter.style="background-color:rgba(214, 146, 146, 0.63);color:white"
    } 
    console.log(correctOption==optionDesign);
    
    
    // optionDiv[0].style="background-color:limegreen;color:white" 
}


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


// Next button function


let i = 1
let nextBtn = ()=>{

    // nextBtn increment
    
    if(i<=easyModeQuestion.length-1){
    

    questionText.innerHTML= easyModeQuestion[i].question
    console.log(questionText.innerHTML);
    
    optionLetterA.innerHTML =easyModeQuestion[i].options[0]
    optionLetterB.innerHTML =easyModeQuestion[i].options[1]
    optionLetterC.innerHTML =easyModeQuestion[i].options[2]
    optionLetterD.innerHTML =easyModeQuestion[i].options[3]

    i++;
    previousGameButton.style="display:block"

    // Question Number Inputing
    questionNumber.innerHTML=`Question ${i}`
    questionCounter.innerHTML=`Question ${i} of ${easyModeQuestion.length}`

    // Progress Percentage Inputing
    progressPercentage.innerHTML=Math.floor(((`${i}`/`${easyModeQuestion.length}`)*100))+"% Complete"

    // progress fill Inputing
    progressFill.style="width:"+Math.floor(((`${i}`/`${easyModeQuestion.length}`)*100))+"%"

    
    }

    // disable nextbtn for last

    if(i>easyModeQuestion.length-1){
            nextGameButton.style="display:none"
            i=easyModeQuestion.length-1
            console.log(i);
            return
    }
}
nextGameButton.addEventListener("click",nextBtn)




// Previous Btn function

let previousBtn = ()=>{

    if(i<=0){
            previousGameButton.style="display:none"
            i=0
            console.log(i);
            return
        }
        nextGameButton.style="display:block"

    if(i>=0){
    
    i--

    // Question Number Inputing
    questionNumber.innerHTML=`Question ${i+1}`
    questionCounter.innerHTML=`Question ${i+1} of ${easyModeQuestion.length}`

    // Progress Percentage Inputing
    progressPercentage.innerHTML=Math.floor(((`${i+1}`/`${easyModeQuestion.length}`)*100))+"% Complete"

    // progress fill Inputing
    progressFill.style="width:"+Math.floor(((`${i+1}`/`${easyModeQuestion.length}`)*100))+"%"


    questionText.innerHTML= easyModeQuestion[i].question

    optionLetterA.innerHTML =easyModeQuestion[i].options[0]
    optionLetterB.innerHTML =easyModeQuestion[i].options[1]
    optionLetterC.innerHTML =easyModeQuestion[i].options[2]
    optionLetterD.innerHTML =easyModeQuestion[i].options[3]
    previousGameButton.style="display:block"
    return
    }
}
previousGameButton.addEventListener("click",previousBtn)


