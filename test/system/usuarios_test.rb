require "application_system_test_case"

class UsuariosTest < ApplicationSystemTestCase
  setup do
    @usuario = usuario(:one)
  end

  test "visiting the index" do
    visit usuarios_url
    assert_selector "h1", text: "Usuarios"
  end

  test "creating a Usuario" do
    visit usuarios_url
    click_on "New Usuario"

    fill_in "Apellido", with: @usuario.apellido
    fill_in "Celular", with: @usuario.celular
    fill_in "Descripcion", with: @usuario.descripcion
    fill_in "Direccion", with: @usuario.direccion
    fill_in "Dni", with: @usuario.dni
    fill_in "Fecha baja", with: @usuario.fecha_baja
    fill_in "Fecha nacimiento", with: @usuario.fecha_nacimiento
    fill_in "Legajo", with: @usuario.legajo
    fill_in "Link imagen", with: @usuario.link_imagen
    fill_in "Localidad", with: @usuario.localidad
    fill_in "Nacionalidad", with: @usuario.nacionalidad
    fill_in "Nombre", with: @usuario.nombre
    fill_in "Nombre usuario", with: @usuario.nombre_usuario
    fill_in "Pais", with: @usuario.pais
    fill_in "Provincia", with: @usuario.provincia
    fill_in "Sexo", with: @usuario.sexo
    fill_in "Telefono", with: @usuario.telefono
    click_on "Create Usuario"

    assert_text "Usuario was successfully created"
    click_on "Back"
  end

  test "updating a Usuario" do
    visit usuarios_url
    click_on "Edit", match: :first

    fill_in "Apellido", with: @usuario.apellido
    fill_in "Celular", with: @usuario.celular
    fill_in "Descripcion", with: @usuario.descripcion
    fill_in "Direccion", with: @usuario.direccion
    fill_in "Dni", with: @usuario.dni
    fill_in "Fecha baja", with: @usuario.fecha_baja
    fill_in "Fecha nacimiento", with: @usuario.fecha_nacimiento
    fill_in "Legajo", with: @usuario.legajo
    fill_in "Link imagen", with: @usuario.link_imagen
    fill_in "Localidad", with: @usuario.localidad
    fill_in "Nacionalidad", with: @usuario.nacionalidad
    fill_in "Nombre", with: @usuario.nombre
    fill_in "Nombre usuario", with: @usuario.nombre_usuario
    fill_in "Pais", with: @usuario.pais
    fill_in "Provincia", with: @usuario.provincia
    fill_in "Sexo", with: @usuario.sexo
    fill_in "Telefono", with: @usuario.telefono
    click_on "Update Usuario"

    assert_text "Usuario was successfully updated"
    click_on "Back"
  end

  test "destroying a Usuario" do
    visit usuarios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Usuario was successfully destroyed"
  end
end
