/*criando as variáveis com o valor dos ids do html*/
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
/*criando as variáveis dos botões, para poder modificar quando eles aparecem e o que realizam*/
var iniciar = document.getElementById('iniciar');
var retomar = document.getElementById('retomar');
var pausar = document.getElementById('pausar');
var parar = document.getElementById('parar');

/*criando variáveis com valores zerados*/
/*porquê eu tive que colocar 0o0? nem me pergunte*/
var interval = 0o0;
var horas = 0o0;
var minutos = 0o0;
var segundos = 0o0;
var isPaused = false;
/*alterando o style do html, para aparecer apenas os botões que irão realizar alguma ação*/
retomar.style.display = "none";
pausar.style.display = "none";
parar.style.display = "none";

/*funções de cada botão*/
/*função iniciar*/
function start() {
    /*usando uma booliana para definir se o cronômetro está pausado*/
    isPaused=false;
    /*retornando as variáveis para zero*/
    var horas = 0o0;
    var minutos = 0o0;
    var segundos = 0o0;
    /*definindo o intervalo dos segundos. ou seja, quantos milissegundos são necessários para o contador dos segundos aumentar*/
    interval = setInterval(() => {
        if (!isPaused) {
            segundos += 1
            /*usando if para que, após os segundos chegarem a 60, o contador de minutos aumente em um*/
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            /*usando if para que, após os minutos chegarem a 60, o contador de horas aumente em um*/
            if (minutos === 60) {
                horas++;
                minutos = 0;
            }
            /*usando as variáveis do javascript nas variáveis com o valor dos ids no html. ou seja, o que estiver na variável do javascript, será mostrado no html*/
            hours.textContent = formatTime(horas);
            minutes.textContent = formatTime(minutos);
            seconds.textContent = formatTime(segundos);
        }
    }, 1000/*intervalo de milissegundos*/)
    iniciar.style.display = "none";
    pausar.style.display = "block";
    parar.style.display = "block";
}

/*definindo a função formatTime para garantir que sempre tenham dois dígitos, mesmo sendo um número abaixo de dez*/
function formatTime(time) {
    /*definindo que os números entre 0 e 9 tenham um "0" a frente*/
    return time < 10 ? `0${time}` : time;
}

/*função de pausar*/
function pause() {
    /*usando a booliana para pausar o contador*/
    isPaused = true;
    pausar.style.display = "none";
    retomar.style.display = "block";
}

/*função de retomar*/
function resume() {
    isPaused = false;
    pausar.style.display = "block";
    retomar.style.display = "none";
}

/*função de parar*/
function stop() {
    /*limpando o intervalo e voltando tudo a zero*/
    clearInterval(interval);
    isPaused=true;
    var horas = 0o0;
    var minutos = 0o0;
    var segundos = 0o0;
    hours.textContent = "0o0";
    minutes.textContent = "0o0";
    seconds.textContent = "0o0";
    iniciar.style.display = "block";
    pausar.style.display = "none";
    parar.style.display = "none";
    retomar.style.display = "none";
}
