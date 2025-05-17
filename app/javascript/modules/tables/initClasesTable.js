// app/javascript/modules/tables/initClasesTable.js
import $ from "jquery";
import { languageOptions } from "../helper";

export function initClasesTable() {
  const $table = $("#clasestable");

  if ($table.length > 0) {
    $table.DataTable({
      paging: true,
      ordering: true,
      info: true,
      deferRender: true,
      scrollX: true,
      scrollCollapse: true,
      pageLength: 5,
      columnDefs: [
        { orderable: false, targets: [-1, -2, -3] },
        { visible: false, targets: [] },
      ],
      language: languageOptions,
      initComplete: () => {
        $("#cardtablebody").removeClass("whirl standard");
        console.log("✅ DataTable Clases inicializada");
      },
    });
  }
}
