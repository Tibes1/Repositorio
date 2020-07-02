let num = [5,2,8,9,3]

num.push(7)                    //inserir variavel no array

console.log(num)               //mostrar array 
console.log(num.length)        //comprimento do array 
console.log(num[0])            //mostrar vetor target
console.log(num.sort())        //altera array para ordem crescente
console.log(num.indexOf(5))    //posicao de um vetor  resultado -1 para numeros nao existentes

// percurso do vetor //
console.log(``)

for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}

// simplificacao //
console.log(``)
for(let pos in num){           //para cada posicao em num mostre num[pos]
    console.log(num[pos])
}

