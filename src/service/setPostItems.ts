export function setPostItems(postItems: object[]) {
  localStorage.postItems = JSON.stringify(postItems);
}
