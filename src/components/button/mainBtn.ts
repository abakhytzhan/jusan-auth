import pushState from "../route/pushState";

export function mainButton(mainBtn: Element) {
  mainBtn.addEventListener("click", function mainBtnFunc() {
    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = "";
    }
    mainBtn.removeEventListener("click", mainBtnFunc);
    let href = "/feed";
    pushState({ href }, "", href);
  });
}
