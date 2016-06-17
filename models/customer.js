var app = require("../app")
var db = app.get('db')

var Customer = function(id) {
  this.id = id
}

Customer.all = function(callback) {
  db.customers.find(function(error, customers) {
    if(error) {
      callback(error || new Error("Could not retrieve customers"), undefined)
    } else if(!customers) {
      callback(error || new Error("No customers found"), undefined)
    } else {
      callback(null, customers.map(function(customer) {
        return new Customer(customer)
      }))
    }
  })
}

Customer.sort = function(n, p, id, name, column_name, callback) {
  var options = {
    limit : n,
    offset : p,
    columns : ["name", "registered_at", "postal_code"],
    order : column_name
  }


  db.customers.find({}, options, function(error, customers) {
    if(error) {
      callback(error || new Error("Could not retrieve customers"), undefined)
    } else if(!customers) {
      callback(error || new Error("No customers found"), undefined)
    } else {
      callback(null, customers.map(function(customer) {
        return new Customer(customer)
      }))
    }
  })
}

// Customers.getbyid = function(id, column_name, callback) {
//
//   var options = {
//     columns : ["id", "name"],
//     order : column_name
//   }
//
//   db.customers.find({}, options, function(error, customers) {
//     if(error) {
//       callback(error || new Error("Could not retrieve customers"), undefined)
//     } else if(!customers) {
//       callback(error || new Error("No customers found"), undefined)
//     } else {
//       callback(null, customers.map(function(customers) {
//         return new Customers(customers)
//       }))
//     }
//   })
// }

module.exports = Customer
