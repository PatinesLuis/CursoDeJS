//velocidade máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//math.floor() para arrendondar numero float
//caso ponto maior que 12 > "carteira suspensa"

medidor(1000)


function medidor(velocidade){

    if(velocidade <=70){
        console.log("Velocidade OK");
    }else{
        const ponto = Math.floor((velocidade - 70)/5);
        console.log(ponto + " Pontos")
        if(ponto > 12){
            console.log("Carteira suspensa")
        }
    }
}

