export function setAuthorizationList(authorizationList: Array<object>) {
  localStorage.authorizationList = JSON.stringify(authorizationList);
}
