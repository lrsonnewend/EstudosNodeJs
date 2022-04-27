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

//funcao disparada antes de salvar dados no bd
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.pass = await bcrypt.hash(this.pass, salt);
    next();
});

//build model
const User = mongoose.model('user', userSchema);

module.exports = User;