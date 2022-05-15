
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        document.body.style.background = '#00BFFF'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        imagens.src = 'manha.png'

    } else if(hora >=12 && hora < 18){
        document.body.style.background = '#ADFF2F'
        imagens.src = 'tarde.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`

    } else{
        document.body.style.background = '#000080'
        imagens.src = 'noite.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
    }
}