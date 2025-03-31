require 'test_helper'

class EnlacesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enlace = enlace(:one)
  end

  test "should get index" do
    get enlaces_url
    assert_response :success
  end

  test "should get new" do
    get new_enlace_url
    assert_response :success
  end

  test "should create enlace" do
    assert_difference('Enlace.count') do
      post enlaces_url, params: { enlace: { fecha_baja: @enlace.fecha_baja, link_enlace: @enlace.link_enlace, nombre: @enlace.nombre } }
    end

    assert_redirected_to enlace_url(Enlace.last)
  end

  test "should show enlace" do
    get enlace_url(@enlace)
    assert_response :success
  end

  test "should get edit" do
    get edit_enlace_url(@enlace)
    assert_response :success
  end

  test "should update enlace" do
    patch enlace_url(@enlace), params: { enlace: { fecha_baja: @enlace.fecha_baja, link_enlace: @enlace.link_enlace, nombre: @enlace.nombre } }
    assert_redirected_to enlace_url(@enlace)
  end

  test "should destroy enlace" do
    assert_difference('Enlace.count', -1) do
      delete enlace_url(@enlace)
    end

    assert_redirected_to enlaces_url
  end
end
