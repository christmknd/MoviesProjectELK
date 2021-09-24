//dépendances
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Client } = require('@elastic/elasticsearch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
    node : 'http://localhost:9200'
})


