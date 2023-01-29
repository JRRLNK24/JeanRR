
//Variables
// //Globales

// var saludo="Hola mundo";
// if (saludo){
//     var saludo="Hola china"
//     console.log(saludo);
// }

// //Limitadas

// let nombre = "Ricardo";
// if (nombre){
//     let nombre ="Pedro";
//     console.log (nombre);

// }
// console.log(nombre);

// //Inmutables

// const apellido ="Perez"
// console.log(apellido);

//String

// let nombre= "Ricardo"

//Number

// let edad=35; 
// let decimal=21.45;

//Boolean

// let verdadero = true;
// let falso = false;

//Undefined

// let indefinido = undefined

//Null

// let nulo =null;

//concatenar

// console.log("Hola mundo, mi nombre es "+ nombre 
// + " y tengo "+ edad + " años de edad");

//Interpolación de texto

// console.log (`Hola mundo, mi nombre es  ${nombre} y tengo ${edad} años de edad `);

//Operadores

// let x=1
// let y=2
// let z=3
// let a=4
// let b=4

//Operadores aritmeticos

// console.log(x-z);
// console.log(x+z);

// a++;
// console.log(a);

//Operadores de asignación

// console.log(x=z); // x va a ser igual a z
// console.log(x += z); // x = x + z
// console.log(x *= y); // x = x * y

//Operadores de comparaicón

// console.log(x==z); //Devuelve true si los perandos son iguales
// console.log(x != z); //Devuelve true si los operandos no son iguales
// console.log(x >= y); //Devuelve true si el operando izquierdo es mayor o igual que el operando derecho
// console.log(a === b); //Devuelve true si los operandos son iguales al mismo tiempo

//Operadores logicos
// // && (y) - || (o) - ! (distinto)

// let enviar = true;
// let cancelar = false;

// console.log(cancelar || enviar);

//Operador condicional ternario
//condición ? true : false

// let edad = 15;
// let permiso = edad >= 18 ? "Bienvenido" : "No puede pasar";

// console.log(permiso)

// Funciones de orden superior

let Menu=[
    {Platillo:"Sandwich de queso", Stock: 20, Precio:30.50},
    {Platillo:"Sandwich de carnes frias", Stock: 15, Precio:50.80},
    {Platillo:"El rey sandwich", Stock: 10, Precio:90.50}
]

Menu.forEach(nombrePlat => {
  console.log (nombrePlat.Platillo)
})

Menu.forEach(cantStock => {
    console.log (cantStock.Stock)
  })

let precioPlat = Menu.filter(elemento => elemento.Precio > 50)
console.log(precioPlat)

Menu.sort((a, b) => {
    if(a.Platillo == b.Platillo){
        return 0;
    }
    if(a.Platillo < b.Platillo){
        return -1;
    }
    return 1;
});

let PlatCaro = 0;

Menu.forEach(elemento =>{
    console.log(elemento.Precio);
    PlatCaro = Math.round(Math.max(elemento.Precio, PlatCaro));
    
});

console.log("El platillo más caro es", PlatCaro);

