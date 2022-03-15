function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter", "Validar nombre no validó que el nombre no sea vacío");

    console.assert(
        validarNombre("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );

    console.assert(validarNombre("123456") === "El campo nombre solo acepta letras", "Validar nombre no valido que el nombre tenga solo letras");

    console.assert(validarNombre("Prueba") === "", "Validar nombre fallo con un nombre valido");
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(validarCiudad("") === "Este campo debe tener al menos 1 caracter", "Validar ciudad no validó que el nombre no sea vacío");

    console.assert(validarCiudad("Bs. As.") === "", "Validar ciudad fallo con una ciudad valida");
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter", "Validar descripcion regalo no validó que el nombre no sea vacío");

    console.assert(
        validarDescripcionRegalo(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 100 caracteres",
        "Validar descripcion no validó que la descripcion sea menor a 100 caracteres"
    );

    console.assert(validarDescripcionRegalo("Esto es una prueba") === "", "Validar descripcion fallo con una descripcion valida");
}

probarValidarDescripcionRegalo();
