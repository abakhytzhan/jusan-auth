export function testBlur(element: HTMLInputElement) {
  if (element.style.borderBottomColor === "green") {
    element.style.borderBottom = "0.5px solid green";
  } else {
    element.style.borderBottom = "2px solid red";
  }
}
