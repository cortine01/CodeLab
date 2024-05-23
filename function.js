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

const form = document.getElementById("form");

//Validar formulario
form.addEventListener("submit", e=>{
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Validar Nombre
    if(nombre.value.length < 6){
        warningNombre.innerHTML = "el Nombre es muy corto";
    } else {
        warningNombre.innerHTML = "";
    }

    //Validar Profesión
    if(profesion.value.length < 6){
        warningProfesion.innerHTML = "La profesión es muy corto";
    } else {
        warningProfesion.innerHTML = "";
    }

    //Validar Telefono
    if(telefono.value.length < 10){
        warningTelefono.innerHTML = "el telefono es muy corto";
    } else if(telefono.value.length > 10) {
        warningTelefono.innerHTML = "el telefono es muy largo";
    } else {
        warningTelefono.innerHTML = "";
    }

    //Validar Email
    if(!regexEmail.test(email.value)){
        warningEmail.innerHTML = "El email no es valido";
    } else {
        warningEmail.innerHTML = "";
    }

    //Validar RSS
    if(rrss.value.length < 6){
        warningRRSS.innerHTML = "El rss es muy corto";
    } else {
        warningRRSS.innerHTML = "";
    }
});

//Añadir Habilidad
const btnAddHabilidad = document.getElementById("btnAddHabilidad");
const habilidadContenedor = document.getElementById("habilidadContenedor");

const addHabilidadTextBt = () => {
    const habilidadText = document.createElement('Input');
    habilidadText.type = 'text';
    habilidadText.placeholder = 'Habilidad';

    habilidadContenedor.appendChild(habilidadText);

    const habilidadBtn = document.createElement('button');
    habilidadBtn.textContent = 'Agregar';

    const handleButtonClick = (event) => {
        
        const habilidadLabel = document.createElement('label');

        const habilidad = document.createElement('input');

        habilidad.type = 'checkbox';
        habilidad.className = 'checkboxLimited';
        habilidad.name = habilidadText.value;

        
        habilidadLabel.textContent = habilidadText.value;
        habilidadLabel.appendChild(habilidad);
        
        habilidadContenedor.appendChild(habilidadLabel);
        

        habilidadContenedor.removeChild(habilidadText);
        habilidadContenedor.removeChild(event.target);
    }

    habilidadBtn.addEventListener('click', handleButtonClick);

    habilidadContenedor.appendChild(habilidadBtn); 
}

btnAddHabilidad.addEventListener('click', addHabilidadTextBt);

//eliminar Ultima Habilidad
const btnDeleteHabilidad = document.getElementById("btnDeleteHabilidad");

const deleteLastHabilidad = () => {
    for (let i = habilidadContenedor.children.length-1; i >= 0; i--) {
        if (habilidadContenedor.children[i].tagName.toLocaleLowerCase() === 'label') {
            habilidadContenedor.removeChild(habilidadContenedor.children[i]);
            return;
        }
        
    }
}

btnDeleteHabilidad.addEventListener('click', deleteLastHabilidad);

//Validar limite Tres checkboxes
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('.checkboxLimited');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCheckboxes = document.querySelectorAll('.checkboxLimited:checked');
            if (checkedCheckboxes.length > 3) {
                this.checked = false;
                warningHabilidades.innerHTML = "Como Maximo 3 Habilidades";
            } else {
                warningHabilidades.innerHTML = "";
            }
        });
    });
});

