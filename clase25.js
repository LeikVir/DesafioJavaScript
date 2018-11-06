class persona {

    constructor (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola, mi nombre es ${nombre} ${apellido}`)
    if (fn){
      fn(nombre, apellido, null)
    }
  }
  soyAlto() {
    return this.altura > 1.8
  }
}

class desarrollador extends persona {

    constructor (nombre, apellido, altura) {
      super (nombre, apellido, altura)
      }
    saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
    if(fn) {
      fn(nombre, apellido, true)
      }
    }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev === true) {
    console.log(`Ahhh no sabia que eras Dev`)
  }
}
var luis = new desarrollador ('Luis', 'Mendez', 1.84)
var erika = new persona('Erika', 'Luna', 1.63)
var martin = new persona('Martin', 'Ramirez', 1.74)

luis.saludar(responderSaludo)
erika.saludar(responderSaludo)
martin.saludar(responderSaludo)
