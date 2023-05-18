import home from "./view-home";
import registrationView from "./view-registration";
import feedView from "./view-feed";
import postView from "./view-post";
import loginView from "./view-login";
import profileView from "./view-profile";
import view404 from "./view-404";
import view500 from "./view-500";
import { Route } from "./types";

export const routes: Route[] = [
  {
    path: "/",
    view: home,
  },
  {
    path: "/login",
    view: loginView,
  },
  {
    path: "/registration",
    view: registrationView,
  },
  {
    path: "/feed",
    view: feedView,
  },
  {
    path: "/post",
    view: postView,
  },
  {
    path: "/profile",
    view: profileView,
  },
  {
    path: "/404",
    view: view404,
  },
  {
    path: "/500",
    view: view500,
  },
];

export async function router(location: Location, routes: Route[]) {
  const match = routes.find((route) => route.path === location.pathname);

  if (!match) {
    let match = {
      path: "/404",
      view: view404,
    };

    await match.view.render();
  } else {
    await match.view.render();
  }
}
