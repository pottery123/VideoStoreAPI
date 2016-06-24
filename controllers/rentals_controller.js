var Rental = require("../models/rental")
var Movie = require("../models/movie")
var Customer = require("../models/customer")

var RentalsController = {
  view: function(req, res, next) {
    Rental.view(req.params.title, function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(movies)
      }
    })
  },

  customers: function(req, res, next) {
    Rental.customers(req.params.title, function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customers:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(customers)
      }
    })
  },

  check_out: function(req, res, next) {
    Rental.check_out(req.params.title, req.params.customer_id, function(error, check_out) {
      if(error) {
        var err = new Error("Error retrieving customers:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(check_out)
      }
    })
  }
}

module.exports = RentalsController
