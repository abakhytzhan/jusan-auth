import { testBlur } from "../../utils/testBlur";

export function passwordInput(password: HTMLInputElement) {
  password.addEventListener("input", passwordCallback);
  password.addEventListener("blur", passwordBlur);
}

export function passwordCallback() {
  const password: HTMLInputElement | null = document.querySelector(".password");
  if (password) {
    password.style.borderBottom = "2px solid #6991f3";
    let pattern = /\S{8,30}/;
    const b = password.value.split("").some((elem) => /\d/.test(elem));
    const c = password.value.split("").some((elem) => /\W/.test(elem));
    if (pattern.test(password.value)) {
      if (b && c) {
        password.style.borderBottomColor = "green";
        password.style.color = "#8a8a8a";
      } else {
        password.style.borderBottomColor = "orange";
      }
    } else {
      password.style.borderBottomColor = "orange";
    }
  }
}

export function passwordBlur() {
  const password: HTMLInputElement | null = document.querySelector(".password");
  if (password) {
    testBlur(password);
  }
}
