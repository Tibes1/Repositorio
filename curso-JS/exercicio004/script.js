const buttonElement = document.querySelector("#button") // pegar o elemento através do ID button

buttonElement.addEventListener("click", function(){
    calcular()
})

function calcular(){
    var elementStart = document.querySelector('input#start')
    var elementEnd = document.querySelector('input#end')
    var elementSpeed = document.querySelector('input#speed')


    var start = Number(elementStart.value)
    var end = Number(elementEnd.value)
    var speed = Number(elementSpeed.value)

        if(start == 0 || end== 0 || speed==0){
            window.alert(`[ERRO] Faltam dados`)
        } else if (start<end){
            contagem.innerHTML='contagem: '
            for (var c = start ; c<=end ; c=c+speed){
                contagem.innerHTML+=` \u{1F449} ${c} `
        }
        } else if(start>end) {
            contagem.innerHTML='contagem: '
            for (var c = start ; c>=end ; c=c-speed){
                contagem.innerHTML+=` \u{1F449} ${c}`
        }       
    }
        contagem.innerHTML+=` \u{1F449} \u{1F3C1}`
}   