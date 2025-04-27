// app/assets/javascripts/application.js (versión moderna)

import Rails from "@rails/ujs";
import Chartkick from "chartkick";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import toastr from "toastr";
import Swal from "sweetalert2";

// Site Modules
import "./site/modules/common/wrapper";
import "./site/app.init";
import "./site/custom";

// Inicializar Rails UJS
Rails.start();

// Asociar Highcharts con Chartkick
Chartkick.use(Highcharts);
HighchartsMore(Highcharts); // Extiende Highcharts para funciones adicionales

// Opciones por defecto para Toastr
$(document).ready(function () {
  toastr.options = {
    closeButton: true,
    progressBar: true,
    preventDuplicates: true,
    positionClass: "toast-top-center",
    timeOut: "2500",
    extendedTimeOut: "500",
    showMethod: "slideDown",
    hideMethod: "slideUp",
    maxOpened: 1,
  };

  // Ejemplo SweetAlert opcional
  // Swal.fire({
  //   title: 'Listo!',
  //   text: 'Todo cargó bien',
  //   icon: 'success'
  // });
});
