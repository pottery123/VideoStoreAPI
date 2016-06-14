var massive = require('massive')
var connectionString = "postgres://localhost/videostoreapi"

var db = massive.connectSync({connectionString : connectionString})

db.run(“CREATE DATABASE "videostoreapi";”, function(err, res){
}if (err){ throw(newError(err.message))}
console.log(res)
process.exit()
})

 console.log("yay new DATABASE")
 process.exit()
})
