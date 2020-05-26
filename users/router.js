const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.use(restricted);

router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json({data: users});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
