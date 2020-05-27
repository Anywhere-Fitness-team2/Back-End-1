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

router.get('/:id', (req, res) => {
  const {id} = req.params;

  Users.getClassById(id)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(404).json({error: 'please check the Id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error getting class'});
    });
});

router.get('/type', (req, res) => {
  const type = req.body;

  Users.getClassType(type)
    .then(clas => {
      res.status(200).json({data: clas});
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching type', error: err.message});
    });
});

module.exports = router;
