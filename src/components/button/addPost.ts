import pushState from "../route/pushState";

export function addPostButton(addPostBtn: Element) {
  addPostBtn.addEventListener("click", function addPostBntFunc() {
    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = "";
    }
    addPostBtn.removeEventListener("click", addPostBntFunc);
    let href = "/post";
    pushState({ href }, "", href);
  });
}
