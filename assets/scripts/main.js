const tabs = document.querySelectorAll(".features__tab");
const tabsContainer = document.querySelector(".features__tab-container");
const tabsContent = document.querySelectorAll(".features__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".features__tab");

  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("features__tab--active"));

  tabsContent.forEach((content) =>
    content.classList.remove("features__content--active")
  );

  // Active tabs
  clicked.classList.add("features__tab--active");

  document
    .querySelector(`.features__content--${clicked.dataset.tab}`)
    .classList.add("features__content--active");
});
