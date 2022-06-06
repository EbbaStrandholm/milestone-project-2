//Adding all required elements
const start_button = document.querySelector(".start_button button");
const rules_box = document.querySelector(".rules_box");
const button_quit = rules_box.querySelector(".buttons .button_quit");
const button_restart = rules_box.querySelector(".buttons .button_restart");
const quiz_box = document.querySelector(".quiz_box");
const next = quiz_box.querySelector(".next");

//If start quiz button is clicked
start_button.onclick = ()=>{
    rules_box.classList.add("activeRules"); //The rules pop-up window will show
}

//If quit quiz button is clicked
button_quit.onclick = ()=>{
    rules_box.classList.remove("activeRules"); //The rules pop-up window will hide
}

//If continue quiz button is clicked
button_restart.onclick = ()=>{
    rules_box.classList.remove("activeRules"); //The rules pop-up window will hide
    quiz_box.classList.add("activeQuiz"); //The quiz window will appear
    showQuestions(0);
}

//If next button is clicked
next.onclick = ()=>{
    que_count++;
    showQuestions(que_count);
}

let que_count = 0;

//Taking and using questions and answers from array
function showQuestions(index){
    const question_text = document.querySelector(".question_text");
    const answer_list = document.querySelector(".answer_list");
    let que_tag = '<span>'+ questions[index].question +'</span>'
    let option_tag = '<div class="answer">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[3] +'<span></span></div>';
    question_text.innerHTML = que_tag
    answer_list.innerHTML = option_tag
}