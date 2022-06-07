//Adding all required elements
const start_button = document.querySelector(".start_button button");
const rules_box = document.querySelector(".rules_box");
const button_quit = rules_box.querySelector(".buttons .button_quit");
const button_restart = rules_box.querySelector(".buttons .button_restart");
const quiz_box = document.querySelector(".quiz_box");
const next = quiz_box.querySelector(".next");
const timer_count = quiz_box.querySelector(".timer .timer_sec");

const answer_list = document.querySelector(".answer_list");

//If start quiz button is clicked
start_button.onclick = ()=>{
    rules_box.classList.add("activeRules"); //The rules pop-up window will show
};

//If quit quiz button is clicked
button_quit.onclick = ()=>{
    rules_box.classList.remove("activeRules"); //The rules pop-up window will hide
};

//If continue quiz button is clicked
button_restart.onclick = ()=>{
    rules_box.classList.remove("activeRules"); //The rules pop-up window will hide
    quiz_box.classList.add("activeQuiz"); //The quiz window will appear
    showQuestions(0);
    queCounter(1);
    startTimer(10);
};

let que_count = 0;
let que_numb = 1;
let counter;
let time_value = 10;

//If next button is clicked
next.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter); //stops the timer from the previous question
        startTimer(time_value); //starts the timer from the beginning when hext questions appears
        next.style.display = "none";
    }else{
        console.log("Questions completed")
    };
};

//Taking and using questions and answers from array
function showQuestions(index){
    const question_text = document.querySelector(".question_text");
    let que_tag = '<span>'+ questions[index].numb + ". "  + questions[index].question +'</span>'
    let option_tag = '<div class="answer">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[3] +'<span></span></div>';
    question_text.innerHTML = que_tag
    answer_list.innerHTML = option_tag
    const answer = answer_list.querySelectorAll(".answer");
    for (let index = 0; index < answer.length; index++) {
        answer[index].setAttribute("onclick", "answerSelected(this)");
    };
};

let checkIcon = '<div class="icon right"><i class="fa-regular fa-circle-check"></i></div>';
let xmarkIcon = '<div class="icon wrong"><i class="fa-regular fa-circle-xmark"></i></div>';

function answerSelected(answer){
    clearInterval(counter); //stops the timer when an answer is chosen 
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = answer_list.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
        console.log("Correct Answer!");
        answer.insertAdjacentHTML("beforeend", checkIcon); 
    }else{
        answer.classList.add("incorrect");
        console.log("Incorrect Answer!");
        answer.insertAdjacentHTML("beforeend", xmarkIcon);
        //If the incorrect answer is chosen then the correct one will automatically be chosen
        for (let index = 0; index < allOptions; index++) {
            if(answer_list.children[index].textContent == correctAnswer) {
                answer_list.children[index].setAttribute("class", "answer correct")
            };
        };
    };

    //Disable all other options once the user has chosen their answer
    for (let index = 0; index < allOptions; index++) {
        answer_list.children[index].classList.add("disabled");
    };
    next.style.display = "block";
};

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timer_count.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timer_count.textContent = "0";
        };
    };
};

//Question counter
function queCounter(index){
    const question_counter = quiz_box.querySelector(".tot_que");
    let totalQuestCountTag = '<span><p>'+ index +'</p><p>/</p><p>'+ questions.length +'</p><p>questions</p></span>';
    question_counter.innerHTML = totalQuestCountTag;
};