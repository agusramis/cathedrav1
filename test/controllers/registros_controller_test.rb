require 'test_helper'

class RegistrosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @registro = registro(:one)
  end

  test "should get index" do
    get registros_url
    assert_response :success
  end

  test "should get new" do
    get new_registro_url
    assert_response :success
  end

  test "should create registro" do
    assert_difference('Registro.count') do
      post registros_url, params: { registro: { fecha_fin: @registro.fecha_fin, fecha_inicio: @registro.fecha_inicio } }
    end

    assert_redirected_to registro_url(Registro.last)
  end

  test "should show registro" do
    get registro_url(@registro)
    assert_response :success
  end

  test "should get edit" do
    get edit_registro_url(@registro)
    assert_response :success
  end

  test "should update registro" do
    patch registro_url(@registro), params: { registro: { fecha_fin: @registro.fecha_fin, fecha_inicio: @registro.fecha_inicio } }
    assert_redirected_to registro_url(@registro)
  end

  test "should destroy registro" do
    assert_difference('Registro.count', -1) do
      delete registro_url(@registro)
    end

    assert_redirected_to registros_url
  end
end
