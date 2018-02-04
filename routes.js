const router = require('express').Router();
const User = require('./models/user');
const jwt = require('jsonwebtoken');

const jwtOptions = {
	secretOrKey: process.env.SECRET || 'keyboardcat'
};

router.post('/login', async (req, res) => {
	// console.log('request received', req.body);
	let name, password;
	if(req.body.name && req.body.password){
		name = req.body.name;
		password = req.body.password;
	} else {
		return res.json({message:"Username or password not supplied"});
	}
	let user;
	try {
		user = await User.findByUsername(name);
	} catch(err) {
		console.error(err);
	}
	if( ! user ){
		return res.json({message:"No such user found"});
	}
	
	user.authenticate(password, (err1, user, err2) => {
		//console.log("arguments to cb: ", args);
		const err = err1 || err2;
		if(err) return res.json({message: err.message});
		const payload = {id: user.username};
		const token = jwt.sign(payload, jwtOptions.secretOrKey);
		return res.json({message: "ok", token: token});
	});
});

module.exports = router;