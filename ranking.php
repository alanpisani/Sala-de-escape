<html lang="es">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link href="css/bootstrap/bootstrap.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="css/estilosCursos.css">
  <link rel="stylesheet" type="text/css" href="css/rankingalan.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <link href="css/estilosCursos.css" rel="stylesheet" type="text/css">
  <title>Ranking</title>
</head>

<body>
  <header>
    <img class="logo" src="imagenes/nav/logo.png">
    <img class="qr" src="imagenes/nav/qr.png">
    <p>CFP 421 Rafael Cigliutti</p>
    <div class="menu-bar">
      <a href="#" class="menu-btn"><span class="fas fa-bars"></span>MENÚ</a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="ranking.php">ranking</a>
        </li>
        <li>
          <a href="sala.php">Escape Room</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>
      RANKING DE JUGADORES
    </h1>
    <table id="tabla-2" class="table table-dark">
      <tr class="celdas-superiores">
        <th>Puesto</th>
        <th>Nombre</th>
        <th>Tiempo</th>
      </tr>
      <?php
        include("conexion/mostrar.php"); //INCLUDE. DENTRO CONTIENE LA ESTRUCTURA DE LA TABLA DE POSICIONES
        ?>
    </table>
    <div class="btn-inicio">
      <a id="inicio" class="btn btn-primary" href="index.html" role="button">Volver al inicio</a>
    </div>
  </main>

  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
    crossorigin="anonymous"></script>

  <!-- Option 2: Separate Popper and Bootstrap JS -->
  <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    -->
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="js/menu-desplegable.js"></script>
</body>

</html>