const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generarContrasena = (longitud, mayusculas, numeros, simbolos) => {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMayus = letras.toUpperCase();
    const digitos = '0123456789';
    const simbolosEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteres = letras;

    if (mayusculas) caracteres += letrasMayus;
    if (numeros) caracteres += digitos;
    if (simbolos) caracteres += simbolosEspeciales;

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indiceAleatorio];
    }

    return contrasena;
};

rl.question('Introduce la longitud de la contraseña (8-16): ', (longitud) => {
    longitud = parseInt(longitud);

    if (longitud < 8 || longitud > 16) {
        console.log('La longitud debe estar entre 8 y 16 caracteres.');
        rl.close();
        return;
    }

    rl.question('¿Incluir letras mayúsculas? (s/n): ', (mayusculas) => {
        rl.question('¿Incluir números? (s/n): ', (numeros) => {
            rl.question('¿Incluir símbolos? (s/n): ', (simbolos) => {
                const incluirMayusculas = mayusculas.toLowerCase() === 's';
                const incluirNumeros = numeros.toLowerCase() === 's';
                const incluirSimbolos = simbolos.toLowerCase() === 's';

                const contrasena = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
                console.log(`Tu contraseña generada es: ${contrasena}`);

                rl.close();
            });
        });
    });
});
