import { cart, setCart } from "./shared.js";

let emptyCartDiv = document.querySelector(".empty-cart");
let orderDetailsDiv = document.querySelector(".order-details");
let ordersDiv = document.querySelector(".orders");
let orderTotalDiv = document.querySelector(".order-total p");
let placeOrderBtn = document.querySelector("#place-order");

// checkCheckoutEmptyOrNot will update the ui even if it returns true or false but if it returns false we'll display products in checkout page
if (checkCheckoutEmptyOrNot(cart, emptyCartDiv, orderDetailsDiv)) {
} else {
  updateCheckoutProducts(cart, ordersDiv, orderTotalDiv);
}

placeOrderBtn.addEventListener("click", (_) => {
  placeOrderBtn.textContent = "PLACING ORDER...";
  setTimeout(() => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
            <div class="order-placed">
          <div class="congrats-msg">
            <h1>Order placed successfully</h1>
            <video
              src="images/Animation - 1745696167691.webm"
              autoplay
              loop
            ></video>
          </div>
        </div>
        `
    );
  }, 1000);

  // removing products from cart
  sessionStorage.setItem("cart", JSON.stringify([]));
  setCart(JSON.parse(sessionStorage.getItem("cart")));

  // redirect to home
  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
});
