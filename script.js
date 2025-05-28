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
        
}
quizStartBtn[0].addEventListener("click",quizstart)

//  easy mode function

let easyModeStart = () => {

    easyMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";


}

//  medium mode function

let mediumModeStart = () => {
    mediumMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";
}

// hard mode function

let hardModeStart = () => {
    hardMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(40, 167, 69, 0.1);";
}
