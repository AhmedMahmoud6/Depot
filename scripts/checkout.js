import { cart } from "./shared.js";

let emptyCartDiv = document.querySelector(".empty-cart");
let orderDetailsDiv = document.querySelector(".order-details");

updateCheckoutUi(cart, emptyCartDiv, orderDetailsDiv);
