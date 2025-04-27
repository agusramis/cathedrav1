// DATATABLES
// -----------------------------------

(function () {
  "use strict";

  $(initDatatables);

  function initDatatables() {
    if (!$.fn.DataTable) return;

    // Materia

    $("#materiastable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      dom: "lfrBtip",
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2, -3, -4, -5, -6] },
        { visible: false, targets: [4, 5, 6, 7, 9, 10, 11, 12] },
      ],
      buttons: [
        {
          extend: "colvisGroup",
          text: "Reducida",
          className: "btn btn-sm btn-primary",
          show: [0, 1, 2, 3, 8, 12, 13, 14, 15, 16, 17, 18, 19],
          hide: [4, 5, 6, 7, 9, 10, 11, 12],
        },
        {
          extend: "colvisGroup",
          text: "Completa",
          className: "btn btn-sm btn-primary",
          show: ":hidden",
        },
      ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#usuariostable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      dom: "lfrBtip",
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2, -3] },
        {
          visible: false,
          targets: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20],
        },
      ],
      buttons: [
        {
          extend: "colvisGroup",
          text: "Reducida",
          className: "btn btn-sm btn-primary",
          show: [0, 1, 2, 3, 4, 5, 17, 18, 21, 22, 23, 24],
          hide: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20],
        },
        {
          extend: "colvisGroup",
          text: "Completa",
          className: "btn btn-sm btn-primary",
          show: ":hidden",
        },
      ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#videostable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2, -3] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#clasestable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 5,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2, -3] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#parametrostable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#rolestable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2, -3] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#carrerastable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#materiaestadostable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#registrostable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "Todo"],
      ],
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      order: [[0, "desc"]],
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#participantestable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "Todo"],
      ],
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      order: [[0, "desc"]],
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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

    $("#registrosprofesortable").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      // Para evitar que se renderice la totalidad
      deferRender: true,
      // Para que sea responsive
      // responsive: true,
      // Para que sea con scroll
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
        // Orderable para eliminar la opción de ordenar, si es negativo empieza desde el final
        { orderable: false, targets: [-1, -2] },
        { visible: false, targets: [] },
      ],
      // buttons: [
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Reducida',
      //         className: 'btn btn-sm btn-primary',
      //         show: [ 0, 1, 2, 3, 8, 11, 12, 13, 14 ],
      //         hide: [ 4, 5, 6, 7, 9, 10 ]
      //     },
      //     {
      //         extend: 'colvisGroup',
      //         text: 'Completa',
      //         className: 'btn btn-sm btn-primary',
      //         show: ':hidden'
      //     }
      // ],
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: '<em class="fas fa-search"></em>',
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "_START_ al _END_ de un total de _TOTAL_",
        sInfoEmpty: "",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
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
        console.log("DataTable usuarios inicializado.");

        $("#cardtablebody").removeClass("whirl standard");
      },
    });

    // Filter

    $("#datatable2").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      responsive: true,
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: "Search all columns:",
        sLengthMenu: "_MENU_ records per page",
        info: "Showing page _PAGE_ of _PAGES_",
        zeroRecords: "Nothing found - sorry",
        infoEmpty: "No records available",
        infoFiltered: "(filtered from _MAX_ total records)",
        oPaginate: {
          sNext: '<em class="fa fa-caret-right"></em>',
          sPrevious: '<em class="fa fa-caret-left"></em>',
        },
      },
      // Datatable Buttons setup
      dom: "Bfrtip",
      buttons: [
        { extend: "copy", className: "btn-info" },
        { extend: "csv", className: "btn-info" },
        { extend: "excel", className: "btn-info", title: "XLS-File" },
        { extend: "pdf", className: "btn-info", title: $("title").text() },
        { extend: "print", className: "btn-info" },
      ],
    });

    $("#datatable3").DataTable({
      paging: true, // Table pagination
      ordering: true, // Column ordering
      info: true, // Bottom left status text
      responsive: true,
      // Text translation options
      // Note the required keywords between underscores (e.g _MENU_)
      oLanguage: {
        sSearch: "Search all columns:",
        sLengthMenu: "_MENU_ records per page",
        info: "Showing page _PAGE_ of _PAGES_",
        zeroRecords: "Nothing found - sorry",
        infoEmpty: "No records available",
        infoFiltered: "(filtered from _MAX_ total records)",
        oPaginate: {
          sNext: '<em class="fa fa-caret-right"></em>',
          sPrevious: '<em class="fa fa-caret-left"></em>',
        },
      },
      // Datatable key setup
      keys: true,
    });
  }
})();
