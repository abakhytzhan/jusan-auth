export function setCurrentUser(currentUser: object) {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
