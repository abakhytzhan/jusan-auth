import pushState from "../route/pushState";

export function exitButton(exitBtn: Element) {
  exitBtn.addEventListener("click", function exitBtnFunc() {
    const spinner = document.querySelector(".spinner");
    if (spinner) {
      spinner.classList.remove("inactive");
      setTimeout(() => {
        spinner.classList.add("inactive");
        const path = document.querySelector(".path");
        if (path) {
          path.innerHTML = "";
        }
        localStorage.setItem("currentUser", "");
        let href = "/login";
        pushState({ href }, "", href);
      }, 2000);
    }
    exitBtn.removeEventListener("click", exitBtnFunc);
  });
}
