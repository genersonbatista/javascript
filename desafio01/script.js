
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        imagens.src = 'manha.png'

    } else if(hora >=12 && hora < 18){
        imagens.src = 'tarde.png'

    } else{
        imagens.src = 'noite.png'
    }
}