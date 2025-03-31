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

// Video Plyr

const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map(p => new Plyr(p));

players.forEach(function (instance, index) {
    instance.on('play', function () {
        players.forEach(function (instance1, index1) {
            if (instance != instance1) {
                instance1.pause();
            }
        });
    });
});

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

function caplet(str){
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x; i++) {
        if (str[i].length > 3){
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        else{
            // str[i] = str[i][0] + str[i].substr(1);
        }
    }
    return str.join(" ");
}

$('#clase_nombre').keyup(function() {
    $('#clase_nombre').val(caplet($('#clase_nombre').val()));
});