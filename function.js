let text = document.getElementById('text');
let man = document.getElementById('man');
let woman = document.getElementById('woman');
//let city = document.getElementById('city');
//let city2 = document.getElementById('city2');
let world = document.getElementById('world');
let fondo = document.getElementById('fondo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value > 600) {
        return;
    }

   text.style.marginTop = value * 2.5 + 'px';
   man.style.left = value * -1  + 'px';
   man.style.top = value * -1 + 'px';
   //city2.style.left = value * -0.001 + 'px';
   //city.style.left = value * 0.001 + 'px';
   woman.style.top = value * -1 + 'px';
   woman.style.left = value * 1 + 'px';
   world.style.top = value * 1 + 'px';
   fondo.style.top = value * 1 + 'px';
});


const nombre = document.getElementById("nombre");
const profesion = document.getElementById("profesion");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const rrss = document.getElementById("rrss");

const warningNombre = document.getElementById("warningNombre");
const warningProfesion = document.getElementById("warningProfesion");
const warningTelefono = document.getElementById("warningTelefono");
const warningEmail = document.getElementById("warningEmail");
const warningRRSS = document.getElementById("warningRRSS");
const warningHabilidades = document.getElementById("warningHabilidades");

let tarjeta = false;
let boolNombre = false;
let boolProfesion = false;
let boolTelefono = false;
let boolEmail = false;
let boolRRSS = false;
let boolHabilidades = true;

const btnAddHabilidad = document.getElementById("btnAddHabilidad");
const habilidadContenedor = document.getElementById("habilidadContenedor");
const warningContainer = document.getElementById("warning-container");
const btnDeleteHabilidad = document.getElementById("btnDeleteHabilidad");
const contenedorTarjeta = document.getElementById("contenedorTarjeta");

const checkboxes = document.querySelectorAll('.checkboxLimited');

const form = document.getElementById("form");

//Validar formulario
form.addEventListener("submit", e => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let num = /^\d+$/;
    // Validar Nombre
    if (nombre.value.length < 6) {
        warningNombre.innerHTML = "El Nombre es muy corto";
        boolNombre = false;
    } else if (num.test(nombre.value)) {
        warningNombre.innerHTML = "El Nombre solo puede contener numeros";
        boolNombre = false;
    } else {
        warningNombre.innerHTML = "";
        boolNombre = true;
    }

    // Validar Profesión
    if (profesion.value.length < 6) {
        warningProfesion.innerHTML = "La profesión es muy corta";
        boolProfesion = false;
    } else if (num.test(profesion.value)) {
        warningProfesion.innerHTML = "La Profesión solo puede contener numeros";
        boolProfesion = false; 
    } else {
        warningProfesion.innerHTML = "";
        boolProfesion = true;
    }


    //Validar Telefono
    if (telefono.value.length < 10) {
        warningTelefono.innerHTML = "El teléfono es muy corto";
        boolTelefono = false;
    } else if (telefono.value.length > 10) {
        warningTelefono.innerHTML = "El teléfono es muy largo";
        boolTelefono = false;
    } else if (!/^\d{10}$/.test(telefono.value)) {
        warningTelefono.innerHTML = "El teléfono debe contener solo números";
        boolTelefono = false;
    } else {
        warningTelefono.innerHTML = "";
        boolTelefono = true;
    }
    

    //Validar Email
    if (!regexEmail.test(email.value)) {
        warningEmail.innerHTML = "El email no es valido";
        boolEmail = false;
    } else {
        warningEmail.innerHTML = "";
        boolEmail = true;
    }

    //Validar RSS
    if (rrss.value.length < 6) {
        warningRRSS.innerHTML = "El rss es muy corto";
        boolRRSS = false;
    } else {
        warningRRSS.innerHTML = "";
        boolRRSS = true;
    }

    if (boolNombre == true && boolProfesion == true && boolTelefono == true && boolEmail == true && boolRRSS == true && boolHabilidades == true) {
            
            
            const tarjetaHabilidades = document.createElement('p');
            tarjetaHabilidades.textContent = nombre.value;

            const card = document.createElement('div');
            card.className = 'card';
            contenedorTarjeta.appendChild(card);

                const card_image = document.createElement('div');
                card_image.className = 'card_image';
                card.appendChild(card_image);

                    const picture = document.createElement('img');
                    picture.className = 'picture';
                    picture.src = 'src/usuario.jpg';
                    card_image.appendChild(picture);

                const card_body = document.createElement('div');
                card_body.className = 'card_body';
                card.appendChild(card_body); 

                    const tarjetaNombre = document.createElement('h2');
                    tarjetaNombre.textContent = nombre.value;
                    card_body.appendChild(tarjetaNombre);
                    
                    const tarjetaProfesion = document.createElement('p');
                    tarjetaProfesion.textContent = profesion.value;
                    card_body.appendChild(tarjetaProfesion);

                    const tarjetaTelefono = document.createElement('p');
                    tarjetaTelefono.textContent = telefono.value;
                    card_body.appendChild(tarjetaTelefono);

                    const tarjetaEmail = document.createElement('p');
                    tarjetaEmail.textContent = email.value;
                    card_body.appendChild(tarjetaEmail);

                    const tarjetaRRSS = document.createElement('p');
                    tarjetaRRSS.textContent = rrss.value;
                    card_body.appendChild(tarjetaRRSS);

                    const card_redes = document.createElement('div');
                    card_redes.className = 'card_redes';
                    card.appendChild(card_redes);
                
                    const seleccionados = document.querySelectorAll('.checkboxLimited:checked');
                    seleccionados.forEach(function(seleccionado) {
                        var contenedor = document.createElement('div');
                        var listItem = document.createElement('p');
                        listItem.textContent = seleccionado.name;
                        contenedor.appendChild(listItem);
                        card_redes.appendChild(contenedor);
                    });
        tarjeta = true;
    }
});

//Añadir Habilidad

const addHabilidadTextBt = () => {
    const habilidadText = document.createElement('Input');
    habilidadText.type = 'text';
    habilidadText.placeholder = 'Habilidad';

    warningContainer.insertBefore(habilidadText, warningContainer.lastChild);

    const habilidadBtn = document.createElement('button');
    habilidadBtn.className = 'btnSubmit';
    habilidadBtn.textContent = 'Agregar';

    const handleButtonClick = (event) => {

        const habilidadLabel = document.createElement('label');

        const habilidad = document.createElement('input');

        habilidad.type = 'checkbox';
        habilidad.className = 'checkboxLimited';
        habilidad.name = habilidadText.value;


        habilidadLabel.textContent = habilidadText.value;
        habilidadLabel.className = 'check';
        habilidadLabel.appendChild(habilidad);

        habilidadContenedor.appendChild(habilidadLabel);


        warningContainer.removeChild(habilidadText);
        warningContainer.removeChild(event.target);
    }

    habilidadBtn.addEventListener('click', handleButtonClick);
    warningContainer.insertBefore(habilidadBtn, warningContainer.lastChild);

}

btnAddHabilidad.addEventListener('click', addHabilidadTextBt);

//eliminar Ultima Habilidad

const deleteLastHabilidad = () => {
    for (let i = habilidadContenedor.children.length - 1; i >= 0; i--) {
        if (habilidadContenedor.children[i].tagName.toLocaleLowerCase() === 'label') {
            habilidadContenedor.removeChild(habilidadContenedor.children[i]);
            return;
        }

    }
}

btnDeleteHabilidad.addEventListener('click', deleteLastHabilidad);

//Validar limite Tres checkboxes
document.addEventListener('DOMContentLoaded', (event) => {
    ajax();
    scrollNav();

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const checkedCheckboxes = document.querySelectorAll('.checkboxLimited:checked');
            if (checkedCheckboxes.length > 3) {
                this.checked = false;
                warningHabilidades.innerHTML = "Como Maximo 3 Habilidades";
            } else {
                warningHabilidades.innerHTML = "";
            }

            if (checkedCheckboxes.length <= 3) {
                boolHabilidades = true;
            } else {
                boolHabilidades = false;
            }
        });
    });

});

function scrollNav() {
    const enlaces = document.querySelectorAll(".navigation a");

    enlaces.forEach( enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
}

function ajax() {
    const http = new XMLHttpRequest();
    const url = 'desarrollo.txt';

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const desarrollo = document.getElementById("desarrollo");
            const content = this.responseText;
            const lines = content.split('\n');

            let contenedor = null;
            let contenido = null;
            
            lines.forEach(line => {
                if (line.trim().length === 0) {
                    // Quita lineas vacias
                    return;
                }
                if (line.includes('src')) {
                    // Es un imagen

                    if (contenedor) {
                        if (contenido) {
                            contenedor.appendChild(contenido);
                        }
                        desarrollo.appendChild(contenedor);
                    }
                    
                    contenedor = document.createElement('div');
                    contenedor.className = "cardDesarrollo";
                    
                    contenido = document.createElement('div');
                    contenido.className = "contenido";
                    
                    let currentImg = document.createElement('img');
                    currentImg.src = line.trim();
                    contenedor.appendChild(currentImg);
                } else if(line.includes(':')) {
                    // Es un titulo
                    let currentTitle = document.createElement('h2');
                    currentTitle.textContent = line.trim();
                    contenido.appendChild(currentTitle);
                } else {
                    // Es un parrafo
                    const paragraph = document.createElement('p');
                    paragraph.textContent = line.trim();
                    contenido.appendChild(paragraph);
                }
            });

            if (contenido) {
                contenedor.appendChild(contenido);
            }

            if (contenedor) {
                desarrollo.appendChild(contenedor);
            }
        }
    }

    http.open("GET", url, true);
    http.send();
}
