var Movie = require("../models/movie")

var MoviesController = {

  index: function(req, res, next) {
    Movie.all(function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(movies)
      }
    })
  },

  sort: function(req, res, next) {
    Movie.sort(req.query.n, req.params.column_name, req.query.p, function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(movies)
      }
    })
  },

  getbytitle: function(req, res, next) {
    Movie.sort(req.params.title, function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(movies)
      }
    })
  }
}

module.exports = MoviesController
