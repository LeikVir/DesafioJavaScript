const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje (id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(88, function () {
  obtenerPersonaje(54, function () {
    obtenerPersonaje(1, function() {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(7, function() {
          obtenerPersonaje(9, function() {
            obtenerPersonaje(13)
          })
        })
      })
    })
  })
})
