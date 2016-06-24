var app = require('../../app')
var db = app.get('db')
var Customer = require('../../models/customer')

describe('Customer', function () {
  beforeEach(function(){

  })

  afterEach(function () {
    db.end()
  })


  describe('#all', function () {
    it('should return an array of objects', function(done) {
      Customer.all(function(error,customers){
        expect(customers).toEqual(jasmine.any(Array))
        done()
      })

    })

    it('should retern the right amount of customers', function(done) {
      Customer.all(function(error,customers){
        expect(customers.length).toBeGreaterThan(199)
        done()
      })
    })

  })

  describe("#sort", function(){
    it('should return an array of objects', function(done){
      Customer.sort(['name',1,30],function(error,customers){
        expect(customers).toEqual(jasmine.any(Array))
      })
    })
  })





})
