const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const palabras = ["murciélago", "perro", "gato", "elefante", "hipopótamo"];
const palabraOriginal = palabras[Math.floor(Math.random() * palabras.length)];
let palabraOculta = palabraOriginal.replace(/./g, '_');
let intentosRestantes = 6;

function mostrarEstado() {
    console.log(`Palabra: ${palabraOculta}`);
    console.log(`Intentos restantes: ${intentosRestantes}`);
}

function actualizarPalabraOculta(letra) {
    let nuevaPalabraOculta = '';
    for (let i = 0; i < palabraOriginal.length; i++) {
        if (palabraOriginal[i] === letra) {
            nuevaPalabraOculta += letra;
        } else {
            nuevaPalabraOculta += palabraOculta[i];
        }
    }
    palabraOculta = nuevaPalabraOculta;
}

function adivinar() {
    if (intentosRestantes === 0) {
        console.log(`¡Perdiste! La palabra era: ${palabraOriginal}`);
        rl.close();
        return;
    }

    if (palabraOculta === palabraOriginal) {
        console.log(`¡Felicidades! Adivinaste la palabra: ${palabraOriginal}`);
        rl.close();
        return;
    }

    mostrarEstado();
    rl.question('Introduce una letra o la palabra completa: ', (entrada) => {
        if (entrada.length === 1) {
            if (palabraOriginal.includes(entrada)) {
                actualizarPalabraOculta(entrada);
            } else {
                intentosRestantes--;
            }
        } else if (entrada.length === palabraOriginal.length) {
            if (entrada === palabraOriginal) {
                palabraOculta = palabraOriginal;
            } else {
                intentosRestantes--;
            }
        } else {
            console.log('Entrada no válida.');
        }
        adivinar();
    });
}

console.log('¡Bienvenido al juego de adivinar palabras!');
adivinar();

