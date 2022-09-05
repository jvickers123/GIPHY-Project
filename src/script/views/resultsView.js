//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// SEARCH VIEW
// class for the generate search results gifs views

import TiledImageView from './tiledImageView';

class ResultsView extends TiledImageView {
  _parentElement = document.querySelector('.grid__search-results');

  _generateMarkup() {
    // add relativeWidths
    this._calculateRelativeWidth();

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

export default new ResultsView();
