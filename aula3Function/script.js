let corSite = "azul";

function resetarcor(cor, tonalidade){
    corSite = cor + tonalidade;
}

console.log(corSite);
resetarcor("vermelho", " claro");

console.log(corSite)

function dizerNome (){
    console.log('Eduardo')
}

dizerNome();

function multiplicarPorDois(valor){
    return valor * 2;
}

let resultado = multiplicarPorDois(5);

console.log(resultado);