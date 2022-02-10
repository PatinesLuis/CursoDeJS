// divisivel por 3 => fizz
// divisivel por 5 => buzz
// divisivel por 3 e 5 => FizzBuzz
//não é um numero => 'não é um numero'

const resultado = fizzBuzz(7);
console.log(resultado)

function fizzBuzz(entrada){
   if(typeof entrada !== 'number')
   return 'não é um numero';

   if(entrada % 5 === 0  && entrada % 3 === 0)
   return 'fizzbuzz'

   if(entrada % 3 === 0)
   return 'fizz';

    if(entrada % 5 === 0)
    return 'buzz';

    return entrada;
}




