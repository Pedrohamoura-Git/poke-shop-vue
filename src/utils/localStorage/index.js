export function LocalStorageIsEmpty() {
  const localAllCartItems = JSON.parse(localStorage.getItem("allCartItems"));
  if (localAllCartItems == null) return false;
  else return true;
}

export function getAllCartItemsFromLocalStorage() {
  const localAllCartItems = JSON.parse(localStorage.getItem("allCartItems") || [])
  return localAllCartItems
}

export function setAllCartItemsInLocalStorage(allCartItems) {
  localStorage.setItem("allCartItems", JSON.stringify(allCartItems));
}