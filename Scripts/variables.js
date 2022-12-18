
let nombrecliente= prompt("¿Como te llamas?");
console.log(nombrecliente)

const apellidocliente= prompt("¿Cual es tu apellido?");
console.log(apellidocliente);

var sucursal = prompt ("¿En que sucursal sera tu pedido? ");
if (sucursal !="Puebla" || "Merida") {
    alert("Hola " + nombrecliente +  apellidocliente  + "\nNo tenemos sucursal cerca de ti, por favor ingresa Puebla o Merida.");
    sucursal = prompt("Ingresa la sucursal Puebla o Merida");
}

let Cant_Sand_Frias = 2;
let Cant_Sand_Queso = 1;
let Cant_Sand_Rey = 0;
let Cost_Frias=80;
let Cost_Queso=30;
let Cost_Rey=30;

console.log(Cant_Sand_Frias * Cost_Frias);

console.log(Cant_Sand_Rey=Cost_Rey);
console.log(Cant_Sand_Rey+=Cost_Rey);

console.log(Cant_Sand_Rey*Cost_Rey);

console.log(Cant_Sand_Rey==Cant_Sand_Queso);
