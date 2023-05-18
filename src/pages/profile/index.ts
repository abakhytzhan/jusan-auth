import { myProfileButton } from "../../components/button/myProfile";
import { addPostButton } from "../../components/button/addPost";
import { mainButton } from "../../components/button/mainBtn";
import { exitButton } from "../../components/button/exitBtn";
import { emailInput } from "../../components/input/email";
import { loginNameInput } from "../../components/input/loginName";
import { firstNameInput } from "../../components/input/firstName";
import { lastNameInput } from "../../components/input/lastName";
import { phoneInput } from "../../components/input/phone";
import { checkForm } from "../../utils/checkForm";
import { checkToken } from "../../service/checkToken";
import pushState from "../../components/route/pushState";
import { getCurrentUser } from "../../service/getCurrentUser";
import { getAccountsList } from "../../service/getAccountsList";
import { setAccountsList } from "../../service/setAccountsList";
import { setCurrentUser } from "../../service/setCurrentUser";

export const profile = () => {
  if (!checkToken()) {
    alert("The token has expired. You need to log in again!");
    let href = "/login";
    pushState({ href }, "", href);
  } else {
    let profileHTML = `
    <div class="container3">

        <div class="nav">
            <div class="nav__best">👍 Best MVP</div>
            <div class="nav__item">
                <div class="main">
                    <a>🚀 Главная</a>
                    <div class="nav__underline"></div>
                </div>

                <div class="nav__vline"></div>
                <div class="post">
                    <a>✅ Добавить пост</a>
                    <div class="nav__underline"></div>
                </div>

                <div class="nav__vline"></div>
                <div class="myProfile">
                    <a>👨‍ Мой профиль</a>
                    <div class="nav__underline"></div>
                </div>

                <div class="nav__vline"></div>
                <div class="exit">
                    <a>🔴 Выход</a>
                    <div class="nav__underline"></div>
                </div>
            </div>

        </div>
    
        <div class="head">
            <div class="head__alert head__alert__error inactive">Неправильные параметры профиля!</div>
            <div class="head__alert head__alert__success inactive">Профиль успешно обновлен!</div>
            <div class="head__alert head__alert__errorPost inactive">Ошибка! Пост не может быть пустым</div>
        </div>
        <div class="profile">
            <div class="title profile__title">Мой Профиль</div>
            <div class="profile__wrapper">
                <div>
                    <input class="profile__email" type="email" placeholder="test@email.com">
                    
                </div>
                <div>
                    <input class="profile__loginName" type="text" placeholder="test">
                    
                </div>
                <div>
                    <input class="profile__firstName" type="text" placeholder="Тест">
                    
                </div>
                <div>
                    <input class="profile__phone" type="telephone" placeholder="+77072342424">
                    
                </div>
                <div>
                    <input class="profile__lastName" type="text" placeholder="Тестович">
                    
                </div>
                
                <div class="profile__button">Сохранить</div>
            </div>
        </div>

    </div>
    
      `;

    const currentUser = getCurrentUser();

    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = profileHTML;
    }

    const exitBtn = document.querySelector(".exit a");
    if (exitBtn) {
      exitButton(exitBtn);
    }

    const mainBtn = document.querySelector(".main a");
    if (mainBtn) {
      mainButton(mainBtn);
    }

    const addPostBnt = document.querySelector(".post a");
    if (addPostBnt) {
      addPostButton(addPostBnt);
    }

    const myProfile = document.querySelector(".myProfile a");
    if (myProfile) {
      myProfileButton(myProfile);
    }

    const emailProfile: HTMLInputElement | null =
      document.querySelector(".profile__email");
    if (emailProfile) {
      emailProfile.value = currentUser.email;
      emailInput(emailProfile);
    }

    const loginNameProfile: HTMLInputElement | null = document.querySelector(
      ".profile__loginName"
    );
    if (loginNameProfile) {
      loginNameProfile.value = currentUser.loginName;
      loginNameInput(loginNameProfile);
    }

    const firstNameProfile: HTMLInputElement | null = document.querySelector(
      ".profile__firstName"
    );
    if (firstNameProfile) {
      firstNameProfile.value = currentUser.firstName;
      firstNameInput(firstNameProfile);
    }

    const lastNameProfile: HTMLInputElement | null =
      document.querySelector(".profile__lastName");
    if (lastNameProfile) {
      lastNameProfile.value = currentUser.lastName;
      lastNameInput(lastNameProfile);
    }

    const phoneProfile: HTMLInputElement | null =
      document.querySelector(".profile__phone");
    if (phoneProfile) {
      phoneProfile.value = currentUser.phone;
      phoneInput(phoneProfile);
    }

    let inputElements = [
      emailProfile,
      loginNameProfile,
      firstNameProfile,
      phoneProfile,
      lastNameProfile,
    ];
    for (let elem of inputElements) {
      if (elem) {
        elem.style.borderBottomColor = "green";
      }
    }

    const submitProfile = document.querySelector(".profile__button");
    if (submitProfile) {
      submitProfile.addEventListener("click", function () {
        const errorAlert = document.querySelector(".head__alert__error");
        const successAlert = document.querySelector(".head__alert__success");
        if (
          emailProfile &&
          loginNameProfile &&
          firstNameProfile &&
          phoneProfile &&
          lastNameProfile
        ) {
          if (
            checkForm([
              emailProfile,
              loginNameProfile,
              firstNameProfile,
              phoneProfile,
              lastNameProfile,
            ])
          ) {
            let accountsList = getAccountsList();
            for (let i = 0; i < accountsList.length; i++) {
              if (
                accountsList[i].loginName == currentUser.loginName &&
                accountsList[i].password == currentUser.password
              ) {
                accountsList[i].email = emailProfile?.value;
                accountsList[i].loginName = loginNameProfile?.value;
                accountsList[i].firstName = firstNameProfile?.value;
                accountsList[i].lastName = lastNameProfile?.value;
                accountsList[i].phone = phoneProfile?.value;

                currentUser.email = emailProfile?.value;
                currentUser.loginName = loginNameProfile?.value;
                currentUser.firstName = firstNameProfile?.value;
                currentUser.lastName = lastNameProfile?.value;
                currentUser.phone = phoneProfile?.value;
              }
              setAccountsList(accountsList);
              setCurrentUser(currentUser);
            }
            const spinner = document.querySelector(".spinner");
            spinner?.classList.remove("inactive");
            setTimeout(() => {
              spinner?.classList.add("inactive");
              errorAlert?.classList.add("inactive");
              successAlert?.classList.remove("inactive");
            }, 2000);
          } else {
            successAlert?.classList.add("inactive");
            errorAlert?.classList.remove("inactive");
          }
        }
      });
    }
  }
};
