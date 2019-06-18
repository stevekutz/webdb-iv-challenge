const express = require('express');
const helmet = require('helmet');

// define routers
const DishesRouter = require('./dishes/dishes-router.js');
const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();
server.use(express.json());
server.use(helmet());

// define endpoint locations per router
server.use('/api/dishes', DishesRouter);
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's get some recipes</h2>`)
  });

module.exports = server;