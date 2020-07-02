function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src','fotos/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotos/foto-jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','fotos/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','fotos/foto-idoso-m.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src','fotos/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotos/foto-jovem-f.png')
            } else if (idade <50){
                //adulta
                img.setAttribute('src','fotos/foto-adulto-f.png')
            } else {
                //idosa
                img.setAttribute('src','fotos/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}