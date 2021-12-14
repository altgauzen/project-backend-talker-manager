const HTTP_BAD_REQUEST = 400;

const validateTalk = (request, response, next) => {
  const { talk } = request.body;

  if (!talk || !talk.rate || !talk.watchedAt) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
  }

  next();
};

module.exports = validateTalk;
