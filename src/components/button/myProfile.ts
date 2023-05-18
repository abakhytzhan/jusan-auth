import pushState from "../route/pushState";

export function myProfileButton(myProfile: Element) {
  myProfile.addEventListener("click", function myProfileFunc() {
    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = "";
    }
    myProfile.removeEventListener("click", myProfileFunc);
    let href = "/profile";
    pushState({ href }, "", href);
  });
}
