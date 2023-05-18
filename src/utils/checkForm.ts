export function checkForm(inputElements: HTMLInputElement[]) {
  let count = 0;
  for (let i = 0; i < inputElements.length; i++) {
    if (
      inputElements[i].style.borderBottomColor !== "green" ||
      inputElements[i].style.borderBottomColor === ""
    ) {
      inputElements[i].style.borderBottom = "2px solid red";
      inputElements[i].classList.add("changeColor");
      inputElements[i].style.color = "red";
    } else {
      count++;
    }
  }
  if (count === inputElements.length) {
    return true;
  } else {
    return false;
  }
}
