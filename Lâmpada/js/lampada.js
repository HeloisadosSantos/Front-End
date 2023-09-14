//Aqui são as minhas funções , ou seja meus métodos aquelas ações que eu gostaria que meu site tivesse. 
const turnOn = document. getElementById ('turnOn');
const turnOff = document. getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

var on = "./img/off.png";
var off = "./img/on.png";

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

//aqui você faz acontecer
function lampOn (){
    if(!isLampBroken ()){
    lamp.src = './img/ligada.png';
    turnOn.src = './on/on.png'
    }

}

function lampOff (){
    if(!isLampBroken ()){
        lamp.src = './img/desligada.png';
        turnOff.src = './off/off.png';
        }
}

function lampBroken (){
    lamp.src = './img/quebrada.png';
}



//aqui você tem um evento
turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );

//ao passar o mouse sobre a imagem ela vai ligar e desligar, para assim conseguirmos trocar a imagem 
//para uma quebrada. 
lamp.addEventListener ( 'mouseover', lampOn );
//ao sair da imagem ela volta a anterior 
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );

