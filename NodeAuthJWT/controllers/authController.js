const User = require('../models/User');
const jwt = require('jsonwebtoken');

// função para tratar erros
const handleError = (err) =>{
    console.log('ERRO OCORRIDO: ', err.message,  err.code);
    let error = { email: '', pass: '' };


    //email incorreto
    if(err.message === 'email incorreto.'){
        error.email = 'Email não registrado.';
    }

    //senha incorreta
    if(err.message === 'senha incorreta.'){
        error.pass = 'Senha inválida.';
    }
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

//variável para definir o tempo de vida do token
const maxAge = 3 * 24 * 60 * 60;

//createToken recebe uma função para gerar token
const createToken = (id) => {
    return jwt.sign({ id }, 'segredo secret', {
        expiresIn: maxAge
    });
};

//função para renderizar tela de signup
module.exports.signup_get = (req, res) => {
    res.render('signup');
}

//função para realizar o singup (cadastro)
module.exports.signup_post = async (req, res) => {
    const { email, pass } = req.body;

    try{
        //user recebe o novo usuário criado
        const user = await User.create({ email, pass });

        //gerando novo token para o usuário criado
        const token = createToken(user._id);

        //armazena o token nos cookies, passando as devidas propriedades
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        //retorna status ok, com id do user criado no body do json
        res.status(201).json({ user: user._id });

    }catch(err){
        //erros recebe o retorno da função handleError
        const erros = handleError(err);

        //renderizando no console os erros recebidos
        res.status(400).json({ erros });

    }
}

//função para renderizar tela de login
module.exports.login_get = (req, res) => {
    res.render('login');
}

//função para realizar login no sistema
module.exports.login_post = async (req, res) => {

    //variaveis recebendo o que vem no corpo da resposta da api
    const { email, pass } = (req.body);

    try{
        //user (bool) verifica se o login foi bem sucedido
        const user = await User.login(email, pass);

        //token recebe código gerado por createToken
        const token = createToken(user._id);

        //token armazenado nos cookies com os devidos parametros
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        
        //retorna status ok, com id do user criado no body do json
        res.status(200).json({ user: user._id });

    }catch(err){
        
        //erros recebe o retorno da função handleError
        const erros = handleError(err);
        
        //renderizando no console os erros recebidos
        res.status(400).json({ erros });
    }

}

//função para fazer logout
module.exports.logout_get = (req, res) => {
    //limpa o cookie jwt
    res.cookie('jwt', '', { maxAge: 1 });

    res.redirect('/');
}