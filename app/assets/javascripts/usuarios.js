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
//#= require croppie/croppie
//= require cropper/dist/cropper.js

$(document).ready(function () {
  // $('.my-image').croppie({
  //     enforceBoundary: false,
  //     viewport: {
  //         width: 60,
  //         height: 60
  //     },
  //     boundary: {
  //         width: 150,
  //         height: 150
  //     }
  // });

  $(".i-checks").iCheck({
    checkboxClass: "icheckbox_square-blue",
    radioClass: "iradio_square-blue",
  });
  // if ($('#tipo_select').val() == '3') {
  //     $('#carrera_select').show();
  // } else {
  //     $('#carrera_select').hide();
  // }
  $("#tipo_select").change(function () {
    $.ajax({
      type: "POST",
      url: "/grupo_alumnos",
      data: { rol_id: $("#tipo_select").val() },
      dataType: "json",
      success: function (data) {
        if (data.bool == "true") {
          $("#carrera_select").show();
        } else {
          $("#carrera_select").hide();
        }
      },
      error: function (request, status, error) {
        // alert("sin materias:"+status);
      },
    });

    // if ($('#tipo_select').val() == '3') {
    //     $('#carrera_select').show();
    // } else {
    //     $('#carrera_select').hide();
    // }
  });
});

$("#usuario_email").keyup(function () {
  $("#usuario_email").val($("#usuario_email").val().toLowerCase());
  $("#usuario_nombre_usuario").val($("#usuario_email").val());
});

$("#usuario_dni").focusout(function () {
  $("#usuario_dni").val(zeroPad($("#usuario_dni").val(), 8));
});

$("#usuario_legajo").focusout(function () {
  $("#usuario_legajo").val(zeroPad($("#usuario_legajo").val(), 8));
});

function zeroPad(num, numZeros) {
  var n = Math.abs(num);
  var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
  var zeroString = Math.pow(10, zeros).toString().substr(1);
  if (num < 0) {
    zeroString = "-" + zeroString;
  }
  return zeroString + n;
}

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

$("#usuario_nombre").keyup(function () {
  $("#usuario_nombre").val(caplet($("#usuario_nombre").val()));
});

$("#usuario_apellido").keyup(function () {
  $("#usuario_apellido").val(caplet($("#usuario_apellido").val()));
});

$("#usuario_nacionalidad").keyup(function () {
  $("#usuario_nacionalidad").val(caplet($("#usuario_nacionalidad").val()));
});

$("#usuario_pais").keyup(function () {
  $("#usuario_pais").val(caplet($("#usuario_pais").val()));
});

$("#usuario_pais").keyup(function () {
  $("#usuario_pais").val(caplet($("#usuario_pais").val()));
});

$("#usuario_provincia").keyup(function () {
  $("#usuario_provincia").val(caplet($("#usuario_provincia").val()));
});

$("#usuario_direccion").keyup(function () {
  $("#usuario_direccion").val(caplet($("#usuario_direccion").val()));
});

$("#usuario_localidad").keyup(function () {
  $("#usuario_localidad").val(caplet($("#usuario_localidad").val()));
});
