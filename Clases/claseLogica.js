// //Problema 1 - Los corredores
// //De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente despues que B y D ha llegado entre A y C ¿Podria usted calcular el orden exacto de llegada?
//
// var a = {
//   A: 0,
//   B: 0,
//   C: 0,
//   D: 0,
//   resultado: function() {
//     if (a.C > a.B &&
//         a.D > a.B &&
//         a.D > a.C &&
//         a.D < a.A){
//           return true;
//         }
//
//         return false;
//
//   },
//   intervalo: setInterval(function(){
//
//     a.A = Math.ceil(Math.random()*4)
//     a.B = Math.ceil(Math.random()*4)
//     a.C = Math.ceil(Math.random()*4)
//     a.D = Math.ceil(Math.random()*4)
//
//     if(a.resultado()){
//
//       clearInterval(a.intervalo);
//
//       console.log("Atleta A " + a.A)
//       console.log("Atleta B " + a.B)
//       console.log("Atleta C " + a.C)
//       console.log("Atleta D " + a.D)
//       console.log("------------------------------------------------------------------------------------------------------")
//     }
//
//   },10)
//
// }
//
//
// // Problema 2 - Los Caballos
// //El caballo de Mac es mas oscuro que el de Smith, pero mas rapido y mas viejo que el de Jack, que es aun mas lento que el de Willy, que es mas joven que el de Mac,
// //que es mas viejo que el de Smith, que es mas claro que el de Willy, aunque el de Jack es mas lento y mas oscuro que el de Smith ¿Cual es el mas viejo? ¿Cual es el
// // mas lento? ¿Cual es el mas claro?
// var b = {
//    jack: {edad: 0, velocidad: 0, tono: 0},
//    smith: {edad: 0, velocidad: 0, tono: 0},
//    mac: {edad: 0, velocidad: 0, tono: 0},
//    willy: {edad: 0, velocidad: 0, tono: 0},
//    resultado: function() {
//
//             if (b.mac.tono > b.smith.tono &&
//                 b.mac.velocidad > b.jack.velocidad &&
//                 b.mac.edad > b.jack.edad &&
//                 b.jack.velocidad < b.willy.velocidad &&
//                 b.willy.edad < b.mac.edad  &&
//                 b.mac.edad > b.smith.edad &&
//                 b.smith.tono < b.willy.tono &&
//                 b.jack.velocidad < b.smith.velocidad &&
//                 b.jack.tono > b.smith.tono){
//                   return true;
//                 }
//
//                 return false;
//
//           },
//   intervalo: setInterval(function(){
//
//           b.mac.edad = Math.ceil(Math.random()*2);
//           b.mac.velocidad = Math.ceil(Math.random()*2);
//           b.mac.tono = Math.ceil(Math.random()*2);
//           b.smith.edad = Math.ceil(Math.random()*2);
//           b.smith.velocidad = Math.ceil(Math.random()*2);
//           b.smith.tono = Math.ceil(Math.random()*2);
//           b.willy.edad = Math.ceil(Math.random()*2);
//           b.willy.velocidad = Math.ceil(Math.random()*2);
//           b.willy.tono = Math.ceil(Math.random()*2);
//           b.jack.edad = Math.ceil(Math.random()*2);
//           b.jack.velocidad = Math.ceil(Math.random()*2);
//           b.jack.tono = Math.ceil(Math.random()*2);
//
//           if (b.resultado()){
//
//             clearInterval(b.intervalo)
//
//             console.log("Jack tiene una velocidad de " + b.jack.velocidad + " una edad de " + b.jack.edad + " y un tono de " + b.jack.tono)
//             console.log("Willy tiene una velocidad de " + b.willy.velocidad + " una edad de " + b.willy.edad + " y un tono de " + b.willy.tono)
//             console.log("Mac tiene una velocidad de " + b.mac.velocidad + " una edad de " + b.mac.edad + " y un tono de " + b.mac.tono)
//             console.log("Smith tiene una velocidad de " + b.smith.velocidad + " una edad de " + b.smith.edad + " y un tono de " + b.smith.tono)
//             console.log("------------------------------------------------------------------------------------------------------------------------")
//
//
//           }
//
//         }, 10)
//
// }
var Persona = {
  Luis:{
    nombre: 'Luis',
    edad: 23
  }
}
// function reto1 (Persona) {
//   var {nombre, edad} = Persona.Luis
//   console.log(`Hola me llamo ${nombre} y tengo ${edad}`)
// }

function masEdad (Luis){
  return {
    ...Persona,
    edad: Persona.edad + 1
  }
}
masEdad(Luis)
