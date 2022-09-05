//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TRENDING VIEW
// class for the generate TRENDING gifS

import TiledImageView from './tiledImageView';

class TrendingView extends TiledImageView {
  _parentElement = document.querySelector('.grid__trending');

  trendingHandler(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // add relativeWidths
    this._calculateRelativeWidth(this._data);

    return this._data.imageData
      .map(result =>
        this._generateImageMarkupWithGridWrapper({
          imageData: result,
          className: 'gif__trending',
        })
      )
      .join('');
  }
}

export default new TrendingView();
