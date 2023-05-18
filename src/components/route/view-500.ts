import { error500 } from "../../pages/500/index";

const view500 = {
  async render() {
    error500();
  },
};

export default view500;
