const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const Admin = require('../models/Admin');

passport.use('user-local', new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
));

passport.use('admin-local', new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!admin.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, admin);
    } catch (err) {
      return done(err);
    }
  },
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (user) {
      done(err, user);
    } else {
      Admin.findById(id, (err, admin) => {
        done(err, admin);
      });
    }
  });
});

module.exports = passport;