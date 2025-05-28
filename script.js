// Quiz Website JavaScript Code


// quiz start btn  declaration

let quizStartBtn = document.getElementsByClassName("startbtn");


//  quiz section difficulty levels cards

let easyMode = document.getElementsByClassName("difficulty-easy-card");
let mediumMode = document.getElementsByClassName("difficulty-medium-card");
let hardMode = document.getElementsByClassName("difficulty-hard-card");

let easyCount =0;
let mediumCount =0;
let hardCount =0;





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
        
}
quizStartBtn[0].addEventListener("click",quizstart)

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
