const express = require('express');
const Class = require('./instructor-model');
const restricted = require('../auth/instructor-middleware');

const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;

  Class.addClass(data)
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'could not add', error: err.message});
    });
});

module.exports = router;
