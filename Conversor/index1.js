function conversion1() {

let hr = document.createElement('hr')
document.body.appendChild(hr)

let p = document.createElement('p')
let p1 = document.createTextNode('Ahora designe que cantidad le gustaria cambiar')
p.appendChild(p1)
document.body.appendChild(p)

let input = document.createElement('input')
input.setAttribute('type', 'number')
input.setAttribute('id', 'valorCambiar1')
input.setAttribute('placeholder', 'Cantidad')
input.setAttribute('name', 'CantidadCambiar')
document.body.appendChild(input)

let submit = document.createElement('input')
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'resul1')
submit.setAttribute('name', 'resultado')
submit.setAttribute('onclick', 'conversion1_1()')
document.body.appendChild(submit)

}

function conversion1_1() {

  let hr = document.createElement('hr')
  let dc = document.getElementById('valorCambiar1').value
  let p11 = document.createElement('p')
  let p1 = document.createTextNode(`Con tus ${dc} dolares puedes obtener:`)
  let p12 = document.createElement('p')
  let p2 = document.createTextNode(`Bs. ${(dc * 110.31).toFixed(2)} en caso de que te lo cambien a DolarToday`)
  let p13 = document.createElement('p')
  let p3 = document.createTextNode(`Bs. ${(dc * 146.32).toFixed(2)} si vas a Cucuta a cambiarlos o...`)
  let p14 = document.createElement('p')
  let p4 = document.createTextNode(`Bs. ${(dc * 63.3).toFixed(2)} si eres un alma caritativa que quiere venderlos DICOM`)

  p11.appendChild(p1)
  document.body.appendChild(p11)
  p12.appendChild(p2)
  document.body.appendChild(p12)
  p13.appendChild(p3)
  document.body.appendChild(p13)
  p14.appendChild(p4)
  document.body.appendChild(p14)
  // console.log(`Con tus ${dc} dolares puedes obtener:
  //   Bs. ${(dc * 110.31).toFixed(2)} en caso de que te lo cambien a DolarToday
  //   Bs. ${(dc * 146.32).toFixed(2)} si vas a Cucuta a cambiarlos o...
  //   Bs. ${(dc * 63.3).toFixed(2)} si eres un alma caritativa que quiere venderlos DICOM`)

}

function conversion2() {

  let hr = document.createElement('hr')
  document.body.appendChild(hr)

  let p = document.createElement('p')
  let p1 = document.createTextNode('Ahora designe que cantidad le gustaria cambiar')
  p.appendChild(p1)
  document.body.appendChild(p)

  let input = document.createElement('input')
  input.setAttribute('type', 'number')
  input.setAttribute('id', 'valorCambiar2')
  input.setAttribute('placeholder', 'Cantidad')
  input.setAttribute('name', 'CantidadCambiar')
  document.body.appendChild(input)

  let submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'resul2')
  submit.setAttribute('name', 'resultado')
  submit.setAttribute('onclick', 'conversion2_1()')
  document.body.appendChild(submit)

}

function conversion2_1() {

    let hr = document.createElement('hr')
    let bs = document.getElementById('valorCambiar2').value
    let p11 = document.createElement('p')
    let p1 = document.createTextNode(`Con tus ${bs} Bs puedes obtener:`)
    let p12 = document.createElement('p')
    let p2 = document.createTextNode(`$ ${(bs * 0.00906453952).toFixed(2)} en caso de que te lo cambien a DolarToday`)
    let p13 = document.createElement('p')
    let p3 = document.createTextNode(`$ ${(bs * 0.0068343357).toFixed(2)} si vas a Cucuta a cambiarlos o...`)
    let p14 = document.createElement('p')
    let p4 = document.createTextNode(`$ ${(bs * 0.0157977883).toFixed(2)} si eres un enchufado que los consigue a DICOM`)

    p11.appendChild(p1)
    document.body.appendChild(p11)
    p12.appendChild(p2)
    document.body.appendChild(p12)
    p13.appendChild(p3)
    document.body.appendChild(p13)
    p14.appendChild(p4)
    document.body.appendChild(p14)
    // console.log(`Con tus ${dc} dolares puedes obtener:
    //   Bs. ${(dc * 110.31).toFixed(2)} en caso de que te lo cambien a DolarToday
    //   Bs. ${(dc * 146.32).toFixed(2)} si vas a Cucuta a cambiarlos o...
    //   Bs. ${(dc * 63.3).toFixed(2)} si eres un alma caritativa que quiere venderlos DICOM`)

}
