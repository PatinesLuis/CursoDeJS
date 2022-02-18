//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

funcao(23);

function funcao(valor){
    
    for(let i = 0; i <= valor; i++){

        if(i % 2 == 0){
            console.log(i + " par")
        }
        if(i %2 == 1){
            console.log(i +" Impar")
        }
       
    }
    

}