let sacha = {
  nombre: 'sacha',
  edad: 24,
  sexo: 'hombre',
  peso: 78
}

console.log(`${sacha.nombre} pesa ${sacha.peso}kg a inicio de año`)

const INCREMENTO = 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO
const disminuirDePeso = persona => persona.peso -= INCREMENTO

for (var i = 1; i <=365; i++) {
  let random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    disminuirDePeso(sacha)
  }
}

console.log(`${sacha.nombre} pesa ${sacha.peso.toFixed(2)}kg a finales de año`)
