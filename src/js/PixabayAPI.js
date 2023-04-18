import axios from 'axios';
// Збереження ключа API в окремому файлі змінних
import { KEY } from './api-key.js';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  // #API_KEY = '34991535-a7425182e30d9d17c0e128526';
  #query = '';

  constructor() {
    this.page = 1;
    this.per_page = 40;
  }

  fetchPhotosByQuery() {
    return axios.get(`${this.#BASE_URL}`, {
      params: {
        q: this.#query,
        page: this.page,
        per_page: this.per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: ' true',
        key: KEY,
      },
    });
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}

// ------- 2 variant ---------

//*  Перевірка помилок під час виконання запиту до серверу

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     Notiflix.Notify.failure('Something went wrong. Please try again later.');
//     return Promise.reject(error);
//   },
// );

// async function fetchImages(query, page, perPage) {
//   const response = await axios.get(
//     `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//   );
//   return response.data;
// }

// export { fetchImages };