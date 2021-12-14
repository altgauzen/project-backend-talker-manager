const HTTP_BAD_REQUEST = 400;
const dateRegex = /^\d{2}[./]\d{2}[./]\d{4}$/;
//  regex visto no website https://stackoverflow.com/questions/7388001/javascript-regex-to-validate-date-format

const validateWatchedAt = (request, response, next) => {
  const { talk } = request.body;

  if (!dateRegex.test(talk.watchedAt)) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 

  next();
};

module.exports = validateWatchedAt;
