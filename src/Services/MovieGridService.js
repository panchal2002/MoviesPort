import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=Infinite`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=Jungle%20Cruise`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=how%20to%20train%20your%20dragon%20the`
];

export function fetchGrid() {
  return Promise.all(
    urls.map(items => {
      return fetch(items).then(response => response.json());
    })
  );
}
