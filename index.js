const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const server = express();

const knexconfig = {
  client:'sqlite3',
  connection: {
    filename: '/data/lambda.sqlite3'
  },
  useNullAsDefault: true
}

const db = knex(knexconfig)

server.use(express.json());
server.use(helmet());

// endpoints here



const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});