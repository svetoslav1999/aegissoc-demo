const nav = document.getElementById("nav");
addEventListener("scroll", () => {
  nav.style.boxShadow = scrollY > 10 ? "0 8px 24px -16px rgba(0,0,0,.9)" : "none";
});
