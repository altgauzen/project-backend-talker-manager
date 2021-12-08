const HTTP_BAD_REQUEST = 400;

const validatePassword = (request, response, next) => {
  const { password } = request.body;

  if (!password || (password.length === 0)) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 6) {
    response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }

  next();
};

module.exports = validatePassword;
