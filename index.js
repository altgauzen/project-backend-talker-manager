const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const createToken = require('./middlewares/createToken');
const createTalker = require('./middlewares/createTalker');
const validateAge = require('./middlewares/validateAge');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const validateRate = require('./middlewares/validateRate');
const validateTalk = require('./middlewares/validateTalk');
const updateTalker = require('./middlewares/updateTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND = 404;
const PORT = '3000';

//  app.use(express.json());

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
  return response.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', validateEmail, validatePassword, createToken);

app.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  createTalker);

app.put('/talker/:index',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  updateTalker);  

app.listen(PORT, () => {
  console.log('Online');
});
