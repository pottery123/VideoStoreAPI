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

router.get('/movies/:title/current',
function(req, res, next) {
  movies_controller.current(req, res, next)
})

router.get('/movies/:title/history/sort/:column_name',function(req, res, next){
  movies_controller.history(req, res, next)
})

router.get('/customers', function(req, res, next){
  customers_controller.index(req, res, next)
})

router.get('/customers/sort/:column_name', function(req, res, next) {
  customers_controller.sort(req, res, next)
})

router.get('/customers/:id/current', function(req, res, next){
  customers_controller.current(req, res, next)
})

// TO DO:
router.get('/customers/:id/history',
function(req, res, next) {
  customers_controller.history(req, res, next)
})


module.exports = router
