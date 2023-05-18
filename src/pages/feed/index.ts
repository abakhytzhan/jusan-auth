import { myProfileButton } from "../../components/button/myProfile";
import { mainButton } from "../../components/button/mainBtn";
import { exitButton } from "../../components/button/exitBtn";
import { addPostButton } from "../../components/button/addPost";
import { checkToken } from "../../service/checkToken";
import { getPostItems } from "../../service/getPostItems";
import pushState from "../../components/route/pushState";

export const feed = () => {
  if (!checkToken()) {
    alert("The token has expired. You need to log in again!");
    let href = "/login";
    pushState({ href }, "", href);
  } else {
    let feedHTML = `
    <div class="container2">
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
        <div class="feed">
            <div class="feed__title">Лента постов</div>
            <div class="feed__button inactive">Пост успешно добавлен!</div>
        </div>
        <div class="posts">
            
        </div>
        <div class="arrows">
            <div class="arrows__left">
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z" fill="#4A4A4A" fill-opacity="0.5"/>
            </svg>
            </div>
            <div class="arrows__center">1</div>
            <div class="arrows__right">
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="#4A4A4A" fill-opacity="0.5"/>
            </svg>
            </div>
        </div>
        
    </div>
    `;

    const path = document.querySelector(".path");
    if (path) {
      path.innerHTML = feedHTML;
    }

    let posts = document.querySelector(".posts");

    const leftBtn = document.querySelector(".arrows__left");
    const rightBtn = document.querySelector(".arrows__right");
    const pageNumber = document.querySelector(".arrows__center");

    function renderPost(start: number) {
      let postItems = getPostItems();
      if (postItems) {
        let end = start + 3;
        if (end >= postItems.length) {
          end = postItems.length;
          if (rightBtn) {
            rightBtn.innerHTML = `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="#4A4A4A" fill-opacity="0.5"/>
            </svg>`;

            rightBtn.removeEventListener("click", rightBtnCallback);
          }
        } else {
          if (rightBtn) {
            rightBtn.innerHTML = `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="#4A4A4A"/>
            </svg>`;

            rightBtn.addEventListener("click", rightBtnCallback);
          }
        }
        if (start !== 0) {
          if (leftBtn) {
            leftBtn.innerHTML = `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z" fill="#4A4A4A"/>
            </svg>`;

            leftBtn.addEventListener("click", leftBtnCallback);
          }
        } else {
          if (leftBtn) {
            leftBtn.innerHTML = `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z" fill="#4A4A4A" fill-opacity="0.5"/>
            </svg>`;

            leftBtn.removeEventListener("click", leftBtnCallback);
          }
        }
        if (posts) {
          posts.innerHTML = "";
        }

        for (let i = start; i < end; i++) {
          let post = document.createElement("div");
          post.classList.add("posts__item");

          post.innerHTML = `
                <div class="posts__item__info">
                    <div class="posts__item__info__name">${postItems[i].title}</div>
                    <div class="posts__item__info__date">${postItems[i].time}</div>
                </div>
                <div class="posts__item__text">${postItems[i].description}</div>
        `;
          if (posts) {
            posts.appendChild(post);
          }
        }
        if (pageNumber) {
          pageNumber.innerHTML = (start / 3 + 1).toString();
        }
      }
    }

    let start = 0;
    renderPost(start);

    const exitBtn = document.querySelector(".exit a");
    if (exitBtn) {
      exitButton(exitBtn);
    }

    const mainBtn = document.querySelector(".main a");
    if (mainBtn) {
      mainButton(mainBtn);
    }

    function leftBtnCallback() {
      if (start >= 3) {
        start -= 3;
        renderPost(start);
      }
    }

    function rightBtnCallback() {
      start += 3;
      renderPost(start);
    }

    let postItems = getPostItems();

    if (postItems?.length > 3) {
      if (rightBtn) {
        rightBtn.innerHTML = `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="#4A4A4A"/>
        </svg>`;
      }
    }

    const addPostBnt = document.querySelector(".post a");
    if (addPostBnt) {
      addPostButton(addPostBnt);
    }

    const myProfile = document.querySelector(".myProfile a");
    if (myProfile) {
      myProfileButton(myProfile);
    }
  }
};
