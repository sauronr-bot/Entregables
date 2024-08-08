const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el total de la factura: $', (totalFactura) => {
    rl.question('Ingresa el porcentaje de propina que deseas dejar: ', (porcentajePropina) => {
        totalFactura = parseFloat(totalFactura);
        porcentajePropina = parseFloat(porcentajePropina);
        
        let propina = totalFactura * porcentajePropina / 100;
        
        console.log(`La propina es: $${propina.toFixed(2)}`);
        
        rl.close();
    });
});
