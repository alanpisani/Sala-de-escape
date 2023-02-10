<?php

$inc = include('conexion/con_db.php');

$consulta = "SELECT * FROM datos ORDER BY tiempo LIMIT 10"; // Selecciona TODO (*) de la tabla que se encuentra en la base de datos llamada "datos". ORDER BY: QUE ORDENE LOS DATOS POR LA CELDA 'tiempo'. Que se base en eso para ordenarse
//$consultaTiempo = "SELECT * FROM tiempo";
$resultado = mysqli_query($conex, $consulta);
$i = 1;

while ($row = $resultado->fetch_array()) { //Vuelve en un array a todos los datos que se encuentran en $resultado
        $nombre = $row['nombre'];
        $tiempo = $row['tiempo'];

        ?>
        <tr id="tabla">
                <td>
                        <?php echo $i; ?>               <!--ESTRUCTURA TABLE QUE APARECERÁ EN LA PAGINA DEL RANKING. SON LAS POSICIONES-->
                </td>
                <td>
                        <?php echo $nombre; ?>
                </td>                                                   
                <td>
                        <?php echo $tiempo; ?>
                </td>
        </tr>

        <?php
        $i++;
}

?>