import api from '../../api'

export function getPokemonByName(name) {
  return api
    .get(`/pokemon/${name}/`)
    .then((resp) => resp.data)
    .then((data) => {
      return data
    })
    .catch((error) => console.warn(error));
}