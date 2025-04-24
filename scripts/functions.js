let page = 1;
let productsPerPage = 8;

function displayLogin() {
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
}

function loginClicked() {
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

  document.querySelector(".login-btn").style = "background-color: white";
  document.querySelector(".register-btn").style = "background-color: #f1f1f1;";
}

function registerClicked() {
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

  document.querySelector(".register-btn").style = "background-color: white";
  document.querySelector(".login-btn").style = "background-color: #f1f1f1;";
}

function resetCart() {
  cartDiv.innerHTML = "";
  cartDiv.innerHTML += `
  <p>CART</p>
  <span>($0)</span>
  <div class="products">
  <p>No products in the cart</p>
  </div>
  `;
}

function updateCart(cart, cartDiv) {
  let cartTotal = 0;

  // getting the total price of the products
  cart.forEach((e) => {
    cartTotal += e.price;
  });

  cartTotal = cartTotal.toFixed(2);

  // displaying the new cart design that contains products
  cartDiv.innerHTML = "";
  cartDiv.innerHTML += `
                  <p>CART</p>
              <span id="price">($${cartTotal})</span>
              <div class="products">


                <div class="total">
                  <span>TOTAL:</span>
                  <span>${cartTotal}$</span>
                </div>

                <div class="view-cart"><a href="#">VIEW CART</a></div>
                <div class="checkout"><a href="#">CHECKOUT</a></div>
              </div>
      `;

  let totalDiv = document.querySelector(".total");

  // appending the products to the cart html
  for (let i = 0; i < cart.length; i++) {
    totalDiv.insertAdjacentHTML(
      "beforebegin",
      `
        <div class="item" id="${cart[i].id}">
        <div class="item-img">
          <img
            src="${cart[i].image}"
            alt="product image"
          />
        </div>
        <div class="info">
          <p>${cart[i].title}</p>
          <span>1 X $${cart[i].price}</span>
        </div>
        <span class="delete-btn">x</span>
        </div>
        `
    );
  }
}

function quickLook(apiProducts, elementId) {
  for (let i of apiProducts) {
    if (i.id == elementId) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `
      <div class="login-info">
        <div class="product-content">
          <div class="product-img">
            <img src="${i.image}" alt="product img" />
          </div>
  
          <div class="product-details">
            <div class="exit-btn">
              <i class="fa-solid fa-xmark" style="color: #000000"></i>
            </div>
            <div class="product-title">
              <h1>${i.title}</h1>
              <p>$${i.price}</p>
            </div>
  
            <div class="product-desc">
              <div class="stars">
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
                <i class="fa-solid fa-star" style="color: #ffd43b"></i>
              </div>
              <p>
              ${i.description}
              </p>
            </div>
  
            <div class="product-cart">
              <div class="quantity">
                <span>Quantity</span>
                <div class="select-quantity">
                  <i class="fa-solid fa-caret-left" style="color: #929292"></i>
                  <input type="text" value="1" />
                  <i class="fa-solid fa-caret-right" style="color: #929292"></i>
                </div>
              </div>
              <div class="add-product-to-cart">ADD TO CART</div>
            </div>
          </div>
        </div>
      </div>
        `
      );
      break;
    }
  }
}

function nextPage() {
  if (page < 3) {
    page++;
    document.querySelector(".pagination #next").style = "display: block;";
  }
  if (page === 3) {
    document.querySelector(".pagination #next").style = "display: none;";
  }
  if (page > 1) {
    document.querySelector(".pagination #back").style = "display: block;";
  }
}

function previousPage() {
  if (page > 1) {
    page--;
    document.querySelector(".pagination #back").style = "display: block;";
  }
  if (page === 1) {
    document.querySelector(".pagination #back").style = "display: none;";
  }
  if (page < 3) {
    document.querySelector(".pagination #next").style = "display: block;";
  }
}

async function getData() {
  try {
    let myResponse = await fetch("https://fakestoreapi.com/products/");
    let myData = await myResponse.json();
    return myData;
  } catch (error) {
    console.log(Error(error));
  }
}

function createProducts(apiProducts) {
  document.querySelector(".items").innerHTML = "";
  for (let i of apiProducts) {
    document.querySelector(".items").insertAdjacentHTML(
      "beforeend",
      `
    <div class="product" id="${i.id}">
    <img src="${i.image}" alt="product image" />
    <div class="quick">QUICK LOOK</div>
    <div class="product-info">
      <p>${i.title}</p>
      <div class="add-cart">
        <p href="">ADD TO CART</p>
        <span>$${i.price}</span>
      </div>
    </div>
  </div>
`
    );
  }
}

async function fillProducts(apiProducts) {
  const data = await getData();
  if (!data) return;

  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;

  apiProducts.length = 0; // clear old data
  apiProducts.push(...data.slice(startIndex, endIndex)); // mutate

  createProducts(apiProducts);
}

async function filterCategories(apiProducts, selectedCategory) {
  const data = await getData();
  if (!data) return;

  console.log(data);

  if (selectedCategory != "all") {
    apiProducts.length = 0; // clear old data
    apiProducts.push(...data.filter((e) => e.category === selectedCategory));
  } else {
    apiProducts.length = 0; // clear old data
    data.length = 8;
    apiProducts.push(...data);
  }

  createProducts(apiProducts);
}
