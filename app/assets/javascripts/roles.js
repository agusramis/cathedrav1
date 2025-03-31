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

$('#rol_nombre').keyup(function() {
    $('#rol_nombre').val(caplet($('#rol_nombre').val()));
});