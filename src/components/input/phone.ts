import { testFocus } from "../../utils/testFocus";
import { testBlur } from "../../utils/testBlur";

export function phoneInput(phone: HTMLInputElement) {
  phone.addEventListener("input", phoneCallback);
  phone.addEventListener("blur", phoneBlur);
}

export function phoneCallback() {
  const phone: HTMLInputElement | null = document.querySelector(".phone");
  if (phone) {
    phone.style.borderBottom = "2px solid #6991f3";
    let pattern = /^[0-9+][0-9]{7,14}/;
    testFocus(phone, pattern);
  }
}

export function phoneBlur() {
  const phone: HTMLInputElement | null = document.querySelector(".phone");
  if (phone) testBlur(phone);
}
