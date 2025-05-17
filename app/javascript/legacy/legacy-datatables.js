// DATATABLES
// -----------------------------------

(function () {
  "use strict";

  $(initDatatables);

  function initDatatables() {
    if (!$.fn.DataTable) return;

    // Aquí irían todas las configuraciones de DataTables como en el código original
    // Este archivo es un contenedor legacy para ser dividido en initXYZTable

    // Ejemplo de tabla de usuarios (para mostrar cómo irá quedando)
    if ($("#usuariostable").length) {
      $("#usuariostable").DataTable({
        paging: true,
        ordering: true,
        info: true,
        dom: "lfrBtip",
        ajax: "/usuarios.json",
        columns: [
          { data: "id" },
          { data: "nombre" },
          { data: "apellido" },
          { data: "email" },
          { data: "role" },
          { data: "grupo" },
          { data: "fecha_baja" },
          {
            data: null,
            defaultContent: "",
            orderable: false,
            searchable: false,
          },
        ],
        oLanguage: {
          sSearch: '<em class="fas fa-search"></em>',
          sProcessing: "Procesando...",
          sLengthMenu: "Mostrar _MENU_",
          sZeroRecords: "No se encontraron resultados",
          sEmptyTable: "Ningún dato disponible en esta tabla",
          sInfo: "_START_ al _END_ de un total de _TOTAL_",
          sInfoEmpty: "",
          sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
          oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>',
          },
          oAria: {
            sSortAscending:
              "Activar para ordenar la columna de manera ascendente",
            sSortDescending:
              "Activar para ordenar la columna de manera descendente",
          },
        },
        initComplete: function () {
          $("#cardtablebody").removeClass("whirl standard");
        },
      });
    }

    // El resto de las tablas debe ser migrado a funciones individuales como initRolesTable, initCarrerasTable, etc.
  }
})();
