const tabs = document.querySelectorAll('.features__tab');
const tabsContainer = document.querySelector('.features__tab-container');
const tabsContent = document.querySelectorAll('.features__content');

const faqBtn = document.querySelectorAll('.faq__btn');
const faq = document.querySelectorAll('.faq');

// Smooth scrolling
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // #section--1
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Content
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.features__tab');

  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove('features__tab--active'));
  tabsContent.forEach((content) =>
    content.classList.remove('features__content--active')
  );

  // Active tabs
  clicked.classList.add('features__tab--active');
  document
    .querySelector(`.features__content--${clicked.dataset.tab}`)
    .classList.add('features__content--active');
});

faqBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.parentNode.classList.toggle('active');
  });
});
