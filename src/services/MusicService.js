import fetchJsonp from 'fetch-jsonp';

const API = 'https://api.deezer.com/search?q=';

export default {
  search(artist) {
    return fetchJsonp(`${API}${artist}&output=jsonp`)
      .then(res => res.json())
      .catch((error) => {
        console.log(error);
      });
  },
};
