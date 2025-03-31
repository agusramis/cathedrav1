// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function () {
    $("#resetear_button").click(function() {
        dataConfirmModal.confirm({
            title: 'Resetear base de datos.',
            text: "¿Desea resetear la base de datos a los valores iniciales? <br> <p class='text-danger'>Atención: esta acción es irreversible.</p>",
            commit: 'Si',
            cancel: 'No',
            onConfirm: function () {
                resetear()
            }
        })
    });
    $("#cargar_button").click(function() {
        dataConfirmModal.confirm({
            title: 'Restaurar copia de seguridad.',
            text: "¿Desea restaurar la base de datos? <br> <p class='text-danger'>Atención: esta acción es irreversible.</p>",
            commit: 'Si',
            cancel: 'No',
            onConfirm: function () {
                cargar()
            }
        })
    });
    $("#descargar_button").click(function() {
        dataConfirmModal.confirm({
            title: 'Descargar copia de seguridad.',
            text: "¿Desea decargar una copia de seguridad de la base de datos?",
            commit: 'Si',
            cancel: 'No',
            onConfirm: function () {
                descargar()
            }
        })
    });
});


function resetear() {
    $("#resetear_progress").css({'visibility': 'visible'});
    $("#resetear_button").addClass('disabled').attr("disabled", true);
    $.ajax({
        type: 'POST',
        url: '/backups/resetear',
        // data: {data: 'you need to pass'}
    });
}

function cargar() {
    if ($('#filebackup').get(0).files.length === 0) {
        toastr.error('Debe seleccionar un archivo')
    }else{
        $("#cargar_progress").css({'visibility': 'visible'});
        $("#cargar_button").addClass('disabled').attr("disabled", true);
        $("#form_backupload").trigger('submit.rails');
    }

    // this.form.submit()
}

function descargar() {
    $("#descargar_progress").css({'visibility': 'visible'});
    $("#descargar_button").addClass('disabled').attr("disabled", true);
    $.ajax({
        type: 'POST',
        url: '/backups/descargar',
        // data: {data: 'you need to pass'}
    });
}


