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
const main = async() => {
    try{
        console.log("***************************************")
        console.log("Bienvenido al conversor de temperaturas")
        console.log("***************************************")
        
        const tip = await pregunta("¿Vas a ingresar la temperatura en Celsius o Fahrenheit? (Selecciona el # que corresponda) \n1.Celsius.\n2.Fahrenheit.\n0. Salir.\n")
        let tip1 = Number(tip);
        const temp = await pregunta("Ingresa la temperatura a convertir: ")
        let temp1 = parseFloat(temp);

        celsTOfahr = temp1 * 9/5 + 32
        fahrTOcels = (temp1 - 32) * 5/9
        if(tip1 == 1)
            {
              console.log("La temperatura en grados celsius es: "+temp1+"\n"+ "Convertida a grados Fahrenheit es: "+celsTOfahr)
            }
            else if (tip1 == 2)
                {
                    console.log("La temperatura en grados Fahrenheit es: "+temp1+"\n"+ "Convertida a grados Celsius es: "+fahrTOcels)
                }
                else if (tip1 == 0)
                    {
                        console.log("Chao.")
                        return 0;
                    }
                    rl.close();
    }
    
    catch(error)
    {
        console.error("Error xd", error)
        rl.close();
    }

}
main();