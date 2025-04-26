// using window.onVariableUpdate
export let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

export function setCart(newValue) {
  cart = newValue;
}
