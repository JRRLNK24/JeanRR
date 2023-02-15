let Productos=[
    {Platillo:"Sandwich de queso", Stock: 20, Precio:30.50},
    {Platillo:"Sandwich de carnes frias", Stock: 15, Precio:50.80},
    {Platillo:"El rey sandwich", Stock: 10, Precio:90.50}
];
  const mostrarBtn = document.getElementById('mostrarProductos');
  const ocultarBtn = document.getElementById('ocultarProductos');
  const listaProductos = document.getElementById('pedido');
  
  function mostrarProductos() {
    let listaHTML = '';
    for (let i = 0; i < Productos.length; i++) {
      listaHTML += `<li><span style="color:red">${Productos[i].Platillo}</span> - Stock: <span style="color:red">${Productos[i].Stock}</span>, Precio: <span style="color:red">${Productos[i].Precio}</span></li>`;
    }
    listaProductos.innerHTML = listaHTML;
    listaProductos.style.display = 'block';
  }
  
  function ocultarProductos() {
    listaProductos.style.display = 'none';
  }
  
  mostrarBtn.addEventListener('click', mostrarProductos);
  
  ocultarBtn.addEventListener('click', ocultarProductos);




