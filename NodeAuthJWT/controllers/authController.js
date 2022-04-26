const User = require('../models/User');

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signup_post = async (req, res) => {
    const { email, pass } = req.body;

    try{
        const user = await User.create({ email, pass });
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(400).send('erro, usuário não criado.');

    }
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = (req, res) => {
    const {email, pass} = (req.body);
    console.log(email, pass);
    res.send('user login');
}