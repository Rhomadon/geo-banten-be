const passport = require('passport');
const passportJwt = require('passport-jwt');
const jwt = require('jsonwebtoken');
const models = require("../models/Index");
const User = require("../models/UserModel");


const {
    Strategy: JwtStrategy,
    ExtractJwt
} = passportJwt;

function returnSignJwtToken(payload) {
    const opts = {};
    // Signing a token with 1 hour of expiration
    opts.expiresIn = Math.floor(Date.now() / 1000) + (60 * 60);
    const token = jwt.sign(payload, 'qwertyuiop1234567890', opts);
    const signToken = {
        token,
        opts
    };
    return signToken;
}

// set the password strategy
function setJwtStrategy() {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'qwertyuiop1234567890',
        // passReqToCallback: true
    };
    const strategy = new JwtStrategy(opts, (jwtPayload, done) => {
        models.User.findOne({
            where: {
                email: jwtPayload.email
            }
        }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    });

    passport.use(strategy);
}


module.exports = {
    intialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', {
        session: false
    }),
    returnSignJwtToken,
    setJwtStrategy,
};
