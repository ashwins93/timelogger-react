const User = require('./models/user');
const Log = require('./models/log');
const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL  || "mongodb://localhost:27017/timelogs", { useMongoClient: true });
mongoose.Promise = Promise;

users = ['fred', 'barney']

/* users.forEach( async (user) => {
  await User.register(
    new User({ username: user }),
    "password",
    function (err, user) {
        if (err) {
          return console.log(err);
        }
        return console.log(`${user.username} created successfully`);
    }
  );
}); */

let time = new Date();
time.setHours(9);
time.setMinutes(0);
for(let i = 0; i <= 31; i++ ) {
  time = new Date(`01/${i}/2018 09:00:00`);
  users.forEach(async (username) => {
    try {
      var user = await User.findByUsername(username).populate('logins').exec();
      console.log(user.username);
      var newLog = await Log.create({
        user: {
          id: user._id,
          username: user.username
        },
        time
      });
      user.logins.push(newLog);
      user.save();
      console.log('saved');
    } catch(err) {
      console.error(err);
    }
  });
}
return ;