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
//= require nestable/jquery.nestable
//= require html5sortable/dist/html5sortable.js

$(document).ready(function () {
// Funcion para scrollear suave para los links
    window.scrollBy({
        top: -60, // es el tamaño del navbartop
        left: 0,
        behavior: 'smooth'
    });
});
// All colapsed by default
$('#nestable').nestable({handleClass:'123'});
$('#nestable').nestable('collapseAll');
$('.dd a').on('mousedown', function (event) { event.preventDefault(); return false; });