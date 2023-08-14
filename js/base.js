const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");
const dropdownToggleButtons = document.querySelectorAll(".dropdown .btn");
const dropdownToggleIcons = document.querySelectorAll(".dropdown .btn i");
const dropdownMenus = document.querySelectorAll(".dropdown_submenu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-rectangle-xmark"
    : "fa-solid fa-bars";
};

dropdownToggleButtons.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener("click", function () {
    dropdownMenus.forEach((menu) => {
      menu.style.display = "none";
    });

    const submenu = dropdownMenus[index];
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";

    const isOpen = submenu.style.display === "block";
    const toggleIcon = dropdownToggleIcons[index];
    toggleIcon.classList = isOpen
      ? "fa-solid fa-rectangle-xmark"
      : "fa-solid fa-caret-down";
  });
});
