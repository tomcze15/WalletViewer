import bcrypt from 'bcrypt';

import User from '../models/user.js';

export const postLogin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).send('User not found');
    }

    bcrypt.compare(password, user.password)
      .then()
  });
};

export const postSignup = (req, res) => {
  const { email, password, confirmPassword } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(409).send('E-Mail exists already');
      } else if (password !== confirmPassword) {
        return res.status(409).send('Passwords do not match');
      }

      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          console.log('hashedPassword', hashedPassword);
          const user = new User({
            email,
            password: hashedPassword,
          });
          return user.save();
        })
        .then(() => {
          console.log('User added.');
          return res.status(200).send();
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send(err);
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send(err);
    });
};
