//Global Variables
document.querySelector(".input-text").focus();
const todo_list_div = document.querySelector(".todo-list");
const input_text = document.querySelector(".input-text");
let ID = 1;

//Global JavaScript
const sub_heading = document.querySelector(".sub-heading");
const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
sub_heading.textContent = date;

//add to-do functionality
const addToDo = () => {
  const to_do_text = input_text.value;
  if (to_do_text) {
    let to_do = document.createElement("div");
    to_do.setAttribute("class", "to-do-container");

    to_do.innerHTML = `<input type="checkbox" class="input-checkbox " id="_${ID}" onClick="strike(this)" /> 
                       <span class="_${ID}">${to_do_text}</span>`;

    todo_list_div.appendChild(to_do);
    ID++;
  }
  input_text.value = "";
  input_text.focus();
};

const add_button = document.querySelector(".input-text-submit");
add_button.addEventListener("click", () => {
  addToDo();
});

//clear button functionality
let clear_button = document.querySelector(".input-text-clear");
clear_button.addEventListener("click", () => {
  todo_list_div.innerHTML = "";
  input_text.value = "";
  input_text.focus();
});

//strike functionality
const strike = (checkbox) => {
  let target_checkbox = checkbox;
  let checkbox_id = target_checkbox.id;
  let target_span = document.querySelector(`.${checkbox_id}`);
  if (target_checkbox.checked) {
    target_span.setAttribute("style", "text-decoration:line-through");
  } else {
    target_span.setAttribute("style", "text-decoration:none");
  }
};
