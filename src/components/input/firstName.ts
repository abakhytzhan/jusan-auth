import { testFocus } from "../../utils/testFocus";
import { testBlur } from "../../utils/testBlur";

export function firstNameInput(firstName: HTMLInputElement) {
  firstName.addEventListener("input", firstNameCallback);
  firstName.addEventListener("blur", firstNameBlur);
}

export function firstNameCallback() {
  const firstName: HTMLInputElement | null =
    document.querySelector(".firstName");
  if (firstName) {
    firstName.style.borderBottom = "2px solid #6991f3";
    let pattern = /^[a-zA-Z]+[a-zA-Z-]+$|^[а-яА-Я]+[а-яА-Я-]+$/;
    testFocus(firstName, pattern);
  }
}

export function firstNameBlur() {
  const firstName: HTMLInputElement | null =
    document.querySelector(".firstName");
  if (firstName) {
    testBlur(firstName);
  }
}
