require "application_system_test_case"

class EnlacesTest < ApplicationSystemTestCase
  setup do
    @enlace = enlace(:one)
  end

  test "visiting the index" do
    visit enlaces_url
    assert_selector "h1", text: "Enlaces"
  end

  test "creating a Enlace" do
    visit enlaces_url
    click_on "New Enlace"

    fill_in "Fecha baja", with: @enlace.fecha_baja
    fill_in "Link enlace", with: @enlace.link_enlace
    fill_in "Nombre", with: @enlace.nombre
    click_on "Create Enlace"

    assert_text "Enlace was successfully created"
    click_on "Back"
  end

  test "updating a Enlace" do
    visit enlaces_url
    click_on "Edit", match: :first

    fill_in "Fecha baja", with: @enlace.fecha_baja
    fill_in "Link enlace", with: @enlace.link_enlace
    fill_in "Nombre", with: @enlace.nombre
    click_on "Update Enlace"

    assert_text "Enlace was successfully updated"
    click_on "Back"
  end

  test "destroying a Enlace" do
    visit enlaces_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Enlace was successfully destroyed"
  end
end
