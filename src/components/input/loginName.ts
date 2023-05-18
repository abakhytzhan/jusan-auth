import { testBlur } from "../../utils/testBlur";

export function loginNameInput(loginName: HTMLInputElement) {
  loginName.addEventListener("input", loginNameCallback);
  loginName.addEventListener("blur", loginNameBlur);
}

export function loginNameCallback() {
  const loginName: HTMLInputElement | null =
    document.querySelector(".loginName");
  if (loginName) {
    loginName.style.borderBottom = "2px solid #6991f3";
    let pattern = /[a-zA-Z0-9_-]{3,15}/;
    let b = loginName.value.split("").every((elem) => elem.match(/\d/));
    if (pattern.test(loginName.value)) {
      if (!b) {
        loginName.style.borderBottomColor = "green";
        loginName.style.color = "#8a8a8a";
      } else {
        loginName.style.borderBottomColor = "orange";
      }
    } else {
      loginName.style.borderBottomColor = "orange";
    }
  }
}

export function loginNameBlur() {
  const loginName: HTMLInputElement | null =
    document.querySelector(".loginName");
  if (loginName) {
    testBlur(loginName);
  }
}
