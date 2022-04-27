const User = require('../models/User');

// função para tratar erros
const handleError = (err) =>{
    console.log('ERRO OCORRIDO: ', err.message,  err.code);
    let error = { email: '', pass: '' };

    //erro de duplicação de dados
    if(err.code === 11000){
        error.email = 'Este email já está cadastrado!';
        return error;
    }
    //validation erros
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            error[properties.path] = properties.message;
        });
    } 
    return error;
};

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signup_post = async (req, res) => {
    const { email, pass } = req.body;

    try{
        const user = await User.create({ email, pass });
        res.status(201).json(user);
    }catch(err){
        const erros = handleError(err);
        res.status(400).json({ erros });

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