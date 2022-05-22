const { User } = require('../../src/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', ()=>{
    beforeEach(async() =>{
        await truncate();
    });
    it('should encrypt user - password', async () => {
        const user = await User.create({
            name: 'Kasinao',
            email: 'kasino@google.com',
            password: 'ehnoiscarai'
        });
        const hash = await bcrypt.hash(user.password, 8)

        expect(await bcrypt.compare('ehnoiscarai', user.password_hash)).toBe(true);
    });
});