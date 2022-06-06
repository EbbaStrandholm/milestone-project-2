//Adding all required elements
const start_button = document.querySelector(".start_button button");
const rules_box = document.querySelector(".rules_box");
const button_quit = rules_box.querySelector(".buttons .button_quit");
const button_continue = document.querySelector(".buttons .button_restart");

//If start quiz button is clicked
start_button.onclick = ()=>{
    rules_box.classList.add("activeRules");
}