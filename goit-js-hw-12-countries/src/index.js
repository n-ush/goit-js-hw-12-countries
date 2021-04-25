import './styles.css';
import debounce from 'lodash/debounce';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updateMarkup';

const refs = {
  inputRef: document.querySelector('.country-input'),
  searchResult: document.querySelector('.search-result'),
};

refs.inputRef.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
  refs.searchResult.innerHTML = '';
  let countryName = event.target.value;
  fetchCountries(countryName).then(updateMarkup);
}
