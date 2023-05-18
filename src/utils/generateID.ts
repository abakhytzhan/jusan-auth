import { getPostItems } from "../service/getPostItems";

export function generateID() {
  let postItems = getPostItems();
  if (postItems) {
    let id = postItems.length + 1;
    return id;
  }
  return 1;
}
