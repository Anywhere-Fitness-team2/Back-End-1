const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const {isValid} = require('../users/user-services');

const router = express();

router.get('/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    Users.addUser(credentials)
      .then(user => {
        res.status(200).json({data: user, message: 'user register successfully'});
      })
      .catch(err => {
        res.status(500).json({message: 'Could not register', error: err.message});
      });
  } else {
    res.status(404).json({message: 'please provide username and password'});
  }
});

module.exports = router;
