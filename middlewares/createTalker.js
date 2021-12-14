const fs = require('fs');

const HTTP_CREATED_STATUS = 201;

const createTalker = (request, response) => {
  const talkers = fs.readFileSync('./talker.json');
  const parsedTalkers = JSON.parse(talkers);

  const { name, age, talk: { watchedAt, rate } } = request.body;
  const newTalker = { name, age, id: parsedTalkers.length + 1, talk: { watchedAt, rate } };

  const newTalkers = [...parsedTalkers, newTalker];

  fs.writeFileSync('./talker.json', JSON.stringify(newTalkers));

  return response.status(HTTP_CREATED_STATUS).json(newTalker);
};

module.exports = createTalker;