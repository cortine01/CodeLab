<?php
    include("conexion.php");

    $postulado = $_GET['postulado'];

    $insertar = "SELECT * FROM registrados where id = $postulado";

    $resultado = mysqli_query($conex, $insertar);

    $data = array();

    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
           /*$id = $row["id"];
           $nombre = $row["nombre"];
           $profesion = $row["profesion"];
           $telefono = $row["telefono"];
           $email = $row["email"];
           $linkedin = $row["linkedin"];
           $habilidades = $row["habilidades"];*/

           $data[] = $row;
        }
    } else {
        $data[] = ["error" => "No se encontraron datos"];
    }

    echo json_encode($data);

?>