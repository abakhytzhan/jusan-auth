export function testFocus(element: HTMLInputElement, pattern: RegExp) {
  if (pattern.test(element.value)) {
    element.style.borderBottomColor = "green";
    element.style.color = "#8a8a8a";
  } else {
    element.style.borderBottomColor = "orange";
  }
}
