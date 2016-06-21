var app = require("../app")
var Customer = require("../models/customer")
var db = app.get('db')
// Constructor function
var Rental = function(id) {
  this.id = id
}

Rental.current = function(customer_id, callback) {
  db.run("select * from rentals where customer_id = $1", [customer_id], function(error, rentals){
    if(error) {
      callback(error, undefined)
    } else {
      callback(null, rentals)
    }
  })
}

Rental.history = function(title, column_name, callback) {
  db.run("select name, phone, account_credit FROM customers WHERE id IN (select customer_id::int FROM rentals WHERE title = $1)", [title], function(error, customer_ids){
    if(error) {
      callback(error, undefined)
    } else {
      Customer.find_id(customer_ids, column_name)
      callback(null, customer_ids)
    }
  })
}

module.exports = Rental
