# Backend

##Description
Startup App

## Endpoints

####`POST /api/register`

When a client makes a `POST` request to this endpoint passing in the required inputs, a new user should be created in the users table and saved to the database.

Required inputs: `email`, `password`
Output: Object with `email` and hashed `password`

####`POST /api/login`

When a client makes a `POST` request to this endpoint passing in the required inputs, the credentials sent inside the `body` will be used to authenticate the user. On successful login, user will receive back an object with `email` and `token`

Required inputs: `email`, `password`
Output: Object with `email` and `token`

####`GET /api/users`

If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in, respond with the correct status code and error message.
