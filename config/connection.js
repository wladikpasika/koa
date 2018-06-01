import monk from 'monk';

const url = 'localhost/koa-test';
const db = monk( url );

export default db;