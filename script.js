document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light")
    ? "🌙 Mode Gelap"
    : "☀ Mode Terang";
});