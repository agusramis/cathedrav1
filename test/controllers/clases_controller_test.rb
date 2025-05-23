require 'test_helper'

class ClasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clase = clase(:one)
  end

  test "should get index" do
    get clases_url
    assert_response :success
  end

  test "should get new" do
    get new_clase_url
    assert_response :success
  end

  test "should create clase" do
    assert_difference('Clase.count') do
      post clases_url, params: { clase: { fecha_baja: @clase.fecha_baja, nombre: @clase.nombre, visible: @clase.visible } }
    end

    assert_redirected_to clase_url(Clase.last)
  end

  test "should show clase" do
    get clase_url(@clase)
    assert_response :success
  end

  test "should get edit" do
    get edit_clase_url(@clase)
    assert_response :success
  end

  test "should update clase" do
    patch clase_url(@clase), params: { clase: { fecha_baja: @clase.fecha_baja, nombre: @clase.nombre, visible: @clase.visible } }
    assert_redirected_to clase_url(@clase)
  end

  test "should destroy clase" do
    assert_difference('Clase.count', -1) do
      delete clase_url(@clase)
    end

    assert_redirected_to clases_url
  end
end
