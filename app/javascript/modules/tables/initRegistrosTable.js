import $ from "jquery";
import { languageOptions } from "../helper";

export function initRegistrosTable() {
  const $table = $("#registrostable");

  if ($table.length > 0) {
    $table.DataTable({
      paging: true,
      ordering: true,
      info: true,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      deferRender: true,
      scrollX: true,
      scrollCollapse: true,
      order: [[0, "desc"]],
      columnDefs: [{ orderable: false, targets: [-1] }],
      oLanguage: languageOptions,
      initComplete: () => {
        console.log("✅ DataTable Registros inicializada");
        $("#cardtablebody").removeClass("whirl standard");
      },
    });
  }
}
