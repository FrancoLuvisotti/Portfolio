// js/main.js

const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    theme = "light";
    themeToggle.textContent = "☀️";
  } else {
    theme = "dark";
    themeToggle.textContent = "🌙";
  }

  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
});
