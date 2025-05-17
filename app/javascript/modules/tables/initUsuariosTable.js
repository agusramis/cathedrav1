import $ from "jquery";

export function initUsuariosTable() {
  const $table = $("#usuariostable");

  if ($table.length > 0) {
    $table.DataTable({
      paging: true,
      ordering: true,
      info: true,
      dom: "lfrBtip",
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      deferRender: true,
      scrollX: true,
      scrollCollapse: true,
      processing: true,
      serverSide: true,
      ajax: "/usuarios.json",
      columns: [
        { data: "id" },
        { data: "nombre_usuario" },
        { data: "legajo" },
        { data: "nombre" },
        { data: "apellido" },
        { data: "dni" },
        { data: "email" },
        { data: "telefono" },
        { data: "celular" },
        { data: "descripcion" },
        { data: "fecha_nacimiento" },
        { data: "sexo" },
        { data: "nacionalidad" },
        { data: "direccion" },
        { data: "localidad" },
        { data: "provincia" },
        { data: "pais" },
        { data: "rol" },
        { data: "carrera" },
        { data: "created_at" },
        { data: "updated_at" },
        { data: "fecha_baja" },
        {
          data: "mostrar_url",
          render: (data) =>
            `<a href="${data}" class="btn btn-primary btn-sm">Mostrar</a>`,
          orderable: false,
          searchable: false,
        },
        {
          data: "editar_url",
          render: (data) =>
            `<a href="${data}" class="btn btn-info btn-sm">Editar</a>`,
          orderable: false,
          searchable: false,
        },
        {
          data: "baja_url",
          render: (data) =>
            `<a href="${data}" class="btn btn-warning btn-sm" data-method="delete" data-confirm="¿Seguro que querés dar de baja?">Baja</a>`,
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
          sSortAscending: "Activar para ordenar ascendente",
          sSortDescending: "Activar para ordenar descendente",
        },
      },
      initComplete: function () {
        console.log("✅ DataTable Usuarios inicializada");
        $("#cardtablebody").removeClass("whirl standard");
      },
    });
  }
}
