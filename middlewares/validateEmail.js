const validator = require('validator');

const HTTP_BAD_REQUEST = 400;

const validateEmail = (request, response, next) => {
  const { email } = request.body;

  if (!email || email.length === 0) {
      return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "email" é obrigatório' });
  } 

  if (!(validator.isEmail(email))) {
      return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = validateEmail;