const  celular = {
    marcaCelular : 'Iphone',
    tamanhoTela :{
        vertical : 155,
        horizontal : 75
    },
    ligar: function(){
        console.log("ligando")
    }
}

const novoObjeto = Object.assign({}, celular);
console.log(novoObjeto)