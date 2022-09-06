//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// SEARCH VIEW
// class for the generate search results gifs views

import TiledImageView from './tiledImageView';

class ResultsView extends TiledImageView {
  _parentElement = document.querySelector('.grid__search-results');
  _className = 'search';
}

export default new ResultsView();
