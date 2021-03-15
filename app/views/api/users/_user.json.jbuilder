json.extract! user, :id, :username, :email
json.partial! 'api/users/user', user: @user