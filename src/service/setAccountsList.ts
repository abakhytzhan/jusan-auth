export function setAccountsList(accountsList: Array<object>) {
  localStorage.accountsList = JSON.stringify(accountsList);
}
