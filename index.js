'use strict'

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo :D');
})

app.get('/api/v2/type', function (req, res) {
  const pokemon = ['tipo1', 'tipo2', 'tipo3'];
  res.send(pokemon);
})

app.get('/api/v2/pokemon', function (req, res) {
  console.log('req ', req.query);
  //peticion a base de datos
  // base de datos MongoDB o Mysql
  // req.query.limit Se utiliza como parametro recibido para hacer la consulta a la DB
  //Fin de consulta de base de datos

  const pokemon = ['pokemon1', 'pokemon2', 'pokemon3'];

  const objRespuesta = {
    count: 118,
    next: "https://pokeapi.co/api/v2/pokemon?offset=300&limit=100",
    previous: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
    results: pokemon,
  }

  res.send(objRespuesta);
})

app.listen(5000)