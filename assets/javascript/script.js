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
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

//If next button is clicked
next.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        console.log("Questions completed")
    }
}

//Taking and using questions and answers from array
function showQuestions(index){
    const question_text = document.querySelector(".question_text");
    const answer_list = document.querySelector(".answer_list");
    let que_tag = '<span>'+ questions[index].numb + ". "  + questions[index].question +'</span>'
    let option_tag = '<div class="answer">'+ questions[index].options[0] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[1] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[2] +'<span></span></div>'
                    +'<div class="answer">'+ questions[index].options[3] +'<span></span></div>';
    question_text.innerHTML = que_tag
    answer_list.innerHTML = option_tag
    const answer = answer_list.querySelectorAll(".answer");
    for (let i = 0; i < answer.length; i++) {
        answer[i].setAttribute("onclick", "answerSelected(this)");
    }
}

function answerSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
        console.log("Correct Answer!");
    }else{
        answer.classList.add("incorrect");
        console.log("Incorrect Answer!");
    }

}

//Question counter
function queCounter(index){
    const question_counter = quiz_box.querySelector(".tot_que");
    let totalQuestCountTag = '<span><p>'+ index +'</p><p>/</p><p>'+ questions.length +'</p><p>questions</p></span>';
    question_counter.innerHTML = totalQuestCountTag;
}

