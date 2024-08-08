function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const main = async() =>{
    let dado1 = getRandomInt(7);
    let dado2 = getRandomInt(7);
    

    if(dado1 == 0)
        {
            dado1 = 1;
        }
        console.log(dado1);
     if(dado2 == 0)
        {
            dado2 = 1;
        }
        console.log(dado2);
    let sumdados = dado1+dado2;
    console.log("El resultado del dado 1 es: "+dado1)
    console.log("El resultado del dado 2 es: "+dado2)
    console.log("El resultado de la suma entre dados es: "+sumdados);
}
main();