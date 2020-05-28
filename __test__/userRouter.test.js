const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

test('GET /api/auth/users/classes', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes')
    .set('authorization', login.body.token);

  expect(response.status).toBe(200);
});

test('GET /api/auth/users/classes/type', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('/api/auth/users/classes/type')
    .set('authorization', login.body.token);

  //   console.log(response);

  expect(response.status).toBe(200);
  expect.arrayContaining(response.body);
});

test('GET, /api/auth/users/classes/intensity', async () => {
  const register = await request(server)
    .post('/api/auth/register')
    .send({
      name: 'sun',
      email: 'sun@gmail.com',
      username: 'sun',
      password: 'sun',
      role: 'client'
    });

  const login = await request(server)
    .post('/api/auth/login')
    .send({username: 'sun', password: 'sun'});

  const response = await request(server)
    .get('api/auth/users/classes/intensity')
    .send({intensity: 'medium'})
    .set('authorization', login.body.token);

  console.log(response);

  expect(response.status).toBe(200);
});
