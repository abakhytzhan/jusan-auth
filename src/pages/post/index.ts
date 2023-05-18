import { myProfileButton } from "../../components/button/myProfile";
import { addPostButton } from "../../components/button/addPost";
import { exitButton } from "../../components/button/exitBtn";
import { mainButton } from "../../components/button/mainBtn";
import { checkToken } from "../../service/checkToken";
import { addPostItem } from "../../service/addPostItem";
import pushState from "../../components/route/pushState";
import { getCurrentUser } from "../../service/getCurrentUser";
import { formatDate } from "../../utils/formatDate";
import { generateID } from "../../utils/generateID";

export const post = () => {
  if (!checkToken()) {
    alert("The token has expired. You need to log in again!");
    let href = "/login";
    pushState({ href }, "", href);
  } else {
    let postHTML = `
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
        <div class="addPost">
            <div class="title addPost__title">Добавить пост</div>
            <div class="addPost__postArea">
                <textarea class="addPost__area" maxLength="200"></textarea>
                <div class="addPost__limit">0/200</div>
            </div>
            <div class="addPost__button">Добавить</div>
        </div>

        <div class="jusan">© 2022, Jusan Singularity</div>
</div>
      `;

    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = postHTML;
    }

    const postInput: HTMLInputElement | null =
      document.querySelector(".addPost__area");
    const addPostBtn2 = document.querySelector(".addPost__button");

    addPostBtn2?.addEventListener("click", function () {
      if (postInput?.value.length === 0) {
        const alert = document.querySelector(".head__alert__errorPost");
        alert?.classList.toggle("inactive");
      } else {
        let currentUser = getCurrentUser();
        let date = new Date();
        let currentTime = formatDate(date);
        let itemID = generateID();

        let item = {
          title: `@${currentUser.loginName.toUpperCase()}`,
          description: postInput?.value,
          time: currentTime,
          id: itemID,
        };

        addPostItem(item);

        const spinner = document.querySelector(".spinner");
        spinner?.classList.remove("inactive");
        setTimeout(() => {
          spinner?.classList.add("inactive");
          if (path) {
            path.innerHTML = "";
          }
          let href = "/feed";
          pushState({ href }, "", href);
          const feedBtn = document.querySelector(".feed__button");
          if (feedBtn) {
            feedBtn.classList.toggle("inactive");
          }
        }, 2000);
      }
    });

    postInput?.addEventListener("input", function () {
      let limit = document.querySelector(".addPost__limit");
      if (limit) {
        limit.textContent = `${postInput.value.length}/200`;
      }
    });

    const exitBtn = document.querySelector(".exit a");
    if (exitBtn) {
      exitButton(exitBtn);
    }

    const mainBtn = document.querySelector(".main a");
    if (mainBtn) {
      mainButton(mainBtn);
    }

    const addPostBtn = document.querySelector(".post a");
    if (addPostBtn) {
      addPostButton(addPostBtn);
    }

    const myProfile = document.querySelector(".myProfile a");
    if (myProfile) {
      myProfileButton(myProfile);
    }
  }
};
