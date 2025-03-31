require "application_system_test_case"

class MateriaEstadosTest < ApplicationSystemTestCase
  setup do
    @materia_estado = materia_estado(:one)
  end

  test "visiting the index" do
    visit materia_estados_url
    assert_selector "h1", text: "Materia Estados"
  end

  test "creating a Materia estado" do
    visit materia_estados_url
    click_on "New Materia Estado"

    fill_in "Fecha desde", with: @materia_estado.fecha_desde
    fill_in "Fecha hasta", with: @materia_estado.fecha_hasta
    click_on "Create Materia estado"

    assert_text "Materia estado was successfully created"
    click_on "Back"
  end

  test "updating a Materia estado" do
    visit materia_estados_url
    click_on "Edit", match: :first

    fill_in "Fecha desde", with: @materia_estado.fecha_desde
    fill_in "Fecha hasta", with: @materia_estado.fecha_hasta
    click_on "Update Materia estado"

    assert_text "Materia estado was successfully updated"
    click_on "Back"
  end

  test "destroying a Materia estado" do
    visit materia_estados_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Materia estado was successfully destroyed"
  end
end
