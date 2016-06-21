var request = require('request')
var base_url = "http://localhost:3000/customers"


describe("Endpoint at /customers", function () {
  // it('responds with a 200 status code', function (done) {
  //   request.get(base_url, function(error, response, body) {
  //     expect(response.statusCode).toEqual(200)
  //     done()
  //   })
  // })

  describe("the returned json data", function() {
    it('has the right keys', function(done) {
      request.get(base_url, function(error, response, body) {
        var customers = JSON.parse(body)[0]["id"]
        expect(Object.keys(customers)).toEqual(['id','name','registered_at', 'address', 'city', 'state', 'postal_code', 'phone', 'account_credit'])
        done()
      })
    })

    it('has the right values for the keys', function(done) {
      request.get(base_url, function(error, response, body) {
        var customers = JSON.parse(body)[0]["id"]
        expect(customers.name).toEqual('Shelley Rocha')
        done()
      })
    })
  })

})
