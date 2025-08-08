// tarea de curso 2;
let NumeroSecreto = 0;
let Intentos = 0 ;
let listaNumeroSorteados=[];
let numeroMaximo = 10 ;
console.log(NumeroSecreto);


function asignarTextoElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value) ;
   console.log (Intentos);
    if (numeroDeUsuario === NumeroSecreto) {
        asignarTextoElementos ('p',`acertaste el numero en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces' }`) ;
document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > NumeroSecreto){
            asignarTextoElementos('p','no acertaste, es menor el numerito');
        } else {
            asignarTextoElementos('p','no acertaste el numero es mayor');
        }
    } Intentos++;
    limpiarCaja();

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumeroSorteados);

     // si ya sorteamos todos los numeros
     if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElementos('p','ya se jugaron todos los numeros');
     }
    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

function condicionesIniciales(){
asignarTextoElementos('h1','juego secreto ou yea');
asignarTextoElementos('p',`decime un numero del 1 al ${numeroMaximo}`);
NumeroSecreto = generarNumeroSecreto();
Intentos = 1;
}


 function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
 document.querySelector('#reiniciar').setAttribute('disabled','true');
 }


condicionesIniciales();