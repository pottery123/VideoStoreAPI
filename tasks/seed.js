var massive = require('massive');
var connectionString = 'postgres://localhost/video-store-api';
var db = massive.connectSync({connectionString : connectionString});
var data = require('../db/seeds/movies.json');
//var data = require('../db/seeds/customers.json');

// for (var record of data) {
//   db.movies.save(record, function(err, res) {
//     console.log('saved: ', JSON.stringify(res))
//   })
// }

for (var record of data) {
  console.log(record.id, record.title, record.overview, record.release_date, record.inventory_total)
  // { word: "elephant", score: 63 }
  db.movies.saveSync(record)
}
// for (var record of data){ console.log,record.rental_id, record.name, record.reg_date, record.address,
//   record.city,record.state,record.postal_code,record.phone,record.acct_credit
// db.customers.saveSync({record})
// }

process.exit()
