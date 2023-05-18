export const error404 = () => {
  let error404HTML = `
    <div class="container">
        <div class="response response404">
            <div class="response__error">404</div>
            <div class="response__page">Страница не найдена</div>
            <div class="response__back error404">Назад</div>
        </div>
    </div>
      `;
  const path = document.querySelector(".path");
  if (path) {
    path.innerHTML = error404HTML;
  }

  const btn = document.querySelector(".error404");
  if (btn) {
    btn.addEventListener("click", function errorPage404() {
      window.history.go(-1);
      btn.removeEventListener("click", errorPage404);
    });
  }
};
