const assert = require('assert');
const request = require('co-supertest') ;
const coMocha = require('co-mocha');
const Koa = require('koa');

const server = new Koa();
let listener;

describe('Jade', () => {
    before(() => {
        listener = server.listen(7000)
      });

    it('shold contain html in response', async () =>{
        await request(server)
        .post('/')
        .expect(200)
        .end();
    });
    after(() => {
        listener.close()
      });
});





