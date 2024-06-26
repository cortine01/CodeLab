<!DOCTYPE html>
<html lang="es">

<head>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="normalize.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="import" href="https://fontawesome.com/icons/envelope?f=classic&s=fa-regular">
    <script src="https://kit.fontawesome.com/badd522a95.js" crossorigin="anonymous"></script>
    <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>CodeLab</title>
</head>

<body>
    <header>
        <h2 class="logo">
            <span class="nombreSitio">CodeLab</span>
            <span class="creadores">Bryan Cortine / Anny Jaimes</span>
        </h2>
        <nav class="navigation">
            <a href="#parallax" class="active">Inicio</a>
            <a href="#vision">Nosotros</a>
            <a href="#desarrollomove">Areas</a>
            <a href="#formulario">Unete</a>
        </nav>
    </header>

    <section class="parallax" id="parallax">
        <img src="src/3.png" id="fondo">
        <img src="src/Diseño sin título.gif" id="world">
        <h2 id="text">CodeLab</h2>
        <img src="src/der.png" id="city">
        <img src="src/izq.png" id="city2">
        <img src="src/6.png" id="man">
        <img src="src/7.png" id="woman">
    </section>




    <section class="sec" id="vision">

        <div class="contenedorj">
            <section class="card1">
                <div class="card_landing" style="--i:url(src/people.jpg)">
                    <h6>Misión</h6>
                </div>
                <div class="card_info">
                    <p class="title">Misión</p>
                    <p>CodeLab se dedica a proporcionar soluciones de software innovadoras y personalizadas que impulsen
                        la transformación digital de nuestros clientes. Nuestro compromiso es ofrecer productos y
                        servicios de alta calidad que mejoren la eficiencia, la productividad y la satisfacción del
                        usuario final, contribuyendo al éxito y crecimiento sostenible de las empresas.</p>
                </div>
            </section>
            <section class="card1">
                <div class="card_landing" style="--i:url(src/vision.jpg)">
                    <h6>Visión</h6>
                </div>
                <div class="card_info2" id="r">
                    <p class="title">Visión</p>
                    <p>Ser reconocidos como líderes en el desarrollo de software a nivel global, destacándonos por
                        nuestra creatividad, innovación y excelencia técnica. Aspiramos a transformar la industria
                        tecnológica mediante la implementación de soluciones vanguardistas que anticipen y superen
                        las expectativas de nuestros clientes, contribuyendo a un futuro más conectado y digital.
                    </p>
                </div>
            </section>
        </div>
    </section>

    <section class="sec" id="desarrollomove">
        <h2>ÁREAS DE DESARROLLO</h2>
        <div id="desarrollo">

        </div>

    </section>

    <section class="sec" id="formulario">

        <h2>TRABAJA CON NOSOTROS</h2>
        <div class="contenedorimgform">

            <section class="imagenform">
                <img src="src/collage.png" id="formulario">
            </section>

            <div class="testbox">

                <form method="post" id="form" autocomple="off">
                    <div class="textContainer">
                        <div class="inputGroup">
                            <label id="icon" for="nombre"><i class="fa-regular fa-user"></i></i></label>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo">
                        </div>
                        <p class="warning" id="warningNombre"></p>

                        <div class="inputGroup">
                            <label id="icon" for="profesion"><i class="fa-solid fa-briefcase"></i></label>
                            <input type="text" id="profesion" name="profesion" placeholder="Profesión">
                        </div>
                        <p class="warning" id="warningProfesion"></p>

                        <div class="inputGroup">
                            <label id="icon" for="telefono"><i class="fa-solid fa-phone"></i></label>
                            <input type="tel" id="telefono" name="telefono" placeholder="Teléfono">
                        </div>
                        <p class="warning" id="warningTelefono"></p>

                        <div class="inputGroup">
                            <label id="icon" for="email"><i class="fa-regular fa-envelope"></i></label>
                            <input type="email" id="email" name="email" placeholder="Email">
                        </div>
                        <p class="warning" id="warningEmail"></p>

                        <div class="inputGroup">
                            <label id="icon" for="rss"><i class="fa-brands fa-linkedin"></i></label>
                            <input type="text" id="rrss" name="rrss" placeholder="linkedin">
                        </div>
                        <p class="warning" id="warningRRSS"></p>
                    </div>

                    <div class="accounttype">
                        <div id="habilidadContenedor">
                            <legend>Habilidades</legend>
                            <p class="habilidadesDescripcion">Solo puede elegir un maximo de 3 Habilidades:</p>
                            <label class="check" for="checkboxLimited">HTML<input type="checkbox" name="HTML"
                                    class="checkboxLimited"></label>
                            <label class="check" for="checkboxLimited">CSS<input type="checkbox" name="CSS"
                                    class="checkboxLimited"></label>
                            <label class="check" for="checkboxLimited">git<input type="checkbox" name="git"
                                    class="checkboxLimited"></label>
                            <label class="check" for="checkboxLimited">JavaScript<input type="checkbox"
                                    name="JavaScript" class="checkboxLimited"></label>
                            <label class="check" for="checkboxLimited">AJAX<input type="checkbox" name="AJAX"
                                    class="checkboxLimited"></label>
                            <label class="check" for="checkboxLimited">React<input type="checkbox" name="React"
                                    class="checkboxLimited"></label>
                        </div>
                        <div id="warning-container">
                            <p class="warning" id="warningHabilidades"></p>

                        </div>
                        <div class="habilidades-container">
                            <input type="button" value="Añadir Habilidad" id="btnAddHabilidad" class="btnHabilidad">
                            <input type="button" value="Eliminar Habilidad" id="btnDeleteHabilidad"
                                class="btnHabilidad">
                        </div>
                    </div>
                    <div class="submit-container">
                        <!--<button type="submit" class="btnSubmit" name = "send">Enviar</button>-->
                        <input type="submit" class="btnSubmit" value="Enviar">
                    </div>
                </form>
            </div>

        </div>
        <div>
            <form id="form2">
                <select name="postulado" id="postulado">
                    <?php include 'postulados.php'; ?>
                </select>
                <input type="submit" class="btnSubmit" value="Monstrar">
            </form>
        </div>
        <div id="contenedorTarjeta">

        </div>

    </section>

    <footer class="pie_pagina">
        <p>&copy; 2024 <b>CodeLab</b> - Todos los Derechos</p>
    </footer>
    <script src="function.js"></script>
</body>

</html>