// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

//= require datatables.net/js/jquery.dataTables
//= require datatables.net-bs4/js/dataTables.bootstrap4
//= require datatables.net-buttons/js/dataTables.buttons
//= require datatables.net-buttons-bs/js/buttons.bootstrap
//= require datatables.net-buttons/js/buttons.colVis
///= require datatables.net-buttons/js/buttons.flash
///= require datatables.net-buttons/js/buttons.html5
///= require datatables.net-buttons/js/buttons.print
//= require datatables.net-keytable/js/dataTables.keyTable
//= require datatables.net-responsive/js/dataTables.responsive
//= require datatables.net-responsive-bs/js/responsive.bootstrap
//= require datatables.net-buttons/js/buttons.colVis.js
//= require datatables.net-buttons-bs/js/buttons.bootstrap.js
//= require 'icheck'
//= require plyr/dist/plyr

// Formularios

$(document).ready(function () {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
// Funcion para scrollear suave para los links
    window.scrollBy({
        top: -60, // es el tamaño del navbartop
        left: 0,
        behavior: 'smooth'
    });
});

//Capitalize palabras con mas de 3 characters
function caplet(str) {
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x; i++) {
        if (str[i].length > 3) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        } else {
            // str[i] = str[i][0] + str[i].substr(1);
        }

    }
    return str.join(" ");
}

// Cambia el codigo en funcion del nombre de la materia, el ciclo lectivo y la carrera elegida
$('#materia_nombre').keyup(function () {
    $('#materia_nombre').val(caplet($('#materia_nombre').val()));
    //Toma primer letra de cada palabra
    let materia_nombre = $('#materia_nombre').val();
    // Eliminar las palabras de 3 letras o menos
    // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") //elimina los caracteres especiales latin como acentos de un string
    materia_nombre = materia_nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').filter(function (str) {
        let word = str.match(/(\w+)/);
        return word && word[0].length > 3;
    }).join(' ');
    materia_nombre = materia_nombre.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
    let carrera_nombre = $('#materia_carrera_id option:selected').text();
    // Eliminar las palabras de 3 letras o menos
    // .normalize("NFD").replace(/[\u0300-\u036f]/g, "") //elimina los caracteres especiales latin como acentos de un string
    carrera_nombre = carrera_nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').filter(function (str) {
        let word = str.match(/(\w+)/);
        return word && word[0].length > 3;
    }).join(' ');
    //Toma primer letra de cada palabra
    carrera_nombre = carrera_nombre.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
    if (carrera_nombre == 'SC') {
        carrera_nombre = ''
    } else {
        carrera_nombre = carrera_nombre + '-'
    }
    // Para cambiar el valor
    $('#materia_codigo').val(materia_nombre + '-' + carrera_nombre + $('#materia_ciclo_lectivo').val());
    // Para cambiar el placeholder (texto de sugerencia)
    // $('#materia_codigo').attr('placeholder',materia_nombre+'-'+carrera_nombre+$('#materia_ciclo_lectivo').val());

});
$('#materia_ciclo_lectivo').change(function () {
    $('#materia_nombre').keyup();
});
$('#materia_carrera_id').change(function () {
    $('#materia_nombre').keyup();
});
//Obtener


// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//             && location.hostname == this.hostname) {
//
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top - 125 //offsets for fixed header
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
//     //Executed on page load with URL containing an anchor tag.
//     if($(location.href.split("#")[1])) {
//         var target = $('#'+location.href.split("#")[1]);
//         if (target.length) {
//             $('html,body').animate({
//                 scrollTop: target.offset().top - 125 //offset height of header here too.
//             }, 1000);
//             return false;
//         }
//     }
// });

// $(document).on('click', 'a[href^="!#"]', function (event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

// Video Plyr

const controls = [
    'play-large', // The large play button in the center
    'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'settings', // Settings menu
    'fullscreen' // Toggle fullscreen
];

const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map(p => new Plyr(p, {controls}));

for (var i = 0; i < players.length; i++) {
    players[i].on('ready', event => {
        var id = event.detail.plyr.config.id.replace('player', '');
        var idtime = "time" + id;
        var iditem = "item" + id;
        document.getElementById(idtime).max = formatSeconds(event.detail.plyr.duration);
        document.getElementById(iditem).max = formatSeconds(event.detail.plyr.duration);
    });
    players[i].on('playing', event => {
        var id = event.detail.plyr.config.id.replace('player', '');
        $.ajax({
            type: 'POST',
            url: '/vista_clase',
            data: {clase: id},
        });
    });

    players[i].on('timeupdate', event => {
        // event.detail.plyr.on('timeupdate'), event => {
        //
        // }
        var id = event.detail.plyr.config.id.replace('player', '');
        var idtime = "time" + id;
        var iditem = "item" + id;
        // console.log('IDTime: '+ idtime);
        document.getElementById(idtime).value = formatSeconds(event.detail.plyr.currentTime);
        document.getElementById(iditem).value = formatSeconds(event.detail.plyr.currentTime);
        // console.log(document.getElementById(idtime).max);
    });
}


function playerSeekTo(settime, playerid) {
    let player;
    for (var i = 0; i < players.length; i++) {
        if (players[i].config.id === playerid) {
            player = players[i];
        } else {
            players[i].pause();
        }
    }

    var settime = settime.split(':')
        .map(function (str) {
            return parseInt(str, 10);
        });

    // Calcular Tiempo
    if (settime.length === 3) {
        time = settime[0] * 3600 + settime[1] * 60 + settime[2];
    } else if (settime.length === 2) {
        time = settime[0] * 60 + settime[1];
    } else {
        time = settime[0];
    }
    player.currentTime = time;
    player.play();
}


function formatSeconds(seconds) {
    var date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

