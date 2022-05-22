const { User } = require('../models');

class SessionController {
    async store(req, res){
        const { email, pass } = req.body

        const user = await User.findOne({ where: { email } })

        if(!user)
            return res.status(401).json({ message: 'usuario não enontrado.' });
        
        if(!(await user.checkPass(pass)))
            return res.status(401).json({ message: 'senha incorreta.'});
            
        return res.status(200).send();
    }
}

module.exports = new SessionController();