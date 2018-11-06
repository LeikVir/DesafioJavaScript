let juan = {
  nombre: 'juan',
  edad: 16,
  sexo: 'hombre'
}
let sacha = {
  nombre: 'sacha',
  edad: 24,
  sexo: 'hombre'
}
const MAYORIA_EDAD = ({ edad }) => edad >= 18

const ES_MAYOR_DE_EDAD = (persona) => MAYORIA_EDAD(persona)
?    console.log(`${persona.nombre} es mayor de edad`)
:    console.log(`${persona.nombre} es menor de edad`)


const PERMITR_ACCESO = persona => ES_MAYOR_DE_EDAD (persona)
? console.log('Acceso concedido') : console.log('Acceso DENEGADO')
//
// var esMayorDeEdad = function (persona) {
//   if (persona.edad >= 18) {
//     console.log(`${persona.nombre} es mayor de edad`)
//   }
//   else {
//     console.log(`${persona.nombre} es menor de edad`)
//   }
// }
