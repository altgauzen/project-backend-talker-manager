const HTTP_UNAUTHORIZED = 401;

const validateToken = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(HTTP_UNAUTHORIZED)
      .json({ message: 'Token não encontrado' });
  }

  if ((authorization.length < 16) || (authorization.length > 16)) {
    return response
      .status(HTTP_UNAUTHORIZED)
      .json({ message: 'Token inválido' });
  }
  
  next();
};

module.exports = validateToken;
