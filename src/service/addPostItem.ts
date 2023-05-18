import { getPostItems } from "./getPostItems";
import { setPostItems } from "./setPostItems";

export function addPostItem(item: object) {
  let postItems = getPostItems();
  if (postItems) {
    postItems.unshift(item);
  } else {
    postItems = [item];
  }
  setPostItems(postItems);
}
