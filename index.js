const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND = 404;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_request, response, next) => {
  const data = JSON.parse(fs.readFileSync('./talker.json'));
  console.log(data);
  if (data) { return response.status(HTTP_OK_STATUS).send(data); }
  next();
});

app.get('/talker/:index', (request, response) => {
  const data = JSON.parse(fs.readFileSync('./talker.json'));
  const { index } = request.params;
  if (data[index]) { return response.status(HTTP_OK_STATUS).send(data[(index - 1)]); }
  response.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  //  next();
});

app.listen(PORT, () => {
  console.log('Online');
});
