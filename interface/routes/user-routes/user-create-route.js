const express = require('express');
const controllerCreateUser = require('../../controllers/user-controller/user-create-controller');
const userCreate = require('../../infrastructure/repository/user-repository/user-registration-repository');
const createUserRoute = express.Router();

createUserRoute.post('/user', async (request, response) => {
  const isFieldsValid = controllerCreateUser(request, response);
  if(isFieldsValid != true) return response.status(400).send();

  const userCreated = await userCreate(request, response);
  
  return response.status(userCreated.statusCode).json(userCreated).send();
});

module.exports = createUserRoute;