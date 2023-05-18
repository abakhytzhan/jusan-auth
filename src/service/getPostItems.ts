export function getPostItems() {
  let post = localStorage.getItem("postItems");
  if (post) {
    return JSON.parse(localStorage.getItem("postItems") || "");
  }
  return null;
}
