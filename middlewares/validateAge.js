const HTTP_BAD_REQUEST = 400;

const validateAge = (request, response, next) => {
  const { age } = request.body;

  if (!age || (age.length === 0)) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'O campo "age" é obrigatório' });
  }

  if (!Number.isInteger(age) || age < 18) {
    return response
      .status(HTTP_BAD_REQUEST)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

module.exports = validateAge;