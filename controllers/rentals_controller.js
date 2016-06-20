var Rental = require("../models/rental")

var RentalsController = {

  currently_checkout: function(req, res, next) {
    Rental.all(function(error, rentals) {
      if(error) {
        var err = new Error("Error retrieving rentals:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(rentals)
      }
    })
  },
