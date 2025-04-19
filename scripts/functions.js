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
