const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModel = require('../models/userModel');
const config = require('./');

module.exports = function(passport) {
  console.log('config/passport');
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.get('mongoose:secret');
  console.log('jwtFromRequest', opts.jwtFromRequest);
  console.log('secretOrKey', opts.secretOrKey);
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    console.log('jwtPayload', jwtPayload);
    console.log('done', done);
    UserModel.getUserById(jwtPayload._doc._id)
      .then((user) => {
        if (user) {
          done(null, user);
          console.log('done', done(null, user));
        } else {
          done(null, false);
        }
      })
      .catch((error) => {
        done(error, false);
      });
  }));
};
