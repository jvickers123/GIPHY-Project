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
    this.#buttons.forEach(btn =>
      btn.classList.remove('btn__navigation--active')
    );
    this.#navItems.forEach(item =>
      item.classList.remove('navigation__item--active')
    );
  }

  activeNavButton(e) {
    const activeBtn = e.target.closest('.btn');
    const activeItem = e.target.closest('.navigation__item');

    activeItem.classList.add('navigation__item--active');
    activeBtn.classList.add('btn__navigation--active');
  }

  getSectionId(e) {
    return e.target.closest('.navigation__item').dataset.section;
  }

  revealSection(activeClassName) {
    this.#sections.forEach(section => {
      if (section.classList.contains(activeClassName))
        section.classList.remove('hidden-small-screen');
      else section.classList.add('hidden-small-screen');
    });
  }
}

export default new NavigationView();
