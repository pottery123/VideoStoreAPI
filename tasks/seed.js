var massive = require('massive')
var connectionString = 'postgres://localhost/video-store-api'
var db = massive.connectSync({connectionString : connectionString})
var movies = require('../db/seeds/movies.json')
var customers = require('../db/seeds/customers.json')

for (var movie of movies) {
  console.log(movie)
  db.movies.saveSync(movie)
}

for (var customer of customers) {
  console.log(customer)
  db.customers.saveSync(customer)
}

process.exit()
