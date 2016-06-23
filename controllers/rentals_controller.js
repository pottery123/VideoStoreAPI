var Rental = require("../models/rental")
var Movie = require("../models/movie")
var Customer = require("../models/customer")

var RentalsController = {
  view: function(req, res, next) {
    Rental.view(req.params.title, function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        // console.log(res.json(movies))
        res.json(movies)
      }
    })
  }

//   getRentals: function(req, res) {
// 		Movie.findMovie(req.params.title, function(error, movie) {
// 			if(error) {
// 				var err = new Error("No such movie");
// 				err.status = 404;
// 			} else {
// 				Rental.getCurrentlyCheckedOut(movie, function(error, checked_out) {
// 					var return_data = {
// 						title:movie.title,
// 						overview:movie.overview,
// 						release_date:movie.release_date,
// 						total_inventory:movie.inventory,
// 						available_copies:(parseInt(movie.inventory))-(parseInt(checked_out))
// 					}
// 					res.json(return_data)
// 				})
// 			}
// ​
// 		})
// 	},

}

module.exports = RentalsController
