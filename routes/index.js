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

router.get('/movies/sort/:title', function(req, res, next) {
  controller.sort(req, res, next)
})

router.get('/movies/getbytitle/:title', function(req, res, next) {
  controller.getbytitle(req, res, next)
})


router.get('/customers', function(req, res, next){
  controller.index(req, res, next)
  console.log("what")
})


router.get('/customers/sort/:id', function(req, res, next) {
  controller.sort(req, res, next)
})


router.get('/customers/getbyid/:id', function(req, res, next) {
  controller.getbyid(req, res, next)
})



module.exports = router
