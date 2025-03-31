require "application_system_test_case"

class MateriasTest < ApplicationSystemTestCase
  setup do
    @materia = materia(:one)
  end

  test "visiting the index" do
    visit materias_url
    assert_selector "h1", text: "Materias"
  end

  test "creating a Materia" do
    visit materias_url
    click_on "New Materia"

    check "Autoarchivar" if @materia.autoarchivar
    fill_in "Ciclo lectivo", with: @materia.ciclo_lectivo
    fill_in "Codigo", with: @materia.codigo
    fill_in "Descripcion", with: @materia.descripcion
    fill_in "Fecha baja", with: @materia.fecha_baja
    fill_in "Fecha fin", with: @materia.fecha_fin
    fill_in "Fecha inicio", with: @materia.fecha_inicio
    fill_in "Nombre", with: @materia.nombre
    fill_in "Password", with: @materia.password
    click_on "Create Materia"

    assert_text "Materia was successfully created"
    click_on "Back"
  end

  test "updating a Materia" do
    visit materias_url
    click_on "Edit", match: :first

    check "Autoarchivar" if @materia.autoarchivar
    fill_in "Ciclo lectivo", with: @materia.ciclo_lectivo
    fill_in "Codigo", with: @materia.codigo
    fill_in "Descripcion", with: @materia.descripcion
    fill_in "Fecha baja", with: @materia.fecha_baja
    fill_in "Fecha fin", with: @materia.fecha_fin
    fill_in "Fecha inicio", with: @materia.fecha_inicio
    fill_in "Nombre", with: @materia.nombre
    fill_in "Password", with: @materia.password
    click_on "Update Materia"

    assert_text "Materia was successfully updated"
    click_on "Back"
  end

  test "destroying a Materia" do
    visit materias_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Materia was successfully destroyed"
  end
end
