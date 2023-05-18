import { testFocus } from "../../utils/testFocus";
import { testBlur } from "../../utils/testBlur";

export function lastNameInput(lastName: HTMLInputElement) {
  lastName.addEventListener("input", lastNameCallback);
  lastName.addEventListener("blur", lastNameBlur);
}

export function lastNameCallback() {
  const lastName: HTMLInputElement | null = document.querySelector(".lastName");
  if (lastName) {
    lastName.style.borderBottom = "2px solid #6991f3";
    let pattern = /^[a-zA-Z]+[a-zA-Z-]+$|^[а-яА-Я]+[а-яА-Я-]+$/;
    testFocus(lastName, pattern);
  }
}

export function lastNameBlur() {
  const lastName: HTMLInputElement | null = document.querySelector(".lastName");
  if (lastName) {
    testBlur(lastName);
  }
}
