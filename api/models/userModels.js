const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({

username: {type:String, required:true, unique:true,lowercase:true},
 password:{type:String, required:true}
});

UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
  bcrypt.hash(this.password, 11, (err, hash) => {
    if (err) return next(err);

    this.password = hash;
    next();
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, cb) {
  
    bcrypt.compare(plainTextPW, this.password, (err, isMatch) => {
    if (err) return cb(err);

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
