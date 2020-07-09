function imprimeIdade() {
    for(var idade = 30; idade <= 34 ; idade ++){
        console.log(idade)
    }                       //var vaza o escopo de for, while e if .
                            //const nao e cabivel em estrutura de repeticao pois nao pode mudar seu valor  
    console.log(idade)
}

imprimeIdade()

console.log(), console.log(), console.log(), console.log(), console.log()

const pessoa = {
    nome:"Tibes",
    idade:"17"
}

pessoa.idade =31

console.log(pessoa.idade)