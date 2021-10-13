import axios from "axios";

// export const getImgFromUrl = async (url) => {
export async function getImgFromUrl(url) {
  const pokemonPromise = await axios.get(url);
  const pokemonData = pokemonPromise.data;
  const dream_world_img = pokemonData.sprites.other.dream_world.front_default;

  if (dream_world_img != null) {
    return dream_world_img;
  } else {
    const imgObj = pokemonData.sprites.other;
    //* To access the key that has a dash
    const Official_artwork = imgObj["official-artwork"];
    return Official_artwork.front_default;
  }
}