// async function getData() {
//     try {
//         let myResponse = await fetch("https://fakestoreapi.com/products");
//         let myData = await myResponse.json();
//         return myData;
//     } catch (error) {
//         console.log(Error(error));
//     }
// }

// getData().then(data => {
//     console.log(data);
// })

let cart = [""];
let cartDiv = document.querySelector(".cart");
let loginDiv = document.querySelector(".login");
let searchDiv = document.querySelector(".search");
let menuDiv = document.querySelector(".menu");
let displayedMenu = document.querySelector(".displayed-menu");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  speed: 800,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const number = (index + 1).toString().padStart(2, "0");
      return `
        <div class="${className}">
          <span class="bullet-number">${number}</span>
          <span class="bullet-line"></span>
        </div>
      `;
    },
  },
});

// display cart
if (cart.length === 0) {
  cartDiv.innerHTML = "";
  cartDiv.innerHTML += `
    <p>CART</p>
    <span>($0)</span>
    <div class="products">
    <p>No products in the cart</p>
    </div>
    `;
} else {
  cartDiv.innerHTML = "";
  cartDiv.innerHTML += `
                <p>CART</p>
            <span id="price">($0)</span>
            <div class="products">
              <div class="item">
                <div class="item-img">
                  <img
                    src="images/h1-product-8-600x728.jpg"
                    alt="product image"
                  />
                </div>
                <div class="info">
                  <p>Basket With Handles</p>
                  <span>1 X $160</span>
                </div>
                <span class="delete-btn">x</span>
              </div>

              <div class="item">
                <div class="item-img">
                  <img
                    src="images/h1-product-8-600x728.jpg"
                    alt="product image"
                  />
                </div>
                <div class="info">
                  <p>Basket With Handles</p>
                  <span>1 X $160</span>
                </div>
                <span class="delete-btn">x</span>
              </div>

              <div class="total">
                <span>TOTAL:</span>
                <span>270$</span>
              </div>

              <div class="view-cart"><a href="#">VIEW CART</a></div>
              <div class="checkout"><a href="#">CHECKOUT</a></div>
            </div>
    `;
}

// display login info

loginDiv.addEventListener("click", (_) => {
  displayLogin();
});

// display or close search

let display = true;
const container = document.querySelector(".search-container");
searchDiv.addEventListener("click", (e) => {
  if (container.contains(e.target) && e.target !== searchDiv) return;

  if (display) {
    container.style = "visibility: visible;";
    display = !display;
  } else {
    container.style = "visibility: hidden;";
    display = !display;
  }
});

document.addEventListener("click", (e) => {
  // close search if clicked anywhere except the search input
  if (!container.contains(e.target) && !searchDiv.contains(e.target)) {
    container.style = "visibility: hidden;";
    display = true;
  }

  // close login
  if (e.target.classList.value === "login-info") {
    e.target.remove();
  }

  // display login
  if (e.target.classList.value === "login-btn") {
    loginClicked();
  }

  // display register

  if (e.target.classList.value === "register-btn") {
    registerClicked();
  }

  // display menu
  if (menuDiv.contains(e.target)) {
    displayedMenu.style = "right: 0%";
  }

  // close menu
  if (
    e.target.classList[0] === "close-btn" ||
    (!displayedMenu.contains(e.target) && !menuDiv.contains(e.target))
  ) {
    displayedMenu.style = "right: -50%";
  }
});
