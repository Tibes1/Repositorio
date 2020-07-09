const buttonElement = document.querySelector("#button") // pegar o elemento através do ID button

buttonElement.addEventListener("click", function(){
    calcular()
})

function calcular(){
    let elementStart = document.querySelector('input#start')
    let elementEnd = document.querySelector('input#end')
    let elementSpeed = document.querySelector('input#speed')


    let start = Number(elementStart.value)
    let end = Number(elementEnd.value)
    let speed = Number(elementSpeed.value)

        if(start == 0 || end== 0 || speed==0){
            window.alert(`[ERRO] Faltam dados`)
        } else if (start<end){
            contagem.innerHTML='contagem: '
            for (let c = start ; c<=end ; c=c+speed){
                contagem.innerHTML+=` \u{1F449} ${c} `
        }
        } else if(start>end) {
            contagem.innerHTML='contagem: '
            for (let c = start ; c>=end ; c=c-speed){
                contagem.innerHTML+=` \u{1F449} ${c}`
        }       
    }
        contagem.innerHTML+=` \u{1F449} \u{1F3C1}`
}   