
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 11 --------------- //  

// scope de arrow funcion es global
// new es una referencia o insaciacion de los objetos         //
// representacion en base de datos viene de una ABSTRACCIÓN   //


var dogObj = {
    'name': 'DEWEY',
    'breed': 'Dash Hound'
}

//  dogObj.name  ** es la propiedad del objeto**
//  metodos son funciones dentro de objetos.

dogObj ['favoriteFood'] = 'Pizza'
//se inserta un nuevo key value al objeto



delete dogObj.favoriteFood
// eliminatr la propiedad del objeto.


//  Crea el objeto carro 
// y crea una constante element que para cada 
// propiedad del objeto "carro" imprima en consola
// mediante 

var carro = {
    'color': ['red', 'yellow', 'whithe' ],
    'tipo': 'crossover',
    'año': '2019',
    'puertas': 4,

}

for ( const element in carro ) {
    console.log(`${element}:${carro[element]}`)
}


//  console.table(carro)
//  muestra la tabla en consola.
//  son metodos del objeto object  // SON METODOS DEL OBJETO OBJET

carro.color[2]
carro.color


///dada una propiedad ver a regresar true si encuentra propertie en el objeto
//encontrar propiedad
// car.hasOwnProperty   (metodos del objeto object)

car.hasOwnProperty('color')



////  forma de obtener todas las properties

Object.getOwnPropertyNames(carro)


///   descripscion de la key de un objeto

Object.getOwnPropertyDescriptor(carro , 'color')




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 12 --------------- //
        
      //metdos son funciones como propiedades de los objetos
      //  las acciones son metodos


var dogObj = {
    'name': 'DEWEY',
    'breed': 'Dash Hound',
    'bark': () => 'Guaaau'
}

//  acceder a la funcion del objeto
dogObj.bark
//  acceder a la accion de la funcion
dogObj.bark()


//  las propiedades pueden anidar funciones que se interpretan
//  como acciones de los objetos
var person  = {
    firtName: 'Luis',
    lastName: 'Ortiz',
    age: 30,
    greeting: function (){
        return `Hola soy ${this.firtName}` 
    }
}


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 13 --------------- //

//metodos pordemos ocupar las propiedades del objetos
//.this es el scope de nuestros objetos
//arrow function no tienen scope  y es global

var DLH =
[

    {
    'name' : 'History',
    'score' : 9
    },

    {
    'name' : 'Politica',
    'score' : 7
    },

    {
    'name' : 'Filosofía',
    'score' : 5
    },

   { 
    'name' : 'Estadística',
    'score' : 10 
   }

]


var arrays = DLH.map (function (DLH) {
    return DLH.score
} )

for ( var i = 0 ; i < arrays.length; i++) {
	
	suma += arrays[i]
}



// desestructuracion , sacar sus propiedades y alamacenarla
//  CESAR INCRIPTING
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 13 --------------- //
//  propiedades de los objetos en camel case
//  accesors de js
//  template literal  `${this.height.value} $ {this.geiht.unit}`
//  accesors
//  con el setter le damos formato a las propiedades.
//  GET   <----->  SETTERS

var persona = {

name: 'themlma',
heightValue: '165',
birthDate: '1995-14-11',

weight: {
    unit: 'Kg',
    value: '70'
        },

height: {
    unit: 'cm',
    value: '170'
        },


get getHeight() {
    return `${this.height.value} ${this.weight.unit}`
}

              }



var street = {

pavementMaterial: {
        pavementConcrete: 'concrete',
        pavementAsphalt: 'asphalt',
        pavementCobble: 'cobble'
                   },

luminaires: {

        lumenesValue: '600',
        watts: '12'

            },

garbageDumps: {

    sizeGarbageDumps: 
    [ 'lg','md','lg' ],

    materialGarbageDumps: 
    [ 'plastic', 'metal', 'organic material'],

    typesOfGarbage: 

    [ 'Metal', 'E-waste', 'Paper', 'Glass',  ]
                                                  
            }

              }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
        // ------------- Exercise 14 --------------- //

// paso un constructor que paso por el objeto console /window
// pasaron por una funcion contructura
//  constructor = define el molde de un objeto en general
//  funciones constructoras CAPITALIZE no CAMEL CASE   DogObjet    //  (no)  dogObj
// no puedes ser anonimas , ni arrow porque no tienen scope
//  dado palabra function reservada tenemos acceso a scope 


//  almacenando en memoria una nueva instaciacion del objeto DOG


// Constructor function

function Dog(breed, name, size) {
    this.breed = breed
    this.name = name
    this.size = size
  }
  var firstDog = new Dog('Dash hound', 'Sr. Salchicha', 'S')
  
  

//  OBJETOS DECLARATIVOS O LITERALES    //  Y
//  OBJETOS CONSTRUIDOS
//  https://yeisondaza.com/entendiendo-los-objetos-en-javascript   





