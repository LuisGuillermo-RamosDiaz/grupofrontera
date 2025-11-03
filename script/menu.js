document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu");
  const menuIcon = document.querySelector('label[for="menu"] img');

  const menuSrc = "imagenes/menu.png";   // icono hamburguesa
  const closeSrc = "imagenes/menu-cerrado.png"; // icono X

  function toggleIcon() {
    if (menuCheckbox.checked) {
      menuIcon.src = closeSrc;
    } else {
      menuIcon.src = menuSrc;
    }
  }

  toggleIcon();

  menuCheckbox.addEventListener("change", toggleIcon);
});