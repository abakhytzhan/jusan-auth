import {
  emailInput,
  emailCallback,
  emailBlur,
} from "../../components/input/email";
import {
  loginNameInput,
  loginNameCallback,
  loginNameBlur,
} from "../../components/input/loginName";
import {
  firstNameInput,
  firstNameCallback,
  firstNameBlur,
} from "../../components/input/firstName";
import {
  lastNameInput,
  lastNameCallback,
  lastNameBlur,
} from "../../components/input/lastName";
import {
  phoneInput,
  phoneCallback,
  phoneBlur,
} from "../../components/input/phone";
import {
  passwordInput,
  passwordCallback,
  passwordBlur,
} from "../../components/input/password";
import {
  passwordRepeatInput,
  passwordRepeatCallback,
  passwordRepeatBlur,
} from "../../components/input/passwordRepeat";
import { createAndRegisterAccount } from "../../utils/createAndRegisterAccount";
import pushState from "../../components/route/pushState";
import { checkForm } from "../../utils/checkForm";

export const registration = () => {
  let registrationHTML = `
    <div class="container">
    <div class="registration">
    <div class="title title__registration">Регистрация</div>

    <span data-descr="Латинские буквы, может содержать спецсимволы и цифры, обязательно должна быть «собачка» (@), без пробелов"><input class="email" type="email" placeholder="email" required /></span>
    <div class="line"></div>

    <span data-descr="От 3 до 15 символов, латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них."><input class="loginName" type="text" placeholder="Логин" required/></span>
    <div class="line"></div>

    <span data-descr="Латиница или кириллица, не должно быть пробелов и цифр. Из спецсимволов допускается только дефис."><input class="firstName" type="text" placeholder="Имя" required /></span>
    <div class="line"></div>

    <span data-descr="Латиница или кириллица, не должно быть пробелов и цифр. Из спецсимволов допускается только дефис."><input class="lastName" type="text" placeholder="Фамилия" required /></span>
    <div class="line"></div>

    <span data-descr="От 8 до 15 символов, состоит из цифр, может начинаться с плюса."><input class="phone" type="tel" placeholder="Телефон" required /></span>
    <div class="line"></div>

    <span data-descr="От 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра."><input class="password" type="password" placeholder="Пароль" minlength="8" maxlength="30" required /></span>
    <div class="line"></div>

    <span data-descr="Повторный пароль должен совпадать с первым"><input class="passwordRepeat" type="password" placeholder="Повторите пароль" required/></span>
    <div class="line"></div>

    <button class="button button__registration">Регистрация</button>
    </div>
      `;
  const path = document.querySelector(".path");
  if (path) {
    path.innerHTML = registrationHTML;
  }

  const email: HTMLInputElement | null = document.querySelector(".email");
  if (email) emailInput(email);

  const loginName: HTMLInputElement | null =
    document.querySelector(".loginName");
  if (loginName) loginNameInput(loginName);

  const firstName: HTMLInputElement | null =
    document.querySelector(".firstName");
  if (firstName) firstNameInput(firstName);

  const lastName: HTMLInputElement | null = document.querySelector(".lastName");
  if (lastName) lastNameInput(lastName);

  const phone: HTMLInputElement | null = document.querySelector(".phone");
  if (phone) phoneInput(phone);

  const password: HTMLInputElement | null = document.querySelector(".password");
  if (password) passwordInput(password);

  const passwordRepeat: HTMLInputElement | null =
    document.querySelector(".passwordRepeat");
  if (passwordRepeat && password) passwordRepeatInput(passwordRepeat);

  const submit = document.querySelector(".button__registration");
  submit?.addEventListener("click", submitCallback);

  function submitCallback() {
    if (
      email &&
      loginName &&
      firstName &&
      lastName &&
      phone &&
      password &&
      passwordRepeat
    ) {
      if (
        checkForm([
          email,
          loginName,
          firstName,
          lastName,
          phone,
          password,
          passwordRepeat,
        ])
      ) {
        const spinner = document.querySelector(".spinner");
        spinner?.classList.remove("inactive");
        setTimeout(() => {
          spinner?.classList.add("inactive");
          createAndRegisterAccount([
            email,
            loginName,
            firstName,
            lastName,
            phone,
            password,
            passwordRepeat,
          ]);
          let href = "/login";
          pushState({ href }, "", href);
        }, 2000);
        email.removeEventListener("input", emailCallback);
        email.removeEventListener("blur", emailBlur);
        firstName.removeEventListener("input", firstNameCallback);
        firstName.removeEventListener("blur", firstNameBlur);
        lastName.removeEventListener("input", lastNameCallback);
        lastName.removeEventListener("blur", lastNameBlur);
        loginName.removeEventListener("input", loginNameCallback);
        loginName.removeEventListener("blur", loginNameBlur);
        password.removeEventListener("input", passwordCallback);
        password.removeEventListener("blur", passwordBlur);
        passwordRepeat.removeEventListener("input", passwordRepeatCallback);
        passwordRepeat.removeEventListener("blur", passwordRepeatBlur);
        phone.removeEventListener("input", phoneCallback);
        phone.removeEventListener("blur", phoneBlur);

        submit?.removeEventListener("click", submitCallback);
      }
    }
  }
};
