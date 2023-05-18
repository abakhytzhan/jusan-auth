export function setToken(token: object) {
  localStorage.setItem("currentToken", JSON.stringify(token));
}
