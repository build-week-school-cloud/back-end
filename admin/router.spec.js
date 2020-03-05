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

  //   it.skip('allows admin to view tasks', async () => {
//     return await request(server)
//        .post('/api/auth/login')
//        .send({ username: 'maggie1', password: 'test' })
//        .then(res => {
//           const token = res.body.token
//           return request(server)
//              .get('/api/admin')
//              .set("authorization", token)
//              .then(res => {
//                 expect(res.status).toBe(200)
//                 expect(Array.isArray(res.body)).toBe(true)
//              })
//        })
//  })

});

