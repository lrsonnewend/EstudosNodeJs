const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

//build schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Por favor, entre com um email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Este email não é válido.']
    },

    pass: {
        type: String,
        required: [true, 'Por favor, entre com uma senha .'],
        minlength: [4,'A senha precisa ter no mínimo 4 caracteres.']
    }
});

//funcao disparada antes de salvar dados no bd (criptografando senha)
userSchema.pre('save', async function(next){
    //gera salt
    const salt = await bcrypt.genSalt();

    //encriptando senha recebida
    this.pass = await bcrypt.hash(this.pass, salt);
    next();
});

//método estático para fazer login
userSchema.statics.login = async function(email, pass){
    //verifica se existe um usuário com o email recebido
    const user = await this.findOne({ email });

    if(user){
        //compara senhas
        const auth = await bcrypt.compare(pass, user.pass);
        if(auth){
            return user;
        }
        throw Error('senha incorreta.');
   }
   throw Error('email incorreto.');
}

//construindo model com User
const User = mongoose.model('user', userSchema);

//exportando objeto
module.exports = User;