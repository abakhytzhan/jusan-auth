import { controller, signal } from "./abortSignal";
import { router, routes } from "./routes";

window.addEventListener("unload", unloadHandler, { once: true });
window.addEventListener("load", loadHandler, { once: true });
window.addEventListener("pushstate", pushStateHandler, { signal });
window.addEventListener("popstate", popStateHandler, { signal });

function unloadHandler() {
  // NOTE: no need for removeEventListener;
  controller.abort();
}

async function loadHandler() {
  await routerHandler();
}

async function pushStateHandler() {
  await routerHandler();
}

async function popStateHandler() {
  await routerHandler();
}

async function routerHandler() {
  await router(window.location, routes);
}
