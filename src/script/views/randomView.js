//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// RANDOM VIEW
// class for the generate random gif

import ImageView from './imageView';

class RandomView extends ImageView {
  _parentElement = document.querySelector('.img-container__random');
  #btn = document.querySelector('.btn__random');

  randomHandler(handler) {
    window.addEventListener('load', handler);
    this.#btn.addEventListener('click', handler);
  }

  animateButton(e) {
    // 1) Return if from render of page
    if (e.target === document) return;

    // 3) add spinning class
    this.#btn.querySelector('.svg__repeat').classList.add('svg--spinning');

    // 4) Remove class at end of animation
    const removeClass = function () {
      const icon = this.#btn.querySelector('.svg__repeat');
      if (!icon.classList.contains('svg--spinning')) return;
      icon.classList.remove('svg--spinning');
    };

    setTimeout(removeClass.bind(this), 2000);
  }

  _generateMarkup() {
    return this._generateImageMarkup({
      ...this._data,
      className: 'gif__random',
    });
  }
}

export default new RandomView();
