<!DOCTYPE html>
<html>
  <head>
    <title>Página principal</title>
  </head>
  <body>
    <h1>Bienvenido, <span id="nombre"></span></h1>
    <script>
      var nombre = localStorage.getItem('nombre');
      document.getElementById('nombre').innerText = nombre;
    </script>
  </body>
</html>