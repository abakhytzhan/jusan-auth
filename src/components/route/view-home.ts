import { checkToken } from "../../service/checkToken";
import pushState from "./pushState";

const home = {
  async render() {
    if (checkToken()) {
      let href = "/feed";
      pushState({ href }, "", href);
    } else {
      let href = "/login";
      pushState({ href }, "", href);
    }
  },
};

export default home;
