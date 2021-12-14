const HTTP_BAD_REQUEST = 400;

const validateRate = (request, response, next) => {
  const { talk } = request.body;

  if ((!talk.rate || !Number.isInteger(talk.rate)) || (talk.rate < 1 || talk.rate > 5)) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = validateRate;
