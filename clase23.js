function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function persona (nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
//  console.log('me ejecutaron')
}
persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto = function() {
  return this.altura > 1.8
}

function desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function() {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


// var luis = new persona('Luis', 'Mendez', 1.84)
// var erika = new persona('Erika', 'Luna', 1.63)
// var martin = new persona('Martin', 'Ramirez', 1.74)
