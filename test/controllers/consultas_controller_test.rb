require 'test_helper'

class ConsultasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @consulta = consulta(:one)
  end

  test "should get index" do
    get consultas_url
    assert_response :success
  end

  test "should get new" do
    get new_consulta_url
    assert_response :success
  end

  test "should create consulta" do
    assert_difference('Consulta.count') do
      post consultas_url, params: { consulta: { fecha_consulta: @consulta.fecha_consulta, fecha_respuesta: @consulta.fecha_respuesta, posicion_video: @consulta.posicion_video, texto_consulta: @consulta.texto_consulta, texto_respuesta: @consulta.texto_respuesta, vista_consulta: @consulta.vista_consulta, vista_respuesta: @consulta.vista_respuesta } }
    end

    assert_redirected_to consulta_url(Consulta.last)
  end

  test "should show consulta" do
    get consulta_url(@consulta)
    assert_response :success
  end

  test "should get edit" do
    get edit_consulta_url(@consulta)
    assert_response :success
  end

  test "should update consulta" do
    patch consulta_url(@consulta), params: { consulta: { fecha_consulta: @consulta.fecha_consulta, fecha_respuesta: @consulta.fecha_respuesta, posicion_video: @consulta.posicion_video, texto_consulta: @consulta.texto_consulta, texto_respuesta: @consulta.texto_respuesta, vista_consulta: @consulta.vista_consulta, vista_respuesta: @consulta.vista_respuesta } }
    assert_redirected_to consulta_url(@consulta)
  end

  test "should destroy consulta" do
    assert_difference('Consulta.count', -1) do
      delete consulta_url(@consulta)
    end

    assert_redirected_to consultas_url
  end
end
