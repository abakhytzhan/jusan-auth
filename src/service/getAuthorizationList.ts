export function getAuthorizationList() {
  let list = localStorage.getItem("authorizationList");
  if (list) {
    return JSON.parse(localStorage.getItem("authorizationList") || "");
  }
  return null;
}
