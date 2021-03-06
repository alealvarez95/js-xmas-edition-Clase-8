const $formulario = document.formulario;

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return `El campo "Nombre" debe tener al menos 1 caracter`;
    } else if (nombre.length >= 50) {
        return `El campo "Nombre" debe tener menos de 50 caracteres`;
    } else if (!/^[a-z]+$/i.test(nombre)) {
        return `El campo "Nombre" solo acepta letras`;
    } else {
        return "";
    }
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Se debe seleccionar una ciudad de la lista";
    } else {
        return "";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return `El campo "Regalo" debe tener al menos 1 caracter`;
    } else if (descripcionRegalo.length >= 100) {
        return `El campo "Regalo" debe tener menos de 100 caracteres`;
    } else if (!/^[A-z0-9\s]+$/.test(descripcionRegalo)) {
        return `El campo "Regalo" solo acepta letras o numeros`;
    } else {
        return "";
    }
}

function validarFormulario(event) {
    const nombre = $formulario.nombre.value;
    const ciudad = $formulario.ciudad.value;
    const descripcionRegalo = $formulario["descripcion-regalo"].value;

    const validacionNombre = validarNombre(nombre);
    const validacionCiudad = validarCiudad(ciudad);
    const validacionDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: validacionNombre,
        ciudad: validacionCiudad,
        "descripcion-regalo": validacionDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0;

    const TIEMPO_REDIRECCION_EN_MS = 5000;

    if (esExito) {
        document.querySelector("#exito").className = "";
        $formulario.className = "oculto";
        setTimeout(function () {
            window.location.href = "wishlist.html";
        }, TIEMPO_REDIRECCION_EN_MS);
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    let cantidadErrores = 0;
    const $errores = document.querySelector("#errores");

    while ($errores.firstChild) {
        $errores.removeChild($errores.lastChild);
    }

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            $formulario[key].className = "error";
            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);
            cantidadErrores++;
        } else {
            $formulario[key].className = "";
        }
    });

    return cantidadErrores;
}

$formulario.onsubmit = validarFormulario;
