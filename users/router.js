const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.use(restricted);

router.get('/', (req, res) => {
  Users.getClass()
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});

module.exports = router;
