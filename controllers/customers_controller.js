var Customer = require("../models/customer")
console.log("customers")

var CustomersController = {

  index: function(req, res, next) {
    Customer.all(function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customers:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(customers)
      }
    })
  },

  sort: function(req, res, next) {
    Customer.sort(req.query.n, req.params.columns, req.params.column_name, req.query.p, function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customers:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(customers)
      }
    })
  },

  getbyid: function(req, res, next) {
    Customer.sort(req.query.n, req.params.columns, req.params.column_name, req.query.p, function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customers:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(customers)
      }
    })
  }
}

module.exports = CustomersController
