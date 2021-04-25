import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import countriesTemplate from '../templates/country-list.hbs';
import countryTemplate from '../templates/country-markup.hbs';

const refs = {
  searchResult: document.querySelector('.search-result'),
};

function updateMarkup(country) {
  if (country.length > 10) {
    notice({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 3000,
      hide: true,
    });
  }

  if (country.length >= 2 && country.length <= 10) {
    notice({
      text: 'Please enter a more specific query to get detailed information',
      delay: 3000,
      hide: true,
    });
    const markupList = countriesTemplate(country);
    refs.searchResult.insertAdjacentHTML('beforeend', markupList);
  }
  if (country.length === 1) {
    const countryMarkup = countryTemplate(country);
    refs.searchResult.innerHTML = countryMarkup;
  }
}

export default updateMarkup;
