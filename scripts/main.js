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

let cart = [];
let cartDiv = document.querySelector(".cart");
let loginDiv = document.querySelector(".login");
let searchDiv = document.querySelector(".search");

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

loginDiv.addEventListener("click", (_) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="login-info">
      <div class="login-content">
        <div class="btns">
          <div class="login-btn">LOGIN</div>
          <div class="register-btn">REGISTER</div>
        </div>
        <div class="fields">
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <div class="remember-me">
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
          </div>

          <p>Lost your password?</p>

          <button>LOGIN</button>
        </div>
      </div>
    </div>
    `
  );
});

let display = true;
searchDiv.addEventListener("click", (e) => {
  const container = document.querySelector(".search-container");

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
  if (e.target.classList.value === "login-info") {
    e.target.remove();
  }

  if (e.target.classList.value === "login-btn") {
    document.querySelector(".login-content").remove();
    document.querySelector(".login-info").insertAdjacentHTML(
      "beforeend",
      `
                <div class="login-content">
                  <div class="btns">
                    <div class="login-btn">LOGIN</div>
                    <div class="register-btn">REGISTER</div>
                  </div>
                  <div class="fields">
                    <input type="text" placeholder="User Name" />
                    <input type="password" placeholder="Password" />
                    <div class="remember-me">
                      <input type="checkbox" id="remember" />
                      <label for="remember">Remember me</label>
                    </div>
          
                    <p>Lost your password?</p>
          
                    <button>LOGIN</button>
                  </div>
                </div>
              `
    );
  }

  if (e.target.classList.value === "register-btn") {
    document.querySelector(".login-content").remove();
    document.querySelector(".login-info").insertAdjacentHTML(
      "beforeend",
      `
                <div class="login-content">
                  <div class="btns">
                    <div class="login-btn">LOGIN</div>
                    <div class="register-btn">REGISTER</div>
                  </div>
           <div class="fields">
                <input type="text" placeholder="User Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat Password" />
      
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and for
                  other purposes described in our privacy policy.
                </p>
      
                <button>Register</button>
              </div>
                </div>
              `
    );
  }
});
