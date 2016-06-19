var express = require('express');
var controller = require ('./events.controller.js')();
var router = express.Router();

router.get('/', controller.query);
router.delete('/:id', controller.remove);
router.post('/reset', controller.reset);
router.post('/', controller.save);

module.exports = {
  name: 'events',
  version: '0.1.0',
  router: router,
}