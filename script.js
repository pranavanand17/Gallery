document.getElementById("darkm").addEventListener("click", function() {
  const body = document.body;
  const currentTheme = body.getAttribute("theme");

  if (currentTheme === "light") {
    body.setAttribute("theme", "dark");
  } else {
    body.setAttribute("theme", "light");
  }
});
