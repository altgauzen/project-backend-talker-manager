const HTTP_BAD_REQUEST = 400;

const validateName = (request, response, next) => {
  const { name } = request.body;

  if (!name || name.length === 0) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "name" é obrigatório' }); 
  }

  if (name.length < 3) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

module.exports = validateName;
