// import { todoList } from "./globals";
import { inputTodoSelector, todoListSelector } from "./selectors";
import { cleanHtml, clearInput, hideOrShowTodos } from "./utils";
import { todoList } from "./globals";

inputTodoSelector.addEventListener("change", handleChange);

function handleChange(e) {
  addTodo(e.target.value);
}

const addTodo = (value) => {
  const newTodo = {
    id: Date.now(),
    text: value,
    completed: false,
  };
  todoList.push(newTodo);
  showTodoList();
};

export const showTodoList = () => {
  hideOrShowTodos(todoList);
  cleanHtml();
  clearInput();

  const fragment = new DocumentFragment();
  todoList.map((todo) => {
    const newTodo = createTodo({
      id: todo.id,
      text: todo.text.trim(),
      completed: todo.completed,
    });
    fragment.append(newTodo);
  });
  todoListSelector.append(fragment);
};

const createTodo = (options) => {
  // create elements
  const li = document.createElement("li");
  const div = document.createElement("div");
  const inputCheck = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");
  const inputEdit = document.createElement("input");

  // add classes
  li.classList.add("pending");
  div.classList.add("view");
  inputCheck.classList.add("toggle");
  button.classList.add("destroy");
  inputEdit.classList.add("edit");

  inputCheck.setAttribute("type", "checkbox");
  inputCheck.checked = true;

  // add text
  label.textContent = options.text;

  // add to dom
  div.append(inputCheck, button, label);
  li.append(div, inputEdit);
  return li;
};
