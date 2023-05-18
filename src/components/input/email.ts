import { testFocus } from "../../utils/testFocus";
import { testBlur } from "../../utils/testBlur";

export function emailInput(email: HTMLInputElement) {
  email.addEventListener("input", emailCallback);
  email.addEventListener("blur", emailBlur);
}

export function emailCallback() {
  const email: HTMLInputElement | null = document.querySelector(".email");
  if (email) {
    email.style.borderBottom = "2px solid #6991f3";
    let pattern = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
    testFocus(email, pattern);
  }
}

export function emailBlur() {
  const email: HTMLInputElement | null = document.querySelector(".email");
  if (email) {
    testBlur(email);
  }
}
