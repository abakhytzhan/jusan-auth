export function checkToken() {
  let key = "currentToken";

  let token = localStorage.getItem(key);
  if (token) {
    let currentToken = JSON.parse(localStorage.getItem(key) || "");
    if (currentToken.end - Date.now() > 0) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
