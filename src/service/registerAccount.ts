import { getAccountsList } from "./getAccountsList";
import { setAccountsList } from "./setAccountsList";

export function registerAccount(account: object) {
  let accountsList = getAccountsList();
  if (accountsList) {
    accountsList.push(account);
  } else {
    accountsList = [account];
  }
  setAccountsList(accountsList);
}
