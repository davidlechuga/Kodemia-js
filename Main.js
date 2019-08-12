//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
            // ------------- Exercise 7 --------------- //  
//  Dado un numero, imprimir en pantaña si es menor a 10 
//   y parar la iteracion en 10

var number = 0

while(number < 10) {
    console.log('Si');
    number++
}


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
            // ------------- Exercise 8 --------------- //  

//////////  dado tu nombre fecha de --- Nacimiento  ---  Nombre 
/////// ---  Apellidos  ---  Genero   ---  Lugar de nacimiento.
//  extraer su array con el metodo .slice


  var nombre = ['JUAN', 'DAVID', 'JESSICA',];
  var apellidoMa = ['LECHUGA', 'GUERRERO',];
  var apellidoPa = ['HUERTA', 'LOPEZ',];
  var fechaAño = ['92', '91','95', '99',];  //  comienza en la posicion 2 y corta hasta la 3
  var fechaMes = ['05', '04',];
  var fechaDia = ['04', '04',];
  var genero = ['H', 'F',];
  var lugar = ['DF', 'VRZ',];

  console.log(nombre.slice(1,2))
  console.log(apellidoMa.slice(0,1))
  console.log(apellidoPa.slice(0,1))
  console.log(fechaAño.slice(2,3))
  console.log(fechaMes.slice(0,1))
  console.log(fechaDia.slice(0,1))
  console.log(genero.slice(0,1))
  console.log(lugar.slice(0,1))




  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
            // ------------- Exercise 9 --------------- //  
  // Dado tu nombre, apellidos, fecha de nacimiento, genero
  // y lugar de nacimiento dar la primera parte del CURP
  // 14-11-1996


var name = 'David'
var lastName = 'Cermeño Moranchel'
var birthDate = '14-11-1996'
var gender = 'Hombre'
var birthCity = 'DF'
var abbreviationName = (
 lastName.substring(0, 2) +
 lastName.charAt(lastName.indexOf(' ') + 1) +
 name.charAt(0)
)
var year = birthDate.slice(-2)
var month = birthDate.slice(3, 5)
var day = birthDate.slice(0, 2)
var abbreviationGender = gender.charAt(0)
var curp = `${abbreviationName}${year}${month}${day}${abbreviationGender}${birthCity}`



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 10 --------------- //  

// scope de arrow funcion es global
// new es una referencia o insaciacion de los objetos         //
// representacion en base de datos viene de una ABSTRACCIÓN   //


var dogObj = {
    'name': 'DEWEY',
    'breed': 'Dash Hound'
}

//  dogObj.name  ** es la propiedad del objeto**
//  metodos son funciones dentro de objetos.

dodObj ['favoriteFood'] = 'Pizza'
//se inserta un nuevo key value al objeto



delete dogObj.favoriteFood
// eliminatr la propiedad del objeto.



var carro = {
    'color': 'red',
    'tipo': 'crossover',
    'año': '2019',
    'puertas': 4,

}

for ( const properties in carro ) {
    console.log(`${properties}:${carro[properties]}`)
}


//  console.table(carro)
//  muestra la tabla en consola.
//  son metodos del objeto object  // SON METODOS DEL OBJETO OBJET

carro.color.negro[2]
carro.color.negro


///dada una propiedad ver a regresar true si encuentra propertie en el objeto
//encontrar propiedad
// car.hasOwnProperty   (metodos del objeto object)

car.hasOwnProperty('color')



////  forma de obtener todas las properties

Object.getOwnPropertyNames(carro)


///   descripscion de la key de un objeto

Object.getOwnPropertyDescriptor(carro , 'color')


