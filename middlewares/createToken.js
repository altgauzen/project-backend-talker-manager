const randomToken = require('random-token');

const HTTP_OK_STATUS = 200;

const createToken = (_request, response, next) => {
  const token = randomToken(16);

  response.status(HTTP_OK_STATUS).json({ token });
  
  next();
};

module.exports = createToken;
