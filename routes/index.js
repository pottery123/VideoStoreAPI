var express = require('express')
var router = express.Router()
var movies_controller = require('../controllers/movies_controller')
var customers_controller = require('../controllers/customers_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({whatevs: 'whatevs!!!'})
})

router.get('/movies', function(req, res, next) {
  movies_controller.index(req, res, next)
})

router.get('/movies/sort/:column_name', function(req, res, next) {
  movies_controller.sort(req, res, next)
})

router.get('/movies/getbytitle/:title', function(req, res, next) {
  movies_controller.getbytitle(req, res, next)
})

router.get('/customers', function(req, res, next){
  customers_controller.index(req, res, next)
})

router.get('/customers/sort/:column_name', function(req, res, next) {
  customers_controller.sort(req, res, next)
})

router.get('/customers/getbyid/:id', function(req, res, next) {
  customers_controller.getbyid(req, res, next)
})

module.exports = router
