<?php
include 'conexion.php';

    $insertar = "SELECT id, nombre FROM registrados";
    $resultado = mysqli_query($conex, $insertar);

    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            echo "<option class='postulado-option' value='" . $row["id"] . "'>" . $row["id"] . " " . $row["nombre"] . "</option>";
        }
    } else {
        echo "<option>No hay postulados</option>";
    }
?>