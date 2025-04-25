let cart = [];
let apiProducts = [];
let htmlProducts = document.querySelectorAll(".product");

let cartDiv = document.querySelector(".cart");
let loginDiv = document.querySelector(".login");
let searchDiv = document.querySelector(".search");
let menuDiv = document.querySelector(".menu");
let displayedMenu = document.querySelector(".displayed-menu");

fillProducts(apiProducts); // displaying the products from the api

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
  resetCart();
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

  // close menu btn
  if (
    e.target.classList[0] === "close-btn" ||
    (!displayedMenu.contains(e.target) && !menuDiv.contains(e.target))
  ) {
    displayedMenu.style = "right: -50%";
  }

  // add product to cart
  try {
    if (
      e.target.parentElement.classList[0] === "add-cart" &&
      e.target.parentElement.classList.length === 1
    ) {
      let productId = e.target.closest(".product").id.match(/\d+/)[0]; // getting the product that will be added to the cart
      let addProductDiv = e.target.parentElement.querySelector("p");

      // checking if the product is repeated and if so dont append it to the cart
      for (let i of cart) {
        if (i.id == productId) {
          productAdded(addProductDiv, true);
          return;
        }
      }

      // adding product to cart
      for (let i of apiProducts) {
        if (productId == i.id) {
          cart.push(i);
          productAdded(addProductDiv, false);
          break;
        }
      }

      updateCart(cart, cartDiv);
    }
  } catch (error) {}

  // deleting item

  if (e.target.classList[0] === "delete-btn") {
    let itemParent = e.target.closest(".item");
    let itemId = itemParent.id.match(/\d+/)[0];
    itemParent.remove();

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == itemId) {
        cart.splice(i, 1); // removes the item element from the cart array
        break;
      }
    }
  }

  // display cart
  if (cart.length === 0) {
    resetCart();
  } else {
    updateCart(cart, cartDiv);
  }

  // show quick look for every product
  if (e.target.classList[0] === "quick") {
    let elementId = e.target.parentElement.id.match(/\d+/)[0]; // using regex to filter the numbers only

    quickLook(apiProducts, elementId);
  }

  // close quick look
  try {
    if (document.querySelector(".exit-btn").contains(e.target)) {
      e.target.closest(".login-info").remove();
    }
  } catch (error) {}

  // pagination
  if (e.target.id === "next") {
    nextPage();
    fillProducts(apiProducts);
  }

  if (e.target.id === "back") {
    previousPage();
    fillProducts(apiProducts);
  }

  // filtering products by categories
  if (
    document.querySelector(".items-type").contains(e.target) &&
    e.target.localName === "li"
  ) {
    let categoryName = e.target.textContent.toLowerCase();

    if (categoryName != "all") {
      filterCategories(apiProducts, categoryName);
      document.querySelector(".pagination").style = "display: none;";
    } else {
      filterCategories(apiProducts, "all");
      document.querySelector(".pagination").style = "display: flex;";
    }
  }
});
