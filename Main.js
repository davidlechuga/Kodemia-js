        // ------------- Exercise 3 --------------- //


//  typeof()  TE ENTREGA EL TIPO DE DATOS QUE EXISTEN EN JAVASCRIPT 

//  A)   STRING "STRING"  
         typeof('str')
//  B)   NUMBER 1  
         typeof(1)
//  C)   BOOLE TRUE 
         typeof(true)  
         typeof(false)
//  D)   OBJET {}  
         typeof(console) 
         typeof(Atomics)
//  E)   .isArray  [] 
         Array.isArray([1, 2, 3])
//  F)   SIMBOL    //
         typeof Symbol('foo')
//  G)   UNDEFINED  (NO TIENE ASIGNADO UN VALOR === NULL ES VACIO)
         typeof undefined    
//  H)   FUNCTION  // 
         typeof(console.log)


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

         // ------------- Exercise 4 --------------- //


      //   COMO TRANSFORMAR VALORES A TIPOS Y TIPOS A VALORES
      //   HOW TO TRANSFORM VALUES TO TYPES AND TYPES TO VALUES


Number ('4')

String (4)

Boolean (1)

Number (false)


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://


      

                  //  CONDICIONAL STATEMENTS


            //  IF                           VERDE
            //  ELSE IF                     AMARILLO
            //  ELSE                          ROJO


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::// 
             // ------------- Exercise 5 --------------- //
//  problema:  Encontrar si el numero 1 es igual en tipo y valor  ,
//  de lo contrario imprimir en pantalla, El uno no es numerico o no es uno
          

var number = 1                            

if  (number === '1' )  {     // las llaves a la altura de la sentencia.  //  the keys at the height of the sentence
    console.log('si es 1')   // escope de la condicional if { todo lo que esta en llaves }  //  shotgun of the conditional if {everything in braces}
}else {
    console.log('El uno no es numerico o no es uno') // escope de la condicional else  // shotgun conditional else
}        
                          

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
         // ------------- Exercise 6 --------------- //

//  problema: dado un numero  { number } , verficar si es par y de tipo numero.


var variable = '20'

var modulo = variable%2  // al hacer la operacion string % 2  ,  aun ejecuta la operacion (malas practicas)

if ((modulo === 1) && (typeof modulo  === 'number' )){
    console.log('es inpar y de tipo numero')
} else  {
    console.log('es par y de tipo numero')
}   
