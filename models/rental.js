var app = require("../app")
var Customer = require("../models/customer")
var Movie = require("../models/movie")
var db = app.get('db')
// Constructor function
var Rental = function(id) {
  this.id = id
}

Rental.view = function(title, callback) {
  db.run("SELECT overview, release_date FROM movies WHERE title IN (SELECT title FROM rentals where title = $1 AND returned_date IS null)", [title], function(error, rentals) {
    // console.log("rentals: " + JSON.stringify(rentals))
    // console.log("error: " + error)
    if(error) {
      callback(error, undefined)
    } else {
      callback(null, rentals)
    }
  })
}

Rental.current_title = function(title, columns, callback) {
  var options = {
    columns : ['name', 'phone', 'account_credit']
  }
  db.run("SELECT name, phone, account_credit FROM customers WHERE id IN (SELECT customer_id::int FROM rentals WHERE title = $1 AND returned_date IS null)", [title], function(error, customers) {
    if(error) {
      callback(error, undefined)
    } else {
      callback(null, customers)
    }
  })
}

Rental.current_id = function(id, column_name, callback) {
  var options = {
    order : column_name
  }
  db.run("SELECT title FROM movies WHERE title IN (SELECT title FROM rentals WHERE customer_id::int = $1 AND returned_date IS null)", [id], function(error, movies) {
    if(error) {
      callback(error, undefined)
    } else {
      callback(null, movies)
    }
  })
}

Rental.history_title = function(title, column_name, callback) {
  db.run("SELECT name, phone, account_credit FROM customers WHERE id IN (SELECT customer_id::int FROM rentals WHERE title = $1 AND returned_date IS NOT null)", [title], function(error, customer_ids) {
    if(error) {
      callback(error, undefined)
    } else {
      Customer.find_id(customer_ids, column_name)
      callback(null, customer_ids)
    }
  })
}

Rental.history_cust_id = function(id, column_name, columns, callback) {
  db.run("SELECT title FROM rentals WHERE customer_id = $1 AND returned_date IS NOT null", [id], function(error, customer_ids) {
    if(error) {
      callback(error, undefined)
    } else {
      Customer.find_id(customer_ids, column_name)
      callback(null, customer_ids)
    }
  })
}

module.exports = Rental
