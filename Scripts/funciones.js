// Función con function sin parametros

// function saludar(){
// console.log("Hola usuario! Como estas?");
// }

// saludar();

// function saludarConParametros(nombre, edad, cursoPreferido){
//     alert("Hola" + nombre + "como estas?");
//     console.log("Tienes" + edad + "y tu curso preferido es" + cursoPreferido);

// }

// saludarConParametros("Jean", 20, "Programación Web")
// saludarConParametros("Diego")
// saludarConParametros("Alan")
// saludarConParametros("Andrea")

// const auto = {
//   marca: "Mercedez Benz",
//   modelo: "2023 2.0 Turbo",
//   VelocidadMaxima: 280,
//   arrancarAuto(){
//     console.log("El auto arranco perfecto");
//   } 
// }

// console.log("Este es el auto", auto);

// console.log(auto.modelo)

function Suma(a,b,c){
  const resultado= a + b + c;
  console.log(resultado);
}

Suma(5,9,4);

function Comparar (a,b){
    if (a<b){
      console.log("Buen analisis");
    } else if (a == b){
      console.log("Interesante interpretación")
    }
}
Comparar (10,12);

const Suma2 = (a,b,c) => console.log(`Los numeros son ${a} y ${b} al igual que ${c} `);
Suma2(4,16,7);

const Comparar2 = (a,b) => {
  console.log("Vamos a comparar");
  return a,b ;
}
Comparar2(10,12) <= true ? console.log("Buen analisis") : console.log("Interesante interpretación")

const Cliente = {
  Nombre: "Jean",
  NuevoCliente: "No",
  Sucursal: "Puebla",
  TotalPedido: 1580,
  TipoEntrega: "Domicilio",

}

const {Nombre, NuevoCliente, Sucursal} = Cliente;
console.log(Nombre, NuevoCliente, Sucursal);
