function probarValidarNombre() {
    console.assert(validarNombre("") === `El campo "Nombre" debe tener al menos 1 caracter`, "Validar nombre no validó que el nombre no este vacío");

    console.assert(
        validarNombre("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === `El campo "Nombre" debe tener menos de 50 caracteres`,
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );

    console.assert(validarNombre("123456") === `El campo "Nombre" solo acepta letras`, "Validar nombre no valido que el nombre tenga solo letras");

    console.assert(validarNombre("Prueba") === "", "Validar nombre fallo con un nombre valido");
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(validarCiudad("") === "Se debe seleccionar una ciudad de la lista", "Validar ciudad no validó que la ciudad no este vacía");

    console.assert(validarCiudad("Bs. As.") === "", "Validar ciudad fallo con una ciudad valida");
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === `El campo "Regalo" debe tener al menos 1 caracter`, "Validar descripcion regalo no validó que la descripcion no este vacía");

    console.assert(
        validarDescripcionRegalo(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === `El campo "Regalo" debe tener menos de 100 caracteres`,
        "Validar descripcion no validó que la descripcion sea menor a 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo("Esto. Es! una prueba") === `El campo "Regalo" solo acepta letras o numeros`,
        "Validar descripcion no valido que la descripcion tenga solo letras o numeros"
    );

    console.assert(validarDescripcionRegalo("Esto es una prueba") === "", "Validar descripcion fallo con una descripcion valida");
}

probarValidarDescripcionRegalo();
