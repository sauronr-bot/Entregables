const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    let palabras = frase.split(' ');
    let acronimo = palabras.map(palabra => palabra[0].toUpperCase()).join('');
    
    console.log(`El acrónimo es: ${acronimo}`);
    
    rl.close();
});
