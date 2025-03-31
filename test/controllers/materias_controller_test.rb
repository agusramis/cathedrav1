require 'test_helper'

class MateriasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @materia = materia(:one)
  end

  test "should get index" do
    get materias_url
    assert_response :success
  end

  test "should get new" do
    get new_materia_url
    assert_response :success
  end

  test "should create materia" do
    assert_difference('Materia.count') do
      post materias_url, params: { materia: { autoarchivar: @materia.autoarchivar, ciclo_lectivo: @materia.ciclo_lectivo, codigo: @materia.codigo, descripcion: @materia.descripcion, fecha_baja: @materia.fecha_baja, fecha_fin: @materia.fecha_fin, fecha_inicio: @materia.fecha_inicio, nombre: @materia.nombre, password: @materia.password } }
    end

    assert_redirected_to materia_url(Materia.last)
  end

  test "should show materia" do
    get materia_url(@materia)
    assert_response :success
  end

  test "should get edit" do
    get edit_materia_url(@materia)
    assert_response :success
  end

  test "should update materia" do
    patch materia_url(@materia), params: { materia: { autoarchivar: @materia.autoarchivar, ciclo_lectivo: @materia.ciclo_lectivo, codigo: @materia.codigo, descripcion: @materia.descripcion, fecha_baja: @materia.fecha_baja, fecha_fin: @materia.fecha_fin, fecha_inicio: @materia.fecha_inicio, nombre: @materia.nombre, password: @materia.password } }
    assert_redirected_to materia_url(@materia)
  end

  test "should destroy materia" do
    assert_difference('Materia.count', -1) do
      delete materia_url(@materia)
    end

    assert_redirected_to materias_url
  end
end
