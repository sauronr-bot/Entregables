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
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const main = async () =>
    {
        
        try{
            
            let a = getRandomInt(11);
            console.log("**********************************")
            console.log("Bienvenido al juego de adivinanzas")
            console.log("**********************************")
            
            let i = 1;
             do
             {
              
              let a = getRandomInt(11);
            let op = await pregunta("Escribe un número del 1 al 10, ¡y veremos si tienes suerte!\n"+"Tu número: ")
            
            let opc = Number(op);

            if(opc == a)
                {
                    console.log("¡Correcto! El # que ingresaste fue el mismo que se generó.\n"+"Tu número: "+opc+"\n"+"El que se generó: "+a)
                    rl.close();
                    return 0;
                }
                else{
                    console.log("¡Te equivocaste! El # que ingresaste fue distinto al que se generó.\n"+"Tu número: "+opc+"\n"+"El que se generó: "+a+"\nEste es tu intento #"+i+".")
                    i++;
                }
                
              }
                while (i<4)
                
                  console.log("Lo siento, se acabaron tus intentos.");
                  rl.close();
            
            
        
}
        catch(error)
        {
            console.error('Error', error);
            rl.close();

        }
    }
    main();