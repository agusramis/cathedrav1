import $ from "jquery";
import { languageOptions } from "../helper";
export function initCarrerasTable() {
  const $table = $("#carrerastable");

  if ($table.length > 0) {
    $table.DataTable({
      paging: true,
      ordering: true,
      info: true,
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Todo"],
      ],
      pageLength: 10,
      deferRender: true,
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [{ orderable: false, targets: [-1, -2] }],
      oLanguage: languageOptions,
      initComplete: () => {
        console.log("✅ DataTable Carreras inicializada");
        $("#cardtablebody").removeClass("whirl standard");
      },
    });
  }
}
