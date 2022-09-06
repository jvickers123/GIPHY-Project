//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TILED IMAGE VIEW
// class that contains functions for tiled images that appear in search results and trending

import ImageView from './imageView';

export default class TiledImageView extends ImageView {
  _generateMarkup() {
    // 1) Add relativeWidths
    this._calculateRelativeWidth();

    // 2) Loop through images and generate inside a grid wrapper
    return this._data.imageData
      .map(result => this._generateImageMarkupWithGridWrapper(result))
      .join('');
  }

  _generateImageMarkupWithGridWrapper(image) {
    // 1) get relative width
    const width = image.images.relativeWidth;

    // 2) return markup inside a grid item wrapper with the correct width class
    return `
      <div class="grid__item grid__item--${width}">
        ${this._generateImageMarkup(image)}
      </div>`;
  }

  _calculateRelativeWidth() {
    const data = this._data.imageData;

    // 1) Loop through data in pairs
    for (let i = 0; i < data.length; i += 2) {
      const width1 = data[i].images.width;
      const width2 = data[i + 1].images.width;

      // 2) Compare widths and add to relative widths for each item
      data[i].images.relativeWidth = (
        (width1 / (width1 + width2)) *
        10
      ).toFixed();
      data[i + 1].images.relativeWidth = (
        (width2 / (width1 + width2)) *
        10
      ).toFixed();
    }
  }
}
