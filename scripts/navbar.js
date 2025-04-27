import { cart, setCart } from "./shared.js";

function loadNavbar() {
  const navbarHtml = `
    <nav>
      <div class="parent">
        <div class="left-side">
          <ul>
            <li>
              <a href="#">HOME</a>

              <div class="container home">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="#">Main Home</a>
                    </li>
                    <li>
                      <a href="#">Minimal Home</a>
                    </li>
                    <li>
                      <a href="#">Masonry Home</a>
                    </li>
                    <li>
                      <a href="#">Passepartout Home</a>
                    </li>
                    <li>
                      <a href="#">Left Menu Home</a>
                    </li>
                    <li>
                      <a href="#">Boxed Home</a>
                    </li>
                    <li>
                      <a href="#">Full Screen Home</a>
                    </li>
                    <li>
                      <a href="#">Product Showcase</a>
                    </li>
                    <li>
                      <a href="#">Slider Showcase</a>
                    </li>
                    <li>
                      <a href="#">Simple Home</a>
                    </li>
                    <li>
                      <a href="#">Split Showcase</a>
                    </li>
                    <li>
                      <a href="#">Landing Page</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <a href="#">SHOP</a>
              <div class="container shop" style="left: -60px">
                <div class="inner">
                  <div class="details">
                    <a href="#">SHOP TYPES</a>
                    <ul>
                      <li>
                        <a href="#">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="#">With Filter</a>
                      </li>
                      <li>
                        <a href="#">Masonry - Grid</a>
                      </li>
                      <li>
                        <a href="#">Masonry - Wide</a>
                      </li>
                      <li>
                        <a href="#">Shop Carousel</a>
                      </li>
                      <li>
                        <a href="#">Shop Boxed</a>
                      </li>
                      <li>
                        <a href="#">Single Category</a>
                      </li>
                    </ul>
                  </div>
                  <div class="details">
                    <a href="#">PRODUCT TYPES</a>
                    <ul>
                      <li>
                        <a href="#">Standard Product</a>
                      </li>
                      <li>
                        <a href="#">Grouped Product</a>
                      </li>
                      <li>
                        <a href="#">Variable Product</a>
                      </li>
                      <li>
                        <a href="#">Downloadable Product</a>
                      </li>
                      <li>
                        <a href="#">Virtual Product</a>
                      </li>
                      <li>
                        <a href="#">External Product</a>
                      </li>
                      <li>
                        <a href="#">New! Product</a>
                      </li>
                      <li>
                        <a href="#">On Sale Product</a>
                      </li>
                      <li>
                        <a href="#">Out of Stock Product</a>
                      </li>
                    </ul>
                  </div>
                  <div class="details">
                    <a href="#">FEATURED</a>
                    <ul>
                      <li>
                        <a href="#">User Dashboard</a>
                      </li>
                      <li>
                        <a href="#">Order Tracking</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Cart</a>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                      </li>
                      <li>
                        <a href="#">Addresses</a>
                      </li>
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                    </ul>
                  </div>
                  <div class="details">
                    <a href="#">LAYOUTS</a>
                    <ul>
                      <li>
                        <a href="#">Two Columns Grid</a>
                      </li>
                      <li>
                        <a href="#">Three Columns Grid</a>
                      </li>
                      <li>
                        <a href="#">Four Columns Grid</a>
                      </li>
                      <li>
                        <a href="#">Four Columns Wide</a>
                      </li>
                      <li>
                        <a href="#">Five Columns Wide</a>
                      </li>
                      <li>
                        <a href="#">Six Columns Wide</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#">PAGES</a>
              <div class="container pages">
                <div class="inner pages">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">What We Do</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Meet Crew</a>
                    </li>
                    <li>
                      <a href="#">Team Member</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Pricing Plans</a>
                    </li>
                    <li>
                      <a href="#">Payment</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Leave Us A Note</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Coming Soon</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <a href="#">ELEMENTS</a>
              <div class="container elements" style="left: -185px">
                <div class="inner elements">
                  <div class="details">
                    <a href="#">SHOP SHORTCODES</a>
                    <ul>
                      <li>
                        <a href="#">Product List</a>
                      </li>
                      <li>
                        <a href="#">Product List - Carousel</a>
                      </li>
                      <li>
                        <a href="#">Product List - Simple</a>
                      </li>
                      <li>
                        <a href="#">On Sale Products</a>
                      </li>
                      <li>
                        <a href="#">Top Rated Products</a>
                      </li>
                      <li>
                        <a href="#">Best Selling Products</a>
                      </li>
                      <li>
                        <a href="#">Single Category List</a>
                      </li>
                      <li>
                        <a href="#">Order Tracking</a>
                      </li>
                    </ul>
                  </div>

                  <div class="details">
                    <a href="#">CLASSIC</a>
                    <ul>
                      <li>
                        <a href="#">Accordions & Toggles</a>
                      </li>
                      <li>
                        <a href="#">Tabs</a>
                      </li>
                      <li>
                        <a href="#">Buttons</a>
                      </li>
                      <li>
                        <a href="#">Call To Action</a>
                      </li>
                      <li>
                        <a href="#">Separators</a>
                      </li>
                      <li>
                        <a href="#">Contact Form</a>
                      </li>
                      <li>
                        <a href="#">Icon With Text</a>
                      </li>
                      <li>
                        <a href="#">Message Boxes</a>
                      </li>
                      <li>
                        <a href="#">Typography</a>
                      </li>
                    </ul>
                  </div>

                  <div class="details">
                    <a href="#">INFOGRAPHIC</a>
                    <ul>
                      <li>
                        <a href="#">Pricing Tables</a>
                      </li>
                      <li>
                        <a href="#">Progress Bar</a>
                      </li>
                      <li>
                        <a href="#">Process</a>
                      </li>
                      <li>
                        <a href="#">Google Map</a>
                      </li>
                      <li>
                        <a href="#">Counters</a>
                      </li>
                      <li>
                        <a href="#">Countdown</a>
                      </li>
                      <li>
                        <a href="#">Pie Chart</a>
                      </li>
                      <li>
                        <a href="#">Video Button</a>
                      </li>
                      <li>
                        <a href="#">Image Gallery</a>
                      </li>
                    </ul>
                  </div>

                  <div class="details">
                    <a href="#">PRESENTATION</a>
                    <ul>
                      <li>
                        <a href="#">Depot Banner</a>
                      </li>
                      <li>
                        <a href="#">Portfolio List</a>
                      </li>
                      <li>
                        <a href="#">Blog List</a>
                      </li>
                      <li>
                        <a href="#">Item Showcase</a>
                      </li>
                      <li>
                        <a href="#">Clients</a>
                      </li>
                      <li>
                        <a href="#">Testimonials Slider</a>
                      </li>
                      <li>
                        <a href="#">Team List</a>
                      </li>
                      <li>
                        <a href="#">Team Slider</a>
                      </li>
                      <li>
                        <a href="#">Team Member</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a href="index.html" class="center hovered">
          <img src="images/logo.png" alt="depot logo" />
        </a>
        <div class="right-side">
          <div class="cart hovered"></div>

          <div class="login hovered">
            <img src="images/person.svg" alt="profile icon" />
            <p>LOGIN</p>
          </div>

          <div class="search hovered">
            <i class="fa-solid fa-magnifying-glass" style="color: #000000"></i>
            <div class="search-container">
              <input type="text" placeholder="Enter Keyword..." />
              <div class="search-img">
                <img src="images/arrow_right.svg" alt="right arrow" />
              </div>
            </div>
          </div>

          <div class="menu hovered">
            <p>MENU</p>
            <i class="fa-solid fa-bars" style="color: #000000"></i>
            <div class="displayed-menu">
              <div class="menu-info">
                <div class="menu-close-btn">
                  <span class="close-btn hovered">x</span>
                </div>
                <div class="menu-description">
                  <h2>WELCOME</h2>
                  <p>
                    Advertising is the way great brands get to be great brands.
                  </p>
                </div>
              </div>

              <div class="follow-us">
                <p>We Are Awesome Folow Us</p>
                <div class="social-links">
                  <i class="fa-brands fa-twitter" style="color: #ffffff"></i>
                  <i
                    class="fa-brands fa-square-instagram"
                    style="color: #ffffff"
                  ></i>
                  <i class="fa-brands fa-facebook-f" style="color: #ffffff"></i>
                </div>
              </div>

              <div class="mobile-menu">
                <ul>
                  <li class="menu-li">
                    <div class="li-info">
                      HOME
                      <i
                        class="fa-solid fa-caret-right"
                        style="color: #ffffff !important"
                      ></i>
                    </div>

                    <ul class="sub-menu">
                      <li style="color: white">Main Home</li>
                      <li>Main Home</li>
                      <li>Minimal Home</li>
                      <li>Masonry Home</li>
                      <li>Classic Home</li>
                      <li>Passepartout Home</li>
                      <li>Left Menu Home</li>
                      <li>Boxed Home</li>
                      <li>Full Screen Home</li>
                      <li>Product Showcase</li>
                      <li>Slider Showcase</li>
                      <li>Simple Home</li>
                      <li>Split Showcase</li>
                      <li>Landing Page</li>
                    </ul>
                  </li>
                </ul>

                <ul>
                  <li class="menu-li">
                    <div class="li-info">
                      PAGES
                      <i
                        class="fa-solid fa-caret-right"
                        style="color: var(--text-color) !important"
                      ></i>
                    </div>

                    <ul class="sub-menu">
                      <li>About Us</li>
                      <li>What We Do</li>
                      <li>Our Team</li>
                      <li>Meet The Crew</li>
                      <li>Team Member</li>
                      <li>Our Services</li>
                      <li>Pricing Plans</li>
                      <li>Payment</li>
                      <li>Testimonials</li>
                      <li>Gift Cards</li>
                      <li>Terms & Conditions</li>
                      <li>Contact Us</li>
                      <li>Leave Us A Note</li>
                      <li>FAQ</li>
                      <li>Coming Soon</li>
                    </ul>
                  </li>
                </ul>

                <ul>
                  <li class="menu-li">
                    <div class="li-info">
                      SHOP
                      <i
                        class="fa-solid fa-caret-right"
                        style="color: var(--text-color) !important"
                      ></i>
                    </div>

                    <ul class="sub-menu">
                      <li>Shop Types</li>
                      <li>Product Types</li>
                      <li>Featured</li>
                      <li>Layouts</li>
                      <li>Two Columns Grid</li>
                      <li>Three Columns Grid</li>
                      <li>Four Columns Grid</li>
                      <li>Four Columns Wide</li>
                      <li>Five Columns Wide</li>
                      <li>Six Columns Wide</li>
                    </ul>
                  </li>
                </ul>

                <ul>
                  <li class="menu-li">
                    <div class="li-info">
                      ELEMENTS
                      <i
                        class="fa-solid fa-caret-right"
                        style="color: var(--text-color) !important"
                      ></i>
                    </div>

                    <ul class="sub-menu">
                      <li>Shop Shortcodes</li>
                      <li>Classic</li>
                      <li>Infographic</li>
                      <li>Presentation</li>
                    </ul>
                  </li>
                </ul>

                <ul>
                  <li class="menu-li">
                    <div class="li-info"><a href="checkout.html">CART</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `;
  document.body.insertAdjacentHTML("afterbegin", navbarHtml);
}

document.addEventListener("DOMContentLoaded", (_) => {
  loadNavbar(); // load the navbar

  let cartDiv = document.querySelector(".cart");
  let loginDiv = document.querySelector(".login");
  let searchDiv = document.querySelector(".search");
  let menuDiv = document.querySelector(".menu");
  let displayedMenu = document.querySelector(".displayed-menu");

  // display cart
  if (cart.length === 0) {
    resetCart(cartDiv);
  } else {
    updateCart(cart, cartDiv);
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
      displayedMenu.style = "right: 0%;";
    }

    // close menu btn
    if (
      e.target.classList[0] === "close-btn" ||
      (!displayedMenu.contains(e.target) && !menuDiv.contains(e.target))
    ) {
      displayedMenu.style = "right: -605px";
    }

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

      // updating the cart value
      sessionStorage.setItem("cart", JSON.stringify(cart));
      setCart(JSON.parse(sessionStorage.getItem("cart")));

      // display cart
      if (cart.length === 0) {
        resetCart(cartDiv);
      } else {
        updateCart(cart, cartDiv);
      }

      window.location.reload();
    }

    try {
      if (e.target.closest("li").hasAttribute("class")) {
        let allSubMenus = document.querySelectorAll(".mobile-menu .sub-menu");
        let allLiInfoI = document.querySelectorAll(".mobile-menu .li-info i");
        let allMenuLi = document.querySelectorAll(".mobile-menu .menu-li");

        // closing all submenus first
        for (let i of allSubMenus) {
          i.style = "dispaly: none !important; max-height: 0px;";
        }

        // return arrow direction to normal
        for (let i of allLiInfoI) {
          i.style = "transform: rotate(0deg);";
        }

        // checking if current submenu contains "opened" class
        if (e.target.closest("li").classList.contains("opened")) {
          // closing all submenus first
          for (let i of allSubMenus) {
            i.style = "dispaly: none !important; max-height: 0px;";
          }

          // return arrow direction to normal
          for (let i of allLiInfoI) {
            i.style = "transform: rotate(0deg);";
          }

          // removing class "opened" from current submenu
          e.target.closest("li").classList.remove("opened");
        } else {
          let subMenuArrow = e.target.closest("li").querySelector("i");
          let subMenu = e.target.closest("li").querySelector(".sub-menu");

          // showing the submenu items
          subMenu.style = "display: flex !important; max-height: 450px";

          // rotate arrow direction down
          subMenuArrow.style =
            "transform: rotate(90deg); color: var(--text-color);";

          // removing class "opened" from all submenus
          for (let i of allMenuLi) {
            i.classList.remove("opened");
          }

          // then adding "opened" class to the current submenu
          e.target.closest("li").classList.add("opened");
        }
      }
    } catch (error) {}
  });
});
