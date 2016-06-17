var app = require("../app")
var db = app.get('db')

// Constructor function
var Movie = function(id) {
  this.id = id
}

// Instance functions
// get a list of all movies /movies
// get a subset of movies - sort by release date or by title
//   return n movie records, with p (per page)
// given a title, get list of customers who are CURRENTLY renting the title
//   include cust name, phone no, and acct_credit
// get list of customers who have rented title in the past - sort by cust name or checkout_date
//   include cust name, phone no, and acct_credit

Movie.all = function(callback) {
  db.movies.find(function(error, movies) {
    if(error) {
      callback(error || new Error("Could not retrieve movies"), undefined)
    } else if(!movies) {
      callback(error || new Error("No movies found"), undefined)
    } else {
      callback(null, movies.map(function(movie) {
        return new Movie(movie)
      }))
    }
  })
}

Movie.sort = function(n, column_name, p, callback) {
  var options = {
    limit : n,
    order : column_name,
    offset : p
  }

  db.movies.find({}, options, function(error, movies) {
    if(error) {
      callback(error || new Error("Could not retrieve movies"), undefined)
    } else if(!movies) {
      callback(error || new Error("No movies found"), undefined)
    } else {
      callback(null, movies.map(function(movie) {
        return new Movie(movie)
      }))
    }
  })
}

Movie.prototype.getByTitle = function(title, callback) {
// get list of customers who are CURRENTLY renting the title
// include cust name, phone no, and acct_credit

// get list of customers who have PAST rented the title
}

var balanceResultCallback = function(movie, callback) {
  return function(error, result) {
    if(error) {
      callback(error, undefined)
    } else {
      account.getBalance(function(error, balance) {
        callback(error, balance)
      })
    }
  }
}

// Movie.prototype.deposit = function(amount, callback) {
//   db.accounts_deposit(this.id, amount, balanceResultCallback(this, callback))
//   return this
// }
//
// Movie.prototype.withdraw = function(amount, callback) {
//   db.accounts_withdraw(this.id, amount, balanceResultCallback(this, callback))
//   return this
// }
//
// Movie.prototype.transfer = function(to, amount, callback) {
//   db.accounts_transfer(this.id, to.id, amount, balanceResultCallback(this, callback))
//   return this
// }
//
// // Class Functions
// Movie.create = function(initialBalance, callback) {
//   db.accounts.save({
//     balance: initialBalance
//   }, function(error, account) {
//     if(error || !account) {
//       callback(error || new Error("Could not create account"), undefined)
//     } else {
//       callback(null, new Movie(account.id))
//     }
//   })
// }
//
// Movie.createSync = function(initialBalance) {
//   var account = db.accounts.saveSync({
//     balance: initialBalance
//   })
//
//   return new Movie(account.id)
// }
//
// Movie.all = function(callback) {
//   db.accounts.find(function(error, accounts) {
//     if(error || !accounts) {
//       callback(error || new Error("Could not retrieve accounts"), undefined)
//     } else {
//       callback(null, accounts.map(function(account) {
//         return new Movie(account.id)
//       }))
//     }
//   })
// }
//
// Movie.find = function(id, callback) {
//   db.accounts.findOne({id: id}, function(error, account) {
//     if(error || !account) {
//       callback(error || new Error("Movie not found"), undefined)
//     } else {
//       callback(null, new Movie(account.id))
//     }
//   })
// }
//
// // only attach this function if we're in test mode
// if (app.get('env') === 'test') {
//   Movie.close_connection = function() {
//     console.log("closing connection")
//     db.end()
//   }
// }
module.exports = Movie
