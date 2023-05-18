import { setToken } from "./setToken";

export function getToken() {
  let token = {
    start: Date.now(),
    end: Date.now() + 30000,
  };
  setToken(token);
}
