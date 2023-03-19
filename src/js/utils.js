import {
  mainSelector,
  footerSelector,
  todoListSelector,
  inputTodoSelector,
} from "./selectors";

export const hideOrShowTodos = (list) => {
  if (list.length === 0) {
    mainSelector.classList.add("hidden");
    footerSelector.classList.add("hidden");
    return;
  }
  mainSelector.classList.remove("hidden");
  footerSelector.classList.remove("hidden");
};

export const cleanHtml = () => {
  while (todoListSelector.firstChild) {
    todoListSelector.removeChild(todoListSelector.firstChild);
  }
};

export const clearInput = () => {
  inputTodoSelector.value = "";
};
