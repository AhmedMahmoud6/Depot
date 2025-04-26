function loadFooter() {
  const footerHtml = `
        <footer>
      <div class="inner">
        <div class="details">
          <a href="#">CUSTOMER SERVICE </a>
          <ul>
            <li>
              <a href="#">Help & Contact Us</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Online Stores</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div class="details">
          <a href="#">COMPANY</a>
          <ul>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">Available Services</a>
            </li>
            <li>
              <a href="#">Latest Posts</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="details">
          <a href="#">SOCIAL MEDIA</a>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Tumblr</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
        <div class="details">
          <a href="#">PROFILE</a>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Checkout</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyrights">
        <p>&copy; 2021 Qode Interactive, All Rights Reserved</p>
        <div class="follow">
          <p>Follow Us</p>
          <i class="fa-brands fa-twitter" style="color: black"></i>
          <i class="fa-brands fa-square-instagram" style="color: black"></i>
          <i class="fa-brands fa-facebook-f" style="color: black"></i>
        </div>
      </div>
    </footer>
    `;
  document.body.insertAdjacentHTML("beforeend", footerHtml);
}

loadFooter();
