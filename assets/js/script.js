
let hr = mn = sg = ms = '0' + 0, iniciarTiempo; 
const botonIniciar = document.querySelector('.iniciar');
const botonDetener = document.querySelector('.detener');
const botonReiniciar = document.querySelector('.reiniciar');

//agregar eventos a los botones
botonIniciar.addEventListener('click', iniciar);
botonDetener.addEventListener('click', detener);
botonReiniciar.addEventListener('click', reiniciar);

//funcion para iniciar el cronometro
function iniciar() {
    //traemos la clase "on" de css para agregarle estilo
    botonIniciar.classList.add('on');

    //actualizar el tiempo cada segundo
    iniciarTiempo = setInterval(() => {

        ms++; //incrementamos milisegundos
        ms = ms < 10 ? '0' + ms : ms; 
        if (ms == 100) {
            //incrementamos segundos
            sg++;
            sg = sg < 10 ? '0' + sg : sg;
            ms = '0' + 0;
        }
        if (sg == 60) { 
            mn++; //aumentar minutos de uno en uno
            mn = mn < 10 ? '0' + mn : mn;
            sg = '0' + 0;
        }
        if (mn == 60) {
            hr++; //incrementamos horas
            hr = hr < 10 ? '0' + hr : hr;
            mn = '0' + 0;
        }
        ingresarValor();
    }, 10); 
}

//funcion para detener cronometro
function detener() {
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo); // Esto lo que hace es que detiene el tiempo en el punto en el que quedo y habilita el boton iniciar
}

//funcion para reiniciar el cronometro
function reiniciar() {
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = '0' + 0;
    ingresarValor();
}
function ingresarValor() {
    //mostramos el tiempo en el HTML
    document.querySelector('.milisegundo').innerHTML = ms;
    document.querySelector('.segundo').innerHTML = sg;
    document.querySelector('.minuto').innerHTML = mn;
    document.querySelector('.hora').innerHTML = hr;
}