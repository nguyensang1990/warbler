const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signup = async function (req, res, next) {
  try {
    // create a user
    let user = await db.User.create(req.body);
    // create a token jwt
    // if the token is decrypt, we can access to the key inside object variable
    let { id, username, userImage } = user;
    let token = jwt.sign({
      id,
      username,
      userImage
    }, process.env.SECRET_KEY);
    return res.status(200).json({
      id,
      username,
      userImage,
      token
    });
    // process.env.'the name of the evn variable' - SECRET_KEY
  } catch (err) {
    // if validation fail, mongoose return the code of 11000
    if (err.code === 11000) err.message = 'Sorry, this Username/Password is taken';
    return next({
      status: 400,
      message: err.message
    });
    // see what kind of error
    // if it is a certain error
    // respond with username/password is already signup
    // or jusr send back a genatic 400
  }
};

exports.signin = async function (req, res, next) {
  // finding a user
  // chekc if their password is matched with the one in database
  // if it matched
  // log in
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, username, userImage } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign({
        id,
        username,
        userImage
      }, process.env.SECRET_KEY);
      return res.status(200).json({
        id,
        username,
        userImage,
        token
      });
    } else {
      return next({
        status: 400,
        message: 'Invalid Email/Password'
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: 'Invalid Email/Password'
    });
  }
};
