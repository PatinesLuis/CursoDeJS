//if else


//se a hora estiver as 6:00 até 12:00 !! : bom dia
//se a hora estiver 12:00 até as 18:00 : boa tarde
//caso contrario : boa noite

let hora = 17.33;

if(hora >= 6 && hora <= 12){
    console.log("Bom dia !!")
}else if(hora >= 12 && hora <= 18){
    console.log("Boa tarde !!")
}else{
    console.log("Boa noite !!")
}

console.log("==============")
console.log("switch case")

//identificar se o usuário é comum, gerente ou diretor
let permissao = 'gerente';

switch(permissao){
    case 'comum':
        console.log("Usuário comum");
        break;

    case 'gerente':
        console.log("Usuário gerente");
        break;

        case 'diretor':
        console.log("Usuário diretor");
        break;

        default:
            console.log("Usuário negado");   

}
    



