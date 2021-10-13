import Router from '../../router/router'

export function pushRoute(name, param) {
  if (param != '') {
    if (name == 'TypeList') Router.push({
      name: name,
      params: {
        selectedType: param
      }
    });
    if (name == 'PokemonInfo') Router.push({
      name: name,
      params: {
        name: param
      }
    });
  } else {
    Router.push({
      name: name
    })
  }
}