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
    } else {
        return "";
    }
}
