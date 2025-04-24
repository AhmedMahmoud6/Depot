let cart = [];
let apiProducts = [];
let htmlProducts = document.querySelectorAll(".product");

let cartDiv = document.querySelector(".cart");
let loginDiv = document.querySelector(".login");
let searchDiv = document.querySelector(".search");
let menuDiv = document.querySelector(".menu");
let displayedMenu = document.querySelector(".displayed-menu");

fillProducts(apiProducts);

// createProducts(0, apiProducts);

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
      e.target.parentElement.classList.add("added"); // to prevent adding the same item more than once

      let productId = e.target.closest(".product").id; // getting the product that will be added to the cart
      for (let i of apiProducts) {
        if (parseInt(productId) == i.id) {
          cart.push(i);
          break;
        }
      }

      updateCart(cart, cartDiv);
    }
    if (e.target.parentElement.classList[1] === "added") {
      e.target.textContent = "PRODUCT ADDED SUCCESSFULLY";
      e.target.style = "color: green !important; ";

      setTimeout(() => {
        e.target.textContent = "ADD PRODUCT"; // after 2 sec return it to default message
        e.target.style = "color: var(--text-color); ";
      }, 2000);
    }
  } catch (error) {}

  // deleting item

  if (e.target.classList[0] === "delete-btn") {
    let itemParent = e.target.closest(".item");
    let itemId = itemParent.id;
    itemParent.remove();

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == itemId) {
        cart.splice(i, 1); // removes the item element from the cart array
        break;
      }
    }

    document
      .querySelector(`#product${itemId} .add-cart`)
      .classList.remove("added"); // removes added class to make it appendable to the cart
  }

  // display cart
  if (cart.length === 0) {
    resetCart();
  } else {
    updateCart(cart, cartDiv);
  }

  // show quick look for every product
  if (e.target.classList[0] === "quick") {
    let elementId = parseInt(e.target.parentElement.id);

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
