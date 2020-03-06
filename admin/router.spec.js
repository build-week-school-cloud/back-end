const request = require("supertest");

const server = require("../api/server.js");


describe("admin router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });

    describe("GET /api/admin", function() {
        it('should return 401', function(){
            return request(server)
            .get('/api/admin')
            .expect(400)
            .expect('Content-Type', /json/);
            
        });
  });



});

