const { User } = require('../../src/models');
const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('Authentication', ()=>{
    beforeEach(async() =>{
        await truncate();
    });
    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Roberwall',
            email: 'rober@google.com',
            password: 'ehnoiscarai'
        });        
        const res = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '1234'
        });

        expect(res.status).toBe(200);
    });

    it('should not authenticate with invalid credentials', async () => {
        const user = await User.create({
            name: 'Alceu',
            email: 'alceu@google.com',
            password: 'ehnoiscarai'
        });        
        const res = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '233332'
        });

        expect(res.status).toBe(401);
    });
});