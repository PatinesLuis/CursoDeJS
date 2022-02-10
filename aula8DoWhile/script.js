// do while

let i  = 0;

do{
    console.log("Digitando " + i + " Vez")
    i++
}while(i< 7)

console.log("=====")
console.log("for..in")

const Pessoa ={
    nome: 'luis',
    idade: 19
    //key : value
};

for(let key in Pessoa){
    console.log(Pessoa)
    console.log(key,Pessoa['nome'])
}
console.log("=====")
const cores = ['verde','azul','bege','lilas'];

for (let indice in cores){
    // console.log(indice)
    console.log(indice,cores[indice])
}
console.log("=====")
console.log("for-of")

for(let cor of cores){
    console.log(cor)
}

