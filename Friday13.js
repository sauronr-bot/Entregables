const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esViernes13(mes, año) {
    const fecha = new Date(año, mes - 1, 13);
    return fecha.getDay() === 5;
}

rl.question('Introduce el mes (1-12): ', (mes) => {
    rl.question('Introduce el año: ', (año) => {
        mes = parseInt(mes);
        año = parseInt(año);

        if (esViernes13(mes, año)) {
            console.log(`El ${mes}/13/${año} es un viernes 13.`);
        } else {
            console.log(`El ${mes}/13/${año} no es un viernes 13.`);
        }

        rl.close();
    });
});
