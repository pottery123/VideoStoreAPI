var app = require("../app")
var Customer = require("../models/customer")
var db = app.get('db')
// Constructor function
var Rental = function(id) {
  this.id = id
}

// var Customer = function(id){
//   this.id = id
// }

Rental.current = function(customer_id, callback) {
  db.run("select * from rentals where customer_id = $1", [customer_id], function(error, rentals){
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, rentals);
    }
  })
}

Rental.history = function(title, column_name, callback) {
  db.run("SELECT * FROM customers WHERE CAST(id AS text)= (select customer_id from rentals where title = $1)", [title], function(error, customer_ids){
    if(error) {
      callback(error, undefined);
    } else {
      Customer.find_id(customer_ids, column_name)
      callback(null, customer_ids);
      // console.log("customer ids: " + customer_ids[0]["customer_id"])
    }
  })

}


// Rental.getCustomers = function(movie_title, callback) {
//  db.run("SELECT * FROM customers WHERE id=(SELECT customer_id FROM rentals WHERE movie_id=(SELECT id FROM movies WHERE title=$1) AND returned=false)", [movie_title], function(error, customers) {
//    if(error) {
//      callback(error, undefined);
//    } else {
//      callback(null, customers);
//    }
//  })
// }




module.exports = Rental
