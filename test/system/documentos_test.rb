require "application_system_test_case"

class DocumentosTest < ApplicationSystemTestCase
  setup do
    @documento = documento(:one)
  end

  test "visiting the index" do
    visit documentos_url
    assert_selector "h1", text: "Documentos"
  end

  test "creating a Documento" do
    visit documentos_url
    click_on "New Documento"

    fill_in "Link documento", with: @documento.link_documento
    fill_in "Nombre", with: @documento.nombre
    click_on "Create Documento"

    assert_text "Documento was successfully created"
    click_on "Back"
  end

  test "updating a Documento" do
    visit documentos_url
    click_on "Edit", match: :first

    fill_in "Link documento", with: @documento.link_documento
    fill_in "Nombre", with: @documento.nombre
    click_on "Update Documento"

    assert_text "Documento was successfully updated"
    click_on "Back"
  end

  test "destroying a Documento" do
    visit documentos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Documento was successfully destroyed"
  end
end
