import fetchJsonp from 'fetch-jsonp';

const API = 'https://api.deezer.com/search?q=';

export default {
  search(artist, filter) {
    return fetchJsonp(`${API}${artist}&order=${filter}&output=jsonp`)
      .then(res => res.json())
      .catch((error) => {
        console.log(error);
      });
  },
};
