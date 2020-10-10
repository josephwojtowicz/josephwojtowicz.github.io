//global variables for index, countdown, score

//index equal to the question number
var index = 0;
//main clock
var countDown = 75;
//score
var score = 75;
//highscore
var highScore = 0;
//variable for quiz time
var quizTime;

//initiate quize on click of start button and remove hidden class from first divs
document.getElementById("startButton").addEventListener("click", Event => {
    console.log("hayy");
    document.getElementById("begin").classList.add("d-none");
    document.getElementById("quizPlace").classList.remove("d-none");
    setTime();
    renderQuestions();
    quizTime = setInterval(setTime, 1000);
});

//function to render the questions
    function renderQuestions () {
      var questionsIndexlength = questions.length - 1;
      if (index <= questionsIndexlength){
          document.getElementById("question").innerHTML = questions[index].title;
          renderQuestionChoices();
      }
      quizOver();
    };


//function to render multiple choice options on html as buttons
function renderQuestionChoices(){
var question = questions[index].choices;
for (var option = 0; option < question.length; option++) {
    var questionOptionsDiv = document.getElementById("questionChoices");
    var questionButtons = document.createElement("button");
    questionButtons.className = 
    "btn btn-outline-primary";
    questionButtons.innerHTML = question[option];



    //fires check answer function
    questionButtons.setAttribute(
        "onclick",
        "checkAnswer(" + index + "," + option + ")"
    );
    questionOptionsDiv.append(questionButtons);
    }
    quizOver();
}


//function to clear the divs in prep for rendering next question
function clearQuestionDiv() {
    console.log("clearing html")
    document.getElementById("questionChoices").innerHTML = "";
    quizOver();
}

//function checks correct answer
function checkAnswer(question, answer) {
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
        index = index + 1;
    }

    //right or wrong, program continues to the next question, deducts 15 seconds
    else {
        index = index + 1;
        countDown = countDown - 15;
        score = score - 15;
    }
    clearQuestionDiv();
    renderQuestions();
    quizOver();
}

//function to start the countdown for the time left clock quiz timer when user starts
function setTime() {
    document.getElementById("timer").innerHTML = countDown + "sec left";
    countDown--;
    if (countDown == -1) {
        clearInterval(quizTime);
    }
    quizOver();
}


//function to check to see if conditions are being met in other functions within game
function quizOver() {
    if (index >= 4 || countDown <= 0) {
        document.getElementById("quizPlace").classList.add("hide");
        document.getElementById("allGone").classList.remove("hide");
        document.getElementById("realEnd").classList.remove("hide");
        document.getElementById("scoreman").classList.remove("hide");
        document.getElementById("nowTime").innerHTML = countDown + "sec left";
        document.getElementById("finalScore").innerHTML = countDown;

        clearInterval(quizTime);
    }
}

//event listener for function that allows user to save initials and score
document.getElementById("initialsButton").addEventListener("click", saveScore);


//function for saving score/initials
function saveScore() {
    var userInitials = document.querySelector("#initialsBox").value;
    var finalScore = countDown;

    //stores initials and high scores
    var scoreObject = { initials: userInitials, score: finalScore };

    var highScores = localStorage.getItem("highScoreList");

    if (highScores == null) {
        localStorage.setItem("highScoreList", JSON.stringify([scoreObject]));
    } else {
        highScoreList = JSON.parse(highScores);
        highScoreList.push(scoreObject);
        localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
    }
}