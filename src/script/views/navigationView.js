//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// NAVIGATION VIEW
// class for controlling the user navigation accross the different pages

class NavigationView {
  #sections = document.querySelectorAll('.section');
  #buttons = document.querySelectorAll('.btn__navigation');
  #navItems = document.querySelectorAll('.navigation__item');

  navigationHandler(handler) {
    this.#navItems.forEach(btn => btn.addEventListener('click', handler));
  }

  clearActiveSection() {
    // Remove "active" class from all buttons and nav items
    this.#buttons.forEach(btn =>
      btn.classList.remove('btn__navigation--active')
    );
    this.#navItems.forEach(item =>
      item.classList.remove('navigation__item--active')
    );
  }

  activeNavButton(e) {
    // Add active class to clicked button and nav item
    const activeBtn = e.target.closest('.btn');
    const activeItem = e.target.closest('.navigation__item');

    activeItem.classList.add('navigation__item--active');
    activeBtn.classList.add('btn__navigation--active');
  }

  revealSection(e) {
    // 1) Find clicked section from dataset of nav item
    const activeSection = e.target.closest('.navigation__item').dataset.section;

    // 2) remove "hidden-small-screen" from sections from other sections and add to clicked one
    this.#sections.forEach(section => {
      if (section.classList.contains(`section__${activeSection}`))
        section.classList.remove('hidden-small-screen');
      else section.classList.add('hidden-small-screen');
    });
  }
}

export default new NavigationView();
