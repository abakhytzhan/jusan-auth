import { checkAccount } from "../../utils/checkAccount";
import { getAccountsList } from "../../service/getAccountsList";
import { getAuthorizationList } from "../../service/getAuthorizationList";
import { getToken } from "../../service/getToken";
import pushState from "../../components/route/pushState";
import { setCurrentUser } from "../../service/setCurrentUser";

export const login = () => {
  let loginHTML = `
    <div class="container">
        <div class="login">
            <div class="login__header">
                <div class="title title__login">Логин</div>
                <div class="login__message inactive">Invalid username or password</div>
            </div>
            <input class="login__loginName" type="text" placeholder="Логин" />
            <div class="line"></div>
            <input class="login__password" type="password" placeholder="Пароль" />
            <div class="line"></div>
            <button class="button button__login">Войти</button>
            <div class="login__text"><a>Нет аккаунта? Регистрация</a></div>
        </div>
    </div>
      `;

  const path = document.querySelector(".path");
  if (path) {
    path.innerHTML = loginHTML;
  }

  const sign = document.querySelector(".button__login");
  sign?.addEventListener("click", signCallback);

  function signCallback() {
    let accountsList = getAccountsList();
    if (accountsList) {
      let authorizationList = getAuthorizationList();
      const enterLogin: HTMLInputElement | null =
        document.querySelector(".login__loginName");
      const enterPassword: HTMLInputElement | null =
        document.querySelector(".login__password");

      let currentUser = checkAccount(
        enterLogin,
        enterPassword,
        accountsList,
        authorizationList
      );

      if (currentUser) {
        setCurrentUser(currentUser);
        const spinner = document.querySelector(".spinner");
        spinner?.classList.remove("inactive");
        setTimeout(() => {
          spinner?.classList.add("inactive");
          const path = document.querySelector(".path");
          if (path) {
            path.innerHTML = "";
          }
          getToken();
          let href = "/feed";
          pushState({ href }, "", href);
          sign?.removeEventListener("click", signCallback);
          noAccount?.removeEventListener("click", noAccountCallback);
        }, 2000);
      }
    } else {
      const displayLoginMessage = document.querySelector(".login__message");
      displayLoginMessage?.classList.remove("inactive");
    }
  }

  //////// NOACCOUNT ////////
  const noAccount = document.querySelector(".login__text a");
  noAccount?.addEventListener("click", noAccountCallback);

  function noAccountCallback() {
    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = "";
    }

    let href = "/registration";
    pushState({ href }, "", href);
    sign?.removeEventListener("click", signCallback);
    noAccount?.removeEventListener("click", noAccountCallback);
  }
};
