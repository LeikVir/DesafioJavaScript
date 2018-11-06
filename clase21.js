function persona (nombre, apellido, altura)
{
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
//  console.log('me ejecutaron')
}
persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y mido ${this.altura}`)
}
persona.prototype.saludarConAltura = function() {
  this.altura > 1.8 ? console.log(`${this.saludar()} y soy alto`) : console.log(`${this.saludar()} y soy bajo`)
}

let luis = new persona('Luis', 'Mendez', 1.84)
let erika = new persona('Erika', 'Luna', 1.63)
let martin = new persona('Martin', 'Ramirez', 1.74)
erika.saludarConAltura()
martin.saludarConAltura()
luis.saludarConAltura()
