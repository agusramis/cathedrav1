require "application_system_test_case"

class ConsultasTest < ApplicationSystemTestCase
  setup do
    @consulta = consulta(:one)
  end

  test "visiting the index" do
    visit consultas_url
    assert_selector "h1", text: "Consultas"
  end

  test "creating a Consulta" do
    visit consultas_url
    click_on "New Consulta"

    fill_in "Fecha consulta", with: @consulta.fecha_consulta
    fill_in "Fecha respuesta", with: @consulta.fecha_respuesta
    fill_in "Posicion video", with: @consulta.posicion_video
    fill_in "Texto consulta", with: @consulta.texto_consulta
    fill_in "Texto respuesta", with: @consulta.texto_respuesta
    fill_in "Vista consulta", with: @consulta.vista_consulta
    fill_in "Vista respuesta", with: @consulta.vista_respuesta
    click_on "Create Consulta"

    assert_text "Consulta was successfully created"
    click_on "Back"
  end

  test "updating a Consulta" do
    visit consultas_url
    click_on "Edit", match: :first

    fill_in "Fecha consulta", with: @consulta.fecha_consulta
    fill_in "Fecha respuesta", with: @consulta.fecha_respuesta
    fill_in "Posicion video", with: @consulta.posicion_video
    fill_in "Texto consulta", with: @consulta.texto_consulta
    fill_in "Texto respuesta", with: @consulta.texto_respuesta
    fill_in "Vista consulta", with: @consulta.vista_consulta
    fill_in "Vista respuesta", with: @consulta.vista_respuesta
    click_on "Update Consulta"

    assert_text "Consulta was successfully updated"
    click_on "Back"
  end

  test "destroying a Consulta" do
    visit consultas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Consulta was successfully destroyed"
  end
end
