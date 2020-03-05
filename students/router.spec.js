const request = require("supertest");

const server = require("../api/server.js");


describe("students router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });

    describe("GET /api/student", function() {
        it('should return 401', function(){
            return request(server)
            .get('/api/student')
            .expect(400)
            .expect('Content-Type', /json/);
            
        });
  });
});