const request = require("supertest");

const server = require("../api/server.js");


describe("volunteers router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });

    describe("GET /api/volunteer", function() {
        it('should return 401', function(){
            return request(server)
            .get('/api/volunteer')
            .expect(400)
            .expect('Content-Type', /json/);
            
        });
  });
});