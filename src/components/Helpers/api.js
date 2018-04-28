import axios from 'axios';

export function getCharacters(input) {
  return axios.get(`https://gateway.marvel.com/v1/public/characters?name=${input}&limit=5&apikey=3603eb39c328bcc7d8ad44215d65a8cc&hash=8d8eae4db40d1d08749a8dbdfa416e11/`);
}