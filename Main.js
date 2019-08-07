console.log("Hola mundo from main.js")
console.log(24*365)
console.log(3==3)
console.log(3==='3')
console.log(false || false)
console.log ((age+10) ==29) && true

//console es un obejeto (console)
// metodo es una funcion dentro de un objeto  (.log)
// metodos  tienen propositos: mostrar en pantallla un argumento.
// poner el OBJETO "CONSOLE" en la consola, para encontrar métodos de "CONSOLE".

var age = 22  //  a la variable edad , le asignamos el número 22.

var livingDays = 365 * age  // 

// palabras de asignacion
// var =  un espacio en memoria para almacenar un tipo de dato 


var division = 3 / 4000

//var multiplicacion = 






// CONSTANTES   MAYUSCULAS

// VARIABLES    CAMEL CASE 

const Pi = 3.1416

var DIAMETRO = 100

var RADIO = DIAMETRO/2

var AREA = Pi * RADIO ** 2

console.log(AREA)


//  TYPE  TE ENTREGA EL TIPO DE DATOS QUE EXISTEN EN JAVASCRIPT 

//  A)   STING  "STRING"
//  B)   NUMBER 1
//  C)   BOOLE TRUE
//  D)   OBJET {}
//  E)   ARRAY  []
//  F)   SIMBOL 
//  G)   UNDEFINED  (NO TIENE ASIGNADO UN VALO === NULL ES VACIO)



//   COMO TRANSFORMAR VALORES A TIPOS Y TIPOS A VALORES


Number ('4')

String (4)

Boolean (1)

Number (false)


/////////////////////////////////////////////


//   CONDICIONAL STATEMENTS


//  IF                           VERDE
//  ELSE IF                     AMARILLO
//  ELSE                          ROJO


////////////////////////////////////////////////

var number = 1                

if  (number === '1' )  {              //////////// las llaves a la altura de la sentencia
    console.log('si es 1')            ///////////  escope  todo lo que esta en llaves
}else {
    console.log('El uno no es numerico o no es uno')
}        
                          
        

            
////////////////////////////////////////////

//dado un numero  { number } , verficar si es par.


var variable = '13'

var modulo = variable%2

if ((modulo === 1) && (typeof modulo  === 'number' )){
    console.log('es inpar y de tipo numero')
} else {
    console.log('es par')
}   

////////////////////////////////////////////  RURIK //////
// numero es un digito
// numero es par
// numero es impar 

var number = true 

if ( ( typeof number === 'number') && (number % 2 === 0 )){
    console.log('the nomber its even')
} else {
    console.log (' its not a number ')
}


//////////////////////////////////////////
//saber si es producto de 2 numero es primo y es mayo a 40
//validar que los numeros sean digitos  (variables)




///  https://www.youtube.com/watch?v=ZZ4AHexEUdo     minuto  20:28 


///////////////////////////////////////
///////////////////////////////////////




for (i = 0; i < 20; i++) {
    console.count()
  }



  //////////  dado tu nombre fecha de --- Nacimiento  ---  Nombre 
  /////// ---  Apellidos  ---  Genero   ---  Lugar de nacimiento.

/*
  var nombre = ['DAVID', 'JESSICA',];
  var apellidoMa = ['LECHUGA', 'GUERRERO',];
  var apellidoPa = ['HUERTA', 'LOPEZ',];
  var fechaAño = ['95', '91',];
  var fechaMes = ['05', '04',];
  var fechaDia = ['04', '04',];
  
  var genero = ['H', 'F',];
  var lugar = ['DF', 'VRZ',];
  console.log(nombre.slice(0,1))
  console.log(apellidoMa.slice(0,1))
  console.log(apellidoPa.slice(0,1))
  console.log(fechaAño.slice(0,1))
  console.log(fechaMes.slice(0,1))
  console.log(fechaDia.slice(0,1))
  console.log(genero.slice(0,1))
  console.log(lugar.slice(0,1))
  console.log(nombre.substring(0,2))
*/
//////////////////////////////////////////////////////

////////////////////Array 
//////////  usado para almacenar multiples valores, con multiples tipos de datos


//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////
//////////  METODOS DE STRINGS  Y ARRAY //////////




////////// //////////////////// WHILE LOOP  //////////////////////////////

////////// //////////////////// WHILE LOOP  //////////////////////////////

////        CUMPLE HASTA QUE LA CONDICION SE FALSA       //// 

////////// //////////////////// WHILE LOOP  //////////////////////////////
  
////        CUMPLE HASTA QUE LA CONDICION SE FALSA       //// 

////////// //////////////////// WHILE LOOP  //////////////////////////////



//////////    TAREA 

// el cuadrado de estos numeros
//  var number = [1,2,3,4,5,7,8] 

////////////

 
/*
var word = 'word'
const VOWELS = ['a', 'e', 'i', 'o', 'u']
var index = palabra.length -1  
console.log (palabra)
console.log(vocales)
do { 
    
    console.log (palabra[palabra.length-(index+1)]) 
    index--
} while (index >=0)
*/



// //////////////////// WHILE LOOP  //////////////////////////


/*
const Nomina = [
    
    [1,2],
    [3,4],
    [5,6]
                ];
console.log(Nomina[2][1])
*/

/*
var names = [ "David", "Jessica", "Dewey" ];
var salary =  [ 13500, 135001, 135002];
const arr2d = Array(8).fill(0).map(() => Array(8).fill("ey"));
var testArray1 = [9,8]
var testArray2 = [3,5,7,9,10]
var testArray3 = {"test":123}
var index = 0;
*/


/*
var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['Louie Louie', 'The Kingsmen'],
    ['Maybellene', 'Chuck Berry']
  ];
  
  function print(message) {
    document.write(message);
  }
  
  function printSongs( songs ) {
    var listHTML;
    listHTML = '<ol>';
    for ( var i = 0; i < songs.length; i += 1) {
      listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }
  
  printSongs(playList);
  */

  /*
 var obj = {
    0: 100,
    1: 300,
    'cat': 'meaow', 
    '': 'empty string'
    };
    
    console.log(obj[0], obj[1], obj['cat'], obj['']);
    */



/*
   const MONTHLY_SALARY = 450 * 30
   const DISCOUNT_PERCENT = 2
   let paysheet = [['Thelma', 5], ['Irving', 3], ['Hector', 1]]
   
   for (let index in paysheet) {
       let worker = paysheet[index]
       let totalDiscountPercent = worker[1] * DISCOUNT_PERCENT
       let totalDiscount = MONTHLY_SALARY * (totalDiscountPercent / 100)
       let finalSalary = MONTHLY_SALARY - totalDiscount
       console.log(`${worker[0]}: $${finalSalary}`);
   }
*/

/*
   const Calc = function () {
        let MONTHLY_SALARY = 450 * 30
        let DISCOUNT_PERCENT = 2
        let paysheet = [['Thelma', 5], ['Irving', 3], ['Hector', 1]]
        let worker = paysheet[index]
       if ( let worker = paysheet[index]) {
            return(Calc)
       }
   };
   */



   //Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
/*
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("quiero un pony :3"));  
*/
