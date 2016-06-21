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

Movie.sort = function(column_name, n, p, callback) {
  var options = {
    order : column_name,
    limit : n,
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

Movie.getbytitle = function(title, callback) {
// get list of customers who are CURRENTLY renting the title
// include cust name, phone no, and acct_credit

// get list of customers who have PAST rented the title

  var options = {
    order : column_name
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

module.exports = Movie
