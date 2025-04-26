window.addEventListener("load", (_) => {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let apiProducts = [];

  let cartDiv = document.querySelector(".cart");

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

  fillProducts(apiProducts); // displaying the products from the api

  document.addEventListener("click", (e) => {
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
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    } catch (error) {}

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
      // getting category name
      let categoryName = e.target.textContent.toLowerCase();

      // removing active class from all li
      for (let i of e.target.parentElement.querySelectorAll("li")) {
        i.removeAttribute("class");
      }

      // adding active class to the li to change its color when clicked
      e.target.setAttribute("class", "active");

      // filtering by category name
      if (categoryName != "all") {
        filterCategories(apiProducts, categoryName);
        document.querySelector(".pagination").style = "display: none;";
      } else {
        filterCategories(apiProducts, "all");
        document.querySelector(".pagination").style = "display: flex;";
      }
    }
  });
});
