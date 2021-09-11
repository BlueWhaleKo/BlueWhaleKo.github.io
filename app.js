// Make nav transparent when it is on the top
const nav = document.querySelector('#nav');
const navLogo = nav.querySelector('#navLogo');
const navItems = nav.querySelectorAll('#navItem');

const NAV_DARK = 'nav__dark';

// change nav color to dark when scroll
document.addEventListener('scroll', () => {
  const { height } = nav.getBoundingClientRect();

  if (window.scrollY > height) {
    if (!nav.classList.contains(NAV_DARK)) {
      nav.classList.add(NAV_DARK);
    }
  } else {
    if (nav.classList.contains(NAV_DARK)) {
      nav.classList.remove(NAV_DARK);
    }
  }
});

// scroll to target when nav items are clicked
Array.from(navItems).forEach((item) => {
  item.addEventListener('click', (event) => {
    const selector = event.target.dataset.link;
    if (selector) {
      scrollTo(selector);
    }
  });
});

function scrollTo(qs) {
  const target = document.querySelector(qs);

  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
