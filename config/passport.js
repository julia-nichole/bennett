var passport = require('passport');
var {Strategy: GoogleStrategy }= require('passport-google-oauth20');
var User =require('../model/user');
// passport.use( new GoogleStrategy({
//     clientID: process.env.ID,
//     clientSecret: process.env.SECRET,
//     callbackURL: process.env.CALLBACK
// },
// function(accessToken, refreshToken, profile, cb ){
//     User.findOne({
//         'googleID': profile.id
//     }, function (err, user) {
//         if (err) return cb(err);
//         if (user) {
//             return cb(null, user);
//         } else {
//             let newUser = new User({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 googleID: profile.id,
//                 avatar: profile.photos[0].value,
//                 favorites: [],
//             });
//             newUser.save(function (err) {
//                 if (err) return cb(err);
//                 return cb(null, newUser);
//             });
//         }
//     });
// }
// ));


// passport.serializeUser(function (user, cb) {
// cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
// User.findById(id, function (err, user) {
//     cb(err, user);
// });
// });
