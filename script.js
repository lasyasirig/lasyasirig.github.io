const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

// Restore a saved choice, if any
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
} catch (e) {}

toggle.addEventListener("click", () => {
  const current =
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

document.getElementById("year").textContent = new Date().getFullYear();
