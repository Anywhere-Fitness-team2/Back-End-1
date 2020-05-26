const express = require('express');
const Class = require('./instructor-model');
const {checkInstructor} = require('../auth/instructor-middleware');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

// router.use(restricted);
// router.use(checkInstructor);

router.post('/', [restricted, checkInstructor], (req, res) => {
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
