require "application_system_test_case"

class RegistrosTest < ApplicationSystemTestCase
  setup do
    @registro = registro(:one)
  end

  test "visiting the index" do
    visit registros_url
    assert_selector "h1", text: "Registros"
  end

  test "creating a Registro" do
    visit registros_url
    click_on "New Registro"

    fill_in "Fecha fin", with: @registro.fecha_fin
    fill_in "Fecha inicio", with: @registro.fecha_inicio
    click_on "Create Registro"

    assert_text "Registro was successfully created"
    click_on "Back"
  end

  test "updating a Registro" do
    visit registros_url
    click_on "Edit", match: :first

    fill_in "Fecha fin", with: @registro.fecha_fin
    fill_in "Fecha inicio", with: @registro.fecha_inicio
    click_on "Update Registro"

    assert_text "Registro was successfully updated"
    click_on "Back"
  end

  test "destroying a Registro" do
    visit registros_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Registro was successfully destroyed"
  end
end
