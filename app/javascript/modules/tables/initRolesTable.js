import $ from "jquery";

export function initRolesTable() {
  const $table = $("#rolestable");

  if ($table.length > 0) {
    $table.DataTable({
      paging: true,
      ordering: true,
      info: true,
      dom: "lfrtip",
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      deferRender: true,
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [{ orderable: false, targets: [-1, -2, -3] }],
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
          sSortAscending: "Activar para ordenar ascendente",
          sSortDescending: "Activar para ordenar descendente",
        },
      },
      initComplete: function () {
        console.log("✅ DataTable Roles inicializada");
        $("#cardtablebody").removeClass("whirl standard");
      },
    });
  }
}
