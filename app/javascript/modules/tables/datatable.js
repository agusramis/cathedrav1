// app/javascript/modules/tables/datatable.js

import $ from "jquery";
import "datatables.net-bs4";

// Traducciones comunes para todas las tablas
const commonLanguage = {
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
    sSortAscending: "Activar para ordenar la columna de manera ascendente",
    sSortDescending: "Activar para ordenar la columna de manera descendente",
  },
};

function commonOptions(ajaxUrl, columns) {
  return {
    processing: true,
    serverSide: true,
    ajax: ajaxUrl,
    columns,
    paging: true,
    ordering: true,
    info: true,
    scrollX: true,
    deferRender: true,
    scrollCollapse: true,
    dom: "lfrBtip",
    pageLength: 10,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "Todo"],
    ],
    language: commonLanguage,
    initComplete: function () {
      $("#cardtablebody").removeClass("whirl standard");
    },
  };
}

// Inicializadores específicos

export function initRolesTable() {
  const $table = $("#rolestable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/roles.json", [
        { data: "id" },
        { data: "nombre" },
        { data: "descripcion" },
        { data: "fecha_baja" },
      ])
    );
  }
}

export function initMateriasTable() {
  const $table = $("#materiastable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/materias.json", [
        { data: "id" },
        { data: "nombre" },
        { data: "descripcion" },
        { data: "fecha_baja" },
      ])
    );
  }
}

export function initVideosTable() {
  const $table = $("#videostable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/videos.json", [
        { data: "id" },
        { data: "titulo" },
        { data: "descripcion" },
      ])
    );
  }
}

export function initClasesTable() {
  const $table = $("#clasestable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/clases.json", [
        { data: "id" },
        { data: "titulo" },
        { data: "descripcion" },
        { data: "fecha" },
      ])
    );
  }
}

export function initParametrosTable() {
  const $table = $("#parametrostable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/parametros.json", [
        { data: "id" },
        { data: "nombre" },
        { data: "valor" },
      ])
    );
  }
}

export function initCarrerasTable() {
  const $table = $("#carrerastable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/carreras.json", [
        { data: "id" },
        { data: "nombre" },
        { data: "descripcion" },
      ])
    );
  }
}

export function initMateriaEstadosTable() {
  const $table = $("#materiaestadostable");
  if ($table.length) {
    // NOTA: cambiar "materias/:id/materia_estados.json" a dinámico si hace falta
    $table.DataTable(
      commonOptions(window.location.pathname + ".json", [
        { data: "id" },
        { data: "estado" },
        { data: "fecha" },
      ])
    );
  }
}

export function initRegistrosTable() {
  const $table = $("#registrostable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/registros.json", [
        { data: "id" },
        { data: "usuario" },
        { data: "fecha" },
        { data: "accion" },
      ])
    );
  }
}

export function initParticipantesTable() {
  const $table = $("#participantestable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/participantes.json", [
        { data: "id" },
        { data: "nombre" },
        { data: "apellido" },
      ])
    );
  }
}

export function initRegistrosProfesorTable() {
  const $table = $("#registrosprofesortable");
  if ($table.length) {
    $table.DataTable(
      commonOptions("/registros_profesor.json", [
        { data: "id" },
        { data: "materia" },
        { data: "fecha" },
      ])
    );
  }
}

// Función que inicializa la tabla de usuarios
// export function initUsuariosTable() {
//   const $usuariosTable = $("#usuariostable");

//   if ($usuariosTable.length > 0) {
//     $usuariosTable.on("error.dt", function (e, settings, techNote, message) {
//       console.error("❌ DataTables error:", message);
//     });

//     $usuariosTable.DataTable({
//       paging: true,
//       ordering: true,
//       info: true,
//       dom: "lfrBtip",
//       lengthMenu: [
//         [5, 10, 25, 50, -1],
//         [5, 10, 25, 50, "Todo"],
//       ],
//       pageLength: 10,
//       deferRender: true,
//       scrollX: true,
//       scrollCollapse: true,
//       processing: true,
//       serverSide: true,
//       ajax: "/usuarios.json",
//       columns: [
//         { data: "id" },
//         { data: "nombre_usuario" },
//         { data: "legajo" },
//         { data: "nombre" },
//         { data: "apellido" },
//         { data: "dni" },
//         { data: "email" },
//         { data: "telefono" },
//         { data: "celular" },
//         { data: "descripcion" },
//         { data: "fecha_nacimiento" },
//         { data: "sexo" },
//         { data: "nacionalidad" },
//         { data: "direccion" },
//         { data: "localidad" },
//         { data: "provincia" },
//         { data: "pais" },
//         { data: "rol" },
//         { data: "carrera" },
//         { data: "created_at" },
//         { data: "updated_at" },
//         { data: "fecha_baja" },
//         {
//           data: "mostrar_url",
//           render: function (data, type, row) {
//             return `<a href="${data}" class="btn btn-primary btn-sm">Mostrar</a>`;
//           },
//           orderable: false,
//           searchable: false,
//         },
//         {
//           data: "editar_url",
//           render: function (data, type, row) {
//             return `<a href="${data}" class="btn btn-info btn-sm">Editar</a>`;
//           },
//           orderable: false,
//           searchable: false,
//         },
//         {
//           data: "baja_url",
//           render: function (data, type, row) {
//             return `<a href="${data}" class="btn btn-warning btn-sm" data-method="delete" data-confirm="¿Seguro que querés dar de baja?">Baja</a>`;
//           },
//           orderable: false,
//           searchable: false,
//         },
//       ],
//       buttons: [
//         {
//           extend: "colvisGroup",
//           text: "Reducida",
//           className: "btn btn-sm btn-primary",
//           show: [0, 1, 2, 3, 4, 5, 17, 18, 21, 22, 23, 24],
//           hide: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20],
//         },
//         {
//           extend: "colvisGroup",
//           text: "Completa",
//           className: "btn btn-sm btn-primary",
//           show: ":hidden",
//         },
//       ],
//       oLanguage: {
//         sSearch: '<em class="fas fa-search"></em>',
//         sProcessing: "Procesando...",
//         sLengthMenu: "Mostrar _MENU_",
//         sZeroRecords: "No se encontraron resultados",
//         sEmptyTable: "Ningún dato disponible en esta tabla",
//         sInfo: "_START_ al _END_ de un total de _TOTAL_",
//         sInfoEmpty: "",
//         sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
//         oPaginate: {
//           sNext: '<em class="fa fa-caret-right"></em>',
//           sPrevious: '<em class="fa fa-caret-left"></em>',
//         },
//         oAria: {
//           sSortAscending:
//             "Activar para ordenar la columna de manera ascendente",
//           sSortDescending:
//             "Activar para ordenar la columna de manera descendente",
//         },
//       },
//       initComplete: function () {
//         console.log("✅ DataTable inicializada");
//         $("#cardtablebody").removeClass("whirl standard");
//       },
//     });
//   }
// }
