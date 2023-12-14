var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('Quebrada') > -1
}
function Ligar(){
    if (!estaQuebrada()){
        lamp.src = 'ligada.svg'
    }else{
        window.alert ('A lâmpada está quebrada!')
    }
}

function Desligar(){
    if (!estaQuebrada()){
        lamp.src = 'desligada.svg'
    }else{
        window.alert ('A lâmpada está quebrada!')
    }
}
lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'Quebrada.svg'
}