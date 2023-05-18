export function checkAccount(
  enterLogin: HTMLInputElement | null,
  enterPassword: HTMLInputElement | null,
  accountsList: Array<any>,
  authorizationList: Array<any>
) {
  const displayLoginMessage = document.querySelector(".login__message");
  for (let i = 0; i < accountsList.length; i++) {
    if (
      accountsList[i].loginName === enterLogin?.value &&
      accountsList[i].password === enterPassword?.value
    ) {
      if (authorizationList) {
        authorizationList.push(accountsList[i]);
      } else {
        authorizationList = [accountsList[i]];
      }

      if (!displayLoginMessage?.classList.contains("inactive")) {
        displayLoginMessage?.classList.add("inactive");
      }
      if (enterLogin) enterLogin.value = "";
      if (enterPassword) enterPassword.value = "";
      return accountsList[i];
    }
    if (i === accountsList.length - 1) {
      if (displayLoginMessage?.classList.contains("inactive")) {
        displayLoginMessage.classList.remove("inactive");
      }
      return false;
    }
  }
}
