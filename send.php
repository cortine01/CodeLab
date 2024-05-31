<?php
include("conexion.php");

    if (
        strlen($_POST['nombre']) >= 1 &&  
        strlen($_POST['profesion']) >= 1 &&   
        strlen($_POST['telefono']) >= 1 &&    
        strlen($_POST['email']) >= 1 &&   
        strlen($_POST['rrss'])>= 1  

    ) {
        $nombre = trim($_POST['nombre']);       
        $profesion = trim($_POST['profesion']);
        $telefono = $_POST['telefono'];
        $email = trim($_POST['email']);
        $rrss = trim($_POST['rrss']);
        $habilidades = $_POST['habilidades'];

        $insertar = "INSERT INTO registrados(nombre, profesion, telefono, email, linkedin, habilidades) VALUES ('$nombre', '$profesion', '$telefono', '$email', '$rrss', '$habilidades')";

        $resultado = mysqli_query($conex, $insertar);

        if ($resultado) {
            echo "Todo pana";
        } else {
            ?>
                <h3>Error</h3>

                <script>
                    alert("Error");
                </script>
            <?php
        }
    } else {
        ?>
                <h3>llena los campos</h3>

                <script>
                    alert("llena los campos");
                </script>
            <?php
    }

?>