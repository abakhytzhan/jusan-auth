import { testBlur } from "../../utils/testBlur";

export function passwordRepeatInput(passwordRepeat: HTMLInputElement) {
  passwordRepeat.addEventListener("input", passwordRepeatCallback);
  passwordRepeat.addEventListener("blur", passwordRepeatBlur);
}

export function passwordRepeatCallback() {
  const passwordRepeat: HTMLInputElement | null =
    document.querySelector(".passwordRepeat");
  const password: HTMLInputElement | null = document.querySelector(".password");
  if (passwordRepeat && password) {
    passwordRepeat.style.borderBottom = "2px solid #6991f3";
    if (passwordRepeat.value === password.value) {
      passwordRepeat.style.borderBottomColor = "green";
      passwordRepeat.style.color = "#8a8a8a";
    } else {
      passwordRepeat.style.borderBottomColor = "orange";
    }
  }
}

export function passwordRepeatBlur() {
  const passwordRepeat: HTMLInputElement | null =
    document.querySelector(".passwordRepeat");
  if (passwordRepeat) testBlur(passwordRepeat);
}
