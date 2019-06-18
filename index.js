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

server.get('/api/zoos', (req, res) => {
  db('zoos')
  .then(zoos => {
    res.status(200).json(zoos)
  })
  .catch(error => {
    res.status(400).json({
      message: 'could not get zoos'
    })
  })
})

server.get('/api/zoos/:id', (req, res) => {
  db('zoos')
  .where({ id: req.params.id})
  .then(zoo => {
    if(zoo) {
      res.status(200).json(zoo)
    }else{
      res.status(404).json({
        message: 'zoo not found'
      })
    }
  })
  .catch(error => {
    res.status(500).json(error)
  }) 
})

server.post('/api/zoos', (req, res) => {
  const
})

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
