let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let opc = [0, 1, 2, 3];
let preguntaNum = 1;

let preguntaData;
let enunciado;
let opcionA;
let opcionB;
let opcionC;
let opcionD;
let correcta;
let consol = true;

$(document).ready(function () {
    $('.preguntas, .respuestas').hide();
// ------------------------------------------
    debug('start');
    $('.btnContinuar').on("click", function () {
        barajarArray(num);
        pregunta(preguntaNum);
        $('.enunciado').html(enunciado);
        $('.opcionA').html(opcionA.opcion);
        $('.opcionB').html(opcionB.opcion);
        $('.opcionC').html(opcionC.opcion);
        $('.opcionD').html(opcionD.opcion);
        $('.home, .respuestas').hide();
        $('.preguntas').show();
        debug('pregunta');
    });
// ------------------------------------------
    $('.btnSiguiente').on("click", function () {
        preguntaNum = preguntaNum + 1;
        if (preguntaNum <= 10){
            pregunta(preguntaNum);
            $('.enunciado').html(enunciado);
            $('.opcionA').html(opcionA.opcion);
            $('.opcionB').html(opcionB.opcion);
            $('.opcionC').html(opcionC.opcion);
            $('.opcionD').html(opcionD.opcion);
            $('.home, .respuestas').hide();
            $('.preguntas').show();
            debug('pregunta');
        }
        else {
            preguntaNum = 1;
            $('.preguntas, .respuestas').hide();
            debug('end');
            $('.home').show();
        }
    });
// ------------------------------------------
    $('.a').on("click", function () {
        if (opcionA.valor == 'correcta') {
            $('.mal').hide();
            $('.bien').show();
        }
        else {
            $('.letra').html(correcta[0]);
            $('.texto').html(correcta[1]);
            $('.bien').hide();
            $('.mal').show();
        }
        $('.home, .preguntas').hide();
        $('.respuestas').show();
    });
// ------------------------------------------
    $('.b').on("click", function () {
        if (opcionB.valor == 'correcta') {
            $('.mal').hide();
            $('.bien').show();
        }
        else {
            $('.letra').html(correcta[0]);
            $('.texto').html(correcta[1]);
            $('.bien').hide();
            $('.mal').show();
        }
        $('.home, .preguntas').hide();
        $('.respuestas').show();
    });
// ------------------------------------------
    $('.c').on("click", function () {
        if (opcionC.valor == 'correcta') {
            $('.mal').hide();
            $('.bien').show();
        }
        else {
            $('.letra').html(correcta[0]);
            $('.texto').html(correcta[1]);
            $('.bien').hide();
            $('.mal').show();
        }
        $('.home, .preguntas').hide();
        $('.respuestas').show();
    });
// ------------------------------------------
    $('.d').on("click", function () {
        if (opcionD.valor == 'correcta') {
            $('.mal').hide();
            $('.bien').show();
        }
        else {
            $('.letra').html(correcta[0]);
            $('.texto').html(correcta[1]);
            $('.bien').hide();
            $('.mal').show();
        }
        $('.home, .preguntas').hide();
        $('.respuestas').show();
    });
});




function pregunta(Num) {
    let pregunta = preguntas[num[Num - 1] - 1];
    barajarArray(opc);
    debug('opciones');
    preguntaData = pregunta.pregunta;
    enunciado = pregunta.enunciado;
    opcionA = pregunta.opciones[opc[0]];
    opcionB = pregunta.opciones[opc[1]];
    opcionC = pregunta.opciones[opc[2]];
    opcionD = pregunta.opciones[opc[3]];
    correcta = respuesta();
}
function respuesta() {
    if (opcionA.valor == 'correcta') {
        return [ 'A', opcionA.opcion ];
    }
    else if (opcionB.valor == 'correcta') {
        return ['B', opcionB.opcion];
    }
    else if (opcionC.valor == 'correcta') {
        return ['C', opcionC.opcion];
    }
    else {
        return ['D', opcionD.opcion];
    }
}

function barajarArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
}

function debug(debug) {
    if (consol == true) {
        if (debug == 'pregunta') {
            console.log('orden preguntas: \n', num);
            console.log('Pregunta juego:', preguntaNum,
                '\nPregunta data:', preguntaData);
            console.log('Enunciado:', enunciado);
            console.log('Opcion A:', opcionA.opcion,
                '\nValor:', opcionA.valor);
            console.log('Opcion B:', opcionB.opcion,
                '\nValor:', opcionB.valor);
            console.log('Opcion C:', opcionC.opcion,
                '\nValor:', opcionC.valor);
            console.log('Opcion D:', opcionD.opcion,
                '\nValor:', opcionD.valor);
            console.log('Correcta:', correcta[0],
                '\nTexto:', correcta[1]);
        }
        if (debug == 'start') {
            console.log('JUEGO INICIADO\n-------------------------------');
        }
        if (debug == 'end') {
            console.log('JUEGO FINALIZADO\n-------------------------------');
        }
        if (debug == 'opciones') {
            console.log('orden opciones: \n', opc);
        }
    }
}
