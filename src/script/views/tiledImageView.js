//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TILED IMAGE VIEW
// class that contains functions for tiled images that appear in search results and trending

import ImageView from './imageView';

export default class TiledImageView extends ImageView {
  _generateImageMarkupWithGridWrapper(image, className) {
    const width = image.imageData.images.relativeWidth;
    return `
      <div class="grid__item grid__item--${width}">
        ${this._generateImageMarkup(image, className)}
      </div>`;
  }

  _calculateRelativeWidth() {
    const data = this._data.imageData;

    // 1) Loop through data in pairs
    for (let i = 0; i < data.length; i += 2) {
      const width1 = data[i].images.width;
      const width2 = data[i + 1].images.width;

      // 2) Compare Widths and add to relative widths property
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
