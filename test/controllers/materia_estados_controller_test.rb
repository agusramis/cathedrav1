require 'test_helper'

class MateriaEstadosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @materia_estado = materia_estado(:one)
  end

  test "should get index" do
    get materia_estados_url
    assert_response :success
  end

  test "should get new" do
    get new_materia_estado_url
    assert_response :success
  end

  test "should create materia_estado" do
    assert_difference('MateriaEstado.count') do
      post materia_estados_url, params: { materia_estado: { fecha_desde: @materia_estado.fecha_desde, fecha_hasta: @materia_estado.fecha_hasta } }
    end

    assert_redirected_to materia_estado_url(MateriaEstado.last)
  end

  test "should show materia_estado" do
    get materia_estado_url(@materia_estado)
    assert_response :success
  end

  test "should get edit" do
    get edit_materia_estado_url(@materia_estado)
    assert_response :success
  end

  test "should update materia_estado" do
    patch materia_estado_url(@materia_estado), params: { materia_estado: { fecha_desde: @materia_estado.fecha_desde, fecha_hasta: @materia_estado.fecha_hasta } }
    assert_redirected_to materia_estado_url(@materia_estado)
  end

  test "should destroy materia_estado" do
    assert_difference('MateriaEstado.count', -1) do
      delete materia_estado_url(@materia_estado)
    end

    assert_redirected_to materia_estados_url
  end
end
