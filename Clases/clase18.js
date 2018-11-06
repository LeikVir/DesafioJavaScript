var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 152
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 96
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 67
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 153
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 43
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 123
}

const esBaja = ({ altura }) => altura < 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasBajas = personas.filter(esBaja)

const reducer = (acum, { libros }) => acum + libros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`El total de todos es ${totalDeLibros} libros`)
