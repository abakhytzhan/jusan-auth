export const error500 = () => {
  let error500HTML = `
    <div class="container">
        <div class="response response500">
            <div class="response__error">500</div>
            <div class="response__page">Ошибка сервера, пытаемся исправить</div>
            <div class="response__back error500">Назад</div>
        </div>
    </div>
      `;
  const path = document.querySelector(".path");
  if (path) {
    path.innerHTML = error500HTML;
  }

  const btn = document.querySelector(".error500");
  if (btn) {
    btn.addEventListener("click", function errorPage500() {
      window.history.go(-1);
      btn.removeEventListener("click", errorPage500);
    });
  }
};
