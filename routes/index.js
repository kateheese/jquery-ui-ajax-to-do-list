var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/tasks');
var taskCollection = db.get('tasks');

router.get('/', function(req, res, next) {
  taskCollection.find({}, function (err, tasks) {
  res.render('index', { title: 'To-do List', tasks: tasks});
  });
});

module.exports = router;
