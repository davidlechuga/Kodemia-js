


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
    
    