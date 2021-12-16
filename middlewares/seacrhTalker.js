const fs = require('fs');

const HTTP_OK = 200;

const searchTalker = (request, response) => {
  const { q } = request.query;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));
  if (!q) { return response.status(HTTP_OK).json(talkers); }

  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));
  return response.status(HTTP_OK).json(filteredTalkers);
};

module.exports = searchTalker;