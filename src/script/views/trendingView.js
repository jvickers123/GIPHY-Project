//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// TRENDING VIEW
// class for the generate TRENDING gifS

import TiledImageView from './tiledImageView';

class TrendingView extends TiledImageView {
  _parentElement = document.querySelector('.grid__trending');
  _className = 'trending';
}

export default new TrendingView();
