function criarCelular(marcaCelular,bateria){
    return {
        marcaCelular : marcaCelular,
        tamanhoTela : {
            vertical : 155,
            horizontal : 75
        },
        bateria : bateria,
        ligar(){
            console.log("fazendo ligação")
        }
    }
}

const celular = criarCelular('sansung', 6000)

console.log(celular)

