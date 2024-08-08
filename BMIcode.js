const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pregunta = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
    });
  });
};
const main = async () => {
    try{
        console.log('//////////////////////////////////')
        console.log('Bienvenido a la calculadora de BMI')
        console.log('//////////////////////////////////\n')

        const pes = await pregunta("Ingresa tu peso en kg: ")
        const altur = await pregunta("Ingresa tu altura en metros: ")

        let peso = Number(pes);
        let altura = parseFloat(altur);

        var BMI = peso/(Math.pow(altura, 2))
        BMI = BMI.toFixed(2);

        if(BMI < 18.5)
            {
                console.log("Tu BMI es: "+ BMI +" y está clasificado como bajo peso.")
            }
            else if(BMI >= 25 && BMI < 29.9)
                {
                    console.log("Tu BMI es: "+ BMI +" y está clasificado como sobrepeso.")
                }
                else if(BMI>30)
                    {
                        console.log("Tu BMI es: " + BMI + " y está clasificado como obesidad.")
                    }
                    else if(BMI >=18.5 && BMI <25)
                    {
                        console.log("Tu BMI es: "+ BMI +" y está clasificado como un peso normal.")
                    }
                    else
                    {
                        console.log("lol")
                    }
                    rl.close();


    }
    catch(error)
    {
        console.error('Error bro', error);
        rl.close();
    }
    

}
main();