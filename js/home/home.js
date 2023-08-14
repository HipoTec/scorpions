//swipe
const swipeButton = document.querySelector(".swipe");
const swipeTitle = document.querySelector(".title-swipe");

if (swipeButton) {
  swipeButton.addEventListener("click", function () {
    const titleContent = document.querySelector(".title-content");
    if (titleContent) {
      titleContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

if (swipeButton) {
  swipeButton.addEventListener("click", function () {
    const titleContent = document.querySelector(".title-content");
    if (titleContent) {
      const offset =
        titleContent.getBoundingClientRect().top + window.scrollY + -20;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
}

if (swipeTitle) {
  swipeTitle.addEventListener("click", function () {
    const titleContent = document.querySelector(".title-content");
    if (titleContent) {
      const offset =
        titleContent.getBoundingClientRect().top + window.scrollY + -20;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
}
