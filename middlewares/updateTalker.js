const fs = require('fs');

const HTTP_OK = 200;

const updateTalker = (request, response) => {
  const index = Number(request.params.index);
  console.log(typeof index);
  const { name, age, talk } = request.body;
  const updatedTalker = { name, age, id: index, talk };

  const talkers = JSON.parse(fs.readFileSync('./talker.json'));

  const UpdatedTalkers = talkers.map((talker) => {
    if (talker.id === updatedTalker.id) {
      return updatedTalker;
    }
    return talker;
  });

  fs.writeFileSync('./talker.json', JSON.stringify(UpdatedTalkers));
  return response.status(HTTP_OK).json(updatedTalker);
};

module.exports = updateTalker;