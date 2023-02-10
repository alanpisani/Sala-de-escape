<?php

include("conexion/con_db.php"); //INCLUDE. DENTRO CONTIENE LA FUNCIÓN QUE CONECTA EL SERVIDOR CON LA BASE DE DATOS

if(isset($_POST['register'])){  //SI (if) SE CLICKEA EN EL BOTÓN($_POST) LLAMADO 'register':...

        $name = trim($_POST['name']);  //Una variable de php($) que contiene lo que haya sido posteado en 'name'. Trim es una funcion que elimina los caracteres vacios del principio y del final de lo posteado
        $tiempo = $_POST["caja"];
        $consulta = "INSERT INTO datos(nombre,tiempo) VALUES ('$name','$tiempo')"; 
        
        //Se realiza una consulta. INSERT (INSERTAR) INTO (DENTRO DE) datos(nombre)[datos es el nombre de la tabla que se encuentra dentro de la base de datos;
        //nombre es una celda dentro de la tabla datos] VALUES (los valores) ('$name')[lo que contenga la variable $name].
        $resultado = mysqli_query($conex,$consulta); //Se ejecuta la consulta. $conex es una variable que contiene la conexion con la base de datos. La variable se encuentra dentro del primer include(en el archivo con_db.php).
        
        //$consulta2 = "INSERT INTO datos(tiempo) VALUES ('$tiempo')";
        //$segundos = $_POST["caja2"];
        //$consultaRanking = "INSERT INTO tiempo(segundos) VALUES ('$segundos')";
        //$resultadoSec = mysqli_query($conex,$consultaRanking);
        //$resultado2 = mysqli_query($conex,$consulta2);
        //$consultaCombinacion = "UPDATE datos SET tiempo = '$tiempo' WHERE tiempo = ''"; // Actualiza, en datos, la celda 'tiempo siempre y cuando contenga el '', el cual indica que solo actualice los huecos; caracteres vacios.
        //$resultadoCombinacion = mysqli_query($conex, $consultaCombinacion); //SE EJECUTA LA CONSULTA DE LA LINEA 13
        
    
            ?>
                <h3 class = "ok">Tiempo guardado! Haga click <a href="ranking.php">ACÁ</a> para ver el ranking!</h3>
            <?php


} 

?>