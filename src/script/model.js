//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// MODEL
// Functions for the loading of data and saving it to state.

import { API_URL, API_KEY } from './config';
import { getJSON, checkNetworkSpeed } from './helper';

export const state = {
  randomGif: {},
  search: {
    query: '',
    results: [],
  },
  trending: [],
  networkSpeed: null,
};

const dataIntoObject = function (data) {
  return {
    id: data.id,
    username: data.username,
    title: data.title,
    images: {
      original: {
        webp: data.images.original.webp,
        gif: data.images.original.url,
        width: +data.images.original.width,
      },
      medium: {
        webp: data.images.fixed_height.webp,
        gif: data.images.fixed_height.url,
        width: +data.images.fixed_height.width,
      },
      small: {
        webp: data.images.fixed_height_small.webp,
        gif: data.images.fixed_height_small.url,
        width: +data.images.fixed_height_small.width,
      },
      preview: {
        gif: data.images.preview_gif.url,
        webp: data.images.preview_webp?.url,
      },
      width: +data.images.fixed_height.width,
      relativeWidth: undefined,
      stills: {
        normal: data.images.fixed_height_still.url,
        small: data.images.fixed_height_small_still.url,
      },
    },
  };
};

export const loadRandomGif = async function () {
  try {
    const { data } = await getJSON(`${API_URL}random?api_key=${API_KEY}`);
    state.randomGif = dataIntoObject(data);
    state.networkSpeed = checkNetworkSpeed();
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const { data } = await getJSON(
      `${API_URL}search?q=${query}&api_key=${API_KEY}`
    );

    if (!data.length) throw new Error('No results! Please try another term');

    // clear the state
    state.search = {
      query: '',
      results: [],
    };

    data.forEach(gif => {
      object = dataIntoObject(gif);
      state.search.results.push(object);
    });
    state.search.query = query;
  } catch (error) {
    throw error;
  }
};

export const loadTrendingResults = async function () {
  try {
    const { data } = await getJSON(`${API_URL}trending?api_key=${API_KEY}`);

    // clear the state
    state.trending = [];

    // Add to state
    data.forEach(gif => {
      object = dataIntoObject(gif);
      state.trending.push(object);
    });
  } catch (error) {
    throw error;
  }
};
