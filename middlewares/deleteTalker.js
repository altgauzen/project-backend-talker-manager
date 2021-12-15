const fs = require('fs');

const HTTP_OK = 200;
const deleteTalker = (request, response) => {
  const index = Number(request.params.index);
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));
  const newTalkers = talkers.filter(({ id: talkerId }) => talkerId !== index);

  /* 
  Dessa forma com o map passou no teste mas o array resultante vinha bagunçado.
  const newTalkers = talkers.map((talker) => {
    if (talker.id === index) {
      return talkers.splice(index, 1);
    }
    return talkers;
  });
  */
  fs.writeFileSync('./talker.json', JSON.stringify(newTalkers));
  return response.status(HTTP_OK).send({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalker;