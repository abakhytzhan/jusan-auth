import { registerAccount } from "../service/registerAccount";

export function createAndRegisterAccount(inputElements: HTMLInputElement[]) {
  let account = {
    email: inputElements[0].value,
    loginName: inputElements[1].value,
    firstName: inputElements[2].value,
    lastName: inputElements[3].value,
    phone: inputElements[4].value,
    password: inputElements[5].value,
  };
  registerAccount(account);
}
