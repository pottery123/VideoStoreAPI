var app = require("../app")
var db = app.get('db')

// Constructor function
var Rental = function(id) {
  this.id = id
}

Rental.current = function(customer_id, callback) {
  db.run("select * from rentals where customer_id = $1", [customer_id], function(error, rentals){
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, rentals);
    }
  })
}

module.exports = Rental
