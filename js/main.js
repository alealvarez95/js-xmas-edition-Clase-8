const $formulario = document.formulario;

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    } else if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    } else if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras";
    } else {
        return "";
    }
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    } else {
        return "";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    } else if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres";
    } else if (!/^[A-z0-9\s]+$/.test(descripcionRegalo)) {
        return "El campo descripcion solo acepta letras o numeros";
    } else {
        return "";
    }
}

function validarFormulario(event) {
    const nombre = $formulario.nombre.value;
    
    console.log(validarNombre(nombre));

    event.preventDefault();
}

$formulario.onsubmit = validarFormulario;
