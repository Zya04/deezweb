import fetchJsonp from 'fetch-jsonp';

const API = 'https://api.deezer.com/search?q=';

export default {
  search(query, filter) {
    return fetchJsonp(`${API}${query}&order=${filter}&output=jsonp`)
      .then(res => res.json())
      .catch((error) => {
        console.log(error);
      });
  },
};
