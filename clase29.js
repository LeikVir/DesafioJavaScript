const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje (id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}


obtenerPersonaje(88)
obtenerPersonaje(54)
obtenerPersonaje(1)
