//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// RANDOM VIEW
// class for the generate random gif

import ImageView from './imageView';

class RandomView extends ImageView {
  _parentElement = document.querySelector('.img-container__random');
  #btn = document.querySelector('.btn__random');
  _className = 'random';

  randomHandler(handler) {
    // Call random controller on page load and button click
    window.addEventListener('load', handler);
    this.#btn.addEventListener('click', handler);
  }

  animateButton(e) {
    // 1) Check if event the page load or a click of the button
    if (e.target === document) return;

    // 2) add spinning class to svg
    this.#btn.querySelector('.svg__repeat').classList.add('svg--spinning');

    // 3) Remove class at end of animation
    const removeClass = function () {
      const icon = this.#btn.querySelector('.svg__repeat');
      if (!icon.classList.contains('svg--spinning')) return;
      icon.classList.remove('svg--spinning');
    };

    setTimeout(removeClass.bind(this), 2000);
  }

  _generateMarkup() {
    return this._generateImageMarkup(this._data.imageData);
  }
}

export default new RandomView();
