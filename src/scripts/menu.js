const hamburgerBtn = document.querySelector(".m-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("expanded");
});
