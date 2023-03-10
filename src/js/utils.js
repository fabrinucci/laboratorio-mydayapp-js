import { footerSelector, mainSelector, todoListSelector } from "./selectors";

mainSelector.querySelector("ul");

export const hideOrShow = () => {
  const childs = todoListSelector.childElementCount;
  if (childs > 0) {
    mainSelector.classList.remove("hidden");
    footerSelector.classList.remove("hidden");
  } else {
    mainSelector.classList.add("hidden");
    footerSelector.classList.add("hidden");
  }
};
