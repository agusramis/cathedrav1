require "application_system_test_case"

class RolesTest < ApplicationSystemTestCase
  setup do
    @rol = rol(:one)
  end

  test "visiting the index" do
    visit roles_url
    assert_selector "h1", text: "Roles"
  end

  test "creating a Rol" do
    visit roles_url
    click_on "New Rol"

    fill_in "Descripcion", with: @rol.descripcion
    fill_in "Fecha baja", with: @rol.fecha_baja
    fill_in "Grupo", with: @rol.grupo
    fill_in "Nombre", with: @rol.nombre
    fill_in "Permisos", with: @rol.permisos
    click_on "Create Rol"

    assert_text "Rol was successfully created"
    click_on "Back"
  end

  test "updating a Rol" do
    visit roles_url
    click_on "Edit", match: :first

    fill_in "Descripcion", with: @rol.descripcion
    fill_in "Fecha baja", with: @rol.fecha_baja
    fill_in "Grupo", with: @rol.grupo
    fill_in "Nombre", with: @rol.nombre
    fill_in "Permisos", with: @rol.permisos
    click_on "Update Rol"

    assert_text "Rol was successfully updated"
    click_on "Back"
  end

  test "destroying a Rol" do
    visit roles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Rol was successfully destroyed"
  end
end
