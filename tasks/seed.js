var massive = require('massive');
var connectionString = 'postgres://localhost/video-store-api';
var db = massive.connectSync({connectionString : connectionString});
var movies = require('../db/seeds/movies.json');
var customers = require('../db/seeds/customers.json');

for (var movie of movies) {
  console.log(movie)
  // { word: "elephant", score: 63 }
  db.movies.saveSync(movie)
}

for (var customer of customers) {
  console.log(customer)
  // { word: "elephant", score: 63 }
  db.customers.saveSync(customer)
}

process.exit()
