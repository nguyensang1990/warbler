const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  userImage: {
    type: String
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }]
});

// this is a pre-save hook, before each of any document in Mongoose is save, it will return a async function
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    // wait for the password to be hashed, then set password to hashedpassword
    this.password = hashedPassword;
    // then, this function moves on to the next middleware which is saving this specific Mongoose document
    return next();
  } catch (err) {
    return next(err);
  }
});

// Build a function that is used to compare the passwork when user login.
// By wiriting this functon, every document that made from this user model have the ability
// to compare their password with the one user keys in (another hashed password)
userSchema.methods.comparePassword = async function (candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) { return next(err); }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
