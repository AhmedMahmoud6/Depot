function loadScrollToTop() {
  const scrollTopHtml = `
    <div class="scroll-to-top">
      <i class="fa-solid fa-chevron-up" style="color: #e1e1e1"></i>
    </div>
    `;

  document.body.insertAdjacentHTML("beforeend", scrollTopHtml);
}

loadScrollToTop();

let scrollTopParent = document.querySelector(".scroll-to-top");

// show or hide button according to scrolling
window.addEventListener("scroll", (_) => {
  if (window.scrollY > 500) {
    scrollTopParent.style = "opacity: 1; visibility: visible;";
  } else {
    scrollTopParent.style = "opacity: 0; visibility: hidden;";
  }
});

// scroll to top onclick
scrollTopParent.addEventListener("click", (_) => {
  scrollToPosition(0);
});
