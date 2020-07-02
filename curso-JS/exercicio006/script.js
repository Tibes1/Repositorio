const buttonElement1 = document.querySelector("#button1") // pegar o elemento através do ID button

buttonElement1.addEventListener("click", function(){
    adicionar()
})

var numbers = []

function adicionar(){
    var elementN = document.querySelector('#number')
    var N = Number(elementN.value)

    //checagem de legitimidade de dados
    if(0<N && N<=100 ){
        if( numbers.indexOf(N) === -1 ) {
            
            numbers.push(N)
            numbers.sort()

            let item = document.createElement('option')
            item.text = `Valor ${N} adicionado.`
            list.appendChild(item)

            // numbers.toString
            // for(let pos in numbers){           //para cada posicao em numbers mostre numbers[pos]
            //     list.innerText=(numbers[pos])
            //}
            
        } else {
            window.alert(`[ERRO] o valor digitado ja existe`)
        }
    } else {
        window.alert(`[ERRO] verifique os valores e tente novamente`)
    }
}

//segundo botao 
const buttonElement2 = document.querySelector("#button2")

buttonElement2.addEventListener("click", function(){
    calcular()
})


function calcular(){
    if (numbers.length === 0 ){
        window.alert(`[ERRO] adicione valores e tente novamente`)
    } else {

    //largura
    var largura = numbers.length

    //maior
    var maior = numbers[0]
    
    //menor
    var menor = numbers[numbers.length-1]

    //soma
    var soma = 0
    for(let pos in numbers){
        soma += numbers[pos]
    }

    //media
    var media = soma/numbers.length


        res.innerHTML = ``
        res.innerHTML += `<p>ao todo temos ${largura} numeros adicionados</p>`
        res.innerHTML += `<p>o menor numero citado foi ${maior} </p>`
        res.innerHTML += `<p>o maior numero citado foi ${menor}</p>`
        res.innerHTML += `<p>a soma entre os numeros citados foi ${soma}</p>`
        res.innerHTML += `<p>a media entre os numeros citados foi ${Math.round(media)}</p>`
    }
}

//terceiro botao 
const buttonElement3 = document.querySelector("#button3")

buttonElement3.addEventListener("click", function(){
    reset()
})

function reset(){
    list.innerHTML=""
    res.innerHTML=""
    numbers=[]
}