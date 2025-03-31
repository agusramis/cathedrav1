require 'test_helper'

class BackupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get backups_index_url
    assert_response :success
  end

end
