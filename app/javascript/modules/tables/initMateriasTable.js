import $ from "jquery";
import { languageOptions } from "../helper";

export function initMateriasTable() {
  console.log("🌐 initMateriasTable called");

  const $table = $("#materiastable");

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
      columnDefs: [
        { orderable: false, targets: [-1, -2, -3, -4, -5, -6] },
        { visible: false, targets: [4, 5, 6, 7, 9, 10, 11, 12] },
      ],
      oLanguage: languageOptions,
      initComplete: () => {
        console.log("✅ DataTable Materias inicializada");
        $("#cardtablebody").removeClass("whirl standard");
      },
    });
  }
}
