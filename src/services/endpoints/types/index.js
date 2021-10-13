import api from '../../api'


export function getAllPokemonsOfType(type) {
  if (type != "" || type != "undefined") {
    return api // <-- Returns a Promise first
      .get(`/type/${type}`)
      .then((resp) => resp.data.pokemon)
      .then((pokeList) => {
        return pokeList; // <-- Then returns the resolved value
      })
      .catch((error) => console.warn(error));
  }
}