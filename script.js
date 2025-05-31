// Quiz Website JavaScript Code


// quiz start btn  declaration

let quizStartBtn = document.getElementById("start-game-btn");


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
quizStartBtn.addEventListener("click",quizstart)

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

// question selectors

let questionText =  document.querySelector(".question-text")
let optionLetterA = document.querySelector(".option-letter-A")
let optionLetterB = document.querySelector(".option-letter-B")
let optionLetterC = document.querySelector(".option-letter-C")
let optionLetterD = document.querySelector(".option-letter-D")

let nextGameButton = document.getElementById(next-game-btn)





//  Question of easy mode

let easyModeQuestion = [

    {
        question : "What are the five pillars of Islam?",
        options = ["Shahada, Zakat, Hajj, Sawm, Salat "," Zakat, Sawm, Salat, Hajj, Shahada","Salat, Sawm, Shahada, Zakat, Hajj","Hajj, Sawm, Zakat, Shahada, Salat "],
        answer : "Shahada, Zakat, Hajj, Sawm, Salat"
    }

    {

        question : " Which of the following is the first pillar of Islam?",
        options = ["Shahada","Zakat","Hajj","Salat"],
        answer : "Shahada"

    }

    {

        question : " What does the term Shahada refer to?",
        options = ["Almsgiving","Fasting","Pilgrimage","Declaration of Faith"],
        answer : "Declaration of Faith"

    }

    {

        question : " Which of the following is a term for the obligatory prayers in Islam?",
        options = ["Zakat ","Sawm","Salat","Hajj"],
        answer : "Salat"

    }

]

// question Inputing in easy mode


let nextBtn = ()=>{

}
nextGameButton.addEventListener("click",nextBtn)
