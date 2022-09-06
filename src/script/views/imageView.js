//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMAGE VIEW
// Base class for images

import icons from '../../img/icons.svg';

export default class ImageView {
  _data;

  render(data) {
    if (!data) return;

    // 1) Save data to the class
    this._data = data;

    // 2) Generate html
    const html = this._generateMarkup();

    // 3) Clear html that is already there
    this.#clear();

    // 4) Insert new html
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  #clear() {
    this._parentElement.innerHTML = '';
  }

  renderError(message) {
    const markup = `
    <div class="error-message">
      <svg class="svg svg__error">
          <use href="${icons}#icon-alert-circle"></use>
        </svg>
      <p >Whoops! ${message}</p>
    </div>`;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg class="svg__spinner">
        <use href="${icons}#icon-spinner"></use>
      </svg>
      <p>Giffy's will be here in a jiffy</p>
    </div>`;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSkeleton() {
    const markup = `    
    <div class="loading loading__${this._className}">
      <svg class="svg__loading svg__loading--first">
        <use href="${icons}#icon-circle"></use>
      </svg>
      <svg class="svg__loading svg__loading--second">
        <use href="${icons}#icon-circle"></use>
      </svg>
      <svg class="svg__loading svg__loading--third">
        <use href="${icons}#icon-circle"></use>
      </svg>
    </div>`;
    const gifs = this._parentElement.querySelectorAll('.gif');

    gifs.forEach(image => {
      image.parentElement.parentElement.insertAdjacentHTML(
        'beforebegin',
        markup
      );
    });
  }

  removeSkeleton(additionalCallback) {
    if (additionalCallback) additionalCallback();

    // Find the loading skeleton in the DOM and remove it.
    this.parentElement.parentElement.previousSibling?.remove();
  }

  async onGifLoad(additionalCallback) {
    //  Call removeSkeleton on load of each gif, and additional callback if there
    this._parentElement.querySelectorAll('.gif').forEach(gif => {
      gif.addEventListener(
        'load',
        this.removeSkeleton.bind(gif, additionalCallback)
      );
    });
  }

  _generateImageMarkup(imageData) {
    // 1) Get network speed
    const networkSpeed = this._data.networkSpeed;

    // 2) Variables for pixel density and still image sources
    let oneXImage;
    let twoXImage;
    let stillImage;

    // 3) If big image and good internet speed save HD sources.
    if (this._className === 'random' && networkSpeed === '4g') {
      oneXImage = imageData.images.medium;
      twoXImage = imageData.images.original;
      stillImage = imageData.images.stills.normal;

      // 4) For tiled images or when network speed is 3g use smaller sources
    } else {
      oneXImage = imageData.images.small;
      twoXImage = imageData.images.medium;
      stillImage = imageData.images.stills.small;
    }

    // 5) If network speed is very slow - use both gif sources as the shorter preview gif
    if (networkSpeed === '2g') {
      twoXImage = oneXImage = imageData.images.preview;
    }

    // 6) return html for individual image
    return `
    <figure class="gif__figure-container">
      <picture>
        <img src="${stillImage}"  
          data-src-gif=" ${oneXImage.gif} 1x, ${twoXImage.gif} 2x" 
          data-src-webp=" ${oneXImage.webp} 1x, ${twoXImage.webp} 2x" 
          
          alt="${imageData.title}" 
          class="gif gif__${this._className}
        "/>
      </picture>
      
    </figure>`;
  }

  #swapStillWithGif(entries, _observer) {
    entries.forEach(entry => {
      // 1) Check if item is in view port
      if (!entry.isIntersecting) return;

      // 2) Create new source elements
      const newSourceWebp = document.createElement('source');
      const newSourceGif = document.createElement('source');

      // 3) Add srcset from the data-set on the img html
      newSourceGif.srcset = entry.target.dataset.srcGif;
      newSourceWebp.srcset = entry.target.dataset.srcWebp;
      newSourceWebp.type = 'image/webp';

      // 4) Add source before the img element
      entry.target.insertAdjacentElement('beforebegin', newSourceWebp);
      entry.target.insertAdjacentElement('beforebegin', newSourceGif);
    });
  }

  lazyLoader() {
    // 1) get all images
    const images = this._parentElement.querySelectorAll('.gif');

    // 2) Call swapStillWithGif when image enters the viewport
    const imgObserver = new IntersectionObserver(this.#swapStillWithGif, {
      root: null,
      threshold: 0,
    });

    images.forEach(img => imgObserver.observe(img));
  }
}
