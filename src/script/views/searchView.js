//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// SEARCH VIEW
// class for the getting the search query and submitting the search form

class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    // 1) Get search query
    const searchField = this.#parentElement.querySelector('.search__field');
    const value = searchField.value;

    // 2) Reset search field
    searchField.value = '';

    // 3) return query
    return value;
  }

  searchHandler(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
