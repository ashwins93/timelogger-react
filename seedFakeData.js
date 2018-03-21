const User = require('./models/user');
const Log = require('./models/log');
const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL || 'mongodb://localhost:27017/timelogs', { useMongoClient: true });
mongoose.Promise = Promise;

const users = ['fred', 'barney'];

users.forEach(async (user) => {
  await User.register(
    new User({ username: user }),
    'password',
    (err, user1) => {
      if (err) {
        return console.log(err);
      }
      return console.log(`${user.username} created successfully`);
    },
  );
});
let time;

function createUsers() {
  users.forEach(async (username) => {
    for (let i = 0; i <= 31; i++) {
      time = new Date(`01/${i}/2018 09:00:00`);
      try {
        const user = await User.findByUsername(username).populate('logins').exec();
        console.log(user.username);
        const newLog = await Log.create({
          user: {
            id: user._id,
            username: user.username,
          },
          time,
        });
        user.logins.push(newLog);
        user.save();
        console.log('saved');
      } catch (err) {
        console.error(err);
      }
    }
  });
}

setTimeout(createUsers, 3000);
