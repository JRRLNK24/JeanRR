
// let nombrecliente= prompt("¿Como te llamas?");
// console.log(nombrecliente)

// const apellidocliente= prompt("¿Cual es tu apellido?");
// console.log(apellidocliente);

// var sucursal = prompt ("¿En que sucursal sera tu pedido? ");
// if (sucursal !="Puebla" || "Merida") {
//     alert("Hola " + nombrecliente +  apellidocliente  + "\nNo tenemos sucursal cerca de ti, por favor ingresa Puebla o Merida.");
//     sucursal = prompt("Ingresa la sucursal Puebla o Merida");
// }

// let Cant_Sand_Frias = 2;
// let Cant_Sand_Queso = 1;
// let Cant_Sand_Rey = 0;
// let Cost_Frias=80;
// let Cost_Queso=30;
// let Cost_Rey=30;

// console.log(Cant_Sand_Frias * Cost_Frias);

// console.log(Cant_Sand_Rey=Cost_Rey);
// console.log(Cant_Sand_Rey+=Cost_Rey);

// console.log(Cant_Sand_Rey*Cost_Rey);

// console.log(Cant_Sand_Rey==Cant_Sand_Queso);

//Bucles
let edad= prompt("Ingrese su edad")
let number= (edad >= 18 ? console.log("VALIDO") : console.log("NO VALIDO"));

// Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”. 

const promociones= [
{id:101, promo:"2x1", aplicable: "Sandwich de queso", sucursal: "Mérida"},
{id:102, promo:"3x2", aplicable: "Sandwich de helado", sucursal: "Puebla"},
{id:103, promo:"10% descuento", aplicable: "Compra de +$500", sucursal: "Mérida y Puebla"},
{id:104, promo:"5% descuento", aplicable: "Cliente frecuente", sucursal: "Puebla"},
];
for(let i = 0; i < promociones.lenght; i++){
console.log("Se aplicara la promo:" , promociones[i]);
}

// Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.

switch(edad){
    case '18':
        console.log("Felicidades, tu descuento sera de un 5%");
       break;
    case '20':
        console.log("Felicidades, tu descuento sera de un 10%");
       break;
    case '22':
       console.log("Felicidades, tu descuento sera de un 15%");
       break;
    case '24':
       console.log("Felicidades, tu descuento sera de un 20%");
       break;
    default:
       console. log("Tu edad no aplica para una promoción");
       break; 
}