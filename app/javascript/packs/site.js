import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import { initRolesTable } from "../modules/tables/initRolesTable";
import { initCarrerasTable } from "../modules/tables/initCarrerasTable";
import { initUsuariosTable } from "../modules/tables/initUsuariosTable";
import { initMateriasTable } from "../modules/tables/initMateriasTable";
import "bootstrap";
import "datatables.net-bs4";
import { initRegistrosTable } from "../modules/tables/initRegistrosTable";
import { initParametrosTable } from "../modules/tables/initParametrosTable";
import { initClasesTable } from "../modules/tables/initClasesTable";
import { initMateriaEstadosTable } from "../modules/tables/initMateriaEstadosTable";

Rails.start();
Turbolinks.start();

document.addEventListener("turbolinks:load", () => {
  const path = window.location.pathname;

  if (path.startsWith("/usuarios")) {
    initUsuariosTable();
  }

  if (path.startsWith("/roles")) {
    initRolesTable();
  }

  if (path.startsWith("/materias")) {
    initMateriasTable();
  }
  if (path.startsWith("/carreras")) {
    initCarrerasTable();
  }
  if (path.startsWith("/registros")) {
    initRegistrosTable();
  }
  if (path.match(/^\/materias\/\d+\/registros/)) {
    initRegistrosTable();
  }
  if (path.startsWith("/parametros")) {
    initParametrosTable();
  }
  if (path.match(/^\/materias\/\d+\/clases/)) {
    initClasesTable();
  }
  if (path.match(/^\/materias\/\d+\/materia_estados/)) {
    initMateriaEstadosTable();
  }

  // Acá podés ir agregando más detecciones si en el futuro tenés más tablas
});
