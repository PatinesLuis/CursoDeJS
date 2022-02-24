//somar de todos multimos de 3 e 5

//valor 10
//multimos de 3
//3,6,9

//multimos de 5
//5,10

somar(10);

function somar(limite){
    let soma = 0
    for(let a = 0; a <= limite ;a = a + 3) {
        soma += a
        // console.log(a); 
    }

    let soma2 = 0

    for(let b = 0;b <= limite;b = b + 5){
        soma2 +=b
    }

    console.log(soma + soma2)
   
    
}