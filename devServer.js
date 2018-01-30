/*
 * Boilerplate code
 *
*/

const express       = require('express')
  , app             = express()
  , bodyParser      = require('body-parser')
  , passport        = require('passport')
  , JWTStrategy	    = require('passport-jwt').Strategy
  , ExtractJwt      = require('passport-jwt').ExtractJwt
	, jwt							= require('jsonwebtoken')
	, router					= require('./routes')
;

const User = require('./models/user');

mongoose.connect(process.env.DBURL  || "mongodb://localhost:27017/timelogs");
mongoose.Promise = Promise;
//mongoose.set('debug', true);
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET || 'keyboardcat'
};
passport.use(new JWTStrategy(jwtOptions, async (payload, next) => {
	let user;
	try {
		user = await User.findByUsername(payload.username);
	} catch(err) {
		console.error(err);
	}
	if (user) {
		return next(null, user);
	}
	return next(null, false);		
}));

app.use(passport.initialize());
app.use(express.static(__dirname + '/public/'));

/*
 * Boilerplate code end
 *
*/

const middleware = require('webpack-dev-middleware');
const complier = webpack(require('./webpack.config'));

app.use(middleware(complier, {
  publicPath: '/'
}));
app.use('/', routes);
app.get('*', (req, res) => res.sendFile('./index.html'));


app.listen(process.env.PORT || 3000);
