//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CONTROLLER
// Controls when functions are called

import * as model from './model';

// VIEWS
import RandomView from './views/randomView';
import SearchView from './views/searchView';
import ResultsView from './views/resultsView';
import TrendingView from './views/trendingView';
import NavigationView from './views/navigationView';

const controlRandomGif = async function (e) {
  try {
    // 1) Render Spinner
    RandomView.renderSpinner();

    // 2) Spin get another icon
    RandomView.animateButton(e);

    // 3) Load random Gif
    await model.loadRandomGif();

    // 4) Render Results
    RandomView.render({
      imageData: model.state.randomGif,
      networkSpeed: model.state.networkSpeed,
    });

    // 5) Render loading skeleton
    RandomView.renderSkeleton();

    // 6) Remove skeleton on gif load, and begin render of trending gifs
    RandomView.onGifLoad(controlTrendingGifs);

    // 7) LazyLoad images to gifs when in viewport
    RandomView.lazyLoader();
  } catch (error) {
    // console.error(error);
    RandomView.renderError(error.message);
  }
};

const controlSearchGifs = async function () {
  try {
    // 1) Render Loading Spinner
    ResultsView.renderSpinner();

    // 2) Get query
    const query = SearchView.getQuery();

    // 3) Load search results
    await model.loadSearchResults(query);

    // 4) Render results
    ResultsView.render({
      imageData: model.state.search.results,
      networkSpeed: model.state.networkSpeed,
    });

    // 5) Render loading skeleton
    ResultsView.renderSkeleton();

    // 6) remove skeleton on gif load
    ResultsView.onGifLoad();

    // 7) Lazy Load images to gifs when in viewport
    ResultsView.lazyLoader();
  } catch (error) {
    // console.error(error);
    ResultsView.renderError(error.message);
  }
};

const controlTrendingGifs = async function () {
  try {
    // 1) Render Loading Spinner
    TrendingView.renderSpinner();

    // 2) Load trending results
    await model.loadTrendingResults();

    // 3) Render results
    TrendingView.render({
      imageData: model.state.trending,
      networkSpeed: model.state.networkSpeed,
    });

    // 4) Render loading skeleton
    TrendingView.renderSkeleton();

    // 5) remove skeleton on gif load
    TrendingView.onGifLoad();

    // 6) Lazy Load images to gifs when in viewport
    TrendingView.lazyLoader();
  } catch (error) {
    // console.error(error);
    TrendingView.renderError(error.message);
  }
};

const controlNavigation = function (e) {
  // 1) Remove Classes from Navbar
  NavigationView.clearActiveSection();

  // 2) Add classes to nav bar
  NavigationView.activeNavButton(e);

  // 3) Reveal selected section
  NavigationView.revealSection(e);
};

const init = function () {
  // Set up event handlers and link to relevant controller function
  RandomView.randomHandler(controlRandomGif);
  SearchView.searchHandler(controlSearchGifs);
  NavigationView.navigationHandler(controlNavigation);
};

init();
