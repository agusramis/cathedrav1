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

//Capitalize palabras con mas de 3 characters
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

$('#carrera_nombre').keyup(function() {
    $('#carrera_nombre').val(caplet($('#carrera_nombre').val()));
    codigo_nombre = $('#carrera_nombre').val().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').filter(function (str) {
        let word = str.match(/(\w+)/);
        return word && word[0].length > 3;
    }).join(' ');
    codigo_nombre = codigo_nombre.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
    $('#carrera_codigo').val(codigo_nombre);
});