class persona {

    constructor (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
  }
  soyAlto() {
    return this.altura > 1.8
  }
}

class desarrollador extends persona {

    constructor (nombre, apellido, altura) {
      super (nombre, apellido, altura)
      }
    saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

// var luis = new persona('Luis', 'Mendez', 1.84)
// var erika = new persona('Erika', 'Luna', 1.63)
// var martin = new persona('Martin', 'Ramirez', 1.74)
