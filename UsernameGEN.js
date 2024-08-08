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

const main = async() =>
    {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
try{
    console.log("*********************************************")
    console.log("Bienvenido al generador de nombres de usuario")
    console.log("*********************************************\n")
    let nombre = await pregunta("Ingresa tu nombre: ");
    let apellido = await pregunta("Ingresa tu apellido: ");
    
    let apelli = String(apellido);
    let nombr = String(nombre);

    

    
    
        if (nombr.length<3 && apelli.length<3)
            {
                console.log("Tu nuevo nombre de usuario es: "+nombr[0]+nombr[1]+apelli[0]+apelli[1]+getRandomInt(101));
            }
            else if(apelli.length<3)
                {
                    console.log("Tu nuevo nombre de usuario es: "+nombr[0]+nombr[1]+nombr[2]+apelli[0]+apelli[1]+getRandomInt(101));
                }
                else if(nombr.length<3)
                    {
                        console.log("Tu nuevo nombre de usuario es: "+nombr[0]+nombr[1]+apelli[0]+apelli[1]+apelli[2]+getRandomInt(101));
                    }
                    else
                    {
                        console.log("Tu nuevo nombre de usuario es: "+nombr[0]+nombr[1]+nombr[2]+apelli[0]+apelli[1]+apelli[2]+getRandomInt(101));
                    }
    
                    console.log(nombr.length);
                    console.log(apelli.length);
rl.close();
}
catch(error)
{
    console.error("xd", error)
    rl.close();

}
    }
    main();


