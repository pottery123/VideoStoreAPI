var app = require("../app")
var db = app.get('db')

// Constructor function
var Rental = function(id) {
  this.id = id
}

Rental.current = function(n, p, column_name, columns, callback) {
  var options = {
    limit : n,
    offset : p,
    columns : ["title"],
    order : column_name
  }

  db.rentals.find({
    or: [{
      "customer_id =" :req.params.columns["customer_id"],
      "returned_date =": null


   }]
 }, options, function(error, rental) {
    if(error) {
      callback(error || new Error("Could not retrieve checket out rentals"), undefined)
    } else if(!rentals) {
      callback(error || new Error("No checked out rentals found"), undefined)
    } else {
      callback(null, rentals.map(function(rental) {
        return new Rental(rental)
      }))
    }
  })
}

module.exports = Rental
