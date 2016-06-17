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
        console.log(res)

        // res.render("accounts/index", {
        //   accounts: accounts
        // })
    }



  getSubset: function(req, res, next){
    Movie.all(function(error, movies) {
      if(error) {
        var err = new Error("Error retrieving movies:\n" + error.message)
        err.status = 500
        next(err)
      } else {
        res.json(movies)
        console.log(res)


      }
    })
  }
}


module.exports = MoviesController




// res.render("accounts/index", {
//   accounts: accounts
// })


// getSubset: function(req, res, next) {
//   Movie.all(function(error, movies) {
//     if(error) {
//       var err = new Error("Error retrieving movies:\n" + error.message)
//       err.status = 500
//       next(err)
//     } else {
//       res.json(movies)
//       console.log(res)
//
//       // res.render("accounts/index", {
//       //   accounts: accounts
//       // })
//     }
//   }
// })




  // show: function(req, res, next) {
  //   Account.find(req.params.id, function(error, account) {
  //     if(error) {
  //       var err = new Error("No such account")
  //       err.status = 404
  //       next(err)
  //     } else {
  //       account.getBalance(function(error, balance) {
  //         res.render("accounts/show", {
  //           account: {
  //             id: account.id,
  //             balance: balance
  //           }
  //         })
  //       })
  //     }
  //   })
  //
