const express = require('express');
const router = express.Router();
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '"./db/clickDev.sqlite'
});
const models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('{"id" : 1, "name" : "John Doe GET", "point": 100}');
});

router.post('/', function(req, res, next) {
  console.log("Body --> " + JSON.stringify(req.url) + JSON.stringify(req.body));
  const spilObj = req.body; 
  // Fra https://sequelize.org/master/manual/model-instances.html
  // const spillet = models.Spil.build((spilObj));
  // spillet.save();
  (async() => {const jane = await models.Spil.create(spilObj)})();
  res.send(spilObj);
});

module.exports = router;
