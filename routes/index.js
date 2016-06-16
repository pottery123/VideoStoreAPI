var express = require('express')
var router = express.Router()
var controller = require('../controllers/movies_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({whatevs: 'whatevs!!!'})
})

router.get('/movies', function(req, res, next) {
  controller.index(req, res, next)
})

module.exports = router
