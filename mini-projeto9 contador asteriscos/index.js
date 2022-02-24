//Criar uma função que exibe a quantidade de *

function exibirAsterisco(linha){
    let padrao = " ";
    for(let i = 0; i <= linha; i++){
        padrao +='*';
        console.log(padrao);
    }
}

exibirAsterisco(10);