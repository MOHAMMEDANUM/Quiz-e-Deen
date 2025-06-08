// Quiz Website JavaScript Code



                    //          Home Page Start


// quiz start btn  declaration

let quizStartBtn = document.getElementById("start-game-btn");
let homeBtnMode=document.querySelector(".homebtn-mode")

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

    easyMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(0, 0, 0, 0.67);padding:17px;height:180px ;width:220px";
    easyCount++;

    // hiding other modes
    mediumMode[0].style="display: none;";
    hardMode[0].style="display: none;";
    homeBtnMode.style="display: block;"
}

//  medium mode function

let mediumModeStart = () => {
    mediumMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(0, 0, 0, 0.67);padding:17px;height:180px ;width:220px";
    mediumCount++;

    // hiding other modes
    easyMode[0].style="display: none;";
    hardMode[0].style="display: none;";
    homeBtnMode.style="display: block;"

}

// hard mode function

let hardModeStart = () => {
    hardMode[0].style="background-color: deepskyblue; color: white; border: 2px solid rgba(0, 0, 0, 0.67);padding:17px;height:180px ;width:220px";
    hardCount++;


    // hiding other modes
    easyMode[0].style="display: none;";
    mediumMode[0].style="display: none;";
    homeBtnMode.style="display: block;"

}

                    //          Home Page End

                    

